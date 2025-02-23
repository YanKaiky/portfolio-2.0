import { ContactForm } from "@/components/global/contact.form";
import { ProjectCard } from "@/components/global/project.card";
import { TechStack } from "@/components/global/tech.stack";
import { Button } from "@/components/ui/button";
import { Email } from "@/icons/email";
import GitHub from "@/icons/github";
import { Instagram } from "@/icons/instagram";
import { LinkedIn } from "@/icons/linkedin";
import { WhatsApp } from "@/icons/whatsapp";
import { X } from "@/icons/x";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-4 md:px-6 flex h-14 items-center justify-between">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Yan Kaiky</span>
          </Link>

          <nav className="flex items-center space-x-9 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground/80"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-foreground/80"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80"
            >
              Contact
            </Link>
          </nav>

          <Button variant="outline">Resume</Button>
        </div>
      </header>

      <main className="px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Full Stack & Mobile Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building digital experiences with modern technologies. Focused
                  on creating elegant solutions to complex problems.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="https://www.instagram.com/yan.kaiky_"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Instagram />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="https://github.com/YanKaiky" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <GitHub />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yankaiky/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <LinkedIn />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/5547999556723?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <WhatsApp />
                    <span className="sr-only">WhatsApp</span>
                  </Button>
                </Link>
                <Link href="https://x.com/yankaiky_" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <X />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:yankaikys@gmail.com" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Email />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                image="/gramhub.png"
                link="https://github.com"
                tags={["Next.js", "Prisma", "Stripe"]}
              />
              <ProjectCard
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/gramhub.png"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <ProjectCard
                title="AI Chat Interface"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/gramhub.png"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 John.dev. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
