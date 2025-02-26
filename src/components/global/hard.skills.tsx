import { Card } from "@/components/ui/card";
import { Backend, DevOps, Frontend, Mobile, Tools } from "@/icons";

const technologies = [
  {
    category: "Front-end",
    icon: <Frontend />,
    skills: [
      "React",
      "Vite",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "GraphQL",
      "Material UI",
    ],
  },
  {
    category: "Back-end",
    icon: <Backend />,
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
    icon: <Mobile />,
    skills: ["Flutter", "React Native", "Expo"],
  },
  {
    category: "DevOps",
    icon: <DevOps />,
    skills: [
      "Docker",
      "AWS",
      "DigitalOcean",
      "CI/CD",
      "Git",
      "Linux",
      "Apache",
      "Nginx",
    ],
  },
  {
    category: "Tools",
    icon: <Tools />,
    skills: [
      "VS Code",
      "IntelliJ IDEA",
      "Postman",
      "Jest",
      "GitHub",
      "GitLab",
      "BitBucket",
      "Vercel",
      "Netlify",
    ],
  },
];

export const HardSkills = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 rounded-2xl">
          <div className="flex items-center justify-start gap-6 mb-6">
            <>{tech.icon}</>
            <h3 className="text-2xl font-semibold">{tech.category}</h3>
          </div>
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
