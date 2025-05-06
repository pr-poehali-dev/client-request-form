import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

const Index = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [engineType, setEngineType] = useState("diesel");
  const [needsSideShift, setNeedsSideShift] = useState(false);
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
        description: "Ваша заявка успешно создана и отправлена поставщикам погрузчиков",
      });
      
      // Очистка формы после успешной отправки
      setWeight("");
      setHeight("");
      setEngineType("diesel");
      setNeedsSideShift(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100">
      {/* Шапка */}
      <header className="bg-neutral-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Icon name="Forklift" size={24} className="text-yellow-500" />
            <h1 className="text-xl font-bold tracking-tight">ВИЛОЧНЫЕ ПОГРУЗЧИКИ</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <Button variant="link" className="text-white">Каталог</Button>
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
            backgroundImage: "url('https://images.unsplash.com/photo-1604413764976-8ca8f6e3e346?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">Профессиональный подбор вилочных погрузчиков для вашего склада</h2>
          <p className="text-neutral-300 max-w-xl text-lg">Заполните форму ниже, чтобы создать заявку на подбор подходящего погрузчика, и наши поставщики свяжутся с вами в кратчайшие сроки.</p>
        </div>
      </div>

      {/* Основной контент */}
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Инфографика процесса */}
          <div className="mb-12 bg-white p-8 border border-neutral-200 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Как работает наш сервис</h2>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-yellow-500 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-3 rounded-full border-4 border-yellow-500 mb-4">
                    <div className="bg-neutral-800 rounded-full p-3">
                      <Icon name="ClipboardList" className="h-8 w-8 text-yellow-500" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Создайте заявку</h3>
                  <p className="text-neutral-600">Заполните форму с требуемыми параметрами вилочного погрузчика</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-3 rounded-full border-4 border-yellow-500 mb-4">
                    <div className="bg-neutral-800 rounded-full p-3">
                      <Icon name="Users" className="h-8 w-8 text-yellow-500" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Получите предложения</h3>
                  <p className="text-neutral-600">Проверенные поставщики отправят вам свои лучшие предложения</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-3 rounded-full border-4 border-yellow-500 mb-4">
                    <div className="bg-neutral-800 rounded-full p-3">
                      <Icon name="CheckCircle" className="h-8 w-8 text-yellow-500" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Выберите лучшее</h3>
                  <p className="text-neutral-600">Сравните предложения и выберите идеальный погрузчик по лучшей цене</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <div className="bg-neutral-100 p-6 rounded-lg max-w-3xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1595246325150-2db41d583926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                      alt="Вилочный погрузчик" 
                      className="rounded-lg shadow-md w-full md:w-40 lg:w-48 h-auto object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-neutral-800">Преимущества покупки через наш сервис</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                        <span>Экономия до 15% благодаря конкуренции поставщиков</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                        <span>Все поставщики проверены и имеют отличную репутацию</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
                        <span>Помощь в выборе технических характеристик под ваши задачи</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Форма заявки */}
            <Card className="flex-1 shadow-sm border-neutral-200 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-neutral-800">Создать заявку</CardTitle>
                <CardDescription>
                  Укажите параметры требуемого погрузчика
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
                      placeholder="Например: 3.5"
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
                      placeholder="Например: 4.5"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                      className="focus-visible:ring-yellow-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-neutral-800">Тип двигателя</Label>
                    <RadioGroup 
                      value={engineType} 
                      onValueChange={setEngineType}
                      className="flex gap-6 pt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="diesel" id="diesel" />
                        <Label htmlFor="diesel" className="cursor-pointer">Дизель</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="petrol" id="petrol" />
                        <Label htmlFor="petrol" className="cursor-pointer">Бензин</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="electric" id="electric" />
                        <Label htmlFor="electric" className="cursor-pointer">Электро</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch 
                      id="sideshift" 
                      checked={needsSideShift} 
                      onCheckedChange={setNeedsSideShift} 
                    />
                    <Label htmlFor="sideshift" className="cursor-pointer">Нужна каретка бокового смещения</Label>
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
                  О процессе подбора
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white shrink-0">1</div>
                    <div>
                      <p className="font-medium">Заполните форму заявки</p>
                      <p className="text-neutral-500 text-sm">Укажите необходимые параметры погрузчика</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white shrink-0">2</div>
                    <div>
                      <p className="font-medium">Получите предложения</p>
                      <p className="text-neutral-500 text-sm">Поставщики предложат подходящие модели вилочных погрузчиков</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white shrink-0">3</div>
                    <div>
                      <p className="font-medium">Выберите подходящий погрузчик</p>
                      <p className="text-neutral-500 text-sm">Оцените технические характеристики и выберите оптимальный вариант</p>
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
                    <span>Проверенные поставщики складской техники с гарантией</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-neutral-700 mt-0.5 shrink-0" />
                    <span>Быстрый подбор оптимальной техники в течение 2 часов</span>
                  </li>
                  { /* <li className=