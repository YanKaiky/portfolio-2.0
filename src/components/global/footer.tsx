"use client";

import { SocialMedias, YanKaiky } from "@/components";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t bg-container-gradient-light dark:bg-container-gradient py-6 md:min-h-[5rem] snap-end">
      <div className="flex flex-col-reverse gap-4 md:flex-row items-center justify-center w-full shrink-0 md:justify-between px-6 md:px-12 lg:px-24">
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
