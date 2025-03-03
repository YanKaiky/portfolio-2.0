import { Card } from "@/components";
import { Backend, DevOps, Frontend, Mobile, Tools } from "@/icons";
import { motion } from "framer-motion";

const technologies = [
  {
    category: "Front-end",
    icon: <Frontend />,
    skills: [
      "React.js",
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
      "Redis",
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
      "Proxyman",
      "Xcode",
      "NPM",
      "Yarn",
      "Bun",
    ],
  },
];

export const HardSkills = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            key={tech.category.toLowerCase()}
            className="p-6 h-full rounded-2xl"
          >
            <div className="flex items-center justify-start gap-6 mb-6">
              {tech.icon}
              <h3 className="text-2xl font-semibold text-primary tracking-wide">
                {tech.category}
              </h3>
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
        </motion.div>
      ))}
    </div>
  );
};
