import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '',
    dietary: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за подтверждение! Мы свяжемся с вами в ближайшее время.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/e0826c45-8e7e-4d04-9483-59421fe4f5a3.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              20 ЛЕТ
            </h1>
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl">
              <Icon name="Cake" size={32} className="text-primary" />
              <span className="text-primary font-semibold">День Рождения</span>
              <Icon name="PartyPopper" size={32} className="text-primary" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Приглашаем вас отпраздновать незабываемый вечер в честь моего двадцатилетия!
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg animate-scale-in"
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Подтвердить участие
          </Button>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-primary" />
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Детали события</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Дата и время</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-2">20 сентября 2025</p>
                <p className="text-muted-foreground">Начало в 17:00</p>
                <p className="text-sm text-muted-foreground mt-2">Окончание около 00:00</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Место проведения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-2">Event Hall "Celebration"</p>
                <p className="text-muted-foreground">ул. Праздничная, 25</p>
                <p className="text-sm text-muted-foreground mt-2">Москва, метро Сокольники</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shirt" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Дресс-код</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-2">Элегантный стиль</p>
                <p className="text-muted-foreground">Черный и розовый</p>
                <p className="text-sm text-muted-foreground mt-2">Коктейльные наряды приветствуются</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Программа вечера</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">17:00 - 18:00</h3>
                <p className="text-muted-foreground">Приветственный коктейль и регистрация гостей</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Utensils" size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">18:00 - 19:30</h3>
                <p className="text-muted-foreground">Праздничный ужин и тосты</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Music" size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">19:30 - 22:00</h3>
                <p className="text-muted-foreground">Танцы под живую музыку и DJ-сет</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Cake" size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">22:00 - 00:00</h3>
                <p className="text-muted-foreground">Торт, фотосессия и afterparty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section id="rsvp" className="py-16 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Подтверждение участия</h2>
          
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Буду рад видеть вас на празднике!</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="attending">Буду присутствовать *</Label>
                  <select
                    id="attending"
                    name="attending"
                    value={formData.attending}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Выберите ответ</option>
                    <option value="yes">Да, обязательно приду!</option>
                    <option value="no">К сожалению, не смогу</option>
                    <option value="maybe">Пока не уверен(а)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="guests">Количество гостей (включая вас)</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="4"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="dietary">Особенности питания</Label>
                  <Input
                    id="dietary"
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleInputChange}
                    placeholder="Вегетарианство, аллергии и т.д."
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Пожелания и комментарии</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                  size="lg"
                >
                  Отправить подтверждение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map & Contact */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Как добраться</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Адрес и контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Event Hall "Celebration"</h4>
                  <p className="text-muted-foreground">ул. Праздничная, 25</p>
                  <p className="text-muted-foreground">Москва, 105066</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Транспорт</h4>
                  <p className="text-muted-foreground">🚇 Метро Сокольники (5 мин пешком)</p>
                  <p className="text-muted-foreground">🚗 Парковка доступна</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Контакт</h4>
                  <p className="text-muted-foreground">📞 +7 (999) 123-45-67</p>
                  <p className="text-muted-foreground">✉️ birthday@example.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Navigation" size={24} className="text-primary" />
                  Интерактивная карта
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Карта будет доступна ближе к событию</p>
                    <Button variant="outline" className="mt-4">
                      Открыть в Яндекс.Картах
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">До встречи на празднике!</h3>
            <p className="text-gray-300 mb-6">
              Этот день станет особенным благодаря каждому из вас. 
              Спасибо, что разделите со мной радость двадцатилетия!
            </p>
            <div className="flex justify-center gap-6 text-3xl">
              🎉 🎂 🥳 💖 🎈
            </div>
          </div>
          
          <Separator className="bg-gray-800 mb-8" />
          
          <div className="text-sm text-gray-400">
            <p>© 2025 День Рождения. Создано с ❤️ для незабываемого праздника</p>
          </div>
        </div>
      </footer>
    </div>
  );
}