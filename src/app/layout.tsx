import { Spinner } from "@/icons";
import { LocaleProvider, ThemeProvider } from "@/providers";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yan Kaiky - Full Stack Developer",
  description: "Full Stack developer portfolio showcasing projects and skills",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={jakarta.className}>
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
