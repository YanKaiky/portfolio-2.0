"use client";

import {
  NavLink,
  PopoverMenu,
  ThemeToggle,
  TranslateButton,
  YanKaiky,
} from "@/components";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const t = useTranslations("navbar");

  const links = [
    { label: t("hero"), href: "#hero" },
    { label: t("projects"), href: "#projects" },
    { label: t("stack"), href: "#stack" },
    { label: t("process"), href: "#process" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/75 dark:bg-black/50 backdrop-blur-md">
      <div className="px-4 md:px-10 flex h-14 items-center justify-between">
        <YanKaiky />

        <nav className="hidden md:flex items-center text-sm md:ml-28">
          <ul className="flex md:space-x-5 lg:space-x-9">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
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
