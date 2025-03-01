"use client";

import { SpeechBubble } from "@/components";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";
import { useTranslations } from "next-intl";

export const ContactAnimation = () => {
  const t = useTranslations("contactAnimation");

  return (
    <div className="hidden md:block absolute bottom-28 right-36">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <SpeechBubble
          message={t("message")}
          trigger={
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-black/15 dark:bg-white/5 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <p className="text-[10px] mb-3">{t("hover")}</p>

              <Ghost className="w-20 h-20" />
            </div>
          }
        />
      </motion.div>
    </div>
  );
};
