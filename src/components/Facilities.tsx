"use client";

import { ShieldCheck, Microscope, FlaskConical, Pill, Stethoscope, Scissors } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const FACILITIES = [
  {
    title: "Modular Operating Theatres",
    desc: "State-of-the-art surgical suites with advanced technology and sterile environments.",
    icon: Scissors,
    glow: "blue"
  },
  {
    title: "ICU & Critical Care",
    desc: "Intensive care units with 24/7 monitoring and life support systems for critical patients.",
    icon: ShieldCheck,
    glow: "purple"
  },
  {
    title: "Digital X-ray, Ultrasound & ECG",
    desc: "Modern imaging technology for accurate and rapid diagnosis of various conditions.",
    icon: Microscope,
    glow: "green"
  },
  {
    title: "Full-fleged Pathology Lab",
    desc: "Routine and emergency lab panels with quick turnaround times and precise results.",
    icon: FlaskConical,
    glow: "red"
  },
  {
    title: "Pharmacy & Emergency Meds",
    desc: "On-site pharmacy with emergency medications available round the clock.",
    icon: Pill,
    glow: "orange"
  },
  {
    title: "Day-care Procedures",
    desc: "Minor surgeries and medical procedures with same-day discharge and recovery.",
    icon: Stethoscope,
    glow: "blue"
  }
];

export function Facilities() {
  return (
    <section id="facilities" className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase italic">Infrastructure 2.0</span>
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
