"use client";

import { motion } from "framer-motion";
import { Bot, PresentationIcon, Target, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export const Steps = () => {
  const t = useTranslations("steps");

  const features = [
    {
      icon: <Target className="h-10 w-10" />,
      title: t("title1"),
      description: t("description1"),
    },
    {
      icon: <PresentationIcon className="h-10 w-10" />,
      title: t("title2"),
      description: t("description2"),
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: t("title3"),
      description: t("description3"),
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: t("title4"),
      description: t("description4"),
    },
  ];

  return (
    <section
      id="steps"
      className="relative min-h-[calc(100vh-76px)] flex flex-col justify-center py-16 md:py-28 lg:py-36"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
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
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
