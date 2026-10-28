import { useState } from 'react'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Hero from './components/Hero'
import Statement from './components/Statement'
import Shop from './components/Shop'
import Lookbook from './components/Lookbook'
import Values from './components/Values'
import BagDrawer from './components/BagDrawer'
import Footer from './components/Footer'
import { useCart } from './hooks/useCart'
import { useReveal } from './hooks/useReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll(-96)
  useReveal()
  const bag = useCart()
  const [bagOpen, setBagOpen] = useState(false)

  const addAndShow = (product) => {
    bag.add(product)
    setBagOpen(true)
  }

  return (
    <>
      <Cursor />
      <Header count={bag.count} onOpenBag={() => setBagOpen(true)} />
      <main>
        <Hero />
        <Statement />
        <Shop onAdd={addAndShow} />
        <Lookbook />
        <Values />
      </main>
      <Footer />
      <BagDrawer open={bagOpen} onClose={() => setBagOpen(false)} bag={bag} />
    </>
  )
}
