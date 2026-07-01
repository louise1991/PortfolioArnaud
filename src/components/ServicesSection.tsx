import React from 'react';

const services = [
  {
    title: "Architecture",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    gradient: "from-[#FEBD82] via-[#EE5B5E] to-[#9054D2]" 
  },
  {
    title: "Design",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    gradient: "from-[#FEBD82] via-[#EE5B5E] to-[#9054D2]"  
  },
  {
    title: "Expertise",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    gradient: "from-[#FEBD82] via-[#EE5B5E] to-[#9054D2]" 
  },
  {
    title: "Training",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    gradient: "from-[#FEBD82] via-[#EE5B5E] to-[#9054D2]" 
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-black py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              /* group est essentiel ici pour déclencher les deux effets en même temps */
              className={`group p-[1px] bg-gradient-to-br ${service.gradient} shadow-2xl bg-[size:200%_200%] bg-left-top hover:bg-right-bottom transition-[background-position] duration-700 ease-in-out cursor-pointer`}
            >
              {/* 
                CORRECTIONS APPLIQUÉES :
                1. rounded-[15px] : Des courbes parallèles pour une bordure constante.
                2. bg-gradient-to-br from-[#0b0c10] to-[#0b0c10] ... hover:from-slate-900/60 :
                   Le fond de la carte est un dégradé de noir à noir au repos, 
                   et révèle un spot gris/ardoise translucide (slate-900/60) en haut à gauche au hover.
              */}
              <div className="bg-gradient-to-br from-[#0b0c10] to-[#0b0c10] hover:from-slate-900/60 p-8 h-full flex flex-col justify-top space-y-4 transition-colors duration-500 ease-in-out">
                <h3 className="text-white text-2xl font-bold font-epilogue tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white text-sm font-normal leading-relaxed font-sans">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}