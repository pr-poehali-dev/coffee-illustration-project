import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Идеально для вашей <span className="text-gradient">кофейни</span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Любая кофейня может стать местом создания персональных историй
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <Card className="glass-card p-10 text-center animate-fade-in hover:scale-105 transition-all duration-500">
            <CardContent className="space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Heart" size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold">Cozy Coffee Shops</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Уютные кофейни с домашней атмосферой. Создавайте теплые воспоминания для постоянных гостей и превращайте каждый визит в особенный момент.
              </p>
              <div className="text-orange font-semibold text-lg">
                От ₽15,000/месяц
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card p-10 text-center animate-fade-in hover:scale-105 transition-all duration-500 border-orange relative" style={{animationDelay: '0.2s'}}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-orange text-white px-6 py-2 rounded-full text-sm font-bold">
                Самый популярный
              </div>
            </div>
            <CardContent className="space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="TrendingUp" size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold">Trendy Roasteries</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Модные обжарочные кофейни для молодежи. Привлекайте Instagram-аудиторию уникальным контентом и вирусными моментами.
              </p>
              <div className="text-orange font-semibold text-lg">
                От ₽35,000/месяц
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card p-10 text-center animate-fade-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.4s'}}>
            <CardContent className="space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Briefcase" size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold">Business Lunch Cafes</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Деловые кофейни в бизнес-центрах. Удивляйте корпоративных клиентов и делайте рабочие встречи незабываемыми.
              </p>
              <div className="text-orange font-semibold text-lg">
                От ₽75,000/месяц
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}