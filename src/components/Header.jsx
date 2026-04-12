export default function Header() {
  const handleJump = (id, offset = 0) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button className="brand brand-btn" onClick={() => handleJump('top', 70)}>
          Horse Riding Club
        </button>

        <nav className="site-nav">
          <button onClick={() => handleJump('experience', 90)}>体験案内</button>
          <button onClick={() => handleJump('gallery', 90)}>ギャラリー</button>
          <button onClick={() => handleJump('reservation', 140)}>予約</button>
        </nav>
      </div>
    </header>
  )
}
