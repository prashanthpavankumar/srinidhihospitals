import { Phone, Siren, Zap } from "lucide-react";

export function Emergency() {
  return (
    <section id="emergency" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#E53E3E] z-0" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full border border-white/20 mb-8 animate-pulse">
          <Siren size={20} className="text-white" />
          <span className="text-sm font-bold uppercase tracking-widest">Ambulance & Helpline Available 24/7</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
          24/7 Emergency Care
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Round-the-clock emergency services with trained medical staff, advanced life-saving equipment, and quick response for all critical conditions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <a 
            href="tel:08869251678" 
            className="flex items-center justify-center gap-3 bg-white text-[#E53E3E] px-10 py-5 rounded-3xl font-black text-xl shadow-2xl hover:-translate-y-0.5 transition-transform duration-200"
          >
            <Phone size={24} fill="currentColor" />
            08869-251678
          </a>
          <a 
            href="tel:+918341438887" 
            className="flex items-center justify-center gap-3 bg-red-900/50 border border-white/20 text-white px-10 py-5 rounded-3xl font-black text-xl hover:bg-red-900 transition-colors duration-200"
          >
            Request Ambulance
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Rapid Triage", desc: "Quick assessment and priority-based treatment for all emergencies." },
            { title: "Immediate Access", desc: "Direct access to ICU, imaging, labs, and operation theatres." },
            { title: "Ambulance Service", desc: "Quick and reliable ambulance support for emergency patient transport." },
          ].map((pill, i) => (
            <div key={i} className="p-8 bg-white/10 border border-white/10 rounded-[2rem] text-left">
              <Zap size={32} className="text-white/40 mb-4" />
              <h4 className="text-xl font-bold mb-2 italic">{pill.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{pill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
