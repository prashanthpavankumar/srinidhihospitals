"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  StethoscopeIcon,
  BoneIcon,
  Medicine01Icon,
  BrainIcon,
  Baby01Icon,
  ShieldIcon,
  PillIcon,
  ZapIcon
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

const FEATURES = [
  {
    id: "general-medicine",
    label: "General Medicine",
    icon: StethoscopeIcon,
    image: "/images/medicine.jpg",
    description: "Diagnosis and treatment of acute and chronic illnesses with a focus on preventive healthcare.",
  },
  {
    id: "general-surgery",
    label: "General Surgery",
    icon: ZapIcon,
    image: "/images/emergency.jpg",
    description: "Advanced surgical care with modern techniques ensuring safe procedures and faster recovery.",
  },
  {
    id: "orthopedics",
    label: "Orthopedics",
    icon: BoneIcon,
    image: "/images/orthopedics.jpg",
    description: "Treatment for bone, joint, and musculoskeletal conditions including fractures and arthritis.",
  },
  {
    id: "neurosurgery",
    label: "Neurosurgery",
    icon: BrainIcon,
    image: "/images/neurology.jpg",
    description: "Advanced neurosurgical treatments for brain, spine, and nervous system conditions.",
  },
  {
    id: "gastroenterology",
    label: "Gastroenterology",
    icon: Medicine01Icon,
    image: "/images/cardiology.jpg",
    description: "Specialized diagnosis and treatment of digestive system disorders and conditions.",
  },
  {
    id: "obgyn",
    label: "OBG & Gynaecology",
    icon: Baby01Icon,
    image: "/images/pediatrics.jpg",
    description: "Comprehensive obstetric, gynaecological, and infertility specialist services.",
  },
  {
    id: "pulmonology",
    label: "Pulmonology",
    icon: ShieldIcon,
    image: "/images/diagnostics.jpg",
    description: "Expert respiratory care for asthma, COPD, and other lung conditions.",
  },
  {
    id: "paediatrics",
    label: "Paediatrics",
    icon: PillIcon,
    image: "/images/pharmacy.jpg",
    description: "Compassionate healthcare specialized for infants, children, and adolescents.",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Smooth tween — no spring physics overhead
const CHIP_TRANSITION = { type: "tween" as const, duration: 0.4, ease: "easeInOut" as const };
const CARD_TRANSITION = { type: "tween" as const, duration: 0.5, ease: "easeInOut" as const };

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div id="services" className="w-full max-w-7xl mx-auto py-24 md:p-8">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-sans">
          Our Specialities
        </h2>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto italic font-light">
          Comprehensive range of healthcare services designed to meet the medical needs of patients of all age groups.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-border/40 shadow-2xl bg-white mx-4 lg:mx-0 touch-pan-y">
        {/* Left panel: animated chip list */}
        <div className="w-full lg:w-[40%] min-h-[400px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-[#162C6D]">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#162C6D] via-[#162C6D]/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#162C6D] via-[#162C6D]/80 to-transparent z-40" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content", willChange: "transform, opacity" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={CHIP_TRANSITION}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full text-left group border transition-colors duration-300",
                      isActive
                        ? "bg-white text-[#162C6D] border-white z-10 shadow-xl"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                    )}
                  >
                    <div className={cn("flex items-center justify-center", isActive ? "text-[#162C6D]" : "text-white/40")}>
                      <HugeiconsIcon icon={feature.icon} size={18} strokeWidth={2} />
                    </div>
                    <span className="font-bold text-sm md:text-[15px] tracking-tight whitespace-nowrap uppercase">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right panel: animated image cards */}
        <div className="flex-1 min-h-[500px] lg:h-full relative bg-neutral-50 flex items-center justify-center py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-border/20">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -5 : isNext ? 5 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                  }}
                  transition={CARD_TRANSITION}
                  style={{ willChange: "transform, opacity", pointerEvents: isActive ? "auto" : "none" }}
                  className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-4 md:border-[12px] border-white bg-white origin-center shadow-2xl"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive ? "grayscale-0 scale-105" : "grayscale brightness-75"
                    )}
                    loading="lazy"
                  />

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="absolute inset-x-0 bottom-0 p-8 pb-12 pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-white text-[#162C6D] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] w-fit shadow-lg mb-4">
                          Speciality {index + 1}
                        </div>
                        <h3 className="text-white font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">
                          {feature.label}
                        </h3>
                        <p className="text-white/80 font-normal text-sm md:text-base leading-relaxed tracking-wide italic">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <div className="absolute top-8 left-8 flex items-center gap-3 bg-black/50 px-4 py-2 rounded-full border border-white/20">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                        Available
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
