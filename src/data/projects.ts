import type { ImageMetadata } from "astro";

import farmaciasImg from "../assets/projects/farmacias-de-turno.png";
import skillsInspectorImg from "../assets/projects/skills-inspector.png";
import turnosImg from "../assets/projects/turnos-multi-tenant.png";

export interface Project {
  title: string;
  status: "Producción" | "En desarrollo";
  description: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  /** Captura del proyecto. Solo la tienen los destacados; el resto va sin imagen. */
  image?: ImageMetadata;
  /** Alt de la captura. Describe lo que se ve, no repite el título. */
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    title: "Turnos Multi-Tenant",
    status: "Producción",
    description:
      "SaaS de gestión de turnos monetizado con suscripciones de Mercado Pago (webhook en producción), topes por plan y panel de superadministración. Los datos de cada tenant están aislados en la base con Row-Level Security sobre 26 migraciones versionadas; advisory locks de PostgreSQL eliminan la doble reserva. Arquitectura hexagonal con 1.079 tests en CI.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Vitest"],
    github: "https://github.com/atarico/turnos-multi-tenant",
    demo: "https://multi-turnos.vercel.app",
    featured: true,
    image: turnosImg,
    imageAlt:
      "Landing de la plataforma con el titular \"Tu agenda llena, sin mover un dedo\" y una tarjeta de próximo turno confirmado junto a la grilla de horarios disponibles.",
  },
  {
    title: "Skills Inspector",
    status: "Producción",
    description:
      "Herramienta open source que audita extensiones de agentes de IA (Claude Code, Codex, opencode) antes de instalarlas: analiza el código de forma estática, rastrea el flujo de datos hasta detectar secretos que salen a la red y reporta las capacidades que la descripción de la extensión nunca menciona. Detectó 75 de 75 casos del benchmark de extensiones maliciosas con un motor de 111 reglas mapeadas a OWASP Top 10 y CWE, 596 tests y cero dependencias externas.",
    tech: ["Python", "Análisis estático", "Seguridad", "CLI"],
    github: "https://github.com/atarico/skills-inspector",
    demo: null,
    featured: true,
    image: skillsInspectorImg,
    imageAlt:
      "README del repositorio en GitHub, con un ejemplo de salida de la herramienta reportando tres capacidades críticas que la descripción de la extensión no menciona.",
  },
  {
    title: "Farmacias de turno San Nicolás",
    status: "Producción",
    description:
      "Servicio público gratuito que centraliza 72 farmacias y 12 rondas de turnos, antes dispersas en carteles y redes, con mapa por geolocalización y cálculo automático del turno vigente. Posicionado por encima del sitio preexistente en 3 de 4 búsquedas locales medidas gracias a SEO técnico y datos estructurados.",
    tech: ["Astro", "React", "Leaflet", "SEO", "Vercel"],
    github: null,
    demo: "https://farmaciasdeturnosn.com/",
    featured: true,
    image: farmaciasImg,
    imageAlt:
      "Pantalla principal mostrando la fecha y hora actual, el turno activo con su rango horario y el mapa de San Nicolás con las farmacias marcadas.",
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
    title: "Estación Primera — plataforma de gestión",
    status: "Producción",
    description:
      "Plataforma de gestión del centro cultural Estación Primera, construida en Kreva Estudio y puesta en producción en 2 meses: eventos, entradas con reparto por artista, punto de venta de barra y liquidación por evento, con RBAC para 3 roles y un entorno de demo aislado por navegador.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase"],
    github: null,
    demo: "https://ep-cantina-entradas.vercel.app/",
    featured: false,
  },
  {
    title: "Vidriera",
    status: "Producción",
    description:
      "Catálogo online para comercios chicos con pedido por WhatsApp, alternativa a Tienda Nube o la comisión de Mercado Libre, con un costo de operación de USD 0 a 1 por mes. Tienda estática en S3 + CloudFront, infraestructura en Terraform y pipeline de indexado orientado a eventos (Lambda, SQS, DLQ), con arquitectura hexagonal y 209 tests.",
    tech: ["TypeScript", "AWS", "Terraform", "Astro", "React", "Algolia", "Sanity"],
    github: "https://github.com/atarico/vidriera",
    demo: null,
    featured: false,
  },
  {
    title: "Sistema de Inscripción de Proveedores",
    status: "Producción",
    description:
      "Desafío técnico de la Municipalidad de San Nicolás, superado con holgura (5 de 5 bonus) con backend y frontend completos en 10 días: API REST con JWT en cookies httpOnly, máquina de estados, archivos en Cloudflare R2 y notificaciones en tiempo real. Más de 1.500 tests escritos con TDD.",
    tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "XState", "Socket.io", "React"],
    github: "https://github.com/atarico/backendproveedores",
    demo: null,
    featured: false,
  },
  {
    title: "Portfolio Agent",
    status: "Producción",
    description:
      "Agente de IA que responde sobre un portfolio de GitHub consultando datos en vivo mediante un servidor MCP propio (HTTP y stdio), con proveedor de LLM configurable (Gemini o Groq). Endpoints con rate limiting por IP y validación con Zod, cubiertos por 137 tests que corren sin red.",
    tech: ["Next.js 16", "TypeScript", "Vercel AI SDK", "MCP", "Zod", "Vitest"],
    github: "https://github.com/atarico/portfolio-agent",
    demo: null,
    featured: false,
  },
  {
    title: "Material didáctico UTN",
    status: "Producción",
    description:
      "Repositorios de estudio y ejercitaciones que uso como docente en la Tecnicatura Superior en Programación: Programación III (JavaScript moderno, HTML5, CSS3 e introducción a React), Programación IV y Programación Orientada a Objetos en C#. 72 estrellas entre los tres, usados por alumnos cursada tras cursada. El enlace apunta al de Programación III, el más usado de los tres.",
    tech: ["JavaScript", "HTML", "CSS", "React", "C#"],
    github: "https://github.com/atarico/UTN-programacion3",
    demo: null,
    featured: false,
  },
];
