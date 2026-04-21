"use client";

import * as React from "react";
import { type LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor?: string;
  variant?: 'blue' | 'white' | 'emerald';
}

const variantStyles = {
  blue: {
    base: "from-blue-600 via-blue-700 to-indigo-900",
    text: "text-white",
    desc: "text-blue-100/70",
    meta: "text-blue-200/50",
    iconBg: "bg-white",
    circle: "bg-white/10"
  },
  white: {
    base: "from-white via-white to-blue-50/30",
    text: "text-neutral-900",
    desc: "text-neutral-500",
    meta: "text-primary/40",
    iconBg: "bg-primary/5",
    circle: "bg-primary/10"
  },
  emerald: {
    base: "from-emerald-600 via-emerald-700 to-teal-900",
    text: "text-white",
    desc: "text-emerald-100/70",
    meta: "text-emerald-200/50",
    iconBg: "bg-white",
    circle: "bg-white/10"
  }
};

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title, description, icon: Icon, accentColor = "var(--primary)", variant = 'white', ...props }, ref) => {
    const styles = variantStyles[variant] || variantStyles.white;
    const isLight = variant === 'white';

    return (
      <div
        ref={ref}
        className={cn("group h-[340px] w-full max-w-[340px] [perspective:1400px] cursor-pointer mx-auto", className)}
        {...props}
      >
        <div className={cn(
            "relative h-full rounded-[45px] bg-gradient-to-br shadow-2xl transition-all duration-700 ease-in-out [transform-style:preserve-3d]",
            "border border-white/40",
            styles.base,
            isLight ? "group-hover:[box-shadow:rgba(0,0,0,0.1)_20px_40px_30px_-30px,rgba(0,0,0,0.05)_0px_20px_20px_0px]" : "group-hover:[box-shadow:rgba(0,0,0,0.4)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px]",
            "group-hover:[transform:rotate3d(1,1,0,15deg)]" // reduced tilt for readability
        )}>
          
          {/* Glass Layer */}
          <div className={cn(
            "absolute inset-3 rounded-[40px] border-b border-l [transform-style:preserve-3d] [transform:translate3d(0,0,25px)] transition-all duration-500",
            isLight ? "border-primary/10 bg-gradient-to-b from-primary/5 to-transparent backdrop-blur-[4px] group-hover:border-primary/20" : "border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[2px] group-hover:border-white/20"
          )}></div>
          
          {/* Content Layer */}
          <div className="absolute inset-0 [transform:translate3d(0,0,50px)] flex flex-col justify-end p-8 pb-12">
            <div className="space-y-4">
              <span className={cn("block text-2xl font-black leading-tight tracking-tight", styles.text)}>
                {title}
              </span>
              <p className={cn("block text-[14px] font-medium leading-relaxed italic transition-colors", styles.desc)}>
                {description}
              </p>
            </div>
            
            <div className="mt-10 flex items-center justify-between pointer-events-none">
              <div className="flex gap-2.5">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={cn("w-1.5 h-1.5 rounded-full transition-all duration-500", styles.circle)}
                    style={{ transitionDelay: `${400 + i * 200}ms` }}
                  />
                ))}
              </div>
              <div className={cn("flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] transition-colors", styles.meta, "group-hover:text-primary")}>
                <span>CORE FACILITY</span>
                <ChevronRight className="w-3 h-3 translate-y-[0.5px]" />
              </div>
            </div>
          </div>

          {/* Floating Decor Circles */}
          <div className="absolute top-0 right-0 [transform-style:preserve-3d] pointer-events-none">
            {[
              { size: "160px", pos: "12px", z: "20px", delay: "0s" },
              { size: "130px", pos: "18px", z: "40px", delay: "0.2s" },
              { size: "100px", pos: "24px", z: "60px", delay: "0.4s" },
            ].map((circle, index) => (
              <div
                key={index}
                className={cn("absolute aspect-square rounded-full border transition-all duration-700 ease-in-out", styles.circle, isLight ? "border-primary/5" : "border-white/5")}
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              ></div>
            ))}
            
            {/* Floating Icon Circle */}
            <div
              className={cn(
                "absolute grid aspect-square w-16 place-content-center rounded-2xl shadow-xl transition-all duration-700 ease-in-out [transform:translate3d(0,0,85px)] group-hover:[transform:translate3d(0,0,115px)]",
                styles.iconBg,
                isLight ? "border border-primary/10 shadow-primary/5" : "shadow-black/20"
              )}
              style={{ top: "45px", right: "45px" }}
            >
              <Icon 
                className="w-7 h-7" 
                style={{ color: isLight ? "var(--primary)" : "inherit" }} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
