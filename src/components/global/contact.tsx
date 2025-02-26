"use client";

import { Cpu } from "lucide-react";
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
        <div className="mx-auto">
          <h2 className="container-title">{t("title")}</h2>

          <div className="w-full flex justify-evenly items-center">
            <div className="w-[50%] flex justify-center items-center">
              <Cpu className="text-[#6dd5ed] md:text-[#2193b0]" size={400} />
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
