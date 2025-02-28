"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { useLocale } from "@/hooks/use-locale";
import { BrazilFlag, USFlag } from "@/icons";

export const TranslateButton = () => {
  const { locale, setLocale } = useLocale();

  return (
    <Select onValueChange={(value) => setLocale(value)} defaultValue={locale}>
      <SelectTrigger className="w-[100px] ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0">
        <SelectValue placeholder={locale === "pt-BR" ? "BR" : "EN"} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">
            <div className="flex gap-3">
              <USFlag />
              <span>EN</span>
            </div>
          </SelectItem>
          <SelectItem value="pt-BR">
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
