import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 bg-dark-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Как создается ваша <span className="text-gradient">история</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Простой процесс превращения обычной фотографии в яркую комиксовую историю
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="glass-card p-6 md:p-8 text-center animate-fade-in">
            <CardContent className="space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Camera" size={24} className="text-orange md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">1. Фотографируем</h3>
              <p className="text-gray-400">
                Посетитель делает селфи или приносит фото. Наш ИИ анализирует изображение и выделяет ключевые черты лица
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card p-6 md:p-8 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Palette" size={24} className="text-orange md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">2. Стилизуем</h3>
              <p className="text-gray-400">
                Применяем комиксовую стилизацию: яркие цвета, четкие контуры, выразительные черты в стиле графических новелл
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card p-6 md:p-8 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Coffee" size={24} className="text-orange md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">3. Печатаем</h3>
              <p className="text-gray-400">
                Мгновенная печать водостойкой наклейки высокого качества. Готово за 30 секунд прямо в вашей кофейне
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}