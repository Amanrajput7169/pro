"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-line span", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        skewY: 5,
      }).from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 20,
          duration: 1,
        },
        "-=0.5"
      ).from(
        ".hero-cta",
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
        },
        "-=0.8"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-start px-6 md:px-12 lg:px-24 pt-24 pb-20 md:pt-32 md:pb-32"
    >
      <div className="z-10 flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7vw] leading-[1.1] font-bold tracking-tighter uppercase">
          <div className="hero-line overflow-hidden pb-1">
            <span className="inline-block text-outline-accent text-base sm:text-xl md:text-2xl lg:text-3xl font-sans normal-case tracking-normal border border-accent rounded-full px-4 sm:px-6 py-1 sm:py-2 mb-2 sm:mb-4">
              Aman Kumar
            </span>
          </div>
          <div className="hero-line overflow-hidden pb-1">
            <span className="inline-block">Full Stack Developer</span>
          </div>
          <div className="hero-line overflow-hidden text-outline pb-1">
            <span className="inline-block">Building Scalable</span>
          </div>
          <div className="hero-line overflow-hidden pb-1">
            <span className="inline-block">Web Applications &</span>
          </div>
          <div className="hero-line overflow-hidden text-accent pb-1">
            <span className="inline-block">Data-Driven Systems</span>
          </div>
        </h1>

        <p className="hero-subtitle mt-4 md:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground font-sans leading-relaxed">
          I help businesses build fast, reliable, and high-performance web platforms using modern technologies like Next.js, APIs, and automation.
        </p>

        <div className="hero-cta mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6 font-sans font-bold uppercase text-[10px] sm:text-xs tracking-wider">
          <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-background rounded-full hover:bg-white transition-colors duration-300">
            Hire Me
          </a>
          <a href="#work" className="px-6 sm:px-8 py-3 sm:py-4 border border-muted-foreground text-foreground rounded-full hover:border-accent hover:text-accent transition-colors duration-300">
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
