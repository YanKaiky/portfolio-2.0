import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Process,
  Projects,
  Stack,
} from "@/components";

const Page = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Yan Kaiky",
            url: "https://yankaiky.dev",
            image: "https://yankaiky.dev/me.png",
            jobTitle: "Full Stack Developer",
            sameAs: [
              "https://yankaiky.com",
              "https://yankaiky.com.br",
              "https://github.com/yankaiky",
              "https://linkedin.com/in/yankaiky",
            ],
          }),
        }}
      />
      <Navbar />

      <main className="px-0 md:px-12 lg:px-24">
        <Hero />
        <Projects />
        <Stack />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Page;
