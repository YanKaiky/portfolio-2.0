import { LocaleContext } from "@/providers/locale-provider";
import { useContext } from "react";

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}
