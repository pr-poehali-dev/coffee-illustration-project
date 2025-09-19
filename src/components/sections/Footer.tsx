import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
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
  );
}