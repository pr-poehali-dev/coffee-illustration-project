import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-black text-comic-cream relative overflow-hidden">
      {/* Top stripes */}
      <div className="h-6 comic-stripes border-b-4 border-black" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-comic-red border-4 border-comic-cream rounded-full flex items-center justify-center shadow-[3px_3px_0_0_#FFF8E7]">
                <Icon name="Coffee" size={24} className="text-white" />
              </div>
              <div className="font-comic text-2xl tracking-wider">
                COFFEE<span className="text-comic-red">COMICS</span>!
              </div>
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              Превращаем кофе в персональные комикс-истории с помощью ИИ.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-comic text-xl text-comic-yellow tracking-wider mb-4">УСЛУГИ</h4>
            <ul className="space-y-2 font-body font-semibold">
              {["Комикс-стикеры", "Кастомные стили", "API интеграция", "Техподдержка"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-300 hover:text-comic-yellow transition-colors hover:underline">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-comic text-xl text-comic-yellow tracking-wider mb-4">КОМПАНИЯ</h4>
            <ul className="space-y-2 font-body font-semibold">
              {["О нас", "Карьера", "Блог", "Пресс-кит"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-300 hover:text-comic-yellow transition-colors hover:underline">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-comic text-xl text-comic-yellow tracking-wider mb-4">МЫ В СЕТИ!</h4>
            <div className="flex gap-3">
              {[
                { icon: "MessageCircle", color: "bg-comic-blue" },
                { icon: "Instagram", color: "bg-comic-red" },
                { icon: "Youtube", color: "bg-comic-yellow" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className={`${s.color} border-4 border-comic-cream w-12 h-12 rounded-full flex items-center justify-center shadow-[3px_3px_0_0_#FFF8E7] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_0_#FFF8E7] transition-all`}
                >
                  <Icon name={s.icon} size={20} className={i === 2 ? "text-black" : "text-white"} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-comic-cream/30 mt-12 pt-6 text-center font-body font-semibold text-sm text-gray-400">
          © 2026 COFFEECOMICS! · Превращаем кофе в искусство · Сделано с <span className="text-comic-red">♥</span>
        </div>
      </div>
    </footer>
  );
}
