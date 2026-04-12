import heroVideo from '../assets/videos/hero.mp4'

export default function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-media">
        <video autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Horse Riding Experience</p>
        <h1>凛とした空気と、<br />馬と向き合う時間。</h1>
        <p>
          都市の喧騒から少し離れて、呼吸を整えるように過ごす乗馬体験。
          初めての方でも安心して始められる、上質で静かな時間を提案します。
        </p>
        <a href="#reservation" className="primary-link">体験を予約する</a>
      </div>
    </section>
  )
}
