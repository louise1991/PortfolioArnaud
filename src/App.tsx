import { Button } from "@/components/ui/button"
import Header from "@/components/Header"; 
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-slate-50 flex flex-col">
      {/* Notre nouveau Header est ici ! */}
      <Header />
      
      {/* Contenu principal (Le Hero) */}
      <main className="flex-1 flex flex-col items-center justify-center gap-4">
        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
     )
}