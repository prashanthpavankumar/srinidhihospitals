import { Target, Eye, ShieldCheck, Heart, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-bold tracking-widest text-sm uppercase">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
            Compassionate Care, <br/>Advanced Medicine.
          </h2>
          <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
            <p>
              Srinidhi Hospitals, Amalapuram is a trusted name in healthcare, committed to delivering high-quality, compassionate, and patient-centered medical services. Established with a vision to provide advanced healthcare facilities to the people of Amalapuram and surrounding regions, we combine modern medical technology with experienced clinical expertise.
            </p>
            <p>
              We are equipped with state-of-the-art infrastructure, advanced diagnostic facilities, and well-maintained inpatient and outpatient services. From routine consultations to emergency care, our hospital is designed to meet a wide range of medical needs under one roof.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-6 p-6 bg-neutral-50 rounded-3xl border border-neutral-100">
             <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-primary">
                <ShieldCheck size={32} />
             </div>
             <div>
                <h4 className="font-bold text-neutral-900">Patient First, Always</h4>
                <p className="text-sm text-neutral-500">Every decision centered around patient care, safety, and trust.</p>
             </div>
          </div>
        </div>

        {/* Right Side: Mission/Vision/Values */}
        <div className="grid gap-6">
          <div className="p-10 bg-primary text-white rounded-[2.5rem] shadow-2xl shadow-primary/20 relative overflow-hidden">
            <Target className="mb-6 opacity-80" size={48} />
            <h3 className="text-2xl font-bold mb-4 italic">Our Mission</h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              To provide accessible, affordable, and quality healthcare services with compassion and integrity, ensuring the well-being of every patient we serve.
            </p>
          </div>

          <div className="p-10 bg-neutral-900 text-white rounded-[2.5rem] shadow-2xl shadow-black/10 relative overflow-hidden">
            <Eye className="mb-6 opacity-80" size={48} />
            <h3 className="text-2xl font-bold mb-4 italic">Our Vision</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              To be a leading healthcare institution in the region, recognized for excellence in medical care, patient satisfaction, and continuous innovation.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Heart, label: "Compassion", desc: "Empathy & respect" },
              { icon: ShieldCheck, label: "Integrity", desc: "Ethical practices" },
              { icon: Lightbulb, label: "Innovation", desc: "Modern techniques" },
              { icon: Target, label: "Quality", desc: "Clinical excellence" },
            ].map((v, i) => (
              <div key={i} className="p-5 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center gap-4">
                <v.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <span className="font-bold text-neutral-900 text-sm block">{v.label}</span>
                  <span className="text-neutral-500 text-xs">{v.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
