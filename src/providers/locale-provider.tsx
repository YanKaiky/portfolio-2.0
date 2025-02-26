"use client";

import { NextIntlClientProvider } from "next-intl";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined
);

type ILocaleProviderProps = {
  children: ReactNode;
};

export const LocaleProvider: FC<ILocaleProviderProps> = ({ children }) => {
  const localLocale =
    typeof window !== "undefined"
      ? localStorage.getItem("locale") ?? "pt-BR"
      : "pt-BR";

  const [locale, setLocale] = useState(localLocale);
  const [messages, setMessages] = useState<Record<string, never> | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        localStorage.setItem("locale", locale);

        const newMessages = (await import(`../../messages/${locale}.json`))
          .default;
        setMessages(newMessages);
      } catch (error) {
        console.error("Erro ao carregar mensagens de tradução:", error);
      }
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
};
