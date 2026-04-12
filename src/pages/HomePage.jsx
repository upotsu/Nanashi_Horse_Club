import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import InfoCard from '../components/InfoCard'
import ImageGrid from '../components/ImageGrid'
import { homeAssets } from '../data/assets'

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Home"
        title="子供から大人まで気軽に楽しめる、名無し乗馬クラブ"
        description="牧場内にはカフェが併設しており、馬とのふれあいコーナーもあります。ゆったりとした自然の中で、レッスンも休憩も楽しめるクラブサイトを想定した構成です。"
        video={homeAssets.video}
      />

      <section className="container section section--intro-grid">
        <InfoCard title="ご案内">
          <p className="section-text">
            入場料・駐車無料※ふれあいコーナーや乗馬レッスンは有料です。詳細は各ページをご覧ください。
          </p>
          <div className="button-row">
            <Link className="button button--primary" to="/lessons">レッスンを見る</Link>
            <Link className="button button--ghost" to="/cafe">牧場カフェを見る</Link>
          </div>
        </InfoCard>
        <InfoCard title="営業時間">
          <dl className="plain-list">
            <div><dt>3月〜10月</dt><dd>10:00〜17:00</dd></div>
            <div><dt>11月〜2月</dt><dd>10:00〜15:00</dd></div>
          </dl>
          <p className="section-note">※祝日営業。月火が祝日の場合は翌営業日となります。<br />※悪天候の場合には営業時間を変更する場合があります。</p>
        </InfoCard>
      </section>

      <section className="container section">
        <div className="section-heading">
          <p className="section-eyebrow">Scenes</p>
          <h2>クラブの空気感</h2>
          <p className="section-text">写真を大きく見せる余白中心の構成で、施設のやわらかな雰囲気を伝えます。</p>
        </div>
        <ImageGrid
          images={homeAssets.images.map((src, index) => ({
            src,
            caption: ['自然に囲まれた外乗の景色', 'クラブで過ごす穏やかな時間', '馬と近い距離で過ごす体験'][index],
          }))}
        />
      </section>
    </>
  )
}
