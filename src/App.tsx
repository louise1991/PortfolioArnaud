import { Button } from "@/components/ui/button"
import Header from "@/components/Header"; 
import Hero from "@/components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Notre nouveau Header est ici ! */}
      <Header />
      
      {/* Contenu principal (Le Hero) */}
      <main className="flex-1 flex flex-col items-center justify-center gap-4 py-12">
        <Hero />
      </main>
    </div>
     )
}