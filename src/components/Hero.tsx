import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Optionnel : pour un défilement automatique
import { useRef } from "react";

export default function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Exemples d'éléments à afficher dans le carrousel (images de radars, schémas élec, etc.)
  const carouselItems = [
    { id: 1, title: "Radar Systems", desc: "RF Front-end architecture" },
    { id: 2, title: "Embedded Firmware", desc: "High-speed digital processing" },
    { id: 3, title: "Signal Integrity", desc: "Advanced PCB layout expertise" },
  ];

  return (
    <section className="container mx-auto max-w-screen-2xl py-2">
      {/* BANNIÈRE */}
      <div className="relative w-full overflow-hidden bg-gradient-to-tr from-[#9054D2] via-[#B2357B] via-[#EE5B5E] to-[#FEBD82] md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
        
        {/* Grain de texture optionnel pour donner un effet "hardware/industriel" au dégradé */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* CONTENU TEXTE (À gauche - prend 7 colonnes) */}
        <div className="relative z-10 lg:col-span-6 space-y-4 max-w-2xl justify-self-center">
          <h1 className="text-6xl sm:text-5xl lg:text-6xl font-bold font-epilogue text-white tracking-tight leading-[1.1]">
            Outer <br />
            Space <br />
            Technologies
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium font-sans tracking-wide pt-2">
            Electronics expertise in digital technologies
          </p>
        </div>

        {/* CARROUSEL BLANC/TRANSLUCIDE (À droite - prend 5 colonnes) */}
        <div className="relative z-10 lg:col-span-6 flex justify-center lg:justify-center w-full">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[550px] aspect-[16/9]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {carouselItems.map((item) => (
                <CarouselItem key={item.id}>
                  {/* Le conteneur blanc / effet givré comme sur la maquette */}
                  <div className="w-full h-full aspect-[16/9] rounded-2xl bg-white/25 backdrop-blur-md border border-white/20 p-8 flex flex-col justify-between text-white shadow-xl">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center font-mono text-sm">
                      0{item.id}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold font-epilogue">{item.title}</h3>
                      <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
}