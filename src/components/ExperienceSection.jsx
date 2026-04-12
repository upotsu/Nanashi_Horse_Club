export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>体験案内</h2>
      </div>

      <div className="experience-card">
        <div className="experience-card__panel">
          <h3>乗るだけではなく、<br />馬と過ごす流れそのものを体験する。</h3>
          <p>
            自然、屋内馬場、誘導、装具、歩様。初回体験からクラブらしい雰囲気までを
            一つの流れで感じられる構成です。
          </p>
        </div>

        <div className="experience-card__list">
          <div>
            <span>01</span>
            <h4>受付・準備</h4>
            <p>装具の案内と体験内容の説明を受け、無理のない形でスタートします。</p>
          </div>
          <div>
            <span>02</span>
            <h4>ふれあい</h4>
            <p>馬との距離感を掴みながら、誘導やコミュニケーションを体験します。</p>
          </div>
          <div>
            <span>03</span>
            <h4>騎乗</h4>
            <p>インストラクターのサポートを受けながら、歩様と姿勢を体感します。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
