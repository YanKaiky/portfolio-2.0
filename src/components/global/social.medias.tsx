import { SocialMediaButton } from "@/components";
import { Email, GitHub, Instagram, LinkedIn, WhatsApp, X } from "@/icons";
import { cn } from "@/lib/utils";
import { FC } from "react";

type ISocialMediasProps = {
  hero?: boolean;
};

export const SocialMedias: FC<ISocialMediasProps> = ({ hero = false }) => {
  const socialMedias = [
    {
      href: "https://www.linkedin.com/in/yankaiky/",
      icon: <LinkedIn size={!hero ? "xs" : "sm"} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:yankaikys@gmail.com",
      icon: <Email size={!hero ? "xs" : "sm"} />,
      label: "Email",
    },
    {
      href: "https://wa.me/5547999556723?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.",
      icon: <WhatsApp size={!hero ? "xs" : "sm"} />,
      label: "WhatsApp",
    },
    {
      href: "https://x.com/yankaiky_",
      icon: <X size={!hero ? "xs" : "sm"} />,
      label: "X",
    },
    {
      href: "https://www.instagram.com/yan.kaiky_",
      icon: <Instagram size={!hero ? "xs" : "sm"} />,
      label: "Instagram",
    },
    {
      href: "https://github.com/YanKaiky",
      icon: <GitHub size={!hero ? "xs" : "sm"} />,
      label: "GitHub",
    },
  ];

  return (
    <div className={cn(!hero && "hidden md:flex", "space-x-4")}>
      {socialMedias.map((socialMedia) => (
        <SocialMediaButton
          key={socialMedia.label}
          href={socialMedia.href}
          icon={socialMedia.icon}
          label={hero ? socialMedia.label : ""}
        />
      ))}
    </div>
  );
};
