import CanvasBackground from "@/components/CanvasBackground";
import Hero from "@/components/sections/Hero";
import ClientProjects from "@/components/sections/FeaturedProjects";
import About from "@/components/sections/About";
import ProjectSpotlight from "@/components/sections/ProjectSpotlight";
import CoreProjects from "@/components/sections/CoreProjects";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <CanvasBackground />
      <Hero />
      <div className="bg-background relative z-10">
        <ClientProjects />
        <About />
        <ProjectSpotlight />
        <CoreProjects />
        <Services />
        <TechStack />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}
