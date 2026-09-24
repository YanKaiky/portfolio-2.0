import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yan Kaiky — Full Stack Developer",
    short_name: "Yan Kaiky",
    description:
      "Portfólio de Yan Kaiky, Full Stack Developer especializado em aplicações web, SaaS, APIs e soluções escaláveis.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    lang: "pt-br",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "https://yankaiky.dev/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://yankaiky.dev/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
