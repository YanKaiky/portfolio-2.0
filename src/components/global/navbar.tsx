"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ThemeToggle } from "./theme.toggle";
import { TranslateButton } from "./translate";
import { YanKaikyDev } from "./yan.kaiky.dev";

export const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:px-6 flex h-14 items-center justify-between">
        <div className="flex space-x-2">
          <TranslateButton />
          <ThemeToggle />
        </div>

        <nav className="flex items-center space-x-9 text-sm font-medium">
          <Link
            href="#projects"
            className="text-[#2193b0] dark:text-[#6dd5ed] font-bold"
          >
            {t("projects")}
          </Link>
          <Link
            href="#stack"
            className="text-[#2193b0] dark:text-[#6dd5ed] font-bold"
          >
            {t("stack")}
          </Link>
          <Link
            href="#contact"
            className="text-[#2193b0] dark:text-[#6dd5ed] font-bold"
          >
            {t("contact")}
          </Link>
        </nav>

        <YanKaikyDev />
      </div>
    </header>
  );
};
