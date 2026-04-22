"use client";

import { ShieldCheck, Microscope, FlaskConical, Pill, Stethoscope, Scissors } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const FACILITIES = [
  {
    title: "Intensive Care Unit (ICU)",
    desc: "Fully equipped ICU with modern monitoring systems and experienced critical care specialists.",
    icon: ShieldCheck,
  },
  {
    title: "OPD & IPD Services",
    desc: "Expert consultation across multiple specialties with minimal waiting time and comfortable wards.",
    icon: Stethoscope,
  },
  {
    title: "Modular Operation Theatres",
    desc: "State-of-the-art surgical suites with advanced technology and sterile environments.",
    icon: Scissors,
  },
  {
    title: "Diagnostic Services",
    desc: "Laboratory, Digital X-Ray, Ultrasound Scanning, and CT Scan for accurate diagnosis.",
    icon: Microscope,
  },
  {
    title: "Pathology Lab",
    desc: "Routine and emergency lab panels with quick turnaround times and precise results.",
    icon: FlaskConical,
  },
  {
    title: "24/7 Pharmacy",
    desc: "In-house pharmacy providing genuine medicines round the clock for patient convenience.",
    icon: Pill,
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-32 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase italic">Infrastructure</span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 tracking-tight leading-tight">
            Advanced Medical <br/> <span className="text-primary italic font-serif">Infrastructure.</span>
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed italic">
            Srinidhi Hospitals combines high-precision technology with premium medical care environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FACILITIES.map((fac, i) => (
            <GlassCard 
              key={i}
              title={fac.title}
              description={fac.desc}
              icon={fac.icon}
              variant="white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
