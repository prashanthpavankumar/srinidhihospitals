"use client";

import { User, Calendar, ExternalLink } from "lucide-react";

const DOCTORS = [
  { name: "Dr. Sama Srikanth", qual: "Pulmonologist", specialty: "Pulmonology", type: "Specialist", color: "bg-blue-500" },
  { name: "Dr. B. Rakesh", qual: "General & Laparoscopic Surgeon", specialty: "General Surgery", type: "Surgeon", color: "bg-emerald-500" },
  { name: "Dr. U. Deepthi", qual: "Gynaecologist & Infertility Specialist", specialty: "Obstetrics & Gynaecology", type: "Specialist", color: "bg-pink-500" },
  { name: "Dr. B. Pallavi", qual: "Paediatrician", specialty: "Paediatrics", type: "Specialist", color: "bg-amber-500" },
  { name: "Dr. Sasank Akurati", qual: "Neuro Surgeon", specialty: "Neurosurgery", type: "Surgeon", color: "bg-purple-500" },
  { name: "Dr. P. Anasuya", qual: "General Medicine", specialty: "General Medicine", type: "Physician", color: "bg-blue-500" },
  { name: "Dr. B. Vinay", qual: "Gastroenterologist", specialty: "Gastroenterology", type: "Specialist", color: "bg-emerald-500" },
  { name: "Dr. K.V.N. Gowtham Varma", qual: "Orthopaedician", specialty: "Orthopedics", type: "Specialist", color: "bg-orange-500" },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase italic">Our Medical Team</span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 tracking-tight leading-tight">
            Meet Our Expert <br/> <span className="text-primary italic font-serif">Specialists.</span>
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed italic">
            Experienced and qualified medical professionals dedicated to your health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DOCTORS.map((doc, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 touch-pan-y"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto border border-neutral-100 overflow-hidden">
                     <img 
                       src={`/images/doctor_${i + 1}.jpg`} 
                       alt={doc.name} 
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.nextElementSibling?.classList.remove('hidden');
                       }}
                     />
                     <div className="hidden">
                        <User size={40} className="text-neutral-300" />
                     </div>
                  </div>
                  <div className={`absolute -top-2 -right-2 ${doc.color} text-white text-[10px] px-3 py-1 rounded-lg font-bold uppercase tracking-wider shadow-lg`}>
                     {doc.type}
                  </div>
                </div>
                
                <div className="text-center mb-6 space-y-2">
                  <h3 className="font-bold text-neutral-900 text-lg leading-tight">
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
                      <span className="text-[10px] font-bold uppercase tracking-widest">{doc.type}</span>
                   </div>
                   <a href="#contact" className="flex items-center gap-1 text-primary font-black text-[10px] uppercase tracking-widest hover:gap-2 transition-all">
                      Consult <ExternalLink size={10} />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
