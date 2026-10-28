import { business, navLinks } from '../data'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <nav>{navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <span>{business.instagram}</span>
      </div>
      <p className="footer__word">{business.name}</p>
      <div className="footer__meta">
        <span>&copy; {CURRENT_YEAR} {business.fullName}. Sitio demo · Fotografía: Unsplash.</span>
        <span>Diseño y desarrollo por <strong>W-DEVs</strong></span>
      </div>
    </footer>
  )
}
