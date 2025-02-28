"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { PopoverMenu } from "./popover.menu";
import { ThemeToggle } from "./theme.toggle";
import { TranslateButton } from "./translate";
import { YanKaiky } from "./yan.kaiky";

export const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/75 dark:bg-black/50 backdrop-blur-md">
      <div className="px-4 md:px-6 flex h-14 items-center justify-between">
        <YanKaiky />

        <nav className="hidden md:flex items-center space-x-9 text-sm font-medium  md:ml-28">
          <ul className="flex space-x-9">
            <li>
              <Link
                href="#projects"
                className="hover:text-blue-500 transition-colors font-bold"
              >
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link
                href="#stack"
                className="hover:text-blue-500 transition-colors font-bold"
              >
                {t("stack")}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-blue-500 transition-colors font-bold"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-4">
          <TranslateButton />
          <ThemeToggle />
        </div>

        <PopoverMenu />
      </div>
    </header>
  );
};
