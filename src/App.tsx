import { Navbar } from "@/components/Navbar"
import { CinematicHero } from "@/components/ui/cinematic-landing-hero"
import { About } from "@/components/About"
import { FeatureCarousel } from "@/components/ui/feature-carousel"
import { Emergency } from "@/components/Emergency"
import { WhyChoose } from "@/components/WhyChoose"
import { Doctors } from "@/components/Doctors"
import { Facilities } from "@/components/Facilities"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Cinematic Hero - Integrated via GSAP scroll timeline */}
      <CinematicHero />
      
      <div className="relative z-50 bg-white">
        <About />
        <FeatureCarousel />
        <Emergency />
        <WhyChoose />
        <Doctors />
        <Facilities />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
