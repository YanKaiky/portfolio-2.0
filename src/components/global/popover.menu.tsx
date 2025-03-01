import { Button, NavLink, ThemeToggle, TranslateButton } from "@/components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const PopoverMenu: FC = () => {
  const t = useTranslations("navbar");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-44 p-3 bg-white dark:bg-black/90 backdrop-blur-lg shadow-lg border border-white/10 rounded-lg"
      >
        <nav className="flex flex-col gap-y-2 text-sm font-medium">
          <NavLink href="#projects">{t("projects")}</NavLink>
          <NavLink href="#stack">{t("stack")}</NavLink>
          <NavLink href="#process">{t("process")}</NavLink>
          <NavLink href="#contact">{t("contact")}</NavLink>

          <div className="mt-2 flex gap-3">
            <TranslateButton />
            <ThemeToggle />
          </div>
        </nav>
      </PopoverContent>
    </Popover>
  );
};
