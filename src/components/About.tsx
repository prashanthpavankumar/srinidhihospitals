import { Target, Eye, ShieldCheck } from "lucide-react";

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
            Caring for you, every day with Excellence.
          </h2>
          <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
            <p>
              Srinidhi Hospitals is a patient-centric, multi-specialty hospital serving families across Pithapuram and the Kakinada region. Our goal is simple: deliver timely, accurate, and affordable care with empathy.
            </p>
            <p>
              From emergencies to routine checkups, we combine skilled specialists with modern infrastructure to ensure you receive the right treatment at the right time.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-6 p-6 bg-neutral-50 rounded-3xl border border-neutral-100">
             <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-primary">
                <ShieldCheck size={32} />
             </div>
             <div>
                <h4 className="font-bold text-neutral-900">Certified Excellence</h4>
                <p className="text-sm text-neutral-500">Quality care that's accessible and ethical.</p>
             </div>
          </div>
        </div>

        {/* Right Side: Mission/Vision Cards */}
        <div className="grid gap-6">
          <div className="premium-card p-10 bg-primary text-white rounded-[2.5rem] shadow-2xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <Target className="mb-6 opacity-80" size={48} />
            <h3 className="text-2xl font-bold mb-4 italic">Our Mission</h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Quality care that's accessible, ethical, and delivered with dignity. We strive to be the standard-setter in healthcare.
            </p>
          </div>

          <div className="premium-card p-10 bg-neutral-900 text-white rounded-[2.5rem] shadow-2xl shadow-black/10 relative overflow-hidden group">
            <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <Eye className="mb-6 opacity-80" size={48} />
            <h3 className="text-2xl font-bold mb-4 italic">Our Vision</h3>
            <p className="text-white/70 text-lg leading-relaxed">
              To be the most trusted healthcare destination in Pithapuram, recognized for medical excellence and compassionate patient experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
