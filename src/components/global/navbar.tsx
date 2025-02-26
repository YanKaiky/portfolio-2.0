"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ThemeToggle } from "./theme.toggle";
import { TranslateButton } from "./translate";
import { YanKaikyDev } from "./yan.kaiky.dev";
import { PopoverMenu } from "./popover.menu";

export const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:px-6 flex h-14 items-center justify-between">
        <YanKaikyDev />

        <nav className="hidden md:flex items-center space-x-9 text-sm font-medium">
          <Link
            href="#projects"
            className="text-[#56CCF2] dark:text-[#2F80ED] font-bold"
          >
            {t("projects")}
          </Link>
          <Link
            href="#stack"
            className="text-[#56CCF2] dark:text-[#2F80ED] font-bold"
          >
            {t("stack")}
          </Link>
          <Link
            href="#contact"
            className="text-[#56CCF2] dark:text-[#2F80ED] font-bold"
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="hidden md:flex space-x-2">
          <TranslateButton />
          <ThemeToggle />
        </div>

        <PopoverMenu />
      </div>
    </header>
  );
};
