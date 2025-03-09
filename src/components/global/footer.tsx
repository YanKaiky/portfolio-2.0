"use client";

import { SocialMedias, YanKaiky } from "@/components";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t bg-container-gradient-light dark:bg-container-gradient h-20">
      <div className="flex items-center justify-center w-full shrink-0 md:justify-between py-2 px-4 md:px-10">
        <SocialMedias />

        <p className="text-xs md:mr-28 font-bold text-white">
          {`© ${new Date().getFullYear()} Yan Kaiky. ${t(
            "allRightsReserved"
          )}.`}
        </p>

        <div className="hidden md:inline-block">
          <YanKaiky size="sm" />
        </div>
      </div>
    </footer>
  );
};
