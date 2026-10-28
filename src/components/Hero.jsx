import Photo from './Photo'
import { business, photos } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__panels">
        <div className="hero__panel hero__panel--a">
          <Photo id={photos.heroA} alt="Modelo con chaqueta negra amplia" sizes="(max-width: 800px) 100vw, 50vw" eager />
        </div>
        <div className="hero__panel hero__panel--b">
          <Photo id={photos.heroB} alt="Modelo con chaqueta urbana" sizes="(max-width: 800px) 0px, 50vw" eager />
        </div>
      </div>
      <div className="hero__overlay">
        <div className="hero__meta">
          <span>{business.drop}</span>
          <span>{business.season}</span>
          <a href="#tienda" className="hero__cta">Comprar el drop &rarr;</a>
        </div>
        <h1 className="hero__word" aria-label={business.name}>
          {business.name.split('').map((letter, index) => (
            <span key={`${letter}-${index}`} style={{ '--i': index }}>{letter}</span>
          ))}
        </h1>
      </div>
    </section>
  )
}
