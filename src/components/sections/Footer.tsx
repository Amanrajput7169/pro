"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Magnetic button effect on footer items
      const links = gsap.utils.toArray<HTMLAnchorElement>(".magnetic-link");
      
      links.forEach((link) => {
        link.addEventListener("mousemove", (e) => {
          const rect = link.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(link, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.5,
            ease: "power2.out",
          });
        });
        
        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <footer ref={containerRef} id="contact" className="pt-32 pb-12 md:pb-16 px-6 md:px-12 lg:px-24 bg-foreground text-background">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest font-sans mb-8">Got a project in mind?</p>
        <h2 className="text-5xl md:text-7xl lg:text-[8vw] leading-none font-bold uppercase tracking-tighter mb-12">
          Let&apos;s <br /> <span className="text-outline text-background" style={{ WebkitTextStrokeColor: "var(--background)" }}>Talk</span>
        </h2>
        
        <a 
          href="mailto:hello@example.com" 
          className="magnetic-link inline-block py-4 px-12 rounded-full bg-accent text-background font-bold uppercase text-lg hover:bg-white transition-colors duration-300"
        >
          Get in touch
        </a>
      </div>
      
      <div className="mt-20 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-8 font-sans text-xs sm:text-sm text-background/60">
        <p className="order-2 md:order-1">&copy; {new Date().getFullYear()} Aman Kumar. All rights reserved.</p>
        <div className="flex gap-8 order-1 md:order-2">
          <a href="https://github.com/Amanrajput7169" target="_blank" rel="noopener noreferrer" className="magnetic-link hover:text-accent transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/aman-kumar-81574a21b" target="_blank" rel="noopener noreferrer" className="magnetic-link hover:text-accent transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
