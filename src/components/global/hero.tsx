"use client";

import { FileUser } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { SocialMedias } from "./social.medias";

export const Hero = () => {
  const t = useTranslations("hero");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-76px)] py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center space-y-8 text-center"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center">
        <div className="mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-container-gradient mb-6">
              Full Stack & Mobile Developer
            </h1>

            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>

        <SocialMedias />

        <div className="mx-auto px-6 space-x-4">
          <a
            href="/Yan Kaiky Augusto dos Santos.pdf"
            download="Yan Kaiky Augusto dos Santos.pdf"
          >
            <Button className="text-white bg-container-gradient">
              {t("resume")}
              <FileUser />
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            className="text-[#6dd5ed] border-[#6dd5ed] hover:bg-[#6dd5ed]/20"
          >
            <Link href="#contact" className="flex items-center space-x-2">
              {t("contact")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
