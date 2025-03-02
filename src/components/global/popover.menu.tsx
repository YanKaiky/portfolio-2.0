"use client";

import { Button, NavLink, ThemeToggle, TranslateButton } from "@/components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const PopoverMenu = () => {
  const t = useTranslations("navbar");

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { href: "#hero", label: t("hero") },
    { href: "#projects", label: t("projects") },
    { href: "#stack", label: t("stack") },
    { href: "#process", label: t("process") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={8}
        className="md:hidden w-44 p-3 bg-white dark:bg-black/90 backdrop-blur-lg shadow-lg border border-white/10 rounded-lg"
      >
        <nav className="flex flex-col gap-y-2 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="mt-2 flex gap-3">
            <TranslateButton />
            <ThemeToggle />
          </div>
        </nav>
      </PopoverContent>
    </Popover>
  );
};
