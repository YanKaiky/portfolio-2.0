"use client";

import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t">
      <div className="gap-2 py-6 w-full shrink-0 px-4 md:px-6">
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          {`© ${new Date().getFullYear()} Yan Kaiky. ${t(
            "allRightsReserved"
          )}.`}
        </p>
      </div>
    </footer>
  );
};
