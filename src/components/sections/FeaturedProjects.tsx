"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Krisaw India",
    category: "Industrial E-commerce",
    description: "Architected a high-performance industrial platform focused on conversion and streamlined user journeys. Optimized for core web vitals, resulting in superior SEO rankings and a seamless mobile-first experience.",
    image: "/projects/krisawindia.png",
    link: "https://krisawindia.com/",
  },
  {
    title: "Palace Junga Shimla",
    category: "Hospitality Management",
    description: "Designed and developed a premium hospitality platform that prioritizes visual storytelling and performance. Implemented advanced caching strategies to ensure rapid load times for a high-traffic booking system.",
    image: "/projects/palacejungashimla.png",
    link: "https://palacejungashimla.com/",
  },
  {
    title: "Shivnem Graphics",
    category: "Agency Infrastructure",
    description: "Built a robust agency portfolio emphasizing technical excellence and interactive design. Focused on building a scalable architecture that handles high-resolution asset delivery without compromising performance.",
    image: "/projects/shivnemgraphics.png",
    link: "https://shivnemgraphics.com/",
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="work" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter">
          Client <br />
          <span className="text-outline-accent">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-sm font-sans text-lg">
          Delivering real business value through scalable architecture, modern design, and highly optimized web platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card group relative ${index === 1 ? "md:mt-24 lg:mt-32" : ""} ${index === 2 ? "md:mt-0 lg:mt-16" : ""}`}
          >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative aspect-[4/5] overflow-hidden bg-muted cursor-pointer rounded-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out z-10 pointer-events-none">
                <span className="text-background font-bold uppercase text-xs">View</span>
              </div>
            </a>
            
            <div className="mt-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase">{project.title}</h3>
                  <p className="text-accent mt-1 font-sans text-sm font-bold tracking-wider">{project.category}</p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-muted rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-300 shrink-0 ml-4"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-muted-foreground font-sans mt-4 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
