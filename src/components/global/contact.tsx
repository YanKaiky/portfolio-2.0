"use client";

import { useTranslations } from "next-intl";
import { ContactForm } from "./contact.form";
import { CpuAnimation } from "./cpu.animation";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="relative min-h-[calc(90vh-76px)] flex flex-col justify-center py-16 md:py-28 lg:py-36"
    >
      <div className="px-4 md:px-6">
        <div className="mx-auto">
          <h2 className="container-title mb-8">{t("title")}</h2>
        </div>

        <ContactForm />
      </div>

      <CpuAnimation />
    </section>
  );
};
