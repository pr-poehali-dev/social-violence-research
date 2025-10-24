import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

export default function Index() {
  const [activeSection, setActiveSection] = useState('theory');

  const sections = [
    { id: 'theory', label: 'Теория', icon: 'BookOpen' },
    { id: 'analysis', label: 'Анализ', icon: 'Brain' },
    { id: 'literature', label: 'Литература', icon: 'Library' },
    { id: 'conclusion', label: 'Заключение', icon: 'FileText' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Насилие и агрессия
          </h1>
          <p className="text-lg text-muted-foreground">
            Социально-психологические и этические проблемы современной культуры
          </p>
        </div>
      </header>

      <nav className="border-b border-border bg-white sticky top-[120px] z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex gap-2 flex-wrap">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'outline'}
                onClick={() => setActiveSection(section.id)}
                className="gap-2"
              >
                <Icon name={section.icon} size={18} />
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {activeSection === 'theory' && (
          <section className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Теоретическая часть</h2>
              
              <Card className="p-8 mb-6 border-l-4 border-l-accent">
                <blockquote className="text-xl italic text-foreground mb-4">
                  "Агрессия есть любая форма поведения, нацеленного на оскорбление или причинение вреда другому живому существу, не желающему подобного обращения"
                </blockquote>
                <p className="text-sm text-muted-foreground">— Роберт Бэрон</p>
              </Card>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">1.1 Понятие агрессии и насилия</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  Агрессия и насилие представляют собой сложные многоаспектные феномены, 
                  требующие междисциплинарного подхода к их изучению. В современной науке 
                  существует множество определений агрессии, отражающих различные теоретические 
                  подходы к пониманию этого явления.
                </p>

                <Card className="p-6 bg-muted/30 mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Icon name="BookMarked" size={20} />
                    Ключевые характеристики агрессии
                  </h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground">
                    <li>Намеренность причинения вреда</li>
                    <li>Направленность на живое существо</li>
                    <li>Нежелательность для жертвы</li>
                    <li>Реальное или потенциальное причинение ущерба</li>
                  </ul>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-secondary">1.2 Теории агрессии</h3>
                
                <div className="grid gap-6 mb-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon name="Dna" size={32} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Биологические теории</h4>
                        <p className="text-foreground leading-relaxed">
                          Рассматривают агрессию как врожденное свойство человека. 
                          Зигмунд Фрейд полагал, что агрессивность является инстинктивной, 
                          производной от влечения к смерти (танатос).
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon name="Users" size={32} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Социальные теории</h4>
                        <p className="text-foreground leading-relaxed">
                          Теория социального научения А. Бандуры подчеркивает роль наблюдения 
                          и подражания в формировании агрессивного поведения. Агрессия усваивается 
                          через наблюдение за моделями и последующее подкрепление.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon name="Zap" size={32} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Теория фрустрации-агрессии</h4>
                        <p className="text-foreground leading-relaxed">
                          Доллард и его коллеги утверждали, что агрессия всегда является 
                          следствием фрустрации, а фрустрация всегда ведет к агрессии. 
                          Позднее теория была модифицирована и уточнена.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'analysis' && (
          <section className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Аналитический раздел</h2>
              
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">2.1 Насилие в современном обществе</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  Современное общество сталкивается с многообразными формами насилия, 
                  каждая из которых имеет свои особенности и требует специфических подходов 
                  к предотвращению и преодолению.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6 border-l-4 border-l-primary">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Home" size={20} />
                      Домашнее насилие
                    </h4>
                    <p className="text-sm text-foreground">
                      Психологическое, физическое и экономическое насилие в семье. 
                      Затрагивает миллионы людей по всему миру.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-primary">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Monitor" size={20} />
                      Кибербуллинг
                    </h4>
                    <p className="text-sm text-foreground">
                      Новая форма агрессии в цифровую эпоху. Психологическое давление 
                      через интернет и социальные сети.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-primary">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Building2" size={20} />
                      Структурное насилие
                    </h4>
                    <p className="text-sm text-foreground">
                      Системное неравенство и дискриминация, встроенные в социальные 
                      институты и структуры общества.
                    </p>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-primary">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Globe" size={20} />
                      Медианасилие
                    </h4>
                    <p className="text-sm text-foreground">
                      Воздействие сцен насилия в СМИ, кино и видеоиграх на формирование 
                      агрессивного поведения.
                    </p>
                  </Card>
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-secondary">2.2 Этические аспекты проблемы</h3>
                
                <Card className="p-8 bg-accent/5 border-accent/30 mb-6">
                  <p className="text-foreground leading-relaxed mb-4">
                    Этическое измерение проблемы насилия и агрессии связано с фундаментальными 
                    вопросами о природе человека, свободе воли, ответственности и достоинстве 
                    личности. Современная этика предлагает различные подходы к оценке насилия:
                  </p>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Деонтологический подход</strong> — насилие абсолютно недопустимо, 
                      нарушает категорический императив Канта</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Консеквенциалистский подход</strong> — оценка насилия через 
                      анализ его последствий для общего блага</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Этика добродетели</strong> — рассмотрение насилия как проявления 
                      пороков и отсутствия добродетелей</span>
                    </li>
                  </ul>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-secondary">2.3 Психологические механизмы</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  Понимание психологических механизмов агрессии необходимо для разработки 
                  эффективных стратегий профилактики и коррекции агрессивного поведения.
                </p>

                <Card className="p-6 bg-muted/30">
                  <h4 className="text-lg font-semibold mb-4">Факторы, способствующие агрессии:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="CircleDot" size={16} className="mt-1 text-accent flex-shrink-0" />
                      <p className="text-foreground">Деиндивидуализация и снижение личной ответственности в группе</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CircleDot" size={16} className="mt-1 text-accent flex-shrink-0" />
                      <p className="text-foreground">Дегуманизация жертвы и моральное оправдание насилия</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CircleDot" size={16} className="mt-1 text-accent flex-shrink-0" />
                      <p className="text-foreground">Влияние ситуационных факторов: жара, шум, теснота, алкоголь</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="CircleDot" size={16} className="mt-1 text-accent flex-shrink-0" />
                      <p className="text-foreground">Когнитивные искажения и враждебная атрибуция намерений</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'literature' && (
          <section className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Список литературы</h2>
              
              <div className="space-y-4">
                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      1
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Бэрон Р., Ричардсон Д. Агрессия. — СПб.: Питер, 2014. — 416 с.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      2
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Бандура А., Уолтерс Р. Подростковая агрессия. Изучение влияния воспитания и семейных отношений. — М.: Апрель Пресс, 2000. — 512 с.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      3
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Фрейд З. Психология бессознательного. — М.: Просвещение, 1990. — 448 с.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      4
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Лоренц К. Агрессия (так называемое «зло»). — М.: Прогресс, 1994. — 272 с.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      5
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Бютнер К. Жить с агрессивными детьми. — М.: Педагогика, 1991. — 144 с.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      6
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Берковиц Л. Агрессия: причины, последствия и контроль. — СПб.: Прайм-Еврознак, 2001. — 512 с.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      7
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Реан А.А. Агрессия и агрессивность личности // Психологический журнал. 1996. Т. 17. № 5. С. 3-18.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      8
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Ениколопов С.Н. Понятие агрессии в современной психологии // Прикладная психология. 2001. № 1. С. 60-72.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      9
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Можгинский Ю.Б. Агрессия: эмоциональный и кризисный механизм. — СПб.: Питер, 1999. — 256 с.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      10
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Фромм Э. Анатомия человеческой деструктивности. — М.: АСТ, 2004. — 635 с.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'conclusion' && (
          <section className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Заключение</h2>
              
              <div className="prose prose-lg max-w-none">
                <Card className="p-8 mb-6 bg-gradient-to-br from-primary/5 to-accent/5">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    Проблема насилия и агрессии в современной культуре представляет собой 
                    сложный междисциплинарный комплекс вопросов, требующих интегрированного 
                    подхода со стороны философии, психологии, социологии и этики.
                  </p>
                </Card>

                <h3 className="text-2xl font-semibold mb-4 text-secondary">Основные выводы исследования</h3>
                
                <div className="space-y-6 mb-8">
                  <Card className="p-6 border-l-4 border-l-accent">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-lg">
                          1
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Многофакторность природы агрессии</h4>
                        <p className="text-foreground leading-relaxed">
                          Агрессия не может быть объяснена с позиций какой-либо одной теории. 
                          Необходим интегративный подход, учитывающий биологические, психологические, 
                          социальные и культурные факторы.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-accent">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-lg">
                          2
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Трансформация форм насилия</h4>
                        <p className="text-foreground leading-relaxed">
                          Современное общество сталкивается с новыми формами агрессии и насилия, 
                          связанными с цифровизацией, медиатизацией и глобализацией. Кибербуллинг, 
                          информационное насилие требуют новых подходов к профилактике.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-accent">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-lg">
                          3
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Этическая ответственность</h4>
                        <p className="text-foreground leading-relaxed">
                          Преодоление насилия требует не только социальных и правовых мер, 
                          но и формирования этической культуры, основанной на признании 
                          абсолютной ценности человеческой личности и ненасилия как принципа.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-accent">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-lg">
                          4
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg">Профилактика и образование</h4>
                        <p className="text-foreground leading-relaxed">
                          Ключевую роль в предотвращении агрессии играют образование, 
                          воспитание эмпатии, развитие навыков ненасильственного общения 
                          и конструктивного разрешения конфликтов.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Separator className="my-8" />

                <div className="bg-muted/30 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Перспективы дальнейших исследований</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Дальнейшее изучение проблемы насилия и агрессии должно быть направлено на:
                  </p>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="mt-1 text-accent flex-shrink-0" />
                      <span>Разработку эффективных программ профилактики агрессивного поведения</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="mt-1 text-accent flex-shrink-0" />
                      <span>Изучение влияния цифровых технологий на формирование агрессии</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="mt-1 text-accent flex-shrink-0" />
                      <span>Анализ культурных различий в восприятии и проявлении агрессии</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="mt-1 text-accent flex-shrink-0" />
                      <span>Создание междисциплинарных моделей понимания и коррекции насилия</span>
                    </li>
                  </ul>
                </div>

                <Card className="p-8 mt-8 bg-primary text-primary-foreground">
                  <p className="text-lg leading-relaxed italic">
                    "Только через понимание глубинных причин агрессии и насилия, 
                    через формирование культуры мира и ненасилия возможно создание 
                    гуманного общества, где достоинство каждого человека будет абсолютной ценностью."
                  </p>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-muted-foreground text-sm">
            Философский реферат • 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
