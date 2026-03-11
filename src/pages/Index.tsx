import { useState } from "react";
import Icon from "@/components/ui/icon";

const errors = [
  {
    id: 1,
    number: "01",
    title: "Слишком много текста на слайде",
    description:
      "Слайд превращается в документ. Аудитория читает, а не слушает вас.",
    example: {
      wrong: "Наша компания была основана в 2005 году и с тех пор прошла долгий путь развития. Мы работаем в 15 странах мира, имеем более 500 сотрудников и оборот свыше 2 миллиардов рублей в год...",
      right: "500+ сотрудников · 15 стран · с 2005 года",
    },
    steps: [
      "Оставьте на слайде максимум 1 мысль",
      "Используйте правило «6×6»: не больше 6 строк, не больше 6 слов в строке",
      "Детали — в раздаточный материал, не на экран",
    ],
    tip: "Если слайд можно прочитать без вас — он лишний.",
  },
  {
    id: 2,
    number: "02",
    title: "Нечитаемые шрифты и размеры",
    description:
      "Мелкий текст, декоративные шрифты — аудитория напрягается и теряет нить.",
    example: {
      wrong: "Основные показатели эффективности нашей маркетинговой стратегии — размером 12pt",
      right: "Итоги маркетинга — крупно и ясно",
    },
    steps: [
      "Минимальный размер текста — 24pt для тела, 36pt+ для заголовков",
      "Только 2 шрифта: один для заголовков, один для текста",
      "Проверьте читаемость с расстояния 3 метра",
    ],
    tip: "Встаньте в 3 метрах от экрана. Если не читается — увеличьте.",
  },
  {
    id: 3,
    number: "03",
    title: "Слабый визуальный контраст",
    description:
      "Серый текст на белом фоне, синий на зелёном — глаза устают, внимание рассеивается.",
    example: {
      wrong: "Светло-серый текст на белом фоне или жёлтый на белом",
      right: "Тёмный текст на светлом фоне — контраст минимум 4.5:1",
    },
    steps: [
      "Соотношение контраста — минимум 4.5:1 (проверьте на contrast-ratio.com)",
      "Избегайте пастельных цветов для основного текста",
      "Тёмный фон + белый текст работают лучше в больших залах",
    ],
    tip: "Сфотографируйте слайд в чёрно-белом режиме. Всё читается? Отлично.",
  },
  {
    id: 4,
    number: "04",
    title: "Нет визуальной иерархии",
    description:
      "Все элементы одинакового размера — глаз не знает, куда смотреть первым.",
    example: {
      wrong: "Заголовок 20pt · Подзаголовок 18pt · Текст 16pt — разницы не видно",
      right: "Заголовок 40pt · Подзаголовок 24pt · Текст 18pt — сразу понятна структура",
    },
    steps: [
      "Главное — самое большое и жирное",
      "Используйте отступы для группировки связанных элементов",
      "Направляйте взгляд: Z-паттерн (слева направо, сверху вниз)",
    ],
    tip: "Прищурьтесь и посмотрите на слайд. Что выделяется первым?",
  },
  {
    id: 5,
    number: "05",
    title: "Анимации ради анимаций",
    description:
      "«Влет», «вращение», «пружина» — отвлекает, замедляет, раздражает аудиторию.",
    example: {
      wrong: "Каждый элемент «прилетает» с разных сторон в разное время",
      right: "Простое появление или вообще без анимации",
    },
    steps: [
      "Используйте анимацию только для объяснения процессов",
      "Максимум 1 тип анимации во всей презентации",
      "Скорость — быстрая (0.3–0.5 сек), не медленная",
    ],
    tip: "Если убрать анимацию и смысл не потеряется — убирайте.",
  },
  {
    id: 6,
    number: "06",
    title: "Нет единого стиля",
    description:
      "Каждый слайд выглядит как из разной презентации. Хаос убивает доверие.",
    example: {
      wrong: "Синий слайд → белый → с градиентом → с фото → снова синий",
      right: "Единая цветовая схема и шаблон на всех слайдах",
    },
    steps: [
      "Создайте мастер-слайд с цветами и шрифтами",
      "Максимум 3 цвета во всей презентации",
      "Одинаковые поля и отступы на каждом слайде",
    ],
    tip: "Создайте шаблон один раз — и придерживайтесь его.",
  },
];

