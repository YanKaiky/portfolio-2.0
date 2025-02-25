"use client";

import { useTranslations } from "next-intl";
import { TechStack } from "./tech.stack";

export const Stack = () => {
  const t = useTranslations("stack");

  return (
    <section
      id="stack"
      className="min-h-[calc(100vh-76px)] flex items-center py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <h2 className="container-title">{t("title")}</h2>

        <TechStack />
      </div>
    </section>
  );
};
