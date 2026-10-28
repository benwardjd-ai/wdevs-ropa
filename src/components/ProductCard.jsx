import { useState } from 'react'
import Photo from './Photo'
import { sizes } from '../data'
import { formatPrice } from '../lib/format'

export default function ProductCard({ product, onAdd, index }) {
  const [added, setAdded] = useState('')
  const hasSizes = product.category !== 'Accesorios'

  const add = (size) => {
    const variant = size ?? 'Unitalla'
    onAdd({
      id: `${product.id}-${variant}`,
      name: `${product.name} · ${product.color} · ${variant}`,
      price: product.price,
      photo: product.photo,
    })
    setAdded(variant)
    setTimeout(() => setAdded(''), 1500)
  }

  return (
    <article className="product" data-reveal style={{ '--d': index % 3 }}>
      <div className="product__media" data-cursor="Ver">
        {product.tag && <span className="product__tag">{product.tag}</span>}
        <Photo id={product.photo} alt={product.name} sizes="(max-width: 700px) 50vw, 33vw" className="product__main" />
        <Photo id={product.hover} alt="" sizes="(max-width: 700px) 50vw, 33vw" className="product__alt" />
        <div className="quick-add">
          {added ? (
            <p className="quick-add__done">Agregado · {added}</p>
          ) : hasSizes ? (
            <>
              <p>Agregar talla</p>
              <div className="quick-add__sizes">
                {sizes.map((size) => <button key={size} onClick={() => add(size)}>{size}</button>)}
              </div>
            </>
          ) : (
            <button className="quick-add__single" onClick={() => add()}>Agregar a la bolsa</button>
          )}
        </div>
      </div>
      <div className="product__info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.color}</p>
        </div>
        <span>{formatPrice(product.price)}</span>
      </div>
    </article>
  )
}
