"use client";

import { useTranslations } from "next-intl";
import { ContactForm } from "./contact.form";
import { CpuAnimation } from "./cpu.animation";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="min-h-[calc(90vh-76px)] flex flex-col justify-center py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <div className="mx-auto">
          <h2 className="container-title">{t("title")}</h2>

          <div className="w-full md:flex md:justify-evenly md:items-center">
            <div className="hidden md:flex md:w-[50%] md:justify-center md:items-center">
              <CpuAnimation />
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
