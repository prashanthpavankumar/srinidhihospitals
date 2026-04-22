"use client";

import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

const WHY_CHOOSE_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Experienced Professionals",
    description: "A team of skilled doctors, dedicated nurses, and trained healthcare professionals working round the clock.",
    meta: "Expert Care",
    imageSrc: "/images/specialists.jpg",
  },
  {
    id: 2,
    title: "Advanced Diagnostics",
    description: "Laboratory, Digital X-Ray, Ultrasound, and CT Scan facilities for accurate and timely diagnosis.",
    meta: "Technology",
    imageSrc: "/images/facilities.jpg",
  },
  {
    id: 3,
    title: "24/7 Emergency & ICU",
    description: "Round-the-clock emergency services and fully equipped ICU with experienced critical care specialists.",
    meta: "Always Ready",
    imageSrc: "/images/trust.jpg",
  },
  {
    id: 4,
    title: "Patient-Friendly Environment",
    description: "Clean, comfortable, and healing-focused wards with attentive nursing care for stress-free recovery.",
    meta: "Comfort",
    imageSrc: "/images/comfort.jpg",
  },
  {
    id: 5,
    title: "Affordable & Transparent",
    description: "Quality healthcare with transparent pricing and honest medical practices you can trust.",
    meta: "Trust",
    imageSrc: "/images/outreach.jpg",
  },
  {
    id: 6,
    title: "Comprehensive Services",
    description: "From routine OPD consultations to emergency care, health check-ups, and ambulance services under one roof.",
    meta: "Complete Care",
    imageSrc: "/images/compassion.jpg",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase underline-offset-8 underline">Why Choose Us</span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 tracking-tight leading-tight">
            Why Srinidhi <br/> <span className="text-primary italic font-serif">Hospitals?</span>
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed italic">
            Building a healthier community with reliable and comprehensive healthcare services you can trust.
          </p>
        </div>
      </div>

      <FocusRail 
        items={WHY_CHOOSE_ITEMS}
        autoPlay={true}
        loop={true}
        interval={6000}
      />
    </section>
  );
}
