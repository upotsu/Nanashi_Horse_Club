import img1 from '../assets/images/gallery1.jpg'
import img2 from '../assets/images/gallery2.jpg'
import img3 from '../assets/images/gallery3.jpg'
import img4 from '../assets/images/gallery4.jpg'
import img5 from '../assets/images/gallery5.jpg'
import subVideo from '../assets/videos/subvideo.mp4'

const cards = [img1, img2, img3, img4, img5]

export default function GallerySection() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h2>ギャラリー</h2>
      </div>

      <div className="gallery-layout">
        <div className="gallery-grid">
          {cards.map((src, index) => (
            <figure className={`gallery-item gallery-item--${index + 1}`} key={src}>
              <img src={src} alt={`乗馬体験 ${index + 1}`} />
            </figure>
          ))}
        </div>

        <div className="gallery-video-card">
          <video autoPlay muted loop playsInline>
            <source src={subVideo} type="video/mp4" />
          </video>
          <div className="gallery-video-card__text">
            <p className="eyebrow">Scene</p>
            <h3>クラブの空気感まで伝わる映像。</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
