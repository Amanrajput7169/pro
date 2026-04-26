"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Senior Freelance Developer",
    company: "Various Clients",
    year: "2023 - Present",
  },
  {
    role: "Frontend Engineer",
    company: "Tech Solutions Inc.",
    year: "2021 - 2023",
  },
  {
    role: "Web Designer",
    company: "Creative Studio X",
    year: "2019 - 2021",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".exp-item", {
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
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-12">Experience</h2>
        
        <div className="flex flex-col border-t border-muted">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-item flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-muted group"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <p className="text-muted-foreground font-sans">{exp.year}</p>
              </div>
              <div className="md:w-1/3 mb-2 md:mb-0">
                <h3 className="text-2xl font-bold uppercase group-hover:text-accent transition-colors duration-300">
                  {exp.role}
                </h3>
              </div>
              <div className="md:w-1/3 md:text-right">
                <p className="text-lg font-sans text-foreground/80">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
