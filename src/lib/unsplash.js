const BASE = 'https://images.unsplash.com/photo-'

export function unsplashUrl(id, width, height) {
  const crop = height ? `&h=${height}&fit=crop` : '&fit=max'
  return `${BASE}${id}?auto=format&q=80&w=${width}${crop}`
}
