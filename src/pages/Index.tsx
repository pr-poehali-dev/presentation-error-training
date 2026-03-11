import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const mistakes = [
  {
    id: 1,
    tag: "Текст",
    title: "Слайд как документ",
    subtitle: "Слишком много текста",
    color: "#E85D26",
    icon: "FileText",
    description:
      "Люди читают быстрее, чем вы говорите. Как только на экране появляется длинный текст — аудитория перестаёт вас слышать и начинает читать. Связь потеряна.",
    before: {
      label: "Типичный слайд",
      content: [
        "Наша компания основана в 2005 году командой из трёх энтузиастов",
        "За 19 лет выросли с 3 до 500+ сотрудников в 15 странах",
        "Ежегодный оборот превысил 2 миллиарда рублей в 2023 году",
        "Ключевые продукты: CRM, ERP, HR-платформа и облачные решения",
        "Входим в топ-50 ИТ-компаний России по версии Forbes",
      ],
    },
    after: {
      label: "Правильно",
      content: "500+ сотрудников\n15 стран\nс 2005 года",
      note: "Всё остальное — вы рассказываете устно",
    },
    rules: [
      { icon: "Hash", text: "Правило 6×6: не больше 6 строк и 6 слов в строке" },
      { icon: "MessageSquare", text: "1 слайд = 1 мысль. Остальное — ваши слова" },
      { icon: "BookOpen", text: "Детали — в раздаточный материал, не на экран" },
    ],
    insight: "Если слайд можно прочитать без вас — он лишний.",
  },
  {
    id: 2,
    tag: "Типографика",
    title: "Нечитаемый шрифт",
    subtitle: "Размер и выбор гарнитуры",
    color: "#8B5CF6",
    icon: "Type",
    description:
      "Мелкий текст, декоративные шрифты, курсив на тёмном фоне — аудитория в дальних рядах просто не видит ваш слайд и перестаёт следить.",
    before: {
      label: "Частые ошибки",
      content: [
        "Размер 12pt — «поместится больше текста»",
        "Декоративные шрифты типа Comic Sans или Papyrus",
        "Курсивный текст целыми абзацами",
        "Сжатый межстрочный интервал 1.0",
        "4 разных шрифта на одном слайде",
      ],
    },
    after: {
      label: "Правильно",
      content: "Заголовок: 40pt+\nОсновной текст: 24pt+\nПодписи: 18pt+",
      note: "Проверяйте с расстояния 3 метра",
    },
    rules: [
      { icon: "ZoomIn", text: "Минимум 24pt для тела, 36pt+ для заголовков" },
      { icon: "Layers", text: "Максимум 2 шрифта: заголовок + текст" },
      { icon: "AlignLeft", text: "Межстрочный интервал 1.3–1.5 для читаемости" },
    ],
    insight: "Встаньте в 3 метрах от экрана. Не читается — увеличьте.",
  },
  {
    id: 3,
    tag: "Цвет",
    title: "Слабый контраст",
    subtitle: "Цвет фона и текста",
    color: "#10B981",
    icon: "Contrast",
    description:
      "Серый текст на белом фоне, жёлтый на белом, синий на зелёном. Глаза устают уже через 2 минуты, внимание рассеивается, аудитория смотрит в телефон.",
    before: {
      label: "Плохой контраст",
      content: [
        "Светло-серый #CCCCCC на белом фоне",
        "Жёлтый текст на белом или светло-сером",
        "Синий на зелёном — цветовой конфликт",
        "Красный текст на тёмно-красном фоне",
        "Пастельные оттенки для основного текста",
      ],
    },
    after: {
      label: "Правильно",
      content: "Контраст минимум\n4.5 : 1\n(WCAG AA стандарт)",
      note: "contrast-ratio.com — проверьте прямо сейчас",
    },
    rules: [
      { icon: "Sun", text: "Соотношение контраста ≥ 4.5:1 по стандарту WCAG" },
      { icon: "Moon", text: "В больших залах: тёмный фон + белый текст" },
      { icon: "Camera", text: "Сфотографируйте в ЧБ — если читается, всё хорошо" },
    ],
    insight: "Распечатайте в чёрно-белом — если читается, контраст достаточен.",
  },
  {
    id: 4,
    tag: "Структура",
    title: "Нет иерархии",
    subtitle: "Всё одного размера",
    color: "#F59E0B",
    icon: "Layers",
    description:
      "Когда все элементы одинакового размера и веса, глаз не знает с чего начать. Аудитория тратит 3–5 секунд на «расшифровку» каждого слайда.",
    before: {
      label: "Проблема",
      content: [
        "Заголовок 20pt — Подзаголовок 18pt — Текст 16pt",
        "Все элементы одного цвета и насыщенности",
        "Нет пустого пространства между блоками",
        "Одинаковые отступы везде",
        "Ключевые слова не выделены жирным",
      ],
    },
    after: {
      label: "Правильно",
      content: "Заголовок: 48pt жирный\nПодзаголовок: 28pt\nТекст: 20pt светлый",
      note: "Разница должна быть очевидной с первого взгляда",
    },
    rules: [
      { icon: "Triangle", text: "Главное — самое большое, яркое и жирное" },
      { icon: "Maximize2", text: "Используйте пустое пространство как разделитель" },
      { icon: "Eye", text: "Z-паттерн: взгляд идёт слева направо, сверху вниз" },
    ],
    insight: "Прищурьтесь. Что выделяется первым? Это должна быть главная мысль.",
  },
  {
    id: 5,
    tag: "Анимация",
    title: "Лишние эффекты",
    subtitle: "Анимации ради анимаций",
    color: "#EC4899",
    icon: "Sparkles",
    description:
      "«Влёт» со всех сторон, «вращение», звуки при переходах. Это отвлекает от содержания и сигнализирует: автор скрывает слабость контента за спецэффектами.",
    before: {
      label: "Типичные ошибки",
      content: [
        "Каждый элемент «прилетает» с разной стороны",
        "Звуковые эффекты при появлении текста",
        "Анимация длится 2–3 секунды на каждый элемент",
        "Разные типы анимаций на каждом слайде",
        "«Вращение», «спираль», «отскок»",
      ],
    },
    after: {
      label: "Правильно",
      content: "Fade (появление) 0.3 сек\nили вообще без анимации",
      note: "Анимация усиливает смысл, а не заменяет его",
    },
    rules: [
      { icon: "Play", text: "Анимация только там, где помогает понять процесс" },
      { icon: "Zap", text: "Один тип анимации для всей презентации" },
      { icon: "Clock", text: "Скорость: 0.2–0.4 сек. Не медленнее" },
    ],
    insight: "Уберите все анимации. Потерялся смысл? Нет? Значит, они были лишними.",
  },
  {
    id: 6,
    tag: "Стиль",
    title: "Хаос в оформлении",
    subtitle: "Нет единого стиля",
    color: "#06B6D4",
    icon: "Palette",
    description:
      "Каждый слайд будто из другой презентации: разные цвета, шрифты, размеры. Аудитория тратит энергию на адаптацию вместо усвоения информации.",
    before: {
      label: "Симптомы хаоса",
      content: [
        "Синий слайд → белый → с градиентом → с фото → синий",
        "5 разных цветов заголовков по всей презентации",
        "Логотип то слева, то справа, то отсутствует",
        "Разные размеры полей на каждом слайде",
        "Смешение серьёзного и игривого стилей",
      ],
    },
    after: {
      label: "Правильно",
      content: "3 цвета максимум\n2 шрифта максимум\n1 мастер-шаблон",
      note: "Создайте один раз — используйте везде",
    },
    rules: [
      { icon: "Grid", text: "Мастер-слайд с фиксированными цветами и шрифтами" },
      { icon: "Droplets", text: "Правило трёх цветов: основной, акцент, нейтральный" },
      { icon: "Ruler", text: "Одинаковые поля и позиция логотипа на всех слайдах" },
    ],
    insight: "Ваша презентация — не конкурс по дизайну. Единообразие = профессионализм.",
  },
  {
    id: 7,
    tag: "Данные",
    title: "Перегруженные графики",
    subtitle: "Слишком много данных",
    color: "#F97316",
    icon: "BarChart2",
    description:
      "12 линий на одном графике, легенда из 8 пунктов, подписи на каждой точке. Через 5 секунд аудитория сдаётся. Данные должны доказывать вашу мысль, а не демонстрировать знание Excel.",
    before: {
      label: "Типичные ошибки",
      content: [
        "Столбчатая диаграмма с 15 параметрами",
        "Круговая диаграмма из 10+ сегментов",
        "3D-эффекты на графиках (искажают восприятие)",
        "Подписи данных на каждой точке графика",
        "Два разных типа графиков на одном слайде",
      ],
    },
    after: {
      label: "Правильно",
      content: "1 график = 1 вывод\nВыделите ключевую цифру\nОстальное — контекст",
      note: "Напишите вывод прямо на слайде крупным шрифтом",
    },
    rules: [
      { icon: "TrendingUp", text: "1 диаграмма — 1 вывод, написанный словами" },
      { icon: "Highlighter", text: "Выделите нужный столбец цветом, остальное серое" },
      { icon: "Minus", text: "Уберите все 3D-эффекты — они искажают данные" },
    ],
    insight: "Заголовок графика — это вывод, а не «Динамика показателей Q3 2024».",
  },
  {
    id: 8,
    tag: "Структура",
    title: "Нет красной нити",
    subtitle: "Аудитория теряет контекст",
    color: "#EF4444",
    icon: "GitBranch",
    description:
      "Слайды есть, логика переходов — нет. Каждый слайд самодостаточен, но непонятно как он связан с предыдущим. Аудитория теряет нить.",
    before: {
      label: "Признаки проблемы",
      content: [
        "Резкие переходы без связки «поэтому...», «отсюда...»",
        "Нет вступления с повесткой дня",
        "Нет промежуточных итогов в длинной презентации",
        "Выводы появляются в середине без подготовки",
        "Аудитория не понимает зачем этот слайд",
      ],
    },
    after: {
      label: "Правильно",
      content: "Слайд 1: что будет\nСлайды 2–N: доказательства\nПоследний: что делать",
      note: "Каждый переход — короткая фраза-мост",
    },
    rules: [
      { icon: "Map", text: "Начните с повестки: «Сегодня расскажу о трёх вещах»" },
      { icon: "ArrowRight", text: "Между блоками: переходный слайд с кратким итогом" },
      { icon: "Flag", text: "Финал: конкретный призыв к действию, не «спасибо»" },
    ],
    insight: "Уберите все слайды — оставьте только заголовки. Получается связный рассказ?",
  },
];

