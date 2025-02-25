import { Email } from "@/icons/email";
import GitHub from "@/icons/github";
import { Instagram } from "@/icons/instagram";
import { LinkedIn } from "@/icons/linkedin";
import { WhatsApp } from "@/icons/whatsapp";
import { X } from "@/icons/x";
import Link from "next/link";
import { Button } from "../ui/button";

export const SocialMedias = () => {
  return (
    <div className="space-x-4">
      <Link href="https://www.linkedin.com/in/yankaiky/" target="_blank">
        <Button variant="outline" size="icon" className="rounded-full">
          <LinkedIn />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link href="https://github.com/YanKaiky" target="_blank">
        <Button variant="outline" size="icon" className="rounded-full">
          <GitHub />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link href="https://x.com/yankaiky_" target="_blank">
        <Button variant="outline" size="icon" className="rounded-full">
          <X />
          <span className="sr-only">X</span>
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
      <Link href="https://www.instagram.com/yan.kaiky_" target="_blank">
        <Button variant="outline" size="icon" className="rounded-full">
          <Instagram />
          <span className="sr-only">Instagram</span>
        </Button>
      </Link>
      <Link href="mailto:yankaikys@gmail.com" target="_blank">
        <Button variant="outline" size="icon" className="rounded-full">
          <Email />
          <span className="sr-only">Email</span>
        </Button>
      </Link>
    </div>
  );
};
