
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Имитация отправки данных на сервер
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Заявка отправлена",
        description: "Ваша заявка успешно создана и отправлена поставщикам",
      });
      
      // Очистка формы после успешной отправки
      setWeight("");
      setHeight("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100">
      {/* Шапка */}
      <header className="bg-neutral-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Icon name="Wrench" size={24} className="text-yellow-500" />
            <h1 className="text-xl font-bold tracking-tight">СПЕЦТЕХНИКА</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <Button variant="link" className="text-white">Услуги</Button>
            <Button variant="link" className="text-white">Техника</Button>
            <Button variant="link" className="text-white">Контакты</Button>
          </div>
          <Button variant="outline" size="sm" className="md:hidden border-neutral-700 text-white">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      {/* Баннер */}
      <div className="bg-neutral-800 text-white py-16 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1635142913326-12c9ed067660?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">Профессиональная аренда спецтехники для любых строительных задач</h2>
          <p className="text-neutral-300 max-w-xl text-lg">Заполните форму ниже, чтобы создать заявку на аренду техники, и наши поставщики свяжутся с вами в кратчайшие сроки.</p>
        </div>
      </div>

      {/* Основной контент */}
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Форма заявки */}
            <Card className="flex-1 shadow-sm border-neutral-200 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-neutral-800">Создать заявку</CardTitle>
                <CardDescription>
                  Укажите параметры требуемой техники
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="weight" className="text-neutral-800">Грузоподъемность (тонны)</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      placeholder="Например: 5.5"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      className="focus-visible:ring-yellow-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height" className="text-neutral-800">Высота подъема (метры)</Label>
                    <Input
                      id="height"
                      type="number"
                      step="0.1"
                      placeholder="Например: 12.0"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                      className="focus-visible:ring-yellow-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                        Обработка...
                      </>
                    ) : (
                      "Отправить заявку"
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-start text-sm text-neutral-500">
                <p>Нажимая кнопку «Отправить заявку», вы соглашаетесь с обработкой персональных данных.</p>
              </CardFooter>
            </Card>

            {/* Информационный блок */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-white p-6 border border-neutral-200 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                  <Icon name="Info" className="h-5 w-5 text-yellow-500" />
                  О процессе аренды
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white shrink-0">1</div>
                    <div>
                      <p className="font-medium">Заполните форму заявки</p>
                      <p className="text-neutral-500 text-sm">Укажите необходимые параметры техники</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white shrink-0">2</div>
                    <div>
                      <p className="font-medium">Получите предложения</p>
                      <p className="text-neutral-500 text-sm">Поставщики ознакомятся с вашей заявкой и предложат варианты</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white shrink-0">3</div>
                    <div>
                      <p className="font-medium">Выберите подходящий вариант</p>
                      <p className="text-neutral-500 text-sm">Оцените условия и выберите оптимальное предложение</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border border-neutral-200 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-yellow-500" />
                  Наши преимущества
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Shield" className="h-5 w-5 text-neutral-700 mt-0.5 shrink-0" />
                    <span>Проверенные поставщики спецтехники с сертификатами</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-neutral-700 mt-0.5 shrink-0" />
                    <span>Быстрое реагирование на заявки в течение 2 часов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="BadgePercent" className="h-5 w-5 text-neutral-700 mt-0.5 shrink-0" />
                    <span>Конкурентные цены от разных поставщиков</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Truck" className="h-5 w-5 text-neutral-700 mt-0.5 shrink-0" />
                    <span>Техника доставляется точно в срок на объект</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Виды техники */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-neutral-800 mb-8">Доступная спецтехника</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Автокраны", icon: "Cpu", desc: "Грузоподъемность до 100 тонн" },
              { name: "Экскаваторы", icon: "Hammer", desc: "Различной мощности и глубины копания" },
              { name: "Погрузчики", icon: "Forklift", desc: "Фронтальные и телескопические" },
              { name: "Бульдозеры", icon: "Truck", desc: "Для работ любой сложности" },
              { name: "Самосвалы", icon: "Factory", desc: "Разной грузоподъемности" },
              { name: "Автовышки", icon: "Maximize", desc: "Высота подъема до 40 метров" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-neutral-200 rounded-lg shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-neutral-100">
                    <Icon name={item.icon} className="h-5 w-5 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold">{item.name}</h3>
                </div>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-neutral-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Wrench" size={20} className="text-yellow-500" />
                <h3 className="font-bold">СПЕЦТЕХНИКА</h3>
              </div>
              <p className="text-neutral-400 text-sm">
                Сервис подбора спецтехники для строительных, дорожных и погрузочно-разгрузочных работ
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-neutral-400 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4 text-yellow-500" />
                  г. Москва, ул. Строительная, 42
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 text-yellow-500" />
                  +7 (800) 555-35-35
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4 text-yellow-500" />
                  info@spectehnika.ru
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <div className="space-y-2 text-sm">
                <Button variant="link" className="text-neutral-400 h-auto p-0">О компании</Button>
                <br />
                <Button variant="link" className="text-neutral-400 h-auto p-0">Условия аренды</Button>
                <br />
                <Button variant="link" className="text-neutral-400 h-auto p-0">Стать поставщиком</Button>
                <br />
                <Button variant="link" className="text-neutral-400 h-auto p-0">Политика конфиденциальности</Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-6 bg-neutral-800" />
          
          <div className="text-center text-neutral-500 text-sm">
            <p>© 2025 СПЕЦТЕХНИКА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
