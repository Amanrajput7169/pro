"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, ExternalLink } from "lucide-react";

import TechIcon from "@/components/TechIcon";

gsap.registerPlugin(ScrollTrigger);

const coreProjects = [
  {
    title: "Secure Real-Time Communication Engine",
    description: "Developed a mission-critical real-time communication system leveraging bi-directional WebSocket protocols with robust end-to-end encryption and session management.",
    tags: ["WebSockets", "Node.js", "React", "Socket.io"],
    links: {
      code: "#",
      live: "#"
    },
    metrics: [
      "Handles high-concurrency event loops",
      "Low-latency message propagation",
      "Enterprise-grade security protocols",
    ]
  },
  {
    title: "Financial Data Streaming Dashboard",
    description: "Built a high-frequency financial dashboard for real-time cryptocurrency market analysis. Integrated low-latency data streams with advanced visualization for data-driven decision making.",
    tags: ["Next.js", "REST APIs", "TailwindCSS", "Recharts"],
    links: {
      code: "#",
      live: "https://cryptoverseap.netlify.app/"
    },
    metrics: [
      "Real-time market volatility tracking",
      "Sub-second data refresh intervals",
      "Cross-platform responsive architecture",
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
          <div key={index} className="core-project-card p-6 md:p-12 border border-muted bg-muted/10 hover:bg-muted/30 transition-colors duration-500 flex flex-col justify-between">
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
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 text-foreground font-sans text-xs font-medium rounded-md border border-white/5 hover:border-accent/30 transition-colors">
                    <TechIcon name={tag} className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.links.code} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-wider hover:text-accent transition-colors"
                >
                  <Code className="w-4 h-4" /> Code
                </a>
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-wider hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
