"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Zap, ArrowRightLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
          },
        });

        tl.to(imageRef.current, {
          scale: 1.2,
          opacity: 0.3,
          duration: 1,
        }).from(
          textRef.current,
          {
            x: "100%",
            opacity: 0,
            duration: 1,
          },
          0
        );
      });

      mm.add("(max-width: 767px)", () => {
        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative min-h-screen md:h-screen overflow-hidden bg-background">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        alt="Deal Aggregator Dashboard"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/90 z-10" />

      <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 md:py-32">
        <div ref={textRef} className="max-w-4xl md:ml-auto text-left md:text-right">
          <p className="text-accent uppercase tracking-widest font-bold mb-2 md:mb-4 font-sans text-[10px] sm:text-xs">Data Engineering & Automation</p>
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1] mb-4 md:mb-6">
            Enterprise <br />
            <span className="text-outline">Data aggregation</span> <br />
            Infrastructure
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-foreground/80 font-sans max-w-xl md:ml-auto mb-6 md:mb-10">
            Engineered a highly scalable data aggregation platform (Dashing Loots) that synchronizes thousands of real-time product data points across multiple e-commerce ecosystems, delivering automated deal delivery with sub-second latency.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 text-left">
            <div className="bg-muted/40 backdrop-blur-sm p-3 md:p-5 rounded-sm border border-muted hidden sm:block">
              <Database className="w-4 h-4 md:w-5 md:h-5 text-accent mb-2 md:mb-3" />
              <h4 className="font-bold uppercase mb-1 text-[10px] md:text-sm">Large-Scale Data</h4>
              <p className="text-[9px] md:text-xs font-sans text-muted-foreground">Handles 10,000+ active product listings with complex data normalization.</p>
            </div>
            <div className="bg-muted/40 backdrop-blur-sm p-3 md:p-5 rounded-sm border border-muted hidden sm:block">
              <ArrowRightLeft className="w-4 h-4 md:w-5 md:h-5 text-accent mb-2 md:mb-3" />
              <h4 className="font-bold uppercase mb-1 text-[10px] md:text-sm">API Workflows</h4>
              <p className="text-[9px] md:text-xs font-sans text-muted-foreground">Automated API integrations to fetch and sync real-time pricing.</p>
            </div>
            <div className="bg-muted/40 backdrop-blur-sm p-3 md:p-5 rounded-sm border border-muted hidden sm:block">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-accent mb-2 md:mb-3" />
              <h4 className="font-bold uppercase mb-1 text-[10px] md:text-sm">Performance</h4>
              <p className="text-[9px] md:text-xs font-sans text-muted-foreground">Optimized load times via advanced caching strategies and SSR.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
