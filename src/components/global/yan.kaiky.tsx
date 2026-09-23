import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type IYanKaikyProps = {
  size?: "sm" | "md";
};

export const YanKaiky: FC<IYanKaikyProps> = ({ size = "md" }) => {
  return (
    <Link
      href="#hero"
      className="flex items-center gap-2 transition-transform hover:scale-105"
    >
      <Image
        src="/me.png"
        alt="Yan Kaiky"
        width={40}
        height={40}
        className={cn(
          "object-cover rounded-full",
          size === "sm" ? "w-6 h-6" : "w-10 h-10",
        )}
      />
      <span
        className={cn(
          "font-bold",
          size === "sm" ? "text-xs text-white" : "text-2xl text-gradient",
        )}
      >
        Y.K.
      </span>
    </Link>
  );
};
