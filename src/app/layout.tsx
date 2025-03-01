import { Spinner } from "@/icons";
import { LocaleProvider, ThemeProvider } from "@/providers";
import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yan Kaiky - Full Stack Developer",
  description: "Full Stack developer portfolio showcasing projects and skills",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Spinner />}>
            <LocaleProvider>{children}</LocaleProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
