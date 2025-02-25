"use client";

import { useTranslations } from "next-intl";
import { ProjectCard } from "./project.card";

export const Projects = () => {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-76px)] flex items-center py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <h2 className="container-title">{t("title")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Bistro Café"
            description={t("firstProject")}
            image="/bistro-café.png"
            link="https://github.com"
            tags={["Next.js", "Prisma", "Stripe"]}
          />
          <ProjectCard
            title="Task Management App"
            description={t("secondProject")}
            image="/gramhub.png"
            link="https://github.com"
            tags={["React", "Node.js", "Socket.io"]}
          />
          <ProjectCard
            title="GramHub AI"
            description={t("thirdProject")}
            image="/gramhub.png"
            link="https://github.com"
            tags={["OpenAI", "Next.js", "TailwindCSS"]}
          />
        </div>
      </div>
    </section>
  );
};
