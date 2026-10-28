import { useState } from 'react'
import { business, values } from '../data'

export default function Values() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = (event) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <>
      <section className="values">
        {values.map((value, index) => (
          <div key={value.title} className="value" data-reveal style={{ '--d': index }}>
            <span>0{index + 1}</span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </div>
        ))}
      </section>

      <section className="newsletter">
        <h2 data-reveal>Entra a la lista.</h2>
        <p data-reveal style={{ '--d': 1 }}>Acceso 24 horas antes a cada drop. Sin spam, solo ropa. También en {business.instagram}.</p>
        {subscribed ? (
          <p className="newsletter__done">Estás dentro. Te avisamos del próximo drop.</p>
        ) : (
          <form className="newsletter__form" onSubmit={subscribe} data-reveal style={{ '--d': 2 }}>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" aria-label="Correo electrónico" />
            <button type="submit">Suscribirme &rarr;</button>
          </form>
        )}
      </section>
    </>
  )
}
