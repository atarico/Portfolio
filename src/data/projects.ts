export interface Project {
  title: string;
  status: "Producción" | "En desarrollo";
  description: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Skills Inspector",
    status: "Producción",
    description:
      "Herramienta open source que audita extensiones de agentes de IA (Claude Code, Codex, opencode) antes de instalarlas: analiza el código de forma estática, rastrea el flujo de datos hasta detectar secretos que salen a la red y reporta las capacidades que la descripción de la extensión nunca menciona. Sin dependencias externas.",
    tech: ["Python", "Análisis estático", "Seguridad", "CLI"],
    github: "https://github.com/atarico/skills-inspector",
    demo: null,
    featured: true,
  },
  {
    title: "Farmacias de turno San Nicolás",
    status: "Producción",
    description:
      "App de geolocalización que muestra farmacias de turno cercanas con mapa interactivo, cálculo de distancias y redirección a Google Maps.",
    tech: ["Astro", "React 19", "Leaflet", "Geolocation", "Vercel"],
    github: null,
    demo: "https://farmaciasdeturnosn.com/",
    featured: true,
  },
  {
    title: "Gestor de llaves UTN",
    status: "Producción",
    description:
      "Un sistema de gestión para el control, préstamo y devolución de llaves en la Universidad Tecnológica Nacional (UTN). Actualmente está en beta: se siguen sumando funcionalidades.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Wouter"],
    github: "https://github.com/atarico/utn-llaves",
    demo: "https://llaves-utn.netlify.app/",
    featured: false,
  },
  {
    title: "Organización Duin",
    status: "Producción",
    description:
      "Landing page para Organización Duin, agencia oficial del Grupo Sancor Seguros en San Nicolás. Sitio de una página con tarjetas de servicios apiladas, llamadas a la acción directas por WhatsApp y foco en SEO y accesibilidad. Construida con Astro puro, sin frameworks.",
    tech: ["Astro", "CSS", "JavaScript", "Vercel"],
    github: null,
    demo: "https://org-duin-sancor-seg.vercel.app/",
    featured: false,
  },
  {
    title: "EP Cantina Entradas",
    status: "Producción",
    description:
      "Sistema de venta de entradas y bebidas para un centro cultural, pensado para usarse en vivo durante los eventos. Las ventas se registran en tiempo real sobre Supabase.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    github: null,
    demo: "https://ep-cantina-entradas.vercel.app/",
    featured: false,
  },
  {
    title: "Turnos Multi-Tenant",
    status: "En desarrollo",
    description:
      "Plataforma de turnos multi-tenant: cada negocio administra su propia agenda con los datos aislados por organización a nivel de base de datos. Generalización del sistema de farmacias de turno, con arquitectura modular por dominio y políticas de acceso por fila en Postgres.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/atarico/turnos-multi-tenant",
    demo: null,
    featured: true,
  },
  {
    title: "Material didáctico UTN",
    status: "Producción",
    description:
      "Repositorios de estudio y ejercitaciones que uso como docente en la Tecnicatura Superior en Programación: Programación III (JavaScript moderno, HTML5, CSS3 e introducción a React), Programación IV y Programación Orientada a Objetos en C#. Más de 70 estrellas entre los tres, usados por alumnos cursada tras cursada. El enlace apunta al de Programación III, el más usado de los tres.",
    tech: ["JavaScript", "HTML", "CSS", "React", "C#"],
    github: "https://github.com/atarico/UTN-programacion3",
    demo: null,
    featured: false,
  },
];
