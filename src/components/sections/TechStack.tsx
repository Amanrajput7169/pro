"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TechIcon from "@/components/TechIcon";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    category: "Frontend",
    technologies: ["React.js", "Next.js", "HTML", "CSS", "Tailwind", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "WebSockets"],
  },
  {
    category: "Database",
    technologies: ["MongoDB"],
  },
  {
    category: "Other",
    technologies: ["REST APIs", "Performance Optimization"],
  },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".tech-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-12 text-outline-accent">Tech Stack</h2>
        
        <div className="flex flex-col border-t border-muted">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className="tech-item flex flex-col md:flex-row md:items-center py-8 border-b border-muted group"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-2xl font-bold uppercase group-hover:text-accent transition-colors duration-300">
                  {stack.category}
                </h3>
              </div>
              <div className="md:w-2/3">
                <div className="flex flex-wrap gap-4 md:gap-8">
                  {stack.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 group/icon">
                      <div className="p-3 rounded-xl bg-white/5 group-hover/icon:bg-white/10 border border-white/5 group-hover/icon:border-accent/30 transition-all duration-300 shadow-sm group-hover/icon:shadow-accent/20">
                        <TechIcon name={tech} className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover/icon:scale-110" />
                      </div>
                      <span className="text-sm md:text-base font-sans font-medium text-foreground/70 group-hover/icon:text-foreground transition-colors duration-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
