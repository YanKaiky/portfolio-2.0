"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { usePathname, useRouter } from "@/i18n/routing";
import { BrazilFlag, USFlag } from "@/icons";
import { useLocale } from "next-intl";

export const TranslateButton = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (value: string) => {
    router.replace(pathname, { locale: value });
  };

  return (
    <Select onValueChange={handleLocaleChange} defaultValue={locale}>
      <SelectTrigger className="w-[100px] ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0">
        <SelectValue placeholder={locale === "pt-br" ? "BR" : "EN"} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">
            <div className="flex gap-3">
              <USFlag />
              <span>EN</span>
            </div>
          </SelectItem>
          <SelectItem value="pt-br">
            <div className="flex gap-3">
              <BrazilFlag />
              <span>BR</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
