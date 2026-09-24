import { routing } from "@/i18n/routing";
import { Spinner } from "@/icons";
import { ThemeProvider } from "@/providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Outfit, Source_Code_Pro } from "next/font/google";
import { notFound } from "next/navigation";
import { FC, ReactNode, Suspense } from "react";
import "../globals.css";

const outcrop = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: {
      default: "Yan Kaiky — Full Stack Developer",
      template: "%s | Yan Kaiky",
    },
    description:
      "Yan Kaiky é Full Stack Developer especializado em aplicações web, SaaS, APIs e soluções escaláveis.",
    creator: "Yan Kaiky",
    publisher: "Yan Kaiky",
    keywords: [
      "Yan Kaiky",
      "Full Stack Developer",
      "Desenvolvedor Full Stack",
      "Software Developer",
      "Web Developer",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "TypeScript",
      "SaaS",
    ],
    authors: [
      {
        name: "Yan Kaiky",
        url: "https://yankaiky.dev",
      },
    ],
    metadataBase: new URL("https://yankaiky.dev"),
    alternates: {
      canonical: "https://yankaiky.dev",
      languages: {
        "pt-br": "/pt-br",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: "https://yankaiky.dev",
      siteName: "Yan Kaiky",
      title: "Yan Kaiky — Full Stack Developer",
      description:
        "Portfólio de Yan Kaiky, Full Stack Developer especializado em aplicações web, SaaS, APIs e soluções escaláveis.",
      images: [
        {
          url: "/og-image.png",
          width: 800,
          height: 600,
          alt: "Yan Kaiky — Full Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Yan Kaiky — Full Stack Developer",
      description:
        "Portfólio de Yan Kaiky, Full Stack Developer especializado em aplicações web, SaaS, APIs e soluções escaláveis.",
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

type IRootLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const RootLayout: FC<IRootLayoutProps> = async ({ children, params }) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      className={`${outcrop.variable} ${sourceCodePro.variable}`}
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
            <NextIntlClientProvider messages={messages} locale={locale}>
              {children}
            </NextIntlClientProvider>
          </Suspense>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default RootLayout;
