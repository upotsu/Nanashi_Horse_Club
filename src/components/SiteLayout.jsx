import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  ['/', 'ホーム'],
  ['/lessons', '乗馬レッスン案内'],
  ['/cafe', '牧場カフェ'],
  ['/about', '会社概要'],
  ['/contact', 'お問い合わせ'],
]

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <div>
            <p className="site-eyebrow">Horse Club & Farm Cafe</p>
            <NavLink to="/" className="site-logo">名無し乗馬クラブ</NavLink>
          </div>
          <nav className="site-nav" aria-label="グローバルナビゲーション">
            {navItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? ' is-active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <p className="site-footer__title">名無し乗馬クラブ</p>
            <p>子供から大人まで気軽に楽しめる乗馬クラブです。</p>
          </div>
          <div>
            <p>〒123-456 東京都〇〇市〇区100-1000</p>
            <p>入場料・駐車無料 / 祝日営業</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
