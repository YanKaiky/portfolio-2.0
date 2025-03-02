import { FC } from "react";

type IEmailProps = {
  size?: "xs" | "sm";
};

export const Email: FC<IEmailProps> = ({ size = "sm" }) => {
  return (
    <svg
      width={size === "sm" ? "22" : "17"}
      height={size === "sm" ? "22" : "17"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white"
    >
      <path
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
