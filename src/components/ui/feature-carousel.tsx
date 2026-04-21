"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
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
    id: "emergency",
    label: "Emergency & Trauma",
    icon: ZapIcon,
    image: "/images/emergency.jpg",
    description: "24/7 world-class emergency response and critical care management.",
  },
  {
    id: "medicine",
    label: "General Medicine",
    icon: StethoscopeIcon,
    image: "/images/medicine.jpg",
    description: "Comprehensive healthcare and diagnostics for your entire family.",
  },
  {
    id: "orthopedics",
    label: "Orthopedics",
    icon: BoneIcon,
    image: "/images/orthopedics.jpg",
    description: "Expert bone and joint care with advanced surgical precision.",
  },
  {
    id: "cardiology",
    label: "Cardiology",
    icon: Medicine01Icon,
    image: "/images/cardiology.jpg",
    description: "Dedicated cardiac specialists monitoring your heart's health.",
  },
  {
    id: "neurology",
    label: "Neurology",
    icon: BrainIcon,
    image: "/images/neurology.jpg",
    description: "Advanced neurological treatments for brain and nervous system care.",
  },
  {
    id: "pediatrics",
    label: "Pediatrics",
    icon: Baby01Icon,
    image: "/images/pediatrics.jpg",
    description: "Compassionate healthcare specialized for your little ones.",
  },
  {
    id: "diagnostics",
    label: "Lab / Diagnostics",
    icon: ShieldIcon,
    image: "/images/diagnostics.jpg",
    description: "Precise diagnostic testing with state-of-the-art laboratory tech.",
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    icon: PillIcon,
    image: "/images/pharmacy.jpg",
    description: "In-house pharmacy for immediate access to high-quality medicines.",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

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
          Experience world-class healthcare with our range of specialized medical services tailored for your well-being.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-border/40 shadow-2xl bg-white mx-4 lg:mx-0 touch-pan-y">
        <div className="w-full lg:w-[40%] min-h-[400px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-[#162C6D] ">
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
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left group border",
                      isActive
                        ? "bg-white text-[#162C6D] border-white z-10 shadow-xl"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-[#162C6D]" : "text-white/40"
                      )}
                    >
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={18}
                        strokeWidth={2}
                      />
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
                    x: isActive ? 0 : isPrev ? -120 : isNext ? 120 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -5 : isNext ? 5 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-4 md:border-[12px] border-white bg-white origin-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-1000",
                      isActive
                        ? "grayscale-0 scale-105"
                        : "grayscale brightness-75"
                    )}
                  />

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.2 }}
                        className="absolute inset-x-0 bottom-0 p-8 pb-12 pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-white text-[#162C6D] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] w-fit shadow-lg mb-4 border border-white/20">
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

                  <div
                    className={cn(
                      "absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_15px_red] animate-pulse" />
                    <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                      Live Support
                    </span>
                  </div>
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
