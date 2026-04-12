import PageHero from '../components/PageHero'
import InfoCard from '../components/InfoCard'
import ImageGrid from '../components/ImageGrid'
import { cafeAssets } from '../data/assets'

const foodMenu = [
  'パン＆コーヒーセット（温・冷） 1,000円',
  'ケーキ＆コーヒーセット 1,200円',
  'チキンスープ 750円',
  'オムライス 1,200円',
]

const drinkMenu = ['アイスティー', 'クリームソーダ', 'リンゴジュース', 'コーラ', 'ミルク']

export default function CafePage() {
  return (
    <>
      <PageHero
        eyebrow="Farm Cafe"
        title="牧場で過ごす時間をゆっくり楽しめる、併設のカフェ"
        description="馬とのふれあいの前後に立ち寄れる休憩スペースとして、フードとドリンクを落ち着いたトーンで紹介します。"
        image={cafeAssets.images[0]}
      />

      <section className="container section two-column-layout">
        <InfoCard title="店内のご紹介">
          <p className="section-text">
            木の温もりが感じられる店内を想定し、軽食とドリンクを楽しめるカフェ空間としてデザインしています。
          </p>
        </InfoCard>
        <InfoCard title="フードメニュー">
          <ul className="menu-list">
            {foodMenu.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h3 className="subheading">ドリンクメニュー（500円）</h3>
          <ul className="menu-list">
            {drinkMenu.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </InfoCard>
      </section>

      <section className="container section">
        <ImageGrid images={cafeAssets.images.map((src) => ({ src }))} columns={3} />
      </section>
    </>
  )
}
