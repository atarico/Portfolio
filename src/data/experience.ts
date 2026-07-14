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
    role: "Analista Funcional y Desarrollador Frontend",
    company: "Kreva Estudio",
    period: "03/2026 – Presente",
    description:
      "Consultor técnico, brindando asesoría y asistencia en la planificación de diferentes sistemas y páginas web.",
    tech: [
      "TypeScript",
      "React",
      "Astro",
      "Tailwind",
      "Node",
      "Supabase",
      "Next",
      "Vercel",
    ],
  },
  {
    role: "Profesor de Programación III",
    company: "UTN — Universidad Tecnológica Nacional",
    period: "03/2024 – 02/2026",
    description:
      "Responsable de la asignatura Programación III en la Tecnicatura Superior en Programación. Enseñando JavaScript moderno, HTML5, CSS3 y Introducción a React.js",
    tech: ["JavaScript", "HTML", "CSS", "React.js"],
  },
  {
    role: "Desarrollador Mobile (Pasante)",
    company: "Kiura Software",
    period: "04/2024 – 07/2024",
    description:
      "Desarrollo de UI y consumo de APIs con React Native. Metodologías ágiles Scrum, gestión con Git y GitHub.",
    tech: ["React Native", "REST APIs", "Git"],
  },
  {
    role: "Docente de Desarrollo Web",
    company: "Argentina Programa 4.0 / Revolución Digital",
    period: "2022 – 2024",
    description:
      "Capacitación en React.js: Hooks, componentes, props y fetching. Mentoría para inserción laboral de jóvenes en IT.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
  },
];
