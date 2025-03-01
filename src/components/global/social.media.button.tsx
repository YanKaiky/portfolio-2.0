import { Button } from "@/components";
import Link from "next/link";
import { FC, ReactNode } from "react";

type ISocialMediaButtonProps = {
  href: string;
  icon: ReactNode;
  label?: string;
};

export const SocialMediaButton: FC<ISocialMediaButtonProps> = ({
  href,
  icon,
  label,
}) => {
  return (
    <Link href={href} target="_blank">
      {label ? (
        <Button variant="outline" size="icon" className="rounded-full">
          {icon}
          <span className="sr-only">{label}</span>
        </Button>
      ) : (
        icon
      )}
    </Link>
  );
};
