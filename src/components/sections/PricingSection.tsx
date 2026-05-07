import Icon from "@/components/ui/icon";

const plans = [
  {
    icon: "Heart",
    title: "УЮТНАЯ",
    subtitle: "Cozy Coffee",
    desc: "Для маленьких кофеен с домашней атмосферой. Тёплые воспоминания для постоянных гостей.",
    price: "15 000",
    bg: "bg-comic-yellow",
    rotate: -3,
    badge: null,
    features: ["До 200 стикеров/мес", "1 стиль на выбор", "Базовая печать"],
  },
  {
    icon: "TrendingUp",
    title: "МОДНАЯ",
    subtitle: "Trendy Roastery",
    desc: "Для молодежных обжарочных. Привлекайте Instagram-аудиторию вирусным контентом!",
    price: "35 000",
    bg: "bg-comic-red text-white",
    rotate: 0,
    badge: "ХИТ!",
    features: ["До 800 стикеров/мес", "5 стилей на выбор", "Премиум печать", "Соц-сети"],
  },
  {
    icon: "Briefcase",
    title: "БИЗНЕС",
    subtitle: "Business Lunch",
    desc: "Для кофеен в бизнес-центрах. Удивляйте корпоративных клиентов!",
    price: "75 000",
    bg: "bg-comic-blue text-white",
    rotate: 3,
    badge: null,
    features: ["Без лимита", "Все стили", "VIP печать", "Личный менеджер"],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 paper-bg relative overflow-hidden">
      <div className="absolute inset-0 halftone-yellow opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-comic-yellow border-4 border-black px-5 py-2 rounded-lg shadow-[5px_5px_0_0_#000] rotate-[-2deg] mb-6">
            <span className="font-comic text-black text-xl tracking-wider">★ ТАРИФЫ ★</span>
          </div>
          <h2 className="comic-title text-5xl md:text-7xl mb-6">
            <span className="comic-title-red">ВЫБЕРИ СВОЙ!</span>
          </h2>
          <div className="speech-bubble max-w-xl mx-auto">
            <p className="font-body text-lg text-black font-semibold">
              Любая кофейня может стать местом <span className="bg-comic-yellow px-2 font-comic">персональных историй!</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto pt-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`${plan.bg} comic-border-thick p-8 relative`}
              style={{ transform: `rotate(${plan.rotate}deg)` }}
            >
              {plan.badge && (
                <div className="absolute -top-10 -right-6 bg-comic-yellow comic-burst w-24 h-24 flex items-center justify-center shadow-[5px_5px_0_0_#000] z-10 animate-wobble">
                  <span className="font-comic text-2xl text-black rotate-[-12deg]">{plan.badge}</span>
                </div>
              )}

              <div className="bg-white border-4 border-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0_0_#000]">
                <Icon name={plan.icon} size={36} className="text-black" />
              </div>

              <h3 className="font-comic text-4xl text-center tracking-wider mb-1">{plan.title}</h3>
              <p className="text-center font-body font-bold text-sm uppercase tracking-widest mb-4 opacity-70">{plan.subtitle}</p>

              <p className="text-center font-body font-semibold text-base mb-6 leading-relaxed">{plan.desc}</p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 font-body font-bold">
                    <Icon name="Check" size={20} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white border-4 border-black p-4 text-center shadow-[3px_3px_0_0_#000]">
                <div className="font-comic text-4xl text-black">{plan.price} ₽</div>
                <div className="font-body text-xs uppercase tracking-widest text-black font-bold">/месяц</div>
              </div>

              <button className="comic-btn w-full mt-6">
                ВЫБРАТЬ!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
