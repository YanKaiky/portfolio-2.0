"use client";

import { SocialMedias, YanKaiky } from "@/components";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t">
      <div className="flex items-center justify-center w-full shrink-0 md:justify-between py-2 md:px-6">
        <SocialMedias />

        <p className="text-xs text-gray-500 dark:text-gray-400 md:mr-28">
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
