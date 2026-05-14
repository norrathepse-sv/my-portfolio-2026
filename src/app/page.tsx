import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ExperienceAndDuties from "@/components/sections/ExperienceAndDuties";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-apple-blue/10 selection:text-apple-blue">
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      {/* <ExperienceAndDuties /> */}
      <Certificates />
      {/* <Contact /> */}
    </main>
  );
}