import Icon from "@/components/ui/icon";

const contacts = [
  { icon: "Phone", label: "ЗВОНИ!", value: "+7 (495) 123-45-67", color: "bg-comic-red text-white" },
  { icon: "Mail", label: "ПИШИ!", value: "hello@coffeecomics.ru", color: "bg-comic-yellow text-black" },
  { icon: "MapPin", label: "ПРИХОДИ!", value: "Москва, ул. Тверская, 1", color: "bg-comic-blue text-white" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-comic-cream relative overflow-hidden border-t-4 border-black">
      <div className="absolute inset-0 halftone opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-comic-red border-4 border-black px-5 py-2 rounded-lg shadow-[5px_5px_0_0_#000] rotate-[2deg] mb-6">
            <span className="font-comic text-white text-xl tracking-wider">★ КОНТАКТЫ ★</span>
          </div>
          <h2 className="comic-title text-5xl md:text-7xl mb-6">
            <span className="comic-title-orange">ДАВАЙ ОБСУДИМ!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* LEFT — Contacts */}
          <div className="space-y-6">
            <div className="speech-bubble">
              <p className="font-body text-lg text-black font-semibold">
                Свяжись с нами и мы поможем интегрировать <span className="bg-comic-yellow px-2 font-comic">персональные комиксы</span> в твою кофейню уже завтра!
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className={`${c.color} comic-border p-4 flex items-center gap-4`}
                  style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
                >
                  <div className="bg-white border-4 border-black w-14 h-14 rounded-full flex items-center justify-center shadow-[3px_3px_0_0_#000] shrink-0">
                    <Icon name={c.icon} size={26} className="text-black" />
                  </div>
                  <div>
                    <div className="font-comic text-2xl tracking-wider">{c.label}</div>
                    <div className="font-body font-bold text-base">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="comic-card p-8 relative">
            <div className="absolute -top-8 -right-8 bg-comic-yellow comic-burst w-24 h-24 flex items-center justify-center shadow-[5px_5px_0_0_#000] z-10 animate-wobble">
              <span className="font-comic text-xl text-black rotate-[-12deg] text-center leading-tight">
                ОТВЕТ<br />ЗА 1Ч!
              </span>
            </div>

            <h3 className="font-comic text-3xl text-black tracking-wider mb-2">ОСТАВЬ ЗАЯВКУ!</h3>
            <p className="font-body font-semibold text-sm mb-6 text-gray-700">Заполни форму — свяжемся в течение часа</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="ТВОЁ ИМЯ"
                  className="w-full px-4 py-3 border-4 border-black font-body font-semibold rounded shadow-[3px_3px_0_0_#000] focus:outline-none focus:shadow-[5px_5px_0_0_#000] focus:-translate-x-1 focus:-translate-y-1 transition-all bg-white"
                />
                <input
                  type="tel"
                  placeholder="ТЕЛЕФОН"
                  className="w-full px-4 py-3 border-4 border-black font-body font-semibold rounded shadow-[3px_3px_0_0_#000] focus:outline-none focus:shadow-[5px_5px_0_0_#000] focus:-translate-x-1 focus:-translate-y-1 transition-all bg-white"
                />
              </div>
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full px-4 py-3 border-4 border-black font-body font-semibold rounded shadow-[3px_3px_0_0_#000] focus:outline-none focus:shadow-[5px_5px_0_0_#000] focus:-translate-x-1 focus:-translate-y-1 transition-all bg-white"
              />
              <input
                type="text"
                placeholder="НАЗВАНИЕ КОФЕЙНИ"
                className="w-full px-4 py-3 border-4 border-black font-body font-semibold rounded shadow-[3px_3px_0_0_#000] focus:outline-none focus:shadow-[5px_5px_0_0_#000] focus:-translate-x-1 focus:-translate-y-1 transition-all bg-white"
              />
              <textarea
                placeholder="РАССКАЖИ О СВОИХ ИДЕЯХ..."
                rows={4}
                className="w-full px-4 py-3 border-4 border-black font-body font-semibold rounded shadow-[3px_3px_0_0_#000] focus:outline-none focus:shadow-[5px_5px_0_0_#000] focus:-translate-x-1 focus:-translate-y-1 transition-all bg-white resize-none"
              />
              <button type="submit" className="comic-btn w-full text-xl">
                <Icon name="Send" size={22} />
                ОТПРАВИТЬ!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
