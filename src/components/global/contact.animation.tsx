"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export const ContactAnimation = () => {
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
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-[#2F80ED]/35 dark:bg-[#2F80ED]/5 rounded-full blur-xl"
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

          <Cpu className="w-20 h-20" />
        </div>
      </motion.div>
    </div>
  );
};
