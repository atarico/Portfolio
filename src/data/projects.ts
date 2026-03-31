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
    tech: ["Astro", "React 19", "LeafLet", "Geolocation", "vercel"],
    github: null,
    demo: "https://farmaciasdeturnosn.com/",
    featured: true,
  },
  {
    title: "EP Cantina Entradas",
    status: "Producción",
    description:
      "Sistema integral de gestión para centro cultural: venta de entradas y bebidas en tiempo real, con persistencia de datos y lógica de negocio completa.",
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
    tech: ["react", "TypeScript", "mathjs", "Tailwind CSS", "Vite"],
    github: "https://github.com/atarico/calculadora-Analisis-Matematico",
    demo: "https://cal-derivada-integrales.netlify.app/",
    featured: true,
  },
  {
    title: "Gestor de llaves UTN",
    status: "Producción",
    description:
      "Un sistema de gestión diseñado específicamente para el control, préstamo y devolución de llaves en la Universidad Tecnológica Nacional (UTN). actualmente está en BETA ya que se siguen desarrollando nuevas funcionalidades.",
    tech: ["react", "TypeScript", "Tailwind CSS", "Wouter"],
    github: "https://github.com/atarico/utn-llaves",
    demo: "https://llaves-utn.netlify.app/",
    featured: true,
  },
  {
    title: "Donde Tocar",
    status: "En desarrollo",
    description:
      "Plataforma para músicos que buscan bares y centros culturales donde tocar en Argentina. Incluye búsqueda por ciudad, modelado de datos complejo y optimización SEO.",
    tech: ["Astro", "Tailwind CSS", "Supabase", "TypeScript"],
    github: "https://github.com/atarico/donde-tocar",
    demo: null,
    featured: true,
  },
  {
    title: "Kinesio App",
    status: "En desarrollo",
    description:
      "Plataforma de gestión de turnos para kinesiologos, con funcionalidades de reserva, cancelación y recordatorios. Optimizada para dispositivos móviles y con una interfaz intuitiva.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    github: null,
    demo: null,
    featured: true,
  },
];
