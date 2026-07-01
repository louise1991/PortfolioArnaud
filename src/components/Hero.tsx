import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Hero() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const carouselItems = [
    { id: 1, title: "Radar Systems", desc: "RF Front-end architecture" },
    {
      id: 2,
      title: "Embedded Firmware",
      desc: "High-speed digital processing",
    },
    { id: 3, title: "Signal Integrity", desc: "Advanced PCB layout expertise" },
  ];

  return (
    <section className="w-full py-0 bg-black">
      {/* BANNIÈRE : Pleine largeur pour le dégradé */}
      <div
        className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 px-4 md:px-8"
        style={{
          backgroundColor: "#9054D2",
          backgroundImage: `
    /* 1. Le halo vert/turquoise en bas à gauche */
    radial-gradient(at 0% 100%, rgba(74, 222, 128, 0.45) 0px, transparent 45%),
    
    /* 2. Le halo ambre/jaune en haut à droite (pour casser le violet en haut) */
    radial-gradient(at 100% 0%, rgba(254, 189, 130, 0.5) 0px, transparent 50%),
    
    /* 3. Le halo bleu électrique en bas à droite (pour donner de la profondeur sous le carrousel) */
    radial-gradient(at 100% 100%, rgba(37, 99, 235, 0.45) 0px, transparent 50%),
    
    /* 4. Le halo orange/rouge vif qui traverse le centre gauche */
    radial-gradient(at 20% 35%, rgba(238, 91, 94, 0.65) 0px, transparent 55%),
    
    /* 5. Fond linéaire global atténué */
    linear-gradient(263deg, #9054D2 36.93%, #B2357B 56.09%, #EE5B5E 75.56%, #FEBD82 94.1%)
  `,
        }}
      >
        {/* Grain de texture matériel */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* CONTENEUR DE CENTRAGE ALIGNÉ SUR LES AUTRES SECTIONS */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* CONTENU TEXTE (À gauche - aligné sur les colonnes de gauche) */}
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-epilogue text-white tracking-tight leading-[1.05]">
              Outer <br />
              Space <br />
              Technologies
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium font-sans tracking-wide pt-2">
              Electronics expertise in digital technologies
            </p>
          </div>

          {/* CARROUSEL BLANC/TRANSLUCIDE (À droite - aligné sur les colonnes de droite) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-[600px] aspect-[16/9]"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {carouselItems.map((item) => (
                  <CarouselItem key={item.id}>
                    {/* Le conteneur blanc / effet givré */}
                    <div className="w-full h-full aspect-[16/9] bg-white/25 backdrop-blur-md border border-white/20 p-8 flex flex-col justify-between text-white shadow-xl">
                      <div className="w-12 h-12 bg-white/20 flex items-center justify-center font-mono text-sm rounded-lg">
                        0{item.id}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold font-epilogue">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
