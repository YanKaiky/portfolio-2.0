import { Spinner } from "@/icons";
import { LocaleProvider, ThemeProvider } from "@/providers";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import { FC, ReactNode, Suspense } from "react";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yan Kaiky - Full Stack Developer",
  description: "Full Stack developer portfolio showcasing projects and skills",
};

type IRootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={sourceCodePro.className}>
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
};

export default RootLayout;
