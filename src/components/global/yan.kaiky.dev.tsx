import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

type IYanKaikyDevProps = {
  size?: "sm" | "md";
};

export const YanKaikyDev: FC<IYanKaikyDevProps> = ({ size = "md" }) => {
  return (
    <Link className="flex items-center" href="#hero">
      <span
        className={cn(
          size === "sm" ? "text-xs" : "text-2xl",
          "hidden text-transparent bg-clip-text bg-gradient-to-r from-[#185a9d] to-[#43cea2] font-bold sm:inline-block"
        )}
      >
        yankaiky.dev
      </span>
    </Link>
  );
};
