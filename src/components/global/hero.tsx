import { Email } from "@/icons/email";
import GitHub from "@/icons/github";
import { Instagram } from "@/icons/instagram";
import { LinkedIn } from "@/icons/linkedin";
import { WhatsApp } from "@/icons/whatsapp";
import { X } from "@/icons/x";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";

const Hero: FC = () => {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-76px)] py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center space-y-8 text-center"
    >
      <div className="mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00467F] to-[#00bf8f] mb-6">
            Full Stack & Mobile Developer
          </h1>

          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </div>

      <div className="space-x-4">
        <Link href="https://www.linkedin.com/in/yankaiky/" target="_blank">
          <Button variant="outline" size="icon" className="rounded-full">
            <LinkedIn />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="https://github.com/YanKaiky" target="_blank">
          <Button variant="outline" size="icon" className="rounded-full">
            <GitHub />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://x.com/yankaiky_" target="_blank">
          <Button variant="outline" size="icon" className="rounded-full">
            <X />
            <span className="sr-only">X</span>
          </Button>
        </Link>
        <Link
          href="https://wa.me/5547999556723?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
          target="_blank"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <WhatsApp />
            <span className="sr-only">WhatsApp</span>
          </Button>
        </Link>
        <Link href="https://www.instagram.com/yan.kaiky_" target="_blank">
          <Button variant="outline" size="icon" className="rounded-full">
            <Instagram />
            <span className="sr-only">Instagram</span>
          </Button>
        </Link>
        <Link href="mailto:yankaikys@gmail.com" target="_blank">
          <Button variant="outline" size="icon" className="rounded-full">
            <Email />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
