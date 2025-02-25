"use client";

import { FileUser } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme.toggle";
import { TranslateButton } from "./translate";

export const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:px-6 flex h-14 items-center justify-between">
        <div className="flex space-x-2">
          <Link className="mr-6 flex items-center space-x-2" href="#hero">
            <span className="hidden text-transparent bg-clip-text bg-gradient-to-r from-[#43cea2] to-[#185a9d] font-bold sm:inline-block">
              Yan Kaiky
            </span>
          </Link>

          <TranslateButton />
          <ThemeToggle />
        </div>

        <nav className="flex items-center space-x-9 text-sm font-medium">
          <Link
            href="#projects"
            className="transition-colors hover:text-[#287b61] text-[#43cea2]"
          >
            {t("projects")}
          </Link>
          <Link
            href="#stack"
            className="transition-colors hover:text-[#287b61] text-[#43cea2]"
          >
            {t("stack")}
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-[#287b61] text-[#43cea2]"
          >
            {t("contact")}
          </Link>
        </nav>

        <a href="/CV.pdf" download="Yan Kaiky Augusto dos Santos.pdf">
          <Button
            variant="outline"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#00467F] to-[#00bf8f]"
          >
            {t("resume")}
            <FileUser color="#00bf8f" />
          </Button>
        </a>
      </div>
    </header>
  );
};
