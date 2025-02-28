import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Stack,
  Steps,
} from "@/components";

const Page = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />

      <main className="px-4 md:px-6">
        <Hero />
        <Projects />
        <Stack />
        <Steps />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Page;
