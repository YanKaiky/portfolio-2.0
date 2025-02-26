"use client";

import { useTranslations } from "next-intl";
import { SocialMedias } from "./social.medias";
import { YanKaikyDev } from "./yan.kaiky.dev";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t">
      <div className="flex items-center justify-center w-full shrink-0 md:justify-between py-2 md:px-6">
        <SocialMedias />

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {`© ${new Date().getFullYear()} Yan Kaiky. ${t(
            "allRightsReserved"
          )}.`}
        </p>

        <YanKaikyDev size="sm" />
      </div>
    </footer>
  );
};
