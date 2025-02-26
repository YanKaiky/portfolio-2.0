"use client";

import { useTranslations } from "next-intl";
import { ContactForm } from "./contact.form";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="min-h-[calc(90vh-76px)] flex flex-col justify-center py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="container-title">{t("title")}</h2>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
