import Contact from "@/components/global/contact";
import Footer from "@/components/global/footer";
import Hero from "@/components/global/hero";
import Navbar from "@/components/global/navbar";
import Projects from "@/components/global/projects";
import Stack from "@/components/global/stack";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="px-4 md:px-6">
        <Hero />
        <Projects />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
