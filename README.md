# NORTE · Ropa urbana

E-commerce editorial para marca de ropa: cursor personalizado, hero tipográfico animado, cambio de imagen al pasar el cursor, compra rápida por talla, lookbook asimétrico, bolsa con barra de envío gratis y checkout por WhatsApp.

> Proyecto demo de portafolio. El negocio es ficticio. Diseño y desarrollo por **W-DEVs**.

## Detalles

- React 19 + Vite, CSS propio (sin frameworks de UI)
- Scroll suave con [Lenis](https://github.com/darkroomengineering/lenis) y animaciones de entrada con IntersectionObserver
- Imágenes responsivas desde Unsplash (`srcset`, carga diferida y fade-in)
- Respeta `prefers-reduced-motion`
- Sin backend: pedidos, citas y reservaciones se envían por WhatsApp con mensaje prellenado

## Correr en local

```bash
npm install
npm run dev
```

## Personalizar para un cliente

- Contenido (nombre, WhatsApp, horarios, productos, precios, fotos): `src/data.js`
- Las fotos se definen por su ID de Unsplash; para usar fotos propias, cámbialas por rutas en `public/` y ajusta `src/components/Photo.jsx`
- Colores y tipografías: variables al inicio de `src/index.css`

## Publicar en GitHub Pages

1. Sube el repo a GitHub (rama `main`).
2. En **Settings > Pages > Source** elige **GitHub Actions**.
3. Cada push a `main` publica el sitio automáticamente.

Fotografía: [Unsplash](https://unsplash.com) (licencia Unsplash).
