"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Full Stack Web Development",
    description: "Building end-to-end, high-performance web applications utilizing Next.js, React, and Node.js for robust, enterprise-grade architecture.",
  },
  {
    number: "02",
    title: "API Development & Integration",
    description: "Designing and integrating secure, scalable RESTful APIs and external services to power complex business logic and seamless data flow.",
  },
  {
    number: "03",
    title: "Real-Time Systems",
    description: "Implementing low-latency WebSockets and event-driven architectures for live communication, dashboards, and mission-critical data sync.",
  },
  {
    number: "04",
    title: "Performance Optimization",
    description: "Auditing and optimizing web platforms for lightning-fast load times, superior core web vitals, and massive scalability.",
  },
  {
    number: "05",
    title: "Scalable Web Solutions",
    description: "Developing future-proof digital products that grow with your business, focusing on maintainability, security, and user experience.",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="services" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
          Technical <span className="text-outline-accent">Expertise</span>
        </h2>
      </div>

      <div className="flex flex-col border-t border-muted">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item group py-8 md:py-12 border-b border-muted flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-muted/20 transition-colors duration-500 cursor-default"
          >
            <div className="flex items-start gap-8 md:w-1/2">
              <span className="text-muted-foreground text-sm font-sans shrink-0 mt-2 md:mt-4">
                {service.number}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase transition-colors duration-300 group-hover:text-accent">
                {service.title}
              </h3>
            </div>
            <div className="md:w-1/2 md:pl-12 lg:pl-24">
              <p className="text-foreground/80 font-sans text-lg">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
