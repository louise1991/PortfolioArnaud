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
    gradient: "from-slate-800 to-slate-900" 
  },
  {
    title: "Expertise",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    gradient: "from-slate-800 to-slate-900"
  },
  {
    title: "Training",
    desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    gradient: "from-slate-800 to-slate-900"
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-[1px] bg-gradient-to-br ${service.gradient} shadow-2xl`}
            >
              <div className="bg-[#0b0c10] rounded-[15px] p-8 h-full flex flex-col justify-top space-y-4">
                <h3 className="text-white text-2xl font-bold font-epilogue tracking-wide">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed font-sans">
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