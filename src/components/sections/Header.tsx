import { Button } from "@/components/ui/button";

export default function Header() {
  return (
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
  );
}