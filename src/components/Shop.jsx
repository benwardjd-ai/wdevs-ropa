import { useState } from 'react'
import ProductCard from './ProductCard'
import { filters, products } from '../data'

export default function Shop({ onAdd }) {
  const [filter, setFilter] = useState(filters[0])
  const visible = filter === 'Todo' ? products : products.filter((p) => p.category === filter)

  return (
    <section className="shop" id="tienda">
      <div className="shop__bar">
        <h2 data-reveal>Tienda <sup>{visible.length}</sup></h2>
        <div className="filters" data-reveal style={{ '--d': 1 }}>
          {filters.map((item) => (
            <button key={item} className={`filter ${item === filter ? 'filter--active' : ''}`} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
      </div>
      <div className="grid">
        {visible.map((product, index) => <ProductCard key={product.id} product={product} onAdd={onAdd} index={index} />)}
      </div>
    </section>
  )
}
