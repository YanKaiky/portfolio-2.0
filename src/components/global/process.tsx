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
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 relative group"
            >
              {index === 2 && (
                <div className="absolute top-6 right-6">
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

              <div className="flex flex-col gap-4">
                <div className="p-3 w-fit rounded-xl bg-primary/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">
                  {feature.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
