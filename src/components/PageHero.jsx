export default function PageHero({ eyebrow, title, description, image, video }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        {video ? (
          <video className="page-hero__video" src={video} autoPlay muted loop playsInline />
        ) : (
          <img className="page-hero__image" src={image} alt="" />
        )}
      </div>
      <div className="page-hero__overlay">
        <div className="page-hero__content container">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__lead">{description}</p>
        </div>
      </div>
    </section>
  )
}
