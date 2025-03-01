"use client";

import { HardSkills } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Stack = () => {
  const t = useTranslations("stack");

  return (
    <section
      id="stack"
      aria-label="Tecnologias e Hard Skills"
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

        <HardSkills />
      </div>
    </section>
  );
};
