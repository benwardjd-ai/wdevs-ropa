import { useEffect, useRef, useState } from 'react'
import { unsplashUrl } from '../lib/unsplash'

const WIDTHS = [480, 768, 1080, 1440, 1920]

export default function Photo({ id, alt, sizes = '100vw', className = '', eager = false, position }) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true)
  }, [])

  return (
    <img
      ref={ref}
      src={unsplashUrl(id, 1080)}
      srcSet={WIDTHS.map((w) => `${unsplashUrl(id, w)} ${w}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={position ? { objectPosition: position } : undefined}
      className={`photo ${loaded ? 'photo--loaded' : ''} ${className}`}
      onLoad={() => setLoaded(true)}
    />
  )
}
