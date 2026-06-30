import { Button } from "@/components/ui/button"
import Header from "./components/ui/header"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Notre nouveau Header est ici ! */}
      <Header />
      
      {/* Contenu principal (Le Hero) */}
      <main className="flex-1 flex flex-col items-center justify-center gap-4 px-4 py-24">
        <h1 className="text-3xl font-bold tracking-tight text-center">
          Système Radar Initialisé 📡
        </h1>
        <p className="text-slate-400 max-w-md text-center text-sm">
          Le projet est configuré avec Vite, Tailwind v4, TypeScript et Shadcn/ui.
        </p>
        
        <Button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 cursor-pointer">
          Lancer le scan projet
        </Button>
      </main>
    </div>
  )
}