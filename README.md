# Portfolio — Agustín Tarico

Sitio personal donde muestro mis proyectos, mi experiencia y mi stack. Construido con Astro, sin frameworks de UI en el cliente: se sirve como HTML estático y el JavaScript que viaja al navegador es el mínimo necesario.

**🔗 [portfolio-atarico.vercel.app](https://portfolio-atarico.vercel.app/)**

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | [Astro 6](https://astro.build/) — output `static` |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com/) vía plugin de Vite |
| Tipografía | JetBrains Mono (`@fontsource`, self-hosted) |
| Imágenes | `sharp` — optimización en build |
| SEO | `@astrojs/sitemap`, Open Graph, canonical |
| Deploy | Vercel (`@astrojs/vercel`) |
| Tipos | TypeScript + `@astrojs/check` |

## Estructura

```text
src/
├── assets/projects/     Capturas de los proyectos destacados
├── components/          Secciones de la página (Hero, Projects, Experience…)
├── data/
│   ├── projects.ts      Proyectos — tipados con la interfaz Project
│   └── experience.ts    Trayectoria laboral y docente
├── layouts/Layout.astro Head, metadatos, SEO y estructura común
├── pages/index.astro    Única ruta: compone las secciones en orden
└── styles/global.css    Tokens de diseño y estilos base
public/
├── js-detect.js         Marca <html class="js"> para progressive enhancement
├── og-image.png         Preview para redes sociales
└── robots.txt
vercel.json              Cabeceras de seguridad (CSP, HSTS, etc.)
```

El contenido está separado del marcado: para agregar un proyecto o un puesto no hace falta tocar componentes, alcanza con editar `src/data/projects.ts` o `src/data/experience.ts`.

## Comandos

Requiere Node >= 22.12 y [pnpm](https://pnpm.io/).

| Comando | Acción |
|---------|--------|
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Genera el sitio de producción en `./dist/` |
| `pnpm preview` | Sirve el build localmente para revisarlo |

## Decisiones técnicas

**Content Security Policy estricta.** `vercel.json` define `script-src 'self'`, lo que bloquea cualquier script inline. Para que Astro no rompa esa política, `astro.config.mjs` fuerza `assetsInlineLimit: 0`: así emite siempre archivos `.js` externos en lugar de inlinear los bundles menores a 4 KB. La configuración se completa con HSTS, `X-Content-Type-Options`, `frame-ancestors 'none'` y `Permissions-Policy` restrictiva.

**Progressive enhancement en las animaciones.** `js-detect.js` agrega la clase `js` al `<html>` apenas empieza el parseo. El CSS de las animaciones de aparición solo oculta contenido cuando esa clase está presente, de modo que sin JavaScript la página se ve completa en lugar de quedar en blanco.

**Preload de la fuente principal.** El `.woff2` de JetBrains Mono 400 se precarga desde el layout para evitar el flash de texto sin estilo (FOUT) en la primera pintura.

**Formulario de contacto sin backend.** El envío va a [Web3Forms](https://web3forms.com/); el dominio está habilitado explícitamente en las directivas `connect-src` y `form-action` de la CSP.

## Licencia

Código disponible como referencia. El contenido, las imágenes y la identidad visual son personales.
