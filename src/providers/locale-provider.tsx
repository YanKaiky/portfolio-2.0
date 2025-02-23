"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode, createContext, useEffect, useState } from "react";

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined
);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const localLocale =
    typeof window !== "undefined"
      ? localStorage.getItem("locale") ?? "pt-BR"
      : "pt-BR";

  const [locale, setLocale] = useState(localLocale);
  const [messages, setMessages] = useState<Record<string, never> | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      localStorage.setItem("locale", locale);

      const newMessages = await import(`../../messages/${locale}.json`);
      setMessages(newMessages.default);
    };

    loadMessages();
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {messages && (
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      )}
    </LocaleContext.Provider>
  );
}
