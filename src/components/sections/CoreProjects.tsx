"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const coreProjects = [
  {
    title: "Real-Time Chat Application",
    description: "Developed a real-time chat system using WebSockets with secure authentication and live messaging.",
    tags: ["WebSockets", "Node.js", "React", "Socket.io"],
    metrics: [
      "Supports concurrent users seamlessly",
      "Ultra-low latency communication",
      "Secure encrypted data handling",
    ]
  },
  {
    title: "Crypto Dashboard",
    description: "Built a complex dashboard displaying real-time cryptocurrency data streams with a highly responsive UI.",
    tags: ["Next.js", "REST APIs", "TailwindCSS", "Recharts"],
    metrics: [
      "Live market data integration",
      "Optimized UI/UX for all devices",
      "High-frequency state updates",
    ]
  }
];

export default function CoreProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".core-project-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
          Core <span className="text-outline-accent">Systems</span>
        </h2>
        <p className="text-muted-foreground font-sans max-w-2xl text-lg">
          Complex applications built to handle real-time data, concurrent users, and demanding performance requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {coreProjects.map((project, index) => (
          <div key={index} className="core-project-card p-8 md:p-12 border border-muted bg-muted/10 hover:bg-muted/30 transition-colors duration-500 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold uppercase mb-4">{project.title}</h3>
              <p className="text-foreground/80 font-sans mb-8 text-lg">{project.description}</p>
              
              <ul className="space-y-3 mb-10">
                {project.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-muted-foreground">
                    <span className="text-accent mt-1">▹</span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-muted text-foreground font-sans text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-wider hover:text-accent transition-colors">
                  <Code className="w-4 h-4" /> Code
                </button>
                <button className="flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-wider hover:text-accent transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
