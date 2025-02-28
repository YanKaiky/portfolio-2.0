"use client";

import { ContactForm, ContactAnimation } from "@/components";
import { useTranslations } from "next-intl";

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

      <ContactAnimation />
    </section>
  );
};
