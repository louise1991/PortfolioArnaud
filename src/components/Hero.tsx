import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const carouselItems = [
    { id: 1, title: "Radar Systems", desc: "RF Front-end architecture" },
    {
      id: 2,
      title: "Embedded Firmware",
      desc: "High-speed digital processing",
    },
    { id: 3, title: "Signal Integrity", desc: "Advanced PCB layout expertise" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Ajustement des couleurs : on met le paquet sur l'ambre et le rouge orangé
    const colors = [
      { hex: "#FEBD82", alpha: 0.7, speedX: 0.8, speedY: 1.1 }, // Ambre / Orange chaud (Ultra présent)
      { hex: "#EE5B5E", alpha: 0.65, speedX: 1.2, speedY: 0.8 }, // Rouge corail vif (Donne le contraste chaud)
      { hex: "#4ade80", alpha: 0.2, speedX: 1.4, speedY: 0.7 }, // Vert (très discret, pour créer des nuances dorées en fusionnant)
      { hex: "#2563eb", alpha: 0.15, speedX: 0.6, speedY: 1.2 }, // Bleu (infime micro-touche)
    ];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      time += 0.005;

      // 1. LE FOND DE BASE : Changement radical pour une dominante Ambre / Rouge Orangé
      const bgGrad = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );
      bgGrad.addColorStop(0.0, "#FEBD82"); // Ambre doré à gauche
      bgGrad.addColorStop(0.3, "#EE5B5E"); // Transition corail / rouge orangé
      bgGrad.addColorStop(0.7, "#B2357B"); // Magenta profond
      bgGrad.addColorStop(1.0, "#9054D2"); // Violet tout à droite

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. LES HALOS MOBILES EN MODE "MULTIPLY" ET "SCREEN"
      // Utiliser 'multiply' ou 'screen' sur une base claire change tout le mélange chromatique
      ctx.globalCompositeOperation = "screen";

      colors.forEach((color, i) => {
        const cx =
          canvas.width / 2 +
          Math.cos(time * color.speedX + i * 2) * (canvas.width * 0.35);
        const cy =
          canvas.height / 2 +
          Math.sin(time * color.speedY + i * 1.5) * (canvas.height * 0.25);
        const radius =
          Math.max(canvas.width, canvas.height) *
          (0.4 + Math.sin(time + i) * 0.05);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);

        if (color.hex === "#FEBD82") {
          gradient.addColorStop(0, `rgba(254, 189, 130, ${color.alpha})`);
        } else if (color.hex === "#EE5B5E") {
          gradient.addColorStop(0, `rgba(238, 91, 94, ${color.alpha})`);
        } else if (color.hex === "#4ade80") {
          gradient.addColorStop(0, `rgba(74, 222, 128, ${color.alpha})`);
        } else if (color.hex === "#2563eb") {
          gradient.addColorStop(0, `rgba(37, 99, 235, ${color.alpha})`);
        }
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="w-full py-0 bg-black">
      {/* BANNIÈRE CONTENEUR - Remplacement du bg-[#9054D2] par du ambre en fallback */}
      <div className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gradient-to-r from-[#FEBD82] via-[#EE5B5E] to-[#9054D2]">
        {/* LE CANVAS ANIMÉ */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Grain de texture matériel */}
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-10" />

        {/* CONTENEUR DE CENTRAGE DU CONTENU */}
        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* TEXTE */}
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

          {/* CARROUSEL */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <Carousel
              plugins={[autoplayPlugin.current]}
              className="w-full max-w-[480px] aspect-[16/10]"
              onMouseEnter={autoplayPlugin.current.stop}
              onMouseLeave={autoplayPlugin.current.reset}
            >
              <CarouselContent>
                {carouselItems.map((item) => (
                  <CarouselItem key={item.id}>
                    <div className="w-full h-full aspect-[16/10] bg-white/25 backdrop-blur-md border border-white/20 p-8 flex flex-col justify-between text-white shadow-xl">
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
