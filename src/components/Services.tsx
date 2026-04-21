import { 
  Activity, Stethoscope, Bone, Heart, Headphones, 
  Droplets, User, Brain, Baby, 
  Accessibility, Pill, Zap, Microscope, Scan, ClipboardPlus, HeartPulse
} from "lucide-react";

const SERVICES = [
  { name: "Emergency & Trauma", icon: Zap, color: "text-red-500", bg: "bg-red-50" },
  { name: "General Medicine", icon: Stethoscope, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Orthopedics", icon: Bone, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Cardiology", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
  { name: "ENT", icon: Headphones, color: "text-indigo-500", bg: "bg-indigo-50" },
  { name: "Gastroenterology", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "Dermatology", icon: User, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "Neurology", icon: Brain, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Nephrology", icon: Droplets, color: "text-cyan-500", bg: "bg-cyan-50" },
  { name: "Obstetrics & Gynecology", icon: HeartPulse, color: "text-rose-400", bg: "bg-rose-50/50" },
  { name: "Pediatrics", icon: Baby, color: "text-amber-500", bg: "bg-amber-50" },
  { name: "Physiotherapy", icon: Accessibility, color: "text-teal-500", bg: "bg-teal-50" },
  { name: "Anesthesiology & Critical Care", icon: ClipboardPlus, color: "text-slate-500", bg: "bg-slate-50" },
  { name: "Radiology & Imaging", icon: Scan, color: "text-blue-600", bg: "bg-blue-50/70" },
  { name: "Lab / Diagnostics", icon: Microscope, color: "text-violet-500", bg: "bg-violet-50" },
  { name: "Pharmacy (In-house)", icon: Pill, color: "text-green-600", bg: "bg-green-50" },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="w-12 h-0.5 bg-primary" />
          <span className="text-primary font-bold tracking-widest text-sm uppercase">Our Specialties</span>
          <div className="w-12 h-0.5 bg-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
          Comprehensive Medical Care
        </h2>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto italic font-light">
          Providing exceptional healthcare through experienced specialists and modern medical facilities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <div 
            key={index}
            className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon size={28} />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-tight">
              {service.name}
            </h3>
            <p className="text-sm text-neutral-400 group-hover:text-neutral-500 transition-colors">
              Expert consultation and specialized treatment for all patients.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
