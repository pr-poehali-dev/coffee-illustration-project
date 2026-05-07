import Icon from "@/components/ui/icon";

const steps = [
  {
    num: "01",
    icon: "Camera",
    title: "ФОТО!",
    desc: "Посетитель делает селфи или приносит фото. ИИ анализирует и выделяет ключевые черты лица.",
    color: "bg-comic-yellow",
    iconBg: "bg-comic-red text-white",
    rotate: -2,
  },
  {
    num: "02",
    icon: "Palette",
    title: "МАГИЯ!",
    desc: "Применяем комикс-стилизацию: яркие цвета, контуры, выразительные черты в стиле графических новелл.",
    color: "bg-comic-red text-white",
    iconBg: "bg-comic-yellow text-black",
    rotate: 2,
  },
  {
    num: "03",
    icon: "Coffee",
    title: "ПЕЧАТЬ!",
    desc: "Мгновенная печать водостойкой наклейки. Готово за 30 секунд прямо в вашей кофейне!",
    color: "bg-comic-blue text-white",
    iconBg: "bg-comic-yellow text-black",
    rotate: -1,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-comic-cream relative overflow-hidden border-y-4 border-black">
      <div className="absolute inset-0 halftone-orange opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-comic-red border-4 border-black px-5 py-2 rounded-lg shadow-[5px_5px_0_0_#000] rotate-[2deg] mb-6">
            <span className="font-comic text-white text-xl tracking-wider">★ КАК МЫ РАБОТАЕМ ★</span>
          </div>
          <h2 className="comic-title text-5xl md:text-7xl mb-6">
            <span className="comic-title-yellow">3 ПРОСТЫХ ШАГА!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto pt-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`${step.color} comic-border-thick p-8 relative`}
              style={{ transform: `rotate(${step.rotate}deg)` }}
            >
              {/* Step number burst */}
              <div className="absolute -top-8 -left-8 bg-white border-4 border-black w-20 h-20 rounded-full flex items-center justify-center shadow-[5px_5px_0_0_#000] z-10">
                <span className="font-comic text-3xl text-black">{step.num}</span>
              </div>

              {/* Icon */}
              <div className={`${step.iconBg} border-4 border-black w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0_0_#000] mt-4`}>
                <Icon name={step.icon} size={44} />
              </div>

              <h3 className="font-comic text-4xl text-center mb-4 tracking-wider">{step.title}</h3>
              <p className="text-center font-body font-semibold text-base leading-relaxed">{step.desc}</p>

              {/* Connecting arrow (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-10 -translate-y-1/2 z-20">
                  <Icon name="ArrowRight" size={40} className="text-black" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
