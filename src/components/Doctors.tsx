"use client";

import { User, Calendar, ExternalLink } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const DOCTORS = [
  { name: "Dr. Mogali Kasi Viswanatham", qual: "MS.Ortho", specialty: "Orthopedics", type: "Full Time", glow: "blue" as const },
  { name: "Dr. Kommuri Govindu Babu", qual: "DNB General Medicine", specialty: "General Medicine", type: "Full Time", glow: "purple" as const },
  { name: "Dr. Karri Divya", qual: "MS OBG", specialty: "Obstetrics & Gynecology", type: "Full Time", glow: "green" as const },
  { name: "Dr. Vatturi Satish Kummar", qual: "DNB Anaesthesia", specialty: "Anesthesia", type: "Full Time", glow: "blue" as const },
  { name: "Dr. Unnagiri Adhinarayana", qual: "MD-Cardiology", specialty: "Cardiology", type: "Mon & Wed", glow: "red" as const },
  { name: "Dr. T. Venkateswara Rao", qual: "MD-Cardiology", specialty: "Cardiology", type: "Tue & Thu", glow: "red" as const },
  { name: "Dr. Adabala Gopi Krishna", qual: "MD DM", specialty: "Neurology", type: "Thu", glow: "purple" as const },
  { name: "Dr. A. Aditya Satya Prasanna", qual: "MD DM", specialty: "Gastroenterology", type: "Fri", glow: "green" as const },
  { name: "Dr. Penmatcha Tejo Krishna", qual: "MD DM", specialty: "Nephrology", type: "Tue", glow: "blue" as const },
  { name: "Dr. Lingolu Chandu", qual: "MD MCH", specialty: "Neuro Surgery", type: "Wed", glow: "purple" as const },
  { name: "Dr. Battula Venkatesh", qual: "MBBS MS", specialty: "ENT", type: "Wed", glow: "orange" as const },
  { name: "Dr. Alice Y Elenor", qual: "MD DVL", specialty: "Cosmetic Dermatology", type: "Fri", glow: "purple" as const },
  { name: "Dr. Ganta Praveen Nath", qual: "MBBS DNB", specialty: "Pulmonology", type: "Visiting", glow: "blue" as const },
  { name: "Dr. T. Abilash", qual: "MS", specialty: "General Surgery", type: "Visiting", glow: "green" as const },
  { name: "Dr. P.S. Subash", qual: "MS MCH", specialty: "Plastic Surgery", type: "Visiting", glow: "orange" as const },
  { name: "Dr. Saladi Naga Nithin", qual: "MS", specialty: "General Surgery", type: "Visiting", glow: "green" as const },
  { name: "Dr. A.N. Murthy", qual: "BDS MDS", specialty: "Facial Surgery", type: "Visiting", glow: "purple" as const },
  { name: "Dr. Pulla Prasad", qual: "MS MCH", specialty: "Urology", type: "Visiting", glow: "blue" as const },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-32 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase italic">Our Medical Board</span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 tracking-tight leading-tight">
            Meet Our Expert <br/> <span className="text-primary italic font-serif">Specialists.</span>
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed italic">
            A team of world-class professionals dedicated to clinical excellence and compassionate healing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DOCTORS.map((doc, i) => (
            <GlowCard 
              key={i}
              glowColor={doc.glow}
              customSize
              className="w-full min-h-[380px] bg-white/40 border-white/50 group"
            >
              <div className="flex flex-col h-full justify-between py-2">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto border border-neutral-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden group-hover:scale-110 transition-all duration-500">
                     <img 
                       src={`/images/doctor_${i + 1}.jpg`} 
                       alt={doc.name} 
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         // Fallback to Icon if image doesn't exist
                         e.currentTarget.style.display = 'none'
                         e.currentTarget.nextElementSibling?.classList.remove('hidden')
                       }}
                     />
                     <div className="hidden">
                        <User size={40} className="text-neutral-300 group-hover:text-primary transition-colors" />
                     </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] px-3 py-1 rounded-lg font-bold uppercase tracking-wider shadow-lg transform rotate-3">
                     {doc.type}
                  </div>
                </div>
                
                <div className="text-center mb-6 space-y-2">
                  <h3 className="font-bold text-neutral-900 text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                    {doc.name}
                  </h3>
                  <div className="flex flex-col items-center">
                    <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-2">
                      {doc.specialty}
                    </span>
                    <p className="text-neutral-400 text-xs italic font-medium">
                      {doc.qual}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-100/50">
                   <div className="flex items-center gap-1.5 text-neutral-400">
                      <Calendar size={12} className="text-primary/50" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{doc.type.split(' ')[0]}</span>
                   </div>
                   <a href="#contact" className="group/btn flex items-center gap-1 text-primary font-black text-[10px] uppercase tracking-widest hover:gap-2 transition-all">
                      Consult <ExternalLink size={10} className="group-hover/btn:rotate-45 transition-transform" />
                   </a>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
