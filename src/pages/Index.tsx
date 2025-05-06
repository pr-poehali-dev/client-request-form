
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

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
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Шапка */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={24} className="text-blue-600" />
            <h1 className="text-xl font-bold">ГрузПеревозки</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost">О нас</Button>
            <Button variant="ghost">Поставщики</Button>
            <Button variant="ghost">Контакты</Button>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Форма заявки */}
            <Card className="flex-1 shadow-md">
              <CardHeader>
                <CardTitle>Оформить заявку на перевозку</CardTitle>
                <CardDescription>
                  Заполните параметры груза для расчета стоимости и создания заявки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Грузоподъемность (тонны)</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      placeholder="Введите вес груза"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Высота (метры)</Label>
                    <Input
                      id="height"
                      type="number"
                      step="0.1"
                      placeholder="Введите высоту груза"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
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
              <CardFooter className="flex flex-col items-start text-sm text-slate-500">
                <p>После отправки заявки, поставщики получат уведомление и свяжутся с вами.</p>
              </CardFooter>
            </Card>

            {/* Информационный блок */}
            <div className="flex-1 flex flex-col gap-4">
              <Card className="bg-blue-50 border-blue-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Info" className="h-5 w-5 text-blue-500" />
                    Как это работает
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 list-decimal ml-5">
                    <li>Заполните форму с параметрами груза</li>
                    <li>Отправьте заявку в систему</li>
                    <li>Поставщики получат уведомление о вашей заявке</li>
                    <li>Получите предложения от различных поставщиков</li>
                    <li>Выберите наиболее подходящее предложение</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BadgeCheck" className="h-5 w-5 text-green-500" />
                    Преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Быстрое оформление заявки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Проверенные поставщики</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Бесплатное размещение заявок</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Сравнение предложений от разных поставщиков</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ГрузПеревозки</h3>
              <p className="text-slate-300">
                Сервис для подбора поставщиков логистических услуг и оформления заявок на перевозку грузов
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@gruz-perevozki.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (800) 555-35-35
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-700 text-center text-slate-400">
            <p>© 2025 ГрузПеревозки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
