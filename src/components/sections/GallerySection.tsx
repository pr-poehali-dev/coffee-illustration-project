import { Card, CardContent } from "@/components/ui/card";

export default function GallerySection() {
  return (
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

        <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
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

          <Card className="glass-card overflow-hidden group animate-fade-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.6s'}}>
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/afeede1f-d11f-4eea-a68b-70cafb70f674.jpg" 
                  alt="Аниме девочка с розовыми волосами пьет кофе в стиле кавайи" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-2xl mb-2">Аниме девочка</h3>
                  <p className="text-gray-200 text-lg">Стиль: Кавайи аниме</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="glass-effect px-3 py-1 rounded-full text-pink-400 font-semibold">
                    Трендовый
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card overflow-hidden group animate-fade-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.8s'}}>
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/0f93ddc0-4ad8-41b8-b1ff-92da6f239830.jpg" 
                  alt="Стильный аниме парень с синими волосами на кофейном стаканчике" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-2xl mb-2">Аниме парень</h3>
                  <p className="text-gray-200 text-lg">Стиль: Урбан аниме</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="glass-effect px-3 py-1 rounded-full text-purple-400 font-semibold">
                    Стильный
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}