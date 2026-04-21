import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Doctors", href: "#doctors" },
  { name: "Facilities", href: "#facilities" },
  { name: "Emergency", href: "#emergency" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-neutral-200 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Srinidhi Hospitals"
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback if logo.png is missing or not yet uploaded
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden flex-col md:flex">
            <span className={cn("font-bold text-lg leading-tight tracking-tight", isScrolled ? "text-neutral-900" : "text-white md:text-neutral-900")}>
              SRINIDHI
            </span>
            <span className={cn("text-[10px] font-bold tracking-[0.2em] uppercase opacity-70", isScrolled ? "text-neutral-500" : "text-white md:text-neutral-500")}>
              Hospitals
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-neutral-600" : "text-white/80 md:text-neutral-600"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+918341438887"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-neutral-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu className={isScrolled ? "text-neutral-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 p-6 flex flex-col gap-4 shadow-xl transition-all duration-300 origin-top",
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-neutral-700 py-2 border-b border-neutral-50 last:border-0"
          >
            {link.name}
          </a>
        ))}
        <a
          href="tel:+918341438887"
          className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold mt-2"
        >
          <Phone size={20} />
          Call Now
        </a>
      </div>
    </nav>
  );
}
