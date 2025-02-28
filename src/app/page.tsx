import { Contact, Footer, Hero, Navbar, Projects, Stack } from "@/components";

const Page = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
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
};

export default Page;
