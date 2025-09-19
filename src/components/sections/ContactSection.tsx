import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function ContactSection() {
  return (
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
  );
}