const categories = ["Все", "Текст", "Типографика", "Цвет", "Структура", "Анимация", "Стиль", "Данные"];

function MistakeCard({
  mistake,
  index,
  isActive,
  onClick,
}: {
  mistake: (typeof mistakes)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${(index % 4) * 70}ms`,
      }}
    >
      <button onClick={onClick} className="w-full text-left">
        <div
          className="relative overflow-hidden border transition-all duration-300"
          style={{
            borderColor: isActive ? mistake.color + "60" : "hsl(var(--border))",
            boxShadow: isActive ? `0 0 0 1px ${mistake.color}30` : "none",
          }}
        >
          <div
            className="h-0.5 w-full transition-all duration-500"
            style={{
              background: isActive ? `linear-gradient(90deg, ${mistake.color}, transparent)` : "transparent",
            }}
          />

          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <span
                className="font-body text-xs font-medium tracking-[0.15em] uppercase px-2 py-0.5 border"
                style={{ color: mistake.color, borderColor: mistake.color + "40", background: mistake.color + "12" }}
              >
                {mistake.tag}
              </span>
              <span className="font-display text-3xl font-light" style={{ color: "hsl(var(--border))" }}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div
              className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
              style={{ background: mistake.color + "18" }}
            >
              <Icon name={mistake.icon} size={18} style={{ color: mistake.color }} />
            </div>

            <h3 className="font-display text-2xl font-medium leading-tight mb-1">{mistake.title}</h3>
            <p className="font-body text-sm text-muted-foreground mb-4">{mistake.subtitle}</p>
            <p className="font-body text-sm leading-relaxed text-foreground/55 line-clamp-2">{mistake.description}</p>

            <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: isActive ? mistake.color : "transparent",
                  border: `1px solid ${isActive ? mistake.color : "hsl(var(--border))"}`,
                }}
              >
                <Icon
                  name={isActive ? "ChevronUp" : "ChevronDown"}
                  size={10}
                  className={isActive ? "text-background" : "text-muted-foreground"}
                />
              </div>
              <span className="font-body text-xs text-muted-foreground">
                {isActive ? "Скрыть детали" : "Примеры и решение"}
              </span>
            </div>
          </div>
        </div>
      </button>

      {isActive && (
        <div
          key={`detail-${mistake.id}`}
          className="border border-t-0 animate-fade-up"
          style={{ borderColor: mistake.color + "40", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="p-6 space-y-5">
            <p className="font-body text-sm leading-relaxed text-foreground/65">{mistake.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-red-950/25 border border-red-500/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="X" size={11} className="text-red-400 flex-shrink-0" />
                  <span className="font-body text-xs text-red-400 tracking-[0.15em] uppercase font-medium">
                    {mistake.before.label}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {mistake.before.content.map((item, i) => (
                    <li key={i} className="font-body text-xs text-foreground/45 flex gap-2">
                      <span className="text-red-500/40 flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="border p-4"
                style={{ background: mistake.color + "08", borderColor: mistake.color + "35" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Check" size={11} style={{ color: mistake.color }} className="flex-shrink-0" />
                  <span className="font-body text-xs tracking-[0.15em] uppercase font-medium" style={{ color: mistake.color }}>
                    {mistake.after.label}
                  </span>
                </div>
                <p className="font-display text-xl leading-snug mb-2 whitespace-pre-line">
                  {mistake.after.content}
                </p>
                <p className="font-body text-xs text-foreground/35 italic">{mistake.after.note}</p>
              </div>
            </div>

            <div>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">Правила</p>
              <div className="space-y-2">
                {mistake.rules.map((rule, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div
                      className="w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: mistake.color + "15" }}
                    >
                      <Icon name={rule.icon} size={12} style={{ color: mistake.color }} />
                    </div>
                    <p className="font-body text-sm text-foreground/65 leading-relaxed">{rule.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex gap-3 items-start p-4 border-l-2"
              style={{ borderColor: mistake.color, background: mistake.color + "08" }}
            >
              <Icon name="Lightbulb" size={14} style={{ color: mistake.color }} className="flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm italic text-foreground/55">{mistake.insight}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Index() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [filter, setFilter] = useState("Все");
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const filtered = filter === "Все" ? mistakes : mistakes.filter((m) => m.tag === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="absolute -top-32 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #E85D2614 0%, transparent 70%)", filter: "blur(80px)" }}
        />

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
          <div
            className="flex items-center gap-3 mb-6 transition-all duration-700"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "none" : "translateY(12px)" }}
          >
            <div className="h-px w-8 bg-accent" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-accent font-medium">
              Руководство по презентациям
            </span>
          </div>

          <h1
            className="font-display font-light leading-none mb-5 transition-all duration-700"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "none" : "translateY(20px)",
              transitionDelay: "0.12s",
            }}
          >
            Ошибки
            <br />
            <em className="not-italic" style={{ color: "hsl(var(--accent))" }}>
              презентаций
            </em>
          </h1>

          <p
            className="font-body text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10 transition-all duration-700"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "none" : "translateY(12px)",
              transitionDelay: "0.25s",
            }}
          >
            8 критических ошибок, которые убивают доверие к вашим идеям. Примеры «как есть» и «как надо» — чтобы запомнить раз и навсегда.
          </p>

          <div
            className="flex gap-8 transition-all duration-700"
            style={{ opacity: headerVisible ? 1 : 0, transitionDelay: "0.4s" }}
          >
            {[
              { num: "8", label: "ошибок разобрано" },
              { num: "3", label: "правила для каждой" },
              { num: "2×", label: "примеры до и после" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-light" style={{ color: "hsl(var(--accent))" }}>
                  {s.num}
                </div>
                <div className="font-body text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div
            className="h-px origin-left transition-all duration-1000"
            style={{
              background: "linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent) / 0.2), transparent)",
              transform: headerVisible ? "scaleX(1)" : "scaleX(0)",
              transitionDelay: "0.5s",
            }}
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-body text-xs px-3 py-1.5 border transition-all duration-200 tracking-wide ${
                filter === cat
                  ? "bg-accent text-accent-foreground border-accent"
                  : "border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="font-body text-xs text-muted-foreground ml-auto">
            {filtered.length} из {mistakes.length}
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {filtered.map((mistake) => (
            <div key={mistake.id} className="bg-background">
              <MistakeCard
                mistake={mistake}
                index={mistakes.indexOf(mistake)}
                isActive={activeId === mistake.id}
                onClick={() => setActiveId(activeId === mistake.id ? null : mistake.id)}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-2xl text-muted-foreground/30">Ничего не найдено</p>
          </div>
        )}

        {/* Bottom block */}
        <div className="mt-20 border border-border p-8 md:p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 50%, hsl(var(--accent) / 0.05) 0%, transparent 60%)" }}
          />
          <div className="relative max-w-xl">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-4">Совет напоследок</p>
            <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-4">
              Лучший способ научиться — разобрать свои старые презентации
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Откройте последнюю презентацию и пройдитесь по каждому пункту выше.
              Вы наверняка найдёте минимум 3 ошибки — и это нормально.
              Осознание — первый шаг к исправлению.
            </p>
            <div className="mt-6 flex items-center gap-2 text-muted-foreground/40">
              <Icon name="MousePointerClick" size={13} />
              <span className="font-body text-xs">Нажмите на карточку чтобы раскрыть детали</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
