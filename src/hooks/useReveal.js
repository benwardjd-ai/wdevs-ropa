import { useEffect } from 'react'

// Agrega la clase "is-in" a todo elemento con [data-reveal] cuando entra en pantalla.
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    const scan = () => {
      document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => observer.observe(el))
    }

    scan()
    const mutations = new MutationObserver(scan)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
    }
  }, [])
}
