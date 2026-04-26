"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.from(".mobile-nav-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6",
          isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-muted" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="nav-item text-xl font-bold uppercase tracking-tighter">
            Aman<span className="text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-item text-xs uppercase font-bold tracking-widest hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-item md:hidden text-xs uppercase font-bold tracking-widest px-4 py-2 border border-muted rounded-full bg-background/50 backdrop-blur-sm"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[45] bg-background flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="mobile-nav-item text-4xl font-bold uppercase tracking-tighter hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
