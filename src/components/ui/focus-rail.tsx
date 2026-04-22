"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
  meta?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
};

interface FocusRailProps {
  items: FocusRailItem[];
  initialIndex?: number;
  loop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

// Use tween instead of spring — smoother, less CPU since it doesn't need physics simulation
const CARD_TRANSITION = {
  type: "tween" as const,
  duration: 0.5,
  ease: "easeInOut" as const,
};

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = true,
  interval = 5000,
  className,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);

  const count = items.length;
  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];

  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  React.useEffect(() => {
    if (!autoPlay || isHovering) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // Only render 3 cards (center + neighbors) for performance
  const visibleOffsets = [-1, 0, 1];

  return (
    <div
      className={cn(
        "group relative flex h-[680px] w-full flex-col overflow-hidden bg-white text-neutral-900 outline-none select-none touch-pan-y",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-x-0 bottom-0 top-1/3 z-0 pointer-events-none bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8">
        {/* 3D Card rail — perspective on container, GPU transforms on cards */}
        <div className="relative mx-auto flex h-[400px] w-full max-w-5xl items-center justify-center" style={{ perspective: "1000px" }}>
          {visibleOffsets.map((offset) => {
            const absIndex = active + offset;
            const index = wrap(0, count, absIndex);
            const item = items[index];

            if (!loop && (absIndex < 0 || absIndex >= count)) return null;

            const isCenter = offset === 0;

            return (
              <motion.div
                key={`rail-${offset}`}
                className={cn(
                  "absolute h-[370px] w-[260px] md:w-[300px] rounded-3xl overflow-hidden border-4 border-white bg-white shadow-2xl cursor-pointer",
                  isCenter ? "z-30" : "z-10"
                )}
                initial={false}
                animate={{
                  x: offset * 280,
                  scale: isCenter ? 1.05 : 0.82,
                  rotateY: offset * -25,
                  opacity: isCenter ? 1 : 0.5,
                }}
                transition={CARD_TRANSITION}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
                onClick={() => {
                  if (offset !== 0) setActive((p) => p + offset);
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover pointer-events-none"
                  loading="lazy"
                />
                {isCenter && (
                  <div className="absolute inset-x-0 bottom-0 p-6 pt-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1 block">{item.meta}</span>
                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Text + Controls */}
        <div className="mx-auto mt-12 flex w-full max-w-4xl flex-col items-center justify-between gap-8 md:flex-row pointer-events-auto">
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left min-h-[120px] justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-3"
              >
                {activeItem.meta && (
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                    {activeItem.meta}
                  </span>
                )}
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-neutral-900 italic font-serif">
                  {activeItem.title}
                </h2>
                {activeItem.description && (
                  <p className="max-w-md text-neutral-500 font-medium leading-relaxed italic">
                    {activeItem.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-2xl bg-white p-2 ring-1 ring-neutral-200/50 shadow-lg">
              <button
                onClick={handlePrev}
                className="rounded-xl p-3 text-neutral-400 transition-colors duration-200 hover:bg-primary hover:text-white active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex flex-col items-center px-3">
                <span className="text-xs font-black tracking-widest text-primary mb-0.5">STEP</span>
                <span className="text-lg font-bold text-neutral-900">
                  {activeIndex + 1} <span className="text-neutral-300 font-light mx-1">/</span> {count}
                </span>
              </div>
              <button
                onClick={handleNext}
                className="rounded-xl p-3 text-neutral-400 transition-colors duration-200 hover:bg-primary hover:text-white active:scale-95"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
