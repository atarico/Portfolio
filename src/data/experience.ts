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
      "Actualmente trabajo como consultor técnico, brindando asesoría y guía en diferentes proyectos: Gestión de eventos de Centro Cultural, mantenimiento de páginas web y sistema de envío de planes fitness para suscriptores.",
    tech: ["React", "TypeScript"],
  },
  {
    role: "Profesor de Programación III",
    company: "UTN — Universidad Tecnológica Nacional",
    period: "03/2024 – 02/2026",
    description:
      "Responsable de la asignatura Programación III en la Tecnicatura Superior. Instrucción en React.js, JavaScript moderno, HTML5 y CSS3.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    highlight: true,
  },
  {
    role: "Desarrollador Mobile (Pasante)",
    company: "Kiura Software",
    period: "04/2024 – 07/2024",
    description:
      "Desarrollo de UI y consumo de APIs REST con React Native. Metodologías ágiles Scrum, gestión con Git y GitHub.",
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
