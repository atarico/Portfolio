export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  highlight?: boolean;
}

export const experience: Experience[] = [
  {
    role: "Desarrollador Full Stack y Consultor en Sistemas",
    company: "Kreva Estudio",
    period: "03/2026 – Presente",
    description:
      "Puse en producción en 2 meses la plataforma de gestión del centro cultural Estación Primera (eventos, entradas con reparto por artista, punto de venta de barra y liquidación por evento), con RBAC para 3 roles. Auditoría de seguridad de un sitio WooCommerce (87 hallazgos, 4 críticos) convertida en un plan de migración a medida.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "NestJS", "Prisma"],
  },
  {
    role: "Desarrollador Full Stack Independiente",
    company: "Freelance · San Nicolás, Buenos Aires",
    period: "2022 – Presente",
    description:
      "Sitios web para comercios (2022–2023) y aplicaciones de gestión, SaaS y open source (2024–actualidad). Sistemas a medida desde landings hasta una cafetería con menú por QR y fidelización, y el sitio institucional de Organización Duin. Mis productos corren con TDD, CI/CD en GitHub Actions y despliegue continuo en Vercel y AWS.",
    tech: ["TypeScript", "React", "Express", "Prisma", "Astro", "GitHub Actions"],
  },
  {
    role: "Profesor Titular, Programación I a IV",
    company: "UTN — Facultad Regional San Nicolás",
    period: "03/2024 – 02/2026",
    description:
      "Formé a más de 30 estudiantes por cohorte en desarrollo web y backend, diseñando el plan de estudios, los proyectos y la evaluación de 4 materias correlativas. Construí las herramientas de la cátedra y publiqué el material en repositorios abiertos con 72 estrellas en GitHub.",
    tech: ["C#", "ASP.NET Core", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    role: "Desarrollador Mobile (React Native)",
    company: "Kiura Software · Bogotá, Colombia (remoto)",
    period: "04/2024 – 07/2024",
    description:
      "Entregué pantallas y funcionalidades de apps iOS y Android en sprints Scrum de 2 semanas, integrando APIs REST, tras ingresar por prueba técnica. Revisé los pull requests del equipo en code review entre pares.",
    tech: ["React Native", "Expo", "REST APIs", "Scrum"],
  },
  {
    role: "Profesor de Desarrollo Web y React",
    company: "Argentina Programa 4.0",
    period: "11/2023 – 01/2024",
    description:
      "Capacité a más de 80 jóvenes en HTML, CSS, JavaScript y React mediante cursos intensivos basados en proyectos reales.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
];
