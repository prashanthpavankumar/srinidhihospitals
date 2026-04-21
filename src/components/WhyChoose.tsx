"use client";

import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

const WHY_CHOOSE_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Experienced Specialists",
    description: "Multi-disciplinary team for coordinated care with years of advanced medical practice and clinical excellence.",
    meta: "Clinical Expertise",
    imageSrc: "/images/specialists.jpg",
    glowColor: "blue",
  },
  {
    id: 2,
    title: "Advanced Facilities",
    description: "Imaging, diagnostics, ICU, and surgical theaters equipped with the latest world-class medical technologies.",
    meta: "Infrastructure",
    imageSrc: "/images/facilities.jpg",
    glowColor: "purple",
  },
  {
    id: 3,
    title: "Transparent & Ethical",
    description: "Patient-first approach with clear communication on treatment plans and upfront, balanced billing.",
    meta: "Trust & Ethics",
    imageSrc: "/images/trust.jpg",
    glowColor: "green",
  },
  {
    id: 4,
    title: "Patient Comfort First",
    description: "Clean, healing-focused wards and attentive nursing care designed to ensure a stress-free recovery journey.",
    meta: "Healing Environment",
    imageSrc: "/images/comfort.jpg",
    glowColor: "orange",
  },
  {
    id: 5,
    title: "Community Outreach",
    description: "Committed to local well-being through health camps, awareness sessions, and preventive screenings.",
    meta: "Social Mission",
    imageSrc: "/images/outreach.jpg",
    glowColor: "blue",
  },
  {
    id: 6,
    title: "Compassionate Care",
    description: "Every patient is treated with the warmth and precision you'd expect for your own family members.",
    meta: "Core Humanity",
    imageSrc: "/images/compassion.jpg",
    glowColor: "red",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase underline-offset-8 underline">The Srinidhi Edge</span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 tracking-tight leading-tight">
            Exceptional Healthcare <br/> <span className="text-primary italic font-serif">Redefined.</span>
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed italic">
            Discover why thousands of families trust Srinidhi Hospitals as their lifelong health partner.
          </p>
        </div>
      </div>

      {/* 3D FOCUS RAIL CAROUSEL */}
      <FocusRail 
        items={WHY_CHOOSE_ITEMS}
        autoPlay={true}
        loop={true}
        interval={6000}
      />
    </section>
  );
}
