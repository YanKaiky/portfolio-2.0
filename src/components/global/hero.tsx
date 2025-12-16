"use client";

import {
  BackgroundDots,
  Button,
  RainingLetters,
  SocialMedias,
  SpeechBubble,
} from "@/components";
import { motion } from "framer-motion";
import { FileUser } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-76px)] py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center space-y-12 text-center"
    >
      {/* only md screen size */}
      <RainingLetters />

      {/* sm or smaller screen size only */}
      <BackgroundDots hero />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center space-y-8 space-x-8 text-center w-full">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none" />

        <div className="mx-auto px-6 space-y-8 max-w-5xl">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-tight drop-shadow-sm"
            >
              Yan Kaiky
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mb-8"
            >
              Full Stack & Mobile Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-muted-foreground text-lg md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t("description")}
            </motion.p>
          </div>

          <SocialMedias hero />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto px-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 group"
            >
              <Link href="#contact" className="font-semibold flex items-center space-x-2">
                <span>{t("contact")}</span>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <span className="sr-only">Go to contact</span>
                  →
                </div>
              </Link>
            </Button>

            <a href="/CV.pdf" download="Yan Kaiky Augusto dos Santos.pdf" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 group"
              >
                {t("resume")}
                <FileUser className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </a>
          </motion.div>
        </div>

        <SpeechBubble
          message={t("developerCoffee")}
          trigger={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative"
            >
              {/* Image Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/20 rounded-full blur-[80px] -z-10" />
              <p className="text-xs text-muted-foreground mb-2 absolute -top-6 left-1/2 -translate-x-1/2 w-full">{t("developer")}</p>
              <Image src="/developer.svg" alt="Hero" width={400} height={400} className="drop-shadow-2xl" />
            </motion.div>
          }
        />
      </div>
    </section>
  );
};
