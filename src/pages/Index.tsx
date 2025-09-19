import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-dark-300 text-white dark">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">
              CoffeeComics
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#gallery" className="hover:text-orange transition-colors">Галерея</a>
              <a href="#services" className="hover:text-orange transition-colors">Услуги</a>
              <a href="#pricing" className="hover:text-orange transition-colors">Стоимость</a>
              <a href="#contact" className="hover:text-orange transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="glass-effect border-orange text-orange hover:bg-orange hover:text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.4) 100%), url('/img/14d5f44c-8d66-4d8d-9eee-1f8565c81f22.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        
        {/* Floating particles animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange/30 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-400/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center space-y-12 max-w-6xl mx-auto">
            {/* Main headline */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <div className="glass-card px-8 py-4 mb-8">
                  <span className="text-orange font-bold text-lg uppercase tracking-wider">
                    🎨 Революция в кофейном бизнесе
                  </span>
                </div>
              </div>
              
              <h1 className="text-7xl lg:text-9xl font-black leading-tight tracking-tight">
                Превратим кофе в{" "}
                <span className="text-gradient bg-gradient-to-r from-orange via-yellow-400 to-orange bg-clip-text">
                  персональную историю
                </span>
              </h1>
              
              <p className="text-3xl lg:text-4xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-light">
                Мы помогаем кофейням создавать <span className="text-orange font-semibold">уникальные эмоции</span> с помощью персонализированных наклеек в стиле комикс
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center animate-scale-in">
              <Button size="lg" className="bg-gradient-to-r from-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-8 text-2xl animate-glow rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Icon name="Palette" className="mr-4" size={28} />
                Создать мой дизайн
              </Button>
              <Button variant="outline" size="lg" className="glass-effect border-2 border-white/30 text-white hover:bg-white/10 px-12 py-8 text-2xl rounded-2xl backdrop-blur-md">
                <Icon name="Play" className="mr-4" size={28} />
                Смотреть демо
              </Button>
            </div>

            {/* Stats with enhanced glass cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="text-5xl lg:text-6xl font-black text-gradient mb-4">500+</div>
                <div className="text-gray-200 text-xl font-medium">Довольных кофеен</div>
                <div className="w-12 h-1 bg-orange mx-auto mt-3 rounded-full"></div>
              </div>
              <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s'}}>
                <div className="text-5xl lg:text-6xl font-black text-gradient mb-4">10k+</div>
                <div className="text-gray-200 text-xl font-medium">Созданных стикеров</div>
                <div className="w-12 h-1 bg-orange mx-auto mt-3 rounded-full"></div>
              </div>
              <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                <div className="text-5xl lg:text-6xl font-black text-gradient mb-4">24ч</div>
                <div className="text-gray-200 text-xl font-medium">Время доставки</div>
                <div className="w-12 h-1 bg-orange mx-auto mt-3 rounded-full"></div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="pt-12">
              <p className="text-gray-300 text-lg mb-6">Нам доверяют ведущие кофейни России</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="glass-card px-6 py-3 text-lg font-semibold">Starbucks</div>
                <div className="glass-card px-6 py-3 text-lg font-semibold">Costa Coffee</div>
                <div className="glass-card px-6 py-3 text-lg font-semibold">Coffee House</div>
                <div className="glass-card px-6 py-3 text-lg font-semibold">Шоколадница</div>
              </div>
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

      {/* Gallery Section - "Наши последние истории" */}
      <section id="gallery" className="py-24 bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Наши последние <span className="text-gradient">истории</span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Каждый стаканчик рассказывает уникальную историю. Посмотрите, как мы превращаем обычные фотографии в яркие комиксы
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="glass-card overflow-hidden group animate-fade-in hover:scale-105 transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/e5558b7e-464a-470f-a207-9598b900fab1.jpg" 
                    alt="Коллекция стаканчиков с комиксовыми наклейками разных людей" 
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl mb-2">Семейные портреты</h3>
                    <p className="text-gray-200 text-lg">Стиль: Классический комикс</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="glass-effect px-3 py-1 rounded-full text-orange font-semibold">
                      Новинка
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card overflow-hidden group animate-fade-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/f520e133-531a-44fc-9201-910bef4aee93.jpg" 
                    alt="Персонализированный стаканчик с комиксовой наклейкой лица" 
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl mb-2">Деловые встречи</h3>
                    <p className="text-gray-200 text-lg">Стиль: Минималистичный</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="glass-effect px-3 py-1 rounded-full text-green-400 font-semibold">
                      Популярный
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card overflow-hidden group animate-fade-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/ae50984b-34d7-40e1-a40c-b919a80333ed.jpg" 
                    alt="Процесс создания комиксовых наклеек в кофейне" 
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-2xl mb-2">Творческий процесс</h3>
                    <p className="text-gray-200 text-lg">За кулисами создания</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="glass-effect px-3 py-1 rounded-full text-blue-400 font-semibold">
                      Эксклюзив
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Как создается ваша <span className="text-gradient">история</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Простой процесс превращения обычной фотографии в яркую комиксовую историю
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center animate-fade-in">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Camera" size={32} className="text-orange" />
                </div>
                <h3 className="text-2xl font-bold">1. Фотографируем</h3>
                <p className="text-gray-400">
                  Посетитель делает селфи или приносит фото. Наш ИИ анализирует изображение и выделяет ключевые черты лица
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-8 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Palette" size={32} className="text-orange" />
                </div>
                <h3 className="text-2xl font-bold">2. Стилизуем</h3>
                <p className="text-gray-400">
                  Применяем комиксовую стилизацию: яркие цвета, четкие контуры, выразительные черты в стиле графических новелл
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-8 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-orange/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Coffee" size={32} className="text-orange" />
                </div>
                <h3 className="text-2xl font-bold">3. Печатаем</h3>
                <p className="text-gray-400">
                  Мгновенная печать водостойкой наклейки высокого качества. Готово за 30 секунд прямо в вашей кофейне
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section - "Идеально для вашей кофейни" */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-300">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Готовы создать <span className="text-gradient">незабываемый</span> опыт?
                </h2>
                <p className="text-xl text-gray-400">
                  Свяжитесь с нами, и мы поможем интегрировать персонализированные комиксы в вашу кофейню уже завтра
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-orange" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-400">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-orange" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">hello@coffeecomics.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-orange" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Офис</div>
                    <div className="text-gray-400">Москва, ул. Тверская, 1</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="glass-card p-8">
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Получить консультацию</h3>
                  <p className="text-gray-400">Оставьте заявку, и мы свяжемся с вами в течение часа</p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Ваше имя" 
                      className="glass-effect border-glass-border text-white placeholder:text-gray-400"
                    />
                    <Input 
                      placeholder="Телефон" 
                      className="glass-effect border-glass-border text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input 
                    placeholder="Email" 
                    className="glass-effect border-glass-border text-white placeholder:text-gray-400"
                  />
                  <Input 
                    placeholder="Название кофейни" 
                    className="glass-effect border-glass-border text-white placeholder:text-gray-400"
                  />
                  <Textarea 
                    placeholder="Расскажите о ваших потребностях"
                    className="glass-effect border-glass-border text-white placeholder:text-gray-400 min-h-[120px]"
                  />
                  <Button className="w-full bg-orange hover:bg-orange-600 text-white py-3">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark-500 border-t border-dark-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gradient">CoffeeComics</div>
              <p className="text-gray-400">
                Превращаем обычный кофе в персональную историю с помощью ИИ-технологий
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange transition-colors">Комиксовые стикеры</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Кастомные стили</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">API интеграция</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Техподдержка</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Пресс-кит</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-glass-50 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-glass-50 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-glass-50 rounded-full flex items-center justify-center hover:bg-orange transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-dark-200 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CoffeeComics. Все права защищены. Превращаем кофе в искусство.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}