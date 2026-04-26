"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".about-word");
      
      gsap.from(words, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        opacity: 0.1,
        y: 10,
        stagger: 0.05,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  const text = "I am a Full Stack Developer focused on building scalable, high-performance web applications and real-world solutions. I have experience working on client projects as well as developing systems that handle real-time data, automation, and performance optimization. I focus on writing clean, maintainable code and delivering solutions that provide real business value.";

  return (
    <section ref={containerRef} id="about" className="py-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans leading-tight font-medium text-foreground text-center">
          {text.split(" ").map((word, i) => (
            <span key={i} className="about-word inline-block mr-2 lg:mr-3">
              {word}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
