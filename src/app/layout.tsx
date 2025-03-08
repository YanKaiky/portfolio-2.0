import { Spinner } from "@/icons";
import { LocaleProvider, ThemeProvider } from "@/providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Source_Code_Pro } from "next/font/google";
import { FC, ReactNode, Suspense } from "react";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yan Kaiky - Full Stack Developer",
  description: "Full Stack developer portfolio showcasing projects and skills",
  creator: "Yan Kaiky",
  keywords: ["web developer", "full stack", "portfolio", "react", "next.js"],
  authors: [{ name: "Yan Kaiky" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

type IRootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html
      lang="en"
      className={sourceCodePro.className}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense
            fallback={
              <div className="flex h-screen w-screen items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <LocaleProvider>{children}</LocaleProvider>
          </Suspense>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
