import Icon from "@/components/ui/icon";
import { ChatGPTPlayground } from "@/components/extensions/chatgpt-polza/ChatGPTPlayground";

const CHATGPT_API_URL = "https://functions.poehali.dev/c3dfcb90-14bb-4e43-aa73-55b6219d449c";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 paper-bg overflow-hidden">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone opacity-20 pointer-events-none" />
      
      {/* Floating comic elements */}
      <div className="absolute top-32 right-10 w-24 h-24 bg-comic-red comic-burst flex items-center justify-center animate-float-comic shadow-[6px_6px_0_0_#000]">
        <span className="font-comic text-white text-xl rotate-[-10deg]">WOW!</span>
      </div>
      <div className="absolute top-1/2 left-8 w-20 h-20 bg-comic-yellow comic-burst hidden lg:flex items-center justify-center animate-wobble">
        <span className="font-comic text-black text-lg rotate-[8deg]">BAM!</span>
      </div>
      <div className="absolute bottom-20 right-32 w-16 h-16 bg-comic-blue comic-burst hidden lg:flex items-center justify-center animate-float-comic" style={{ animationDelay: '1s' }}>
        <span className="font-comic text-white text-sm rotate-[-5deg]">POW!</span>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* LEFT — Text */}
          <div className="space-y-8">
            <div className="inline-block bg-comic-yellow border-4 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0_0_#000] rotate-[-2deg] animate-pop">
              <span className="font-comic text-black text-lg tracking-wider">★ NEW ISSUE #1 ★</span>
            </div>

            <h1 className="comic-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
              <span className="comic-title-yellow block rotate-[-2deg]">КОФЕ +</span>
              <span className="comic-title-orange block ml-8 mt-2">КОМИКС =</span>
              <span className="comic-title-red block rotate-[1deg] mt-2">МАГИЯ!</span>
            </h1>

            <div className="speech-bubble max-w-lg">
              <p className="font-body text-lg text-black font-semibold">
                Превращаем фото в <span className="bg-comic-yellow px-2 font-comic tracking-wide">персональные стикеры</span> в стиле комикс — для кофеен, которые хотят <span className="text-comic-red font-bold">удивлять!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="comic-btn animate-wobble">
                <Icon name="Zap" size={22} />
                СОЗДАТЬ СТИКЕР!
              </button>
              <button className="comic-btn comic-btn-yellow">
                <Icon name="Play" size={22} />
                СМОТРЕТЬ ДЕМО
              </button>
            </div>

            {/* Stats — comic panels */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { num: "500+", label: "КОФЕЕН", color: "bg-comic-yellow" },
                { num: "10K+", label: "СТИКЕРОВ", color: "bg-comic-red text-white" },
                { num: "24Ч", label: "ДОСТАВКА", color: "bg-comic-blue text-white" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`${stat.color} comic-border p-4 text-center rotate-[${i % 2 === 0 ? '-1' : '1'}deg]`}
                  style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
                >
                  <div className="font-comic text-3xl md:text-4xl">{stat.num}</div>
                  <div className="font-comic text-xs md:text-sm tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — ChatGPT panel */}
          <div className="relative animate-scale-in">
            <div className="absolute -top-6 -left-6 bg-comic-red comic-burst w-28 h-28 flex items-center justify-center z-20 shadow-[6px_6px_0_0_#000]">
              <div className="text-center rotate-[-12deg]">
                <div className="font-comic text-white text-lg leading-none">AI</div>
                <div className="font-comic text-white text-xs">ПОМОЩНИК!</div>
              </div>
            </div>

            <div className="comic-card overflow-hidden">
              <div className="bg-comic-yellow border-b-4 border-black px-6 py-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-4 h-4 bg-comic-red border-2 border-black rounded-full" />
                  <div className="w-4 h-4 bg-comic-yellow border-2 border-black rounded-full" />
                  <div className="w-4 h-4 bg-comic-blue border-2 border-black rounded-full" />
                </div>
                <span className="font-comic text-xl text-black tracking-wider">СПРОСИ ПРО СТИКЕРЫ!</span>
              </div>
              <div className="h-[480px] bg-white">
                <ChatGPTPlayground
                  apiUrl={CHATGPT_API_URL}
                  defaultModel="openai/gpt-4o-mini"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom comic stripes */}
      <div className="absolute bottom-0 left-0 right-0 h-6 comic-stripes border-t-4 border-black" />
    </section>
  );
}
