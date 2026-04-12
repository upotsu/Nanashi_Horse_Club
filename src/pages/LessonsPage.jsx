import PageHero from '../components/PageHero'
import InfoCard from '../components/InfoCard'
import ImageGrid from '../components/ImageGrid'
import ReservationPanel from '../components/ReservationPanel'
import { lessonAssets } from '../data/assets'

const pricing = [
  ['個人会員', '入会金 50,000円', '月会費 5,000円', '騎乗料 一鞍50分 3,000円'],
  ['学生（大学生まで）', '入会金 15,000円', '月会費 1,500円', '騎乗料 一鞍50分 1,000円'],
  ['クラブ会員', '入会金 35,000円', '月会費 3,000円', '騎乗料 一鞍50分 2,000円'],
]

export default function LessonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Lesson"
        title="はじめての体験から継続利用まで選びやすいレッスン案内"
        description="料金表と予約UIを同じページにまとめ、情報を見たあとそのまま予約導線へ進める構成にしています。"
        video={lessonAssets.video}
      />

      <section className="container section two-column-layout">
        <InfoCard title="料金一覧">
          <div className="pricing-table">
            {pricing.map(([title, fee, monthly, ride]) => (
              <article key={title} className="pricing-card">
                <h3>{title}</h3>
                <p>{fee}</p>
                <p>{monthly}</p>
                <p>{ride}</p>
              </article>
            ))}
          </div>
        </InfoCard>
        <InfoCard title="レッスンの特徴">
          <p className="section-text">体験、基礎練習、継続利用のいずれも選びやすいよう、料金と予約画面の距離を近づけています。</p>
          <ul className="feature-list">
            <li>初回体験でも流れがわかりやすい予約UI</li>
            <li>会員種別ごとの差が比較しやすいカード表示</li>
            <li>写真を挟んで堅くなりすぎない案内ページ</li>
          </ul>
        </InfoCard>
      </section>

      <section className="container section">
        <ImageGrid images={lessonAssets.images.map((src) => ({ src }))} columns={2} />
      </section>

      <section className="container section">
        <ReservationPanel />
      </section>
    </>
  )
}
