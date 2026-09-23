"use client";

import { ProjectCard } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Projects = () => {
  const t = useTranslations("projects");

  const projects = [
    {
      title: "WideWebs",
      description: t("firstProject"),
      image: "/widewebs.png",
      link: "https://widewebs.com.br",
      tags: ["React.js", "TailwindCSS", "Motion", "Vite"],
    },
    {
      title: "Corretei",
      description: t("secondProject"),
      image: "/corretei.png",
      link: "https://corretei.net/",
      tags: ["React Native", "Supabase", "Docker", "AI Nativa"],
    },
    {
      title: "Bora Negócios",
      description: t("thirdProject"),
      image: "/boranegocios.png",
      link: "https://boranegocios.com.br",
      tags: ["Flutter", "NestJS", "Prisma ORM", "Postgres", "Bun"],
    },
    {
      title: "Bistro Café",
      description: t("fourthProject"),
      image: "/bistro-café.png",
      link: "https://menuplacerestaurant.netlify.app",
      tags: ["React.js", "Motion", "TailwindCSS", "NPM"],
    },
  ];

  return (
    <section
      id="projects"
      aria-label="Projetos desenvolvidos"
      className="min-h-[calc(100vh-76px)] flex items-center py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container-title"
        >
          {t("title")}
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
