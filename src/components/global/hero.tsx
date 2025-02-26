"use client";

import { FileUser } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import { RainingLetters } from "./raining.letters";
import { SocialMedias } from "./social.medias";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-76px)] py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center space-y-8 text-center"
    >
      <RainingLetters />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center">
        <div className="mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-container-gradient mb-6">
              Full Stack & Mobile Developer
            </h1>

            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>

        <SocialMedias hero />

        <div className="mx-auto px-6 space-x-4">
          <a
            href="/CV.pdf"
            download="Yan Kaiky Augusto dos Santos.pdf"
          >
            <Button className="text-white bg-container-gradient">
              {t("resume")}
              <FileUser />
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            className="text-[#2F80ED] border-[#2F80ED] hover:bg-[#2F80ED]/20"
          >
            <Link href="#contact" className="flex items-center space-x-2">
              {t("contact")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
