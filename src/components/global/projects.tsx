"use client";

import { ProjectCard } from "@/components";
import { useTranslations } from "next-intl";

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
            title="Smartiky"
            description={t("secondProject")}
            image="/smartiky.png"
            github="https://github.com/YanKaiky/smartiky"
            tags={["Flutter", "Hive"]}
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
            description={t("fourthProject")}
            image="/wallart.png"
            github="https://github.com/YanKaiky/wallart"
            tags={["Expo", "React Native"]}
          />
        </div>
      </div>
    </section>
  );
};
