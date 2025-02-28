import { Spinner } from "@/icons";
import { LocaleProvider, ThemeProvider } from "@/providers";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const codePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yan Kaiky - Full Stack Developer",
  description: "Full Stack developer portfolio showcasing projects and skills",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={codePro.className}>
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
