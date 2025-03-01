"use client";

import { BackgroundDots, ContactAnimation, ContactForm } from "@/components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="relative min-h-[calc(90vh-76px)] flex flex-col justify-center py-16 md:py-28 lg:py-36"
    >
      <BackgroundDots />

      <div className="relative px-4 md:px-6">
        <div className="mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container-title mb-8"
          >
            {t("title")}
          </motion.h2>
        </div>

        <ContactForm />
      </div>

      <ContactAnimation />
    </section>
  );
};
