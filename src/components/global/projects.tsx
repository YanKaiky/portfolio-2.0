"use client";

import { useTranslations } from "next-intl";
import { ProjectCard } from "./project.card";

export const Projects = () => {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      aria-label="Projetos desenvolvidos"
      className="min-h-[calc(100vh-76px)] flex items-center py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <h2 className="container-title">{t("title")}</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProjectCard
            title="Bistro Café"
            description={t("firstProject")}
            image="/bistro-café.png"
            link="https://menuplacerestaurant.netlify.app"
            github="https://github.com/YanKaiky/restaurant-website"
            tags={["Vite", "TailwindCSS"]}
          />
          <ProjectCard
            title="Financé"
            description={t("secondProject")}
            image="/financé.png"
            tags={["React.js", "TailwindCSS", "Node.js", "React Native", "Socket.io"]}
          />
          <ProjectCard
            title="GramHub"
            description={t("thirdProject")}
            image="/gramhub.png"
            github="https://github.com/YanKaiky/gramhub"
            tags={["DeepSeek", "Next.js", "TailwindCSS"]}
          />
          <ProjectCard
            title="Wallart"
            description={t("thirdProject")}
            image="/gramhub.png"
            github="https://github.com/YanKaiky/gramhub"
            tags={["Expo", "React Native"]}
          />
        </div>
      </div>
    </section>
  );
};