export default function Index() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"example" | "steps">("example");

  const handleCardClick = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setActiveTab("example");
    }
  };

  const active = errors.find((e) => e.id === activeId);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-10 flex items-end justify-between">
          <div>
            <p
              className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3 animate-fade-in"
              style={{ opacity: 0, animationFillMode: "forwards", animationDelay: "0.1s" }}
            >
              Руководство
            </p>
            <h1
              className="font-display text-5xl md:text-7xl font-light leading-none animate-fade-up"
              style={{ opacity: 0, animationFillMode: "forwards", animationDelay: "0.2s" }}
            >
              Ошибки
              <br />
              <em className="not-italic" style={{ color: "hsl(var(--accent))" }}>
                презентаций
              </em>
            </h1>
          </div>
          <div
            className="hidden md:block text-right animate-fade-in"
            style={{ opacity: 0, animationFillMode: "forwards", animationDelay: "0.5s" }}
          >
            <p className="font-body text-sm text-muted-foreground max-w-[180px] leading-relaxed">
              6 критических ошибок и как их исправить
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 pb-0">
          <div
            className="h-px bg-foreground origin-left animate-line-grow"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Grid of errors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {errors.map((error, i) => (
            <button
              key={error.id}
              onClick={() => handleCardClick(error.id)}
              className={`
                group relative bg-background p-8 text-left transition-all duration-300
                hover:bg-foreground hover:text-background
                animate-fade-up
                ${activeId === error.id ? "bg-foreground text-background" : ""}
              `}
              style={{
                animationDelay: `${0.3 + i * 0.08}s`,
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`font-display text-6xl font-light leading-none transition-colors duration-300 ${
                    activeId === error.id
                      ? "text-background/20"
                      : "text-foreground/10 group-hover:text-background/20"
                  }`}
                >
                  {error.number}
                </span>
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeId === error.id
                      ? "border-background/40 bg-background/10"
                      : "border-border group-hover:border-background/40"
                  }`}
                >
                  <Icon
                    name={activeId === error.id ? "X" : "Plus"}
                    size={14}
                    className={
                      activeId === error.id
                        ? "text-background"
                        : "text-muted-foreground group-hover:text-background"
                    }
                  />
                </div>
              </div>
              <h2 className="font-display text-xl font-medium leading-tight mb-3">
                {error.title}
              </h2>
              <p
                className={`font-body text-sm leading-relaxed transition-colors duration-300 ${
                  activeId === error.id
                    ? "text-background/70"
                    : "text-muted-foreground group-hover:text-background/70"
                }`}
              >
                {error.description}
              </p>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        {active && (
          <div
            key={active.id}
            className="mt-px bg-foreground text-background animate-fade-up"
            style={{ opacity: 0, animationFillMode: "forwards" }}
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-display text-4xl font-light text-background/20">
                  {active.number}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-medium">
                  {active.title}
                </h3>
              </div>

              {/* Tabs */}
              <div className="flex gap-0 border border-background/20 w-fit mb-8">
                <button
                  onClick={() => setActiveTab("example")}
                  className={`font-body text-sm px-6 py-2.5 tracking-wide transition-all duration-200 ${
                    activeTab === "example"
                      ? "bg-background text-foreground"
                      : "text-background/60 hover:text-background"
                  }`}
                >
                  Пример
                </button>
                <button
                  onClick={() => setActiveTab("steps")}
                  className={`font-body text-sm px-6 py-2.5 tracking-wide transition-all duration-200 ${
                    activeTab === "steps"
                      ? "bg-background text-foreground"
                      : "text-background/60 hover:text-background"
                  }`}
                >
                  Решение
                </button>
              </div>

              {activeTab === "example" && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-red-400/30 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="font-body text-xs tracking-[0.2em] uppercase text-red-400">
                        Как делают
                      </span>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-background/60 italic">
                      "{active.example.wrong}"
                    </p>
                  </div>
                  <div className="border border-green-400/30 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                      <span className="font-body text-xs tracking-[0.2em] uppercase text-green-400">
                        Как надо
                      </span>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-background/80 font-medium">
                      "{active.example.right}"
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "steps" && (
                <div>
                  <div className="space-y-4 mb-8">
                    {active.steps.map((step, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-background/30 flex items-center justify-center mt-0.5">
                          <span className="font-body text-xs text-background/60">
                            {i + 1}
                          </span>
                        </div>
                        <p className="font-body text-sm leading-relaxed text-background/80">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-background/20 pt-6">
                    <div className="flex gap-3 items-start">
                      <Icon
                        name="Lightbulb"
                        size={16}
                        className="text-yellow-400 flex-shrink-0 mt-0.5"
                      />
                      <p className="font-body text-sm text-background/60 italic">
                        {active.tip}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <p className="font-body text-xs text-muted-foreground tracking-wide">
            Нажмите на карточку, чтобы раскрыть детали
          </p>
          <p className="font-display text-sm text-muted-foreground italic">
            {errors.length} ошибок
          </p>
        </div>
      </main>
    </div>
  );
}
