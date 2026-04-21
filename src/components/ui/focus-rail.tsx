"use client";

import * as React from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowCard } from "./spotlight-card";

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

const BASE_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
} as const;


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
  const lastWheelTime = React.useRef<number>(0);

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

  const onWheel = React.useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime.current < 400) return;

      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;

      if (Math.abs(delta) > 20) {
        if (delta > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        lastWheelTime.current = now;
      }
    },
    [handleNext, handlePrev]
  );

  React.useEffect(() => {
    if (!autoPlay || isHovering) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const onDragEnd = (_: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
  };

  const visibleIndices = [-2, -1, 0, 1, 2];

  return (
    <div
      className={cn(
        "group relative flex h-[700px] w-full flex-col overflow-hidden bg-white text-neutral-900 outline-none select-none overflow-x-hidden touch-pan-y",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onWheel={onWheel}
    >
      <div className="absolute inset-x-0 bottom-0 top-1/4 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={`bg-${activeItem.id}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={activeItem.imageSrc}
              alt=""
              className="h-full w-full object-cover blur-[100px] saturate-150"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8">
        <motion.div
          className="relative mx-auto flex h-[400px] w-full max-w-6xl items-center justify-center perspective-[1200px]"
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset;
            const index = wrap(0, count, absIndex);
            const item = items[index];

            if (!loop && (absIndex < 0 || absIndex >= count)) return null;

            const isCenter = offset === 0;
            const dist = Math.abs(offset);

            const xOffset = offset * (isCenter ? 360 : 320);
            const zOffset = -dist * 250;
            const scale = isCenter ? 1.1 : 0.8;
            const rotateY = offset * -35;

            const opacity = isCenter ? 1 : Math.max(0.1, 1 - dist * 0.45);
            const brightness = isCenter ? 1.1 : 0.6;

            return (
              <motion.div
                key={absIndex}
                className={cn(
                  "absolute h-[380px] w-[280px] md:w-[320px] rounded-3xl overflow-visible",
                  isCenter ? "z-30" : "z-10"
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  filter: `brightness(${brightness})`,
                }}
                transition={BASE_SPRING}
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={() => {
                  if (offset !== 0) setActive((p) => p + offset);
                }}
              >
                <GlowCard 
                   glowColor={item.glowColor || 'blue'}
                   customSize 
                   className="w-full h-full border-white/50 bg-white/40 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]"
                >
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="h-full w-full object-cover pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-black/5 pointer-events-none mix-blend-multiply" />
                    </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mx-auto mt-16 flex w-full max-w-4xl flex-col items-center justify-between gap-10 md:flex-row pointer-events-auto">
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left min-h-[140px] justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="space-y-4"
              >
                {activeItem.meta && (
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                    {activeItem.meta}
                  </span>
                )}
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-neutral-900 italic font-serif">
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

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 rounded-2xl bg-white/50 p-2 ring-1 ring-neutral-200/50 backdrop-blur-xl shadow-xl">
              <button
                onClick={handlePrev}
                className="rounded-xl p-4 text-neutral-400 transition hover:bg-primary hover:text-white active:scale-95 shadow-sm"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex flex-col items-center px-4">
                 <span className="text-xs font-black tracking-widest text-primary mb-1">STEP</span>
                 <span className="text-xl font-bold text-neutral-900">
                    {activeIndex + 1} <span className="text-neutral-300 font-light mx-1">/</span> {count}
                 </span>
              </div>
              <button
                onClick={handleNext}
                className="rounded-xl p-4 text-neutral-400 transition hover:bg-primary hover:text-white active:scale-95 shadow-sm"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
