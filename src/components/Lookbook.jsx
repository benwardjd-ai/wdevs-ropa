import Photo from './Photo'
import { business, lookbook } from '../data'

export default function Lookbook() {
  return (
    <section className="lookbook" id="lookbook">
      <div className="lookbook__head">
        <p className="label" data-reveal>Lookbook · {business.season}</p>
        <h2 data-reveal style={{ '--d': 1 }}>La ciudad<br />es la pasarela.</h2>
      </div>
      <div className="lookbook__grid">
        {lookbook.map((look, index) => (
          <figure key={look.photo} className={`look look--${index + 1}`} data-reveal style={{ '--d': index % 2 }} data-cursor="Look">
            <div className="look__media">
              <Photo id={look.photo} alt={look.caption} sizes="(max-width: 700px) 100vw, 50vw" />
            </div>
            <figcaption>{look.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
