import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { Button } from "../ui/button";
import { NavLink } from "./nav.link";
import { ThemeToggle } from "./theme.toggle";
import { TranslateButton } from "./translate";

export const PopoverMenu: FC = () => {
  const t = useTranslations("navbar");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-40 p-2 bg-gray-200 dark:bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg">
        <div className="flex flex-col gap-y-2">
          <NavLink href="#projects">{t("projects")}</NavLink>
          <NavLink href="#contact">{t("contact")}</NavLink>
          <NavLink href="#stack">{t("stack")}</NavLink>

          <div className="mt-2 flex gap-3">
            <TranslateButton />
            <ThemeToggle />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
