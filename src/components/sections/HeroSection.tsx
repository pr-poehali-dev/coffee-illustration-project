import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%), url('/img/47431193-7093-4ac2-9985-b3b878c73486.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      
      {/* Floating particles animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange/30 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-400/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div className="space-y-8 md:space-y-12 animate-fade-in flex flex-col justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">

            
            <div className="space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-[-0.03em] text-white text-center lg:text-left">
                Превратим кофе в{" "}
                <span className="text-gradient">
                  персональную историю
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-[1.5] font-normal max-w-xl text-center lg:text-left">
                Мы помогаем кофейням создавать{" "}
                <span className="text-white font-semibold">уникальные эмоции</span>{" "}
                с помощью персонализированных наклеек в стиле комикс
              </p>
            </div>
          
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in pt-4 items-center lg:items-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base md:text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 ease-out animate-glow"
              >
                <Icon name="Palette" className="mr-3" size={20} />
                Создать мой дизайн
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-effect border-2 border-white/15 text-white hover:bg-white/8 hover:border-orange/30 px-10 py-5 text-lg font-semibold rounded-2xl backdrop-blur-md transition-all duration-300 shadow-lg"
              >
                <Icon name="Play" className="mr-3" size={20} />
                Смотреть демо
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 pt-8 md:pt-12">
              <div className="glass-card p-6 lg:p-8 text-center hover:scale-[1.05] transition-all duration-300 rounded-3xl border border-white/10 shadow-xl">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gradient mb-2 md:mb-3">500+</div>
                <div className="text-gray-200 text-xs sm:text-sm lg:text-base font-semibold tracking-wide">Довольных кофеен</div>
                <div className="w-8 h-1 bg-orange/60 mx-auto mt-3 rounded-full"></div>
              </div>
              <div className="glass-card p-6 lg:p-8 text-center hover:scale-[1.05] transition-all duration-300 rounded-3xl border border-white/10 shadow-xl">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gradient mb-2 md:mb-3">10k+</div>
                <div className="text-gray-200 text-xs sm:text-sm lg:text-base font-semibold tracking-wide">Созданных стикеров</div>
                <div className="w-8 h-1 bg-orange/60 mx-auto mt-3 rounded-full"></div>
              </div>
              <div className="glass-card p-6 lg:p-8 text-center hover:scale-[1.05] transition-all duration-300 rounded-3xl border border-white/10 shadow-xl">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gradient mb-2 md:mb-3">24ч</div>
                <div className="text-gray-200 text-xs sm:text-sm lg:text-base font-semibold tracking-wide">Время доставки</div>
                <div className="w-8 h-1 bg-orange/60 mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right side - Interactive Preview */}
          <div className="animate-scale-in my-16 lg:my-20">
            <Card className="glass-card p-10 lg:p-12 max-w-lg mx-auto rounded-3xl border border-white/8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-purple/5 pointer-events-none"></div>
              <CardContent className="space-y-10 relative z-10">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight text-center">
                    Попробуйте прямо сейчас
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center">
                    Загрузите фото и посмотрите магию трансформации
                  </p>
                </div>

                {/* Upload Area */}
                <div className="glass-card border-2 border-dashed border-orange/20 hover:border-orange/40 transition-all duration-300 p-12 lg:p-14 text-center cursor-pointer group rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon name="Upload" size={48} className="text-orange/40 group-hover:text-orange mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                  <p className="text-white font-bold mb-2 text-xl">Загрузите фото</p>
                  <p className="text-gray-400 text-base">JPG, PNG до 10MB</p>
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-orange/30 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Demo Preview */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center space-y-5">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">До</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border border-gray-500/20">
                      <div className="w-28 h-28 bg-gradient-to-br from-gray-600/30 to-gray-700/50 rounded-full mx-auto flex items-center justify-center relative">
                        <Icon name="User" size={32} className="text-gray-400" />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                          <span className="text-red-400 text-xs">✕</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center space-y-5">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
                      <p className="text-orange text-sm font-bold uppercase tracking-widest">После</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border border-orange/30 bg-gradient-to-br from-orange/10 to-orange/5 shadow-xl">
                      <div className="relative">
                        <img 
                          src="/img/bd339af0-e5e0-4d94-a49d-e430d8f650dd.jpg" 
                          alt="Комиксовый стиль" 
                          className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-orange/20 shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <div className="absolute -top-1 -left-1 w-4 h-4 bg-orange rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Style Options */}
                <div className="space-y-6">
                  <p className="text-white font-bold text-xl text-center">Выберите стиль:</p>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="glass-card p-5 text-center hover:bg-white/8 hover:scale-105 transition-all duration-300 border border-transparent hover:border-white/20 rounded-2xl group">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🦸</div>
                      <p className="text-sm text-gray-400 font-bold">Супергерой</p>
                    </button>
                    <button className="glass-card p-5 text-center border-2 border-orange/40 bg-gradient-to-br from-orange/15 to-orange/5 rounded-2xl shadow-lg scale-105">
                      <div className="text-4xl mb-3">🎨</div>
                      <p className="text-sm text-orange font-bold">Классик</p>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange rounded-full animate-pulse"></div>
                    </button>
                    <button className="glass-card p-5 text-center hover:bg-white/8 hover:scale-105 transition-all duration-300 border border-transparent hover:border-white/20 rounded-2xl group">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🌟</div>
                      <p className="text-sm text-gray-400 font-bold">Аниме</p>
                    </button>
                  </div>
                </div>

                {/* Generate Button */}
                <Button className="w-full bg-gradient-to-r from-orange via-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 animate-glow relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Icon name="Sparkles" className="mr-3" size={24} />
                  Создать стикер
                </Button>

                {/* Processing Animation */}
                <div className="text-center glass-card p-4 rounded-2xl">
                  <div className="flex justify-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-orange rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="w-3 h-3 bg-orange rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 bg-orange rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <p className="text-gray-300 text-sm font-semibold">⚡ Магия за 3 секунды</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}