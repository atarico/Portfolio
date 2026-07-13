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
    featured: true,
  },
  {
    title: "Organización Duin",
    status: "Producción",
    description:
      "Landing page para Organización Duin, agencia oficial del Grupo Sancor Seguros en San Nicolás. Sitio de una página con tarjetas de servicios apiladas, llamadas a la acción directas por WhatsApp y foco en SEO y accesibilidad. Construida con Astro puro, sin frameworks.",
    tech: ["Astro", "CSS", "JavaScript", "Vercel"],
    github: null,
    demo: "https://org-duin-sancor-seg.vercel.app/",
    featured: true,
  },
  {
    title: "EP Cantina Entradas",
    status: "Producción",
    description:
      "Sistema de venta de entradas y bebidas para un centro cultural, pensado para usarse en vivo durante los eventos. Las ventas se registran en tiempo real sobre Supabase.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    github: null,
    demo: "https://ep-cantina-entradas.vercel.app/",
    featured: true,
  },
  {
    title: "Calculadora Derivadas/Integrales",
    status: "Producción",
    description:
      "Calculadora web de derivadas e integrales con resolución paso a paso. Ideal para estudiantes que quieren entender el proceso, no solo el resultado.",
    tech: ["React", "TypeScript", "mathjs", "Tailwind CSS", "Vite"],
    github: "https://github.com/atarico/calculadora-Analisis-Matematico",
    demo: "https://cal-derivada-integrales.netlify.app/",
    featured: true,
  },
  {
    title: "Kinesio App",
    status: "En desarrollo",
    description:
      "Plataforma de turnos para kinesiólogos: reserva, cancelación y recordatorios. Pensada para usarse desde el celular, que es donde los pacientes la necesitan.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    github: null,
    demo: null,
    featured: true,
  },
];
