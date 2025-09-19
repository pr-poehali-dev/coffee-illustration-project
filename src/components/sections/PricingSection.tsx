import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-dark-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8">
            Идеально для вашей <span className="text-gradient">кофейни</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Любая кофейня может стать местом создания персональных историй
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          <Card className="glass-card p-6 md:p-10 text-center animate-fade-in hover:scale-105 transition-all duration-500">
            <CardContent className="space-y-6 md:space-y-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Heart" size={32} className="text-white md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Cozy Coffee Shops</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Уютные кофейни с домашней атмосферой. Создавайте теплые воспоминания для постоянных гостей и превращайте каждый визит в особенный момент.
              </p>
              <div className="text-orange font-semibold text-base md:text-lg">
                От ₽15,000/месяц
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card p-6 md:p-10 text-center animate-fade-in hover:scale-105 transition-all duration-500 border-orange relative" style={{animationDelay: '0.2s'}}>
            <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold">
                Самый популярный
              </div>
            </div>
            <CardContent className="space-y-6 md:space-y-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="TrendingUp" size={32} className="text-white md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Trendy Roasteries</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Модные обжарочные кофейни для молодежи. Привлекайте Instagram-аудиторию уникальным контентом и вирусными моментами.
              </p>
              <div className="text-orange font-semibold text-base md:text-lg">
                От ₽35,000/месяц
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card p-6 md:p-10 text-center animate-fade-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.4s'}}>
            <CardContent className="space-y-6 md:space-y-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Briefcase" size={32} className="text-white md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Business Lunch Cafes</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Деловые кофейни в бизнес-центрах. Удивляйте корпоративных клиентов и делайте рабочие встречи незабываемыми.
              </p>
              <div className="text-orange font-semibold text-base md:text-lg">
                От ₽75,000/месяц
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}