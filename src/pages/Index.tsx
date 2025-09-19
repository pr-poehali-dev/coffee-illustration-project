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
      <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Превратим кофе в{" "}
                  <span className="text-gradient">персональную историю</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Мы помогаем кофейням создавать уникальные эмоции с помощью персонализированных наклеек в стиле комикс
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange hover:bg-orange-600 text-white px-8 py-4 text-lg animate-glow">
                  <Icon name="Palette" className="mr-2" />
                  Создать мой дизайн
                </Button>
                <Button variant="outline" size="lg" className="glass-effect border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                  <Icon name="Play" className="mr-2" />
                  Смотреть как работает
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange">500+</div>
                  <div className="text-sm text-gray-400">Довольных кофеен</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange">10k+</div>
                  <div className="text-sm text-gray-400">Созданных стикеров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange">24ч</div>
                  <div className="text-sm text-gray-400">Среднее время доставки</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <img 
                src="/img/15e72696-27ab-4576-b35d-319c4f0607be.jpg" 
                alt="Кофейный стаканчик с персонализированной наклейкой в стиле комикс" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Наши последние <span className="text-gradient">истории</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Каждый стаканчик рассказывает уникальную историю. Посмотрите, как мы превращаем обычные фотографии в яркие комиксы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card overflow-hidden group animate-fade-in">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/d33ed6b8-7bb2-4854-8242-ab8b92a6fc5c.jpg" 
                    alt="Коллекция стаканчиков с комиксовыми наклейками" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold text-lg">Семейные портреты</h3>
                    <p className="text-gray-300 text-sm">Стиль: Классический комикс</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card overflow-hidden group animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/15e72696-27ab-4576-b35d-319c4f0607be.jpg" 
                    alt="Персонализированный стаканчик с комиксовой наклейкой" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold text-lg">Деловые встречи</h3>
                    <p className="text-gray-300 text-sm">Стиль: Минималистичный</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card overflow-hidden group animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/a1ddc598-83ad-42d2-8397-befcb4360097.jpg" 
                    alt="Процесс создания комиксовых наклеек в кофейне" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold text-lg">Творческий процесс</h3>
                    <p className="text-gray-300 text-sm">За кулисами создания</p>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Идеально для вашей <span className="text-gradient">кофейни</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Выберите подходящий пакет для интеграции технологии в ваш бизнес
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card p-8 animate-fade-in">
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Стартер</h3>
                  <div className="text-4xl font-bold text-orange">₽15,000</div>
                  <p className="text-gray-400">в месяц</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    До 500 стикеров в месяц
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Базовые стили комиксов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Техподдержка 9-18
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Обучение персонала
                  </li>
                </ul>
                <Button className="w-full bg-orange hover:bg-orange-600">
                  Начать с этого пакета
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card p-8 border-orange animate-fade-in relative" style={{animationDelay: '0.2s'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </div>
              </div>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Профи</h3>
                  <div className="text-4xl font-bold text-orange">₽35,000</div>
                  <p className="text-gray-400">в месяц</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    До 2000 стикеров в месяц
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Премиум стили комиксов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Техподдержка 24/7
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Кастомные стили
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Аналитика продаж
                  </li>
                </ul>
                <Button className="w-full bg-orange hover:bg-orange-600">
                  Выбрать Профи
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card p-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Энтерпрайз</h3>
                  <div className="text-4xl font-bold text-orange">₽75,000</div>
                  <p className="text-gray-400">в месяц</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Безлимитные стикеры
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Все стили + эксклюзивные
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Приоритетная поддержка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    Белая маркировка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-orange mr-3" size={20} />
                    API интеграция
                  </li>
                </ul>
                <Button className="w-full bg-orange hover:bg-orange-600">
                  Связаться с нами
                </Button>
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