import { announcements, business, navLinks } from '../data'
import { useScrolled } from '../hooks/useScrolled'

export default function Header({ count, onOpenBag }) {
  const scrolled = useScrolled(60)
  const ticker = [...announcements, ...announcements, ...announcements]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="ticker" aria-label="Avisos">
        <div className="ticker__track">
          {ticker.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
        </div>
      </div>
      <div className="header__inner">
        <nav className="nav" aria-label="Principal">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a href="#inicio" className="logo">{business.name}</a>
        <button className="bag-button" onClick={onOpenBag}>
          Bolsa<sup>{count}</sup>
        </button>
      </div>
    </header>
  )
}
