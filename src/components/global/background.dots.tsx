"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

type IBackgroundDotsProps = {
  hero?: boolean;
};

export const BackgroundDots: FC<IBackgroundDotsProps> = ({ hero = false }) => {
  return (
    <div className={cn(hero && "md:hidden", "absolute inset-0")}>
      <div className="h-full w-full bg-[radial-gradient(#204238_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};
