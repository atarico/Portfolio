import type { ImageMetadata } from "astro";

import csvPipelineImg from "../assets/projects/csv-pipeline.png";
import farmaciasImg from "../assets/projects/farmacias-de-turno.png";
import portfolioAgentImg from "../assets/projects/portfolio-agent.png";

export interface Project {
  title: string;
  status: "Producción" | "En desarrollo" | "Open source";
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
    title: "Portfolio Agent",
    status: "Producción",
    description:
      "Agente de IA que responde preguntas sobre un perfil de GitHub y el CV de su dueño leyendo los repositorios en vivo mediante un servidor MCP propio (HTTP y stdio), y muestra cada herramienta que llama. El modelo es una cadena de fallback (Groq, Gemini y Claude Haiku como último recurso) que pasa el mismo paso al siguiente modelo ante un 429, un 503 o una demora, en vez de fallar frente al visitante. Endpoints con rate limiting por IP y validación con Zod, cubiertos por 137 tests que corren sin red.",
    tech: ["Next.js 16", "TypeScript", "Vercel AI SDK", "MCP", "Zod", "Vitest"],
    github: "https://github.com/atarico/portfolio-agent",
    demo: "https://portfolio-agent-mauve.vercel.app",
    featured: true,
    image: portfolioAgentImg,
    imageAlt:
      "Pantalla de inicio del agente con la cadena de modelos groq, google y anthropic, preguntas de ejemplo sobre proyectos y stack, y la línea de comando para preguntar.",
  },
  {
    title: "CSV Pipeline",
    status: "Open source",
    description:
      "Pipeline asíncrono de ingesta de CSV: la API guarda el archivo en S3, registra la carga en PostgreSQL y publica un mensaje en SQS; un worker aparte valida cada fila, guarda las válidas por lotes y reporta los errores fila por fila mientras el frontend muestra el progreso. Reintentos con backoff y cola de mensajes fallidos (DLQ). Backend con DDD, Clean Architecture y CQRS, errores modelados con Either e infraestructura local con Docker Compose y LocalStack.",
    tech: ["Next.js 16", "Fastify", "TypeScript", "PostgreSQL", "AWS S3 + SQS", "Docker"],
    github: "https://github.com/atarico/csv-ingestion-pipeline",
    demo: null,
    featured: true,
    image: csvPipelineImg,
    imageAlt:
      "Panel de resumen con el total de cargas separado en correctas, con problemas y fallidas, y la lista de los últimos archivos CSV procesados con su estado y cantidad de filas.",
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
    title: "Skills Inspector",
    status: "Open source",
    description:
      "Herramienta open source que audita extensiones de agentes de IA (Claude Code, Codex, opencode) antes de instalarlas: analiza el código de forma estática, rastrea el flujo de datos hasta detectar secretos que salen a la red y reporta las capacidades que la descripción de la extensión nunca menciona. Detectó 75 de 75 casos del benchmark de extensiones maliciosas con un motor de 111 reglas mapeadas a OWASP Top 10 y CWE, 596 tests y cero dependencias externas.",
    tech: ["Python", "Análisis estático", "Seguridad", "CLI"],
    github: "https://github.com/atarico/skills-inspector",
    demo: null,
    featured: false,
  },
  {
    title: "fix-cv-find-job-skill",
    status: "Open source",
    description:
      "Skill open source para Claude que audita un CV como un reclutador, lo reescribe listo para ATS, busca ofertas en los portales que usa la persona, se postula por ella, alinea LinkedIn y clasifica las respuestas del inbox. Funciona para cualquier industria y nunca decide por el usuario lo que le corresponde decidir. Versión 0.4.0.",
    tech: ["Claude Code", "Agentes de IA", "Skills", "Markdown"],
    github: "https://github.com/atarico/fix-cv-find-job-skill",
    demo: null,
    featured: false,
  },
  {
    title: "Bot de turnos por WhatsApp",
    status: "Open source",
    description:
      "Bot multi-tenant de WhatsApp que responde solo, le dice al cliente si tiene un turno y lo guía para reservarlo, usando el Google Calendar del negocio como única fuente de verdad. Un solo despliegue atiende a varios negocios y un simulador local reproduce el payload exacto de la Cloud API de Meta. 64 tests.",
    tech: ["Python", "FastAPI", "Docker", "Google Calendar API", "WhatsApp Cloud API"],
    github: "https://github.com/atarico/bot-turnos",
    demo: null,
    featured: false,
  },
  {
    title: "Vidriera",
    status: "Open source",
    description:
      "Catálogo online para comercios chicos con pedido por WhatsApp, alternativa a Tienda Nube o la comisión de Mercado Libre, con un costo de operación de USD 0 a 1 por mes. Tienda estática en S3 + CloudFront, infraestructura en Terraform y pipeline de indexado orientado a eventos (Lambda, SQS, DLQ), con arquitectura hexagonal y 209 tests.",
    tech: ["TypeScript", "AWS", "Terraform", "Astro", "React", "Algolia", "Sanity"],
    github: "https://github.com/atarico/vidriera",
    demo: null,
    featured: false,
  },
  {
    title: "Turnos Multi-Tenant",
    status: "Open source",
    description:
      "SaaS de gestión de turnos monetizado con suscripciones de Mercado Pago (webhook en producción), topes por plan y panel de superadministración. Los datos de cada tenant están aislados en la base con Row-Level Security sobre 26 migraciones versionadas; advisory locks de PostgreSQL eliminan la doble reserva. Arquitectura hexagonal con 1.079 tests en CI.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Vitest"],
    github: "https://github.com/atarico/turnos-multi-tenant",
    demo: "https://multi-turnos.vercel.app",
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
];
