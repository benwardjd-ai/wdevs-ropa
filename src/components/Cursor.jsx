import { useEffect, useRef, useState } from 'react'

// Cursor personalizado: solo en dispositivos con puntero fino.
export default function Cursor() {
  const ref = useRef(null)
  const [label, setLabel] = useState('')
  const [enabled] = useState(() => window.matchMedia('(pointer: fine)').matches)

  useEffect(() => {
    if (!enabled) return undefined
    const element = ref.current
    let x = 0
    let y = 0
    let currentX = 0
    let currentY = 0
    let frame

    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
      const target = event.target.closest('[data-cursor]')
      setLabel(target ? target.dataset.cursor : '')
    }
    const loop = () => {
      currentX += (x - currentX) * 0.2
      currentY += (y - currentY) * 0.2
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    frame = requestAnimationFrame(loop)
    document.documentElement.classList.add('has-cursor')
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div ref={ref} className={`cursor ${label ? 'cursor--label' : ''}`} aria-hidden="true">
      <span>{label}</span>
    </div>
  )
}
