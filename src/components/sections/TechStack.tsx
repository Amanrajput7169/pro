"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    category: "Frontend",
    technologies: "React.js, Next.js, HTML, CSS, Tailwind",
  },
  {
    category: "Backend",
    technologies: "Node.js, Express.js",
  },
  {
    category: "Database",
    technologies: "MongoDB",
  },
  {
    category: "Other",
    technologies: "REST APIs, WebSockets, Performance Optimization",
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
                <p className="text-lg font-sans text-foreground/80">{stack.technologies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
