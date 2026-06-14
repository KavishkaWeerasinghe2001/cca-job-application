export type Job = {
  id: string;
  title: string;
  company: string;
  category: string;
  type: string;
  location: string;
  workMode: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
};

export const jobs: Job[] = [
  {
    id: "frontend-developer-intern",
    title: "Frontend Developer Intern",
    company: "CodeWave Technologies",
    category: "Software Engineering",
    type: "Internship",
    location: "Colombo, Sri Lanka",
    workMode: "Hybrid",
    salary: "Rs. 35,000 - Rs. 50,000",
    description:
      "Join our frontend team to build responsive web interfaces using modern JavaScript, React, and TypeScript.",
    responsibilities: [
      "Build reusable user-interface components.",
      "Assist with responsive layout testing.",
      "Work with senior developers to improve user experience.",
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript.",
      "Willingness to learn React and TypeScript.",
      "Good communication and teamwork skills.",
    ],
    skills: ["HTML", "CSS", "React", "TypeScript"],
  },
  {
    id: "junior-backend-developer",
    title: "Junior Backend Developer",
    company: "NovaSoft Solutions",
    category: "Backend Development",
    type: "Full-time",
    location: "Kandy, Sri Lanka",
    workMode: "On-site",
    salary: "Rs. 80,000 - Rs. 120,000",
    description:
      "Support the backend engineering team by building secure APIs and database-backed features.",
    responsibilities: [
      "Create API routes for web applications.",
      "Work with database models and queries.",
      "Fix bugs and improve backend performance.",
    ],
    requirements: [
      "Basic understanding of databases.",
      "Knowledge of JavaScript or TypeScript.",
      "Interest in secure backend development.",
    ],
    skills: ["Node.js", "TypeScript", "PostgreSQL", "API"],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    company: "PixelGrid Studio",
    category: "Design",
    type: "Part-time",
    location: "Remote",
    workMode: "Remote",
    salary: "Rs. 40,000 - Rs. 70,000",
    description:
      "Design clean and user-friendly screens for web and mobile applications.",
    responsibilities: [
      "Create wireframes and visual mockups.",
      "Improve user flows and page layouts.",
      "Collaborate with developers to implement designs.",
    ],
    requirements: [
      "Basic understanding of UI design principles.",
      "Experience with Figma is preferred.",
      "A small design portfolio is helpful.",
    ],
    skills: ["Figma", "Wireframes", "UX Research", "Prototyping"],
  },
];