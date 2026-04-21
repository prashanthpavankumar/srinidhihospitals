import { Phone, Siren, Zap } from "lucide-react";

export function Emergency() {
  return (
    <section id="emergency" className="relative py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[#E53E3E] z-0" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-900 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-pulse">
          <Siren size={20} className="text-white" />
          <span className="text-sm font-bold uppercase tracking-widest">Ambulance & Helpline Available 24/7</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
          24/7 Emergency Care
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Our Emergency Department operates round the clock with rapid triage, experienced clinicians, and immediate access to life-saving services.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <a 
            href="tel:08869251678" 
            className="flex items-center justify-center gap-3 bg-white text-[#E53E3E] px-10 py-5 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-transform"
          >
            <Phone size={24} fill="currentColor" />
            08869-251678
          </a>
          <a 
            href="tel:+918341438887" 
            className="flex items-center justify-center gap-3 bg-red-900/50 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-3xl font-black text-xl hover:bg-red-900 transition-colors"
          >
            Request Ambulance
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Rapid Triage", desc: "Quick assessment and priority-based treatment." },
            { title: "Immediate Access", desc: "Direct access to imaging, labs, and theatres." },
            { title: "24/7 Support", desc: "Round-the-clock emergency medical support." },
          ].map((pill, i) => (
            <div key={i} className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] text-left">
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
