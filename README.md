# 🫓 Sabores SV — Gastronomía de El Salvador

Landing page completa sobre gastronomía salvadoreña, desarrollada como proyecto integrador de desarrollo web frontend.

## 🌐 URL del sitio publicado
> `https://elisoner23.github.io/gastronomia-salvadorena`

---

## Estructura del repositorio

```
gastronomia-salvadorena/
├── index.html    ← Estructura HTML semántica (6 secciones)
├── styles.css    ← Estilos: variables, Flexbox, Grid, responsive
├── script.js     ← JavaScript: navbar, hamburguesa, validación
└── README.md     ← Documentación del proyecto
```

---

## Tecnologías utilizadas

- **HTML5** — Estructura semántica con secciones, nav, footer, form
- **CSS3** — Variables CSS, Flexbox, CSS Grid, Media Queries, transiciones
- **JavaScript Vanilla** — Manipulación del DOM, eventos, validación con regex
- **Google Fonts** — Playfair Display, DM Sans, Bebas Neue
- **GitHub Pages** — Hosting gratuito y despliegue continuo

---

## Secciones de la landing page

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Hero** | Imagen de fondo con overlay, título en Playfair Display, subtítulo y botón CTA |
| 2 | **Navbar** | Fija, efecto scroll (clase `.scrolled`), menú hamburguesa funcional con overlay |
| 3 | **Nosotros** | Historia del negocio, imagen con badge, stats (26 años, 40+ recetas, 15k clientes) |
| 4 | **Servicios** | 6 tarjetas con CSS Grid `repeat(auto-fit, minmax(260px,1fr))` + hover interactivo |
| 5 | **Formulario** | 6 campos validados con JavaScript puro y regex |
| 6 | **Footer** | Redes sociales, año dinámico con JS y créditos |

---

## Funcionalidades JavaScript (`script.js`)

### Manipulación del DOM
- **Año dinámico**: `document.getElementById('year').textContent = new Date().getFullYear()`
- **Navbar scroll**: `window.addEventListener('scroll', ...)` + `classList.toggle('scrolled', ...)`
- **Hamburguesa**: `addEventListener('click')`, `classList.add/remove('open')`, `querySelector`

### Validación del formulario
| Campo | Regla de validación |
|-------|---------------------|
| Nombre | Mínimo 2 caracteres |
| Apellido | Mínimo 2 caracteres |
| Email | Regex: `/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/` |
| Teléfono | Regex formato SV: `/^\d{4}-?\d{4}$/` |
| Servicio | Campo requerido (select no vacío) |
| Mensaje | Mínimo 20 caracteres |

- Errores se limpian al corregir cada campo (eventos `input` y `change`)
- Mensaje de éxito personalizado al enviar correctamente

---

## Responsive Design (3 breakpoints)

| Breakpoint | Comportamiento |
|------------|----------------|
| Desktop > 900px | 2 columnas en Nosotros y Formulario, grid de 3 en Footer |
| Tablet ≤ 900px | Columna única, grid de 2 en Footer |
| Móvil ≤ 640px | Hamburguesa activa, formulario en 1 columna, grid de 1 en Footer |

---

## Historial de commits

```bash
git commit -m "feat: estructura inicial HTML con las 6 secciones obligatorias"
git commit -m "style: separar estilos en styles.css con variables y reset"
git commit -m "style: layout responsive con Flexbox y CSS Grid en 3 breakpoints"
git commit -m "feat: navbar fija con efecto scroll y menú hamburguesa en script.js"
git commit -m "feat: validación completa del formulario con regex en script.js"
git commit -m "docs: README con estructura, tecnologías y guía de despliegue"
git commit -m "fix: ajustes de responsive en móvil y accesibilidad del hamburger"
git commit -m "deploy: sitio publicado en GitHub Pages"
```

La URL pública quedará disponible en:
`https://elisoner23.github.io/gastronomia-salvadorena`

---

## Créditos

- **Desarrollado por**: [Erick García]
- **Temática**: Gastronomía de El Salvador 🇸🇻
- **Imágenes**: Unsplash (licencia libre)
- **Fuentes**: Google Fonts (Playfair Display, DM Sans, Bebas Neue)
