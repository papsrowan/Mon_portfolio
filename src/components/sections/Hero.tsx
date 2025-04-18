"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageProvider";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Random moving particles effect
    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];
    const particleCount = 15;
    const colors = ["#10b981", "#3b82f6", "#f97316"]; // Green, Blue, Orange

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full opacity-30 mix-blend-screen";

      // Random properties
      const size = Math.random() * 200 + 50; // 50-250px
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = color;
      particle.style.filter = "blur(80px)";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.transform = "translate(-50%, -50%)";

      // Add to DOM
      container.appendChild(particle);
      particles.push(particle);

      // Animate movement
      animateParticle(particle);
    }

    function animateParticle(particle: HTMLDivElement) {
      const duration = Math.random() * 15000 + 10000; // 10-25 seconds
      const xMove = Math.random() * 30 - 15; // -15 to 15
      const yMove = Math.random() * 30 - 15; // -15 to 15

      const animation = particle.animate(
        [
          { transform: "translate(-50%, -50%)" },
          { transform: `translate(calc(-50% + ${xMove}vw), calc(-50% + ${yMove}vh))` },
          { transform: "translate(-50%, -50%)" },
        ],
        {
          duration,
          iterations: Number.POSITIVE_INFINITY,
          easing: "ease-in-out",
        }
      );
    }

    return () => {
      // Cleanup particles on unmount using for...of instead of forEach
      for (const particle of particles) {
        particle.remove();
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects container */}
      <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden" />

      {/* Content */}
      <div className="container relative z-10 mt-16 md:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-2">
              {t("hero.greeting")}
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-green-400">
              Yann Rowan
              
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {t("hero.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              {t("hero.description")}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 shadow-lg">
                <a href="#contact">{t("hero.cta")}</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full md:w-1/2 aspect-square"
          >
            <Image
              src="/myProfile.jpg"
              alt="Yann Rowan"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
