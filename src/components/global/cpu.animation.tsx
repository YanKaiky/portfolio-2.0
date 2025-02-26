"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export const CpuAnimation = () => {
  return (
    <div className="relative w-full h-full">
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
            className="absolute -inset-4 bg-[#6dd5ed]/35 dark:bg-[#6dd5ed]/5 rounded-full blur-xl"
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

          <Cpu className="text-[#2193b0] dark:text-[#6dd5ed] w-60 h-60" />
        </div>
      </motion.div>
    </div>
  );
};
