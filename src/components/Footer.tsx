import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 pt-24 pb-12 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-primary" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative z-10">
        {/* Brand Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight tracking-tight uppercase">Srinidhi</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">Hospitals</span>
            </div>
          </div>
          <p className="text-white/50 leading-relaxed italic text-sm">
            Compassionate healthcare in Amalapuram. <br /> Trusted multi-specialty hospital serving the community with excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-colors hover:scale-110 duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-8 italic text-[#0077B6]">Quick Links</h4>
          <ul className="space-y-4">
            {["About Us", "Our Services", "Expert Doctors", "Facilities", "Emergency Care"].map((item, i) => (
              <li key={i}>
                <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <h4 className="text-lg font-bold mb-8 italic text-[#0077B6]">Specialties</h4>
          <ul className="space-y-4">
            {["General Medicine", "General Surgery", "Orthopedics", "Neurosurgery", "Pulmonology"].map((item, i) => (
              <li key={i}>
                <a href="#services" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Contact Prompt */}
        <div>
          <h4 className="text-lg font-bold mb-8 italic text-[#0077B6]">Emergency Support</h4>
          <p className="text-white/50 text-sm mb-6 font-light">Available 24/7 for accidents and injuries.</p>
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-3xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-2 block">Hotline</span>
            <a href="tel:08869251678" className="text-2xl font-black text-white hover:text-red-400 transition-colors">
              08869-251678
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-[11px] font-bold tracking-widest uppercase opacity-40">
        <p>© 2026 Srinidhi Hospitals, Amalapuram. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
