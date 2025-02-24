import { Card } from "@/components/ui/card";

const technologies = [
  {
    category: "Front-end",
    skills: [
      "React",
      "Vite",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "GraphQL",
      "Filament PHP",
    ],
  },
  {
    category: "Back-end",
    skills: [
      "Node.js",
      "Express",
      "Nest.js",
      "Adonis.js",
      "PHP",
      "Java",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "React Native", "Expo"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "DigitalOcean", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    skills: [
      "VS Code",
      "IntelliJ IDEA",
      "Postman",
      "Figma",
      "Jest",
      "GitHub",
      "GitLab",
      "BitBucket",
      "Vercel",
      "Netlify",
    ],
  },
];

export const TechStack = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};
