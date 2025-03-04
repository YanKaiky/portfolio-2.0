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

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center space-y-8 space-x-8 text-center">
        <div className="mx-auto px-6 space-y-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-md"
            >
              Yan Kaiky
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-container-gradient mb-6"
            >
              Full Stack & Mobile Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="dark:text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
            >
              {t("description")}
            </motion.p>
          </div>

          <SocialMedias hero />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto px-6 space-x-4"
          >
            <a href="/CV.pdf" download="Yan Kaiky Augusto dos Santos.pdf">
              <Button className="text-white bg-container-gradient transition-all duration-300 hover:brightness-110">
                {t("resume")}
                <FileUser />
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="text-green-dark border-green-dark hover:bg-green-dark-hover transition-all duration-300"
            >
              <Link href="#contact" className="flex items-center space-x-2">
                {t("contact")}
              </Link>
            </Button>
          </motion.div>
        </div>

        <SpeechBubble
          message={t("developerCoffee")}
          trigger={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:inline-block md:w-1/2 lg:w-full"
            >
              <p className="text-xs">{t("developer")}</p>
              <Image src="/developer.svg" alt="Hero" width={300} height={300} />
            </motion.div>
          }
        />
      </div>
    </section>
  );
};
