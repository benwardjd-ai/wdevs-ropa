import Photo from './Photo'
import { business } from '../data'
import { formatPrice } from '../lib/format'
import { buildWhatsAppLink } from '../lib/whatsapp'

const FREE_SHIPPING_FROM = 999

function buildMessage(items, amount) {
  const lines = items.map((item) => `- ${item.quantity} x ${item.name} (${formatPrice(item.price * item.quantity)})`)
  return ['Hola, quiero comprar:', ...lines, `Total: ${formatPrice(amount)}`].join('\n')
}

export default function BagDrawer({ open, onClose, bag }) {
  const { items, amount, count, changeQuantity } = bag
  const missing = Math.max(FREE_SHIPPING_FROM - amount, 0)
  const progress = Math.min((amount / FREE_SHIPPING_FROM) * 100, 100)

  const checkout = () => {
    window.open(buildWhatsAppLink(business.whatsapp, buildMessage(items, amount)), '_blank', 'noopener')
  }

  return (
    <>
      <div className={`overlay ${open ? 'overlay--visible' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'drawer--open' : ''}`} aria-hidden={!open} data-lenis-prevent>
        <div className="drawer__head">
          <h2>Bolsa <sup>{count}</sup></h2>
          <button onClick={onClose}>Cerrar</button>
        </div>
        <div className="shipping">
          <p>{missing > 0 ? `Te faltan ${formatPrice(missing)} para envío gratis` : 'Tu envío es gratis'}</p>
          <div className="shipping__bar"><span style={{ width: `${progress}%` }} /></div>
        </div>
        {items.length === 0 ? (
          <p className="drawer__empty">Tu bolsa está vacía.</p>
        ) : (
          <>
            <ul className="drawer__list">
              {items.map((item) => (
                <li key={item.id}>
                  <div className="drawer__thumb"><Photo id={item.photo} alt="" sizes="80px" /></div>
                  <div className="drawer__info">
                    <p>{item.name}</p>
                    <div className="drawer__row">
                      <div className="qty">
                        <button onClick={() => changeQuantity(item.id, -1)} aria-label="Quitar uno">&minus;</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => changeQuantity(item.id, 1)} aria-label="Agregar uno">+</button>
                      </div>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="drawer__footer">
              <div className="drawer__total"><span>Subtotal</span><strong>{formatPrice(amount)}</strong></div>
              <button className="checkout" onClick={checkout}>Comprar por WhatsApp</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
