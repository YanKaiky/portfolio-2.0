import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

type IYanKaikyDevProps = {
  size?: "sm" | "md";
};

export const YanKaikyDev: FC<IYanKaikyDevProps> = ({ size = "md" }) => {
  return (
    <Link
      href="#hero"
      className={cn(
        size === "sm" ? "text-xs" : "text-2xl",
        "font-bold text-gradient"
      )}
    >
      yankaiky.dev
    </Link>
  );
};
