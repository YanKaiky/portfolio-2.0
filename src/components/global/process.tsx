"use client";

import { motion } from "framer-motion";
import { Brain, ClipboardCheck, Construction, MonitorCog } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SpeechBubble } from "./speech.bubble";

export const Process = () => {
  const t = useTranslations("process");

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-green-dark" />,
      title: t("title1"),
      description: t("description1"),
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-green-dark" />,
      title: t("title2"),
      description: t("description2"),
    },
    {
      icon: <MonitorCog className="h-10 w-10 text-green-dark" />,
      title: t("title3"),
      description: t("description3"),
    },
    {
      icon: <Construction className="h-10 w-10 text-green-dark" />,
      title: t("title4"),
      description: t("description4"),
    },
  ];

  return (
    <section
      id="process"
      className="relative min-h-[calc(100vh-76px)] flex flex-col justify-center py-16 md:py-28 lg:py-36"
    >
      <div className="px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container-title"
        >
          {t("title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/65 dark:hover:bg-white/10 transition-colors relative"
            >
              {index === 2 && (
                <div className="absolute top-6 right-3 p-2">
                  <SpeechBubble
                    message={t("descriptionCoffee")}
                    trigger={
                      <Image
                        src="/coffee-cup-green.svg"
                        alt="Coffee Cup"
                        width={25}
                        height={25}
                      />
                    }
                  />
                </div>
              )}

              <div className="flex items-center gap-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-green-dark">
                  {feature.title}
                </h3>
              </div>

              <p className="dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
