export default function ImageGrid({ images, columns = 3 }) {
  return (
    <div className={`image-grid image-grid--${columns}`}>
      {images.map((image, index) => (
        <figure key={`${image.src}-${index}`} className="image-grid__item">
          <img src={image.src} alt={image.alt || ''} />
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  )
}
