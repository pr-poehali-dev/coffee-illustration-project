import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/5 shadow-lg">
      <div className="container mx-auto px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-black text-gradient tracking-tight">
            CoffeeComics
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#gallery" className="text-gray-300 hover:text-orange transition-all duration-200 font-medium text-lg hover:scale-105">
              Галерея
            </a>
            <a href="#services" className="text-gray-300 hover:text-orange transition-all duration-200 font-medium text-lg hover:scale-105">
              Услуги
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-orange transition-all duration-200 font-medium text-lg hover:scale-105">
              Стоимость
            </a>
            <a href="#contact" className="text-gray-300 hover:text-orange transition-all duration-200 font-medium text-lg hover:scale-105">
              Контакты
            </a>
          </nav>
          <Button 
            variant="outline" 
            className="glass-effect border-2 border-orange/30 text-orange hover:bg-orange hover:text-white px-6 py-3 font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
}