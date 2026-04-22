"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Hospital, Star, Activity, Clock, Users, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

const QUICK_FACTS = [
  { title: "24x7 Emergency", desc: "Round-the-clock Care", icon: Clock, color: "text-red-400" },
  { title: "Multi-specialty", desc: "Expert Specialists", icon: Users, color: "text-blue-400" },
  { title: "In-house Diagnostics", desc: "Lab, X-Ray, CT, USG", icon: Activity, color: "text-orange-400" },
  { title: "Patient First", desc: "Compassion & Integrity", icon: ShieldCheck, color: "text-emerald-400" },
];

export function CinematicHero({
  brandName = "Srinidhi Hospitals",
  tagline1 = "Where Your Health,",
  tagline2 = "Is Our Priority.",
  ctaHeading = "Trust Excellence.",
  ctaDescription = "Join thousands of families who trust Srinidhi Hospitals for comprehensive healthcare in Amalapuram.",
  className,
  ...props
}: CinematicHeroProps) {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Simple fade-in intro
      gsap.set(".hero-tagline", { opacity: 0, y: 40 });
      gsap.set(".hero-card", { y: "100vh", opacity: 1 });
      gsap.set([".card-content", ".card-phone", ".card-badge"], { opacity: 0 });
      gsap.set(".hero-cta", { opacity: 0 });

      // Intro animation
      gsap.to(".hero-tagline", {
        opacity: 1, y: 0,
        duration: 1.2, ease: "power3.out", delay: 0.3,
        stagger: 0.2,
      });

      // Scroll timeline — ONLY animate transform & opacity (GPU-friendly)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=800" : "+=1500",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
        },
      });

      scrollTl
        // Fade out hero text
        .to(".hero-tagline-wrapper", { opacity: 0, y: -60, duration: 1 }, 0)
        // Bring card up
        .to(".hero-card", { y: 0, duration: 1.5, ease: "power2.out" }, 0)
        // Show card content
        .to(".card-content", { opacity: 1, duration: 1 }, 0.8)
        .to(".card-phone", { opacity: 1, y: 0, duration: 1 }, 1.0)
        .to(".card-badge", { opacity: 1, duration: 0.8, stagger: 0.1 }, 1.2)
        // Hold
        .to({}, { duration: 0.8 })
        // Fade out card content
        .to([".card-content", ".card-phone", ".card-badge"], { opacity: 0, duration: 0.6 })
        // Show CTA
        .to(".hero-cta", { opacity: 1, duration: 0.8 })
        // Hold CTA
        .to({}, { duration: 0.5 })
        // Slide card up and out
        .to(".hero-card", { y: "-110vh", duration: 1.2, ease: "power2.in" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-white touch-pan-y", className)}
      {...props}
    >
      {/* Simple grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
      />

      {/* Hero text */}
      <div className="hero-tagline-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full px-4">
        <h1 className="hero-tagline text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 mb-2">
          {tagline1}
        </h1>
        <h1 className="hero-tagline text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-neutral-600">
          {tagline2}
        </h1>
      </div>

      {/* CTA (behind card, shows when card leaves) */}
      <div className="hero-cta absolute z-10 flex flex-col items-center justify-center text-center w-full px-4 pointer-events-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-neutral-900">
          {ctaHeading}
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Appointment
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=16.573863,82.003086"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* The card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="hero-card pointer-events-auto w-[92vw] md:w-[85vw] h-[88vh] md:h-[85vh] rounded-[32px] md:rounded-[40px] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #162C6D 0%, #0A101D 100%)",
            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)",
          }}
        >
          {/* Card inner layout */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">

            {/* Brand name */}
            <div className="card-content order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter"
                style={{
                  background: "linear-gradient(180deg, #fff 0%, #a1a1aa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {brandName}
              </h2>
            </div>

            {/* Phone mockup */}
            <div className="card-phone order-2 lg:order-2 relative w-full h-[350px] lg:h-[550px] flex items-center justify-center z-10">
              <div className="relative transform scale-[0.6] md:scale-75 lg:scale-90">
                {/* iPhone shell */}
                <div className="relative w-[280px] h-[580px] rounded-[3rem] bg-[#111] flex flex-col"
                  style={{
                    boxShadow: "inset 0 0 0 2px #52525b, inset 0 0 0 7px #000, 0 30px 60px -10px rgba(0,0,0,0.7)",
                  }}
                >
                  {/* Screen */}
                  <div className="absolute inset-[7px] bg-[#050914] rounded-[2.5rem] overflow-hidden text-white z-10">
                    {/* Notch */}
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    </div>

                    {/* App content */}
                    <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                      <div className="flex justify-between items-center mb-8">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-1">Status</span>
                          <span className="text-xl font-bold tracking-tight text-white">Operational</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/5 text-neutral-200 flex items-center justify-center font-bold text-sm border border-white/10">SH</div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 opacity-80">Quick Facts</h4>
                        <div className="space-y-3">
                          {QUICK_FACTS.map((fact, idx) => (
                            <div key={idx} className="rounded-2xl p-3 flex items-center bg-white/5 border border-white/5">
                              <div className={cn("w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mr-3 border border-white/10", fact.color)}>
                                <fact.icon className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[11px] font-bold text-white tracking-tight">{fact.title}</span>
                                <span className="text-[9px] text-neutral-400 font-medium">{fact.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="card-badge absolute top-6 lg:top-12 left-[-15px] lg:left-[-80px] rounded-xl lg:rounded-2xl p-3 lg:p-4 flex items-center gap-3 z-30 bg-white/5 border border-white/10"
                  style={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)" }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                    <Hospital className="text-blue-400 w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">24/7 ER</p>
                    <p className="text-blue-200/50 text-[10px] lg:text-xs font-medium">Ready for emergencies</p>
                  </div>
                </div>

                <div className="card-badge absolute bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] rounded-xl lg:rounded-2xl p-3 lg:p-4 flex items-center gap-3 z-30 bg-white/5 border border-white/10"
                  style={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)" }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-400/30">
                    <Star className="text-orange-400 w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">Expert Team</p>
                    <p className="text-orange-200/50 text-[10px] lg:text-xs font-medium">Top Specialists</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description text */}
            <div className="card-content order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 lg:mb-5 tracking-tight">
                Transforming Medical Care.
              </h3>
              <p className="text-blue-100/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                <span className="text-white font-semibold">Srinidhi Hospitals</span> combines compassionate care with advanced medical technology to provide comprehensive healthcare in Amalapuram.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
