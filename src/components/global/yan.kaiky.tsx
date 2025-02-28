import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

type IYanKaikyProps = {
  size?: "sm" | "md";
};

export const YanKaiky: FC<IYanKaikyProps> = ({ size = "md" }) => {
  return (
    <Link
      href="#hero"
      className={cn(
        size === "sm" ? "text-xs" : "text-2xl",
        "font-bold text-gradient"
      )}
    >
      Y.K.
    </Link>
  );
};
