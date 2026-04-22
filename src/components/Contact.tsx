import { MapPin, Phone, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 bg-white rounded-[3rem] shadow-2xl shadow-black/5 overflow-hidden border border-neutral-100">
        <div className="grid lg:grid-cols-2">
          {/* Left Side: Info */}
          <div className="bg-neutral-900 p-10 md:p-16 text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full opacity-10" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-10 tracking-tight leading-tight">
                Get in touch with <br/> <span className="text-primary italic">Srinidhi Hospitals</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <MapPin size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#0077B6] mb-1">Our Address</h4>
                    <p className="text-white/70 leading-relaxed font-light italic">
                      College Road, Opp: More Market, <br/> Amalapuram, East Godavari, <br/> Andhra Pradesh - 533201.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Phone size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#0077B6] mb-1">Call Us</h4>
                    <p className="text-white/70 leading-relaxed font-bold">
                       +91 83414-38887 <br/>
                       <span className="text-red-400">Emergency: 08869-251678</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Clock size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#0077B6] mb-1">OPD Hours</h4>
                    <p className="text-white/70 leading-relaxed font-light italic italic">
                       Mon-Sat: 9 AM - 8 PM <br/>
                       Sunday: 9 AM - 2 PM <br/>
                       <span className="font-bold">ER: 24/7 Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 md:p-16">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 tracking-tight">Request an Appointment</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 ml-1">Email Address (Optional)</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 ml-1">Department</label>
                <select className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                  <option>Select Department</option>
                  <option>General Medicine</option>
                  <option>General Surgery</option>
                  <option>Orthopedics</option>
                  <option>Neurosurgery</option>
                  <option>Gastroenterology</option>
                  <option>Pulmonology</option>
                  <option>Obstetrics & Gynaecology</option>
                  <option>Paediatrics & Neonatology</option>
                  <option>Emergency & Critical Care</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your health concern..."
                  className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-[400px] border-t border-neutral-100">
           <iframe 
             title="Srinidhi Hospitals Map"
             src="https://maps.google.com/maps?q=16.573863279879127,82.00308591861717&z=17&output=embed" 
             className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
             loading="lazy"
           ></iframe>
        </div>
      </div>
    </section>
  );
}
