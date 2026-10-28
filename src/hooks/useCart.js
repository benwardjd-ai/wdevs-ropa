import { useMemo, useState } from 'react'

export function useCart() {
  const [items, setItems] = useState([])

  const add = (product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const changeQuantity = (id, delta) => {
    setItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const clear = () => setItems([])

  const totals = useMemo(() => ({
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    amount: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  }), [items])

  return { items, add, changeQuantity, clear, ...totals }
}
