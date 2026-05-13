import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ExperienceAndDuties from "@/components/sections/ExperienceAndDuties";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceAndDuties />
      <Certificates />
      {/* <Contact /> */}
    </main>
  );
}