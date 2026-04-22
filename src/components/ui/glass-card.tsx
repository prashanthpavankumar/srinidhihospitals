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
  ({ className, title, description, icon: Icon, variant = 'white', ...props }, ref) => {
    const styles = variantStyles[variant] || variantStyles.white;
    const isLight = variant === 'white';

    return (
      <div
        ref={ref}
        className={cn("group h-[340px] w-full max-w-[340px] [perspective:1200px] cursor-pointer mx-auto touch-pan-y", className)}
        {...props}
      >
        {/* 3D tilt on hover — desktop only via @media(hover:hover) handled by group-hover + md: */}
        <div className={cn(
            "relative h-full rounded-[45px] bg-gradient-to-br shadow-2xl",
            "border border-white/40",
            "transition-transform duration-500 ease-out",
            styles.base,
            isLight 
              ? "md:group-hover:shadow-[rgba(0,0,0,0.1)_20px_40px_30px_-30px]" 
              : "md:group-hover:shadow-[rgba(0,0,0,0.4)_30px_50px_25px_-40px]",
            "md:group-hover:[transform:rotate3d(1,1,0,12deg)]"
        )}>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 pb-12 z-10">
            <div className="space-y-4">
              <span className={cn("block text-2xl font-black leading-tight tracking-tight", styles.text)}>
                {title}
              </span>
              <p className={cn("block text-[14px] font-medium leading-relaxed italic", styles.desc)}>
                {description}
              </p>
            </div>
            
            <div className="mt-10 flex items-center justify-between pointer-events-none">
              <div className="flex gap-2.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={cn("w-1.5 h-1.5 rounded-full", styles.circle)} />
                ))}
              </div>
              <div className={cn("flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-200", styles.meta, "group-hover:text-primary")}>
                <span>CORE FACILITY</span>
                <ChevronRight className="w-3 h-3 translate-y-[0.5px]" />
              </div>
            </div>
          </div>

          {/* Icon */}
          <div className="absolute top-0 right-0 pointer-events-none z-20">
            <div
              className={cn(
                "absolute grid aspect-square w-16 place-content-center rounded-2xl shadow-xl transition-transform duration-500",
                styles.iconBg,
                isLight ? "border border-primary/10 shadow-primary/5" : "shadow-black/20",
                "md:group-hover:translate-y-[-4px]"
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
