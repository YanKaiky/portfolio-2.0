import { Button } from "@/components";
import { Email, GitHub, Instagram, LinkedIn, WhatsApp, X } from "@/icons";
import Link from "next/link";
import { FC } from "react";

type ISocialMediasProps = {
  hero?: boolean;
};

export const SocialMedias: FC<ISocialMediasProps> = ({ hero = false }) => {
  return (
    <>
      {hero ? (
        <div className="space-x-4">
          <Link href="https://www.linkedin.com/in/yankaiky/" target="_blank">
            <Button variant="outline" size="icon" className="rounded-full">
              <LinkedIn />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:yankaikys@gmail.com" target="_blank">
            <Button variant="outline" size="icon" className="rounded-full">
              <Email />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
          <Link
            href="https://wa.me/5547999556723?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
            target="_blank"
          >
            <Button variant="outline" size="icon" className="rounded-full">
              <WhatsApp />
              <span className="sr-only">WhatsApp</span>
            </Button>
          </Link>
          <Link href="https://x.com/yankaiky_" target="_blank">
            <Button variant="outline" size="icon" className="rounded-full">
              <X />
              <span className="sr-only">X</span>
            </Button>
          </Link>
          <Link href="https://www.instagram.com/yan.kaiky_" target="_blank">
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Button>
          </Link>
          <Link href="https://github.com/YanKaiky" target="_blank">
            <Button variant="outline" size="icon" className="rounded-full">
              <GitHub />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
      ) : (
        <div className="hidden md:flex space-x-4">
          <Link
            className="text-gray-400"
            href="https://www.linkedin.com/in/yankaiky/"
            target="_blank"
          >
            <LinkedIn size="xs" />
          </Link>
          <Link
            className="text-gray-400"
            href="mailto:yankaikys@gmail.com"
            target="_blank"
          >
            <Email size="xs" />
          </Link>
          <Link
            className="text-gray-400"
            href="https://wa.me/5547999556723?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
            target="_blank"
          >
            <WhatsApp size="xs" />
          </Link>
          <Link
            className="text-gray-400"
            href="https://x.com/yankaiky_"
            target="_blank"
          >
            <X size="xs" />
          </Link>
          <Link
            className="text-gray-400"
            href="https://www.instagram.com/yan.kaiky_"
            target="_blank"
          >
            <Instagram size="xs" />
          </Link>
          <Link
            className="text-gray-400"
            href="https://github.com/YanKaiky"
            target="_blank"
          >
            <GitHub size="xs" />
          </Link>
        </div>
      )}
    </>
  );
};
