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
          <div className="space-y-12 animate-fade-in">
            <div className="inline-block">
              <div className="glass-card px-5 py-2.5 rounded-full">
                <span className="text-orange font-medium text-base tracking-wide">
                  Революция в кофейном бизнесе
                </span>
              </div>
            </div>
            
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-[-0.02em] text-white">
                Превратим кофе в{" "}
                <span className="text-gradient bg-gradient-to-r from-orange via-yellow-400 to-orange bg-clip-text">
                  персональную историю
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 leading-[1.4] font-light max-w-xl">
                Мы помогаем кофейням создавать{" "}
                <span className="text-white font-medium">уникальные эмоции</span>{" "}
                с помощью персонализированных наклеек в стиле комикс
              </p>
            </div>
          
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in pt-4">
              <Button 
                size="lg" 
                className="bg-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 ease-out"
              >
                <Icon name="Palette" className="mr-3" size={20} />
                Создать мой дизайн
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-effect border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/30 px-8 py-4 text-lg font-medium rounded-2xl backdrop-blur-md transition-all duration-200"
              >
                <Icon name="Play" className="mr-3" size={20} />
                Смотреть демо
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-8">
              <div className="glass-card p-5 lg:p-6 text-center hover:scale-[1.02] transition-all duration-200 rounded-2xl">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-gray-300 text-sm lg:text-base font-medium">Довольных кофеен</div>
              </div>
              <div className="glass-card p-5 lg:p-6 text-center hover:scale-[1.02] transition-all duration-200 rounded-2xl">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">10k+</div>
                <div className="text-gray-300 text-sm lg:text-base font-medium">Созданных стикеров</div>
              </div>
              <div className="glass-card p-5 lg:p-6 text-center hover:scale-[1.02] transition-all duration-200 rounded-2xl">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">24ч</div>
                <div className="text-gray-300 text-sm lg:text-base font-medium">Время доставки</div>
              </div>
            </div>
          </div>

          {/* Right side - Interactive Preview */}
          <div className="animate-scale-in">
            <Card className="glass-card p-8 lg:p-10 max-w-lg mx-auto rounded-3xl border border-white/10">
              <CardContent className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                    Попробуйте прямо сейчас
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Загрузите фото и посмотрите, как оно превратится в комикс
                  </p>
                </div>

                {/* Upload Area */}
                <div className="glass-card border-2 border-dashed border-orange/25 hover:border-orange/50 transition-all duration-300 p-10 lg:p-12 text-center cursor-pointer group rounded-2xl">
                  <Icon name="Upload" size={44} className="text-orange/50 group-hover:text-orange mx-auto mb-4 transition-colors duration-200" />
                  <p className="text-white font-semibold mb-2 text-lg">Загрузите фото</p>
                  <p className="text-gray-400 text-base">или перетащите файл сюда</p>
                </div>

                {/* Demo Preview */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center space-y-4">
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">До</p>
                    <div className="glass-card p-6 rounded-2xl">
                      <div className="w-24 h-24 bg-gray-600/50 rounded-full mx-auto flex items-center justify-center">
                        <Icon name="User" size={28} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <p className="text-orange text-sm font-medium uppercase tracking-wide">После</p>
                    <div className="glass-card p-6 rounded-2xl border border-orange/20 bg-orange/5">
                      <img 
                        src="/img/bd339af0-e5e0-4d94-a49d-e430d8f650dd.jpg" 
                        alt="Комиксовый стиль" 
                        className="w-24 h-24 rounded-full mx-auto object-cover ring-2 ring-orange/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Style Options */}
                <div className="space-y-4">
                  <p className="text-white font-semibold text-lg">Выберите стиль:</p>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="glass-card p-4 text-center hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/20 rounded-xl">
                      <div className="text-3xl mb-2">🦸</div>
                      <p className="text-sm text-gray-400 font-medium">Супергерой</p>
                    </button>
                    <button className="glass-card p-4 text-center border border-orange/30 bg-orange/10 rounded-xl">
                      <div className="text-3xl mb-2">🎨</div>
                      <p className="text-sm text-orange font-medium">Классик</p>
                    </button>
                    <button className="glass-card p-4 text-center hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/20 rounded-xl">
                      <div className="text-3xl mb-2">🌟</div>
                      <p className="text-sm text-gray-400 font-medium">Аниме</p>
                    </button>
                  </div>
                </div>

                {/* Generate Button */}
                <Button className="w-full bg-gradient-to-r from-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-5 text-lg font-medium rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
                  <Icon name="Sparkles" className="mr-3" size={20} />
                  Создать стикер
                </Button>

                {/* Processing Animation */}
                <div className="text-center pt-2">
                  <div className="flex justify-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-orange/60 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                    <div className="w-2 h-2 bg-orange/60 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-2 h-2 bg-orange/60 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                  </div>
                  <p className="text-gray-400 text-sm font-medium">Обработка за 3 секунды</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center pt-16">
          <p className="text-gray-300 text-lg mb-6">Нам доверяют ведущие кофейни России</p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="glass-card px-6 py-3 text-lg font-semibold">Starbucks</div>
            <div className="glass-card px-6 py-3 text-lg font-semibold">Costa Coffee</div>
            <div className="glass-card px-6 py-3 text-lg font-semibold">Coffee House</div>
            <div className="glass-card px-6 py-3 text-lg font-semibold">Шоколадница</div>
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