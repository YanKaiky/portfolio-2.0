import { useTranslations } from "next-intl";
import { FC } from "react";
import { ContactForm } from "./contact.form";

const Contact: FC = () => {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#00467F] to-[#00bf8f] font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            {t("title")}
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
