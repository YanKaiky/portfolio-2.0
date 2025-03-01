"use client";

import { FC } from "react";

type IBackgroundDotsProps = {
  hero?: boolean;
};

export const BackgroundDots: FC<IBackgroundDotsProps> = ({ hero = false }) => {
  return hero ? (
    <div className="md:hidden absolute inset-0">
      <div className="h-full w-full bg-[radial-gradient(#204238_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  ) : (
    <div className="absolute inset-0">
      <div className="h-full w-full bg-[radial-gradient(#204238_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};
