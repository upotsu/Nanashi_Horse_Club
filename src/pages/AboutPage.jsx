import PageHero from '../components/PageHero'
import InfoCard from '../components/InfoCard'
import { homeAssets } from '../data/assets'

const rows = [
  ['クラブ名', '名無し乗馬クラブ'],
  ['所在地', '〒123-456 東京都〇〇市〇区100‐1000'],
  ['面積', '23,000m²'],
  ['走路', '700m'],
  ['馬場', '障害競技用馬場1面：60m×80m / 馬場馬術競技用1面：20m×50m / 角馬場（待機馬場）1面：50m×50m / 覆い馬場1棟：30m×35m'],
  ['クラブハウス', 'カフェ併設ホール有り / 更衣室有り'],
  ['駐車場', '30台以上可能'],
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="施設の全体像が伝わる会社概要ページ"
        description="木々に囲まれた走路・各種馬場・屋内馬場・クラブハウスを備えた施設として整理しています。"
        image={homeAssets.images[1]}
      />

      <section className="container section two-column-layout">
        <InfoCard title="施設概要">
          <p className="section-text">
            名無し乗馬クラブは木々に囲まれた走路・障害競技用馬場・馬場競技用馬場・角馬場・屋内馬場・クラブハウスで構成されています。
          </p>
        </InfoCard>
        <InfoCard title="施設詳細">
          <dl className="spec-table">
            {rows.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </InfoCard>
      </section>
    </>
  )
}
