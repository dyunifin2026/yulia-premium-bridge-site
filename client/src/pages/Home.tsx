/*
Design reminder for this page: "Премиальный гуманистический минимализм с мотивом межпоколенческого моста".
Positioning: warm, emotionally intelligent, premium private practice — NOT clinical, NOT mass-market.
Two audiences: adult child (40–60, decision-maker) + elderly parent (65+, shown the site by child).
Every section must reinforce emotional safety, professional trust, and a gentle bridge metaphor.
Voice: first person — Yulia speaks directly to the visitor.
*/
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ExternalLink,
  HeartHandshake,
  Home as HomeIcon,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Train,
  UserRound,
  Video,
  X,
} from "lucide-react";
const telegramUrl = "https://t.me/Yuliapsychodramatist";

const heroImage = "/images/yulia-hero.webp";
const bridgeImage = "/images/yulia-bridge.webp";
const methodImage = "/images/yulia-psychodrama.webp";
const yuliaPortrait = "/images/yulia-portrait.webp";
const brandLogo = "/images/yulia-logo.webp";
const sessionWithElderClient = "/images/yulia-session-elderly.webp";

const navItems = [
  { label: "Направления", href: "#directions" },
  { label: "Форматы", href: "#formats" },
  { label: "Адрес", href: "#location" },
  { label: "Метод", href: "#method" },
  { label: "Обо мне", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const directions = [
  {
    title: "Родитель и семейный контакт",
    eyebrow: "Для взрослого ребёнка",
    text: "Я работаю с теми, кто чувствует тревогу, вину или усталость от ситуации с пожилым родителем — и хочет найти более спокойный способ быть рядом.",
    points: ["бережный первичный разбор", "уважение к обеим сторонам", "поиск возможного формата встречи"],
    tone: "warm",
  },
  {
    title: "Терапия для себя",
    eyebrow: "Индивидуальная работа",
    text: "Я работаю со взрослыми людьми, которые проходят жизненный переход, кризис, потерю опоры или сложное изменение роли.",
    points: ["личные границы", "зрелые решения", "поддержка в переходных периодах"],
    tone: "cool",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Вводная беседа",
    text: "Короткий разговор — 20–30 минут — чтобы вы описали ситуацию, я задала уточняющие вопросы, и вместе мы определили, какой формат работы имеет смысл.",
  },
  {
    num: "02",
    title: "Выбор формата",
    text: "Вместе выбираем: индивидуальная консультация, встреча с родителем или семейный разговор при согласии участников. Никакого давления.",
  },
  {
    num: "03",
    title: "Регулярная работа",
    text: "Встречи проходят в удобном ритме — онлайн или в кабинете в Москве. Темп и глубина работы определяются запросом, а не заранее заданной программой.",
  },
];

const supportCards = [
  {
    icon: MessageCircle,
    title: "Консультация взрослого ребёнка",
    text: "Можно начать с описания ситуации: что происходит с родителем, где возникает тревога, вина или бессилие, и какой формат помощи реалистичен.",
  },
  {
    icon: UserRound,
    title: "Встреча с пожилым родителем",
    text: "Я строю работу уважительно, без ощущения, что человек стал «проблемой» для семьи или объектом исправления.",
  },
  {
    icon: HeartHandshake,
    title: "Семейная встреча",
    text: "При согласии участников я создаю пространство, где стороны слышат не только претензии, но и потребности друг друга.",
  },
  {
    icon: Leaf,
    title: "Индивидуальная терапия",
    text: "Отдельное направление для взрослых клиентов, которые хотят разобраться в кризисе, отношениях, утрате или новом жизненном этапе.",
  },
];

const formats = [
  {
    icon: Video,
    title: "Онлайн — для клиентов по всему миру",
    text: "Я работаю онлайн с клиентами из любой страны. Это удобный формат для первичной консультации и регулярной терапии — без привязки к географии.",
  },
  {
    icon: MapPin,
    title: "Кабинет в Москве",
    text: "Очная работа проходит в PsychoPlace: м. Проспект Мира, улица Щепкина, дом 47, строение 1, этаж 3. Только для клиентов в Москве.",
  },
  {
    icon: HomeIcon,
    title: "Выезд по согласованию",
    text: "Формат обсуждается отдельно, если состояние пожилого человека или семейная ситуация требуют более гибкого решения. Только Москва.",
  },
];

const routeSteps = [
  {
    title: "От радиальной ветки",
    meta: "м. Проспект Мира · выход 2",
    text: "После выхода на поверхность сразу поверните направо. Перед зелёным зданием с лепниной поверните направо и пройдите через парковку в сторону стадиона «Олимпийский». Перейдите улицу Гиляровского по пешеходному переходу и идите прямо мимо церкви. Здание центра с башенкой будет прямо по маршруту; вход — большая серая дверь со стороны улицы Щепкина.",
  },
  {
    title: "От кольцевой линии",
    meta: "м. Проспект Мира · выход 1",
    text: "На поверхности поверните направо и перейдите проспект через подземный пешеходный переход. Далее идите в сторону стадиона «Олимпийский» прямо до улицы Щепкина, перейдите её по пешеходному переходу, поверните направо и двигайтесь до входа в здание с башенкой. Вход — большая серая дверь со стороны улицы Щепкина.",
  },
];

const faqs = [
  {
    q: "Можно ли обратиться сначала без родителя?",
    a: "Да. Часто первый шаг — отдельная консультация взрослого ребёнка, чтобы спокойно описать ситуацию, ожидания и ограничения возможной помощи.",
  },
  {
    q: "Вы работаете как врач или сиделка?",
    a: "Нет. Это психологическая работа. Она не заменяет медицинскую помощь, уход, диагностику или экстренное вмешательство.",
  },
  {
    q: "Нужно ли сразу приводить всю семью?",
    a: "Нет. Формат подбирается после первичного разговора. Иногда достаточно индивидуальной консультации, иногда возможна встреча с несколькими участниками.",
  },
  {
    q: "Психодрама — это обязательно сцена и роли?",
    a: "Нет. В частной практике я использую метод очень сдержанно: через исследование ролей, внутренних диалогов и незавершённых разговоров.",
  },
  {
    q: "Что происходит на вводной беседе?",
    a: "Это короткий разговор — около 20–30 минут. Вы описываете ситуацию, я задаю уточняющие вопросы, и вместе мы определяем, какой формат работы имеет смысл и реалистичен.",
  },
  {
    q: "Как долго обычно длится работа?",
    a: "Это зависит от запроса. Иногда достаточно нескольких встреч, чтобы прояснить ситуацию и найти опору. Более глубокая работа строится постепенно, без заранее заданных сроков.",
  },
  {
    q: "Вы работаете с клиентами за пределами России?",
    a: "Да. Онлайн-формат доступен для клиентов из любой страны. Очные встречи — только в Москве.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-shell min-h-screen bg-[var(--brand-milk)] text-[var(--brand-graphite)]">
      <header className="sticky top-0 z-50 border-b border-[rgba(37,37,37,0.08)] bg-[rgba(250,247,241,0.82)] backdrop-blur-xl">
        <nav className="container flex h-20 items-center justify-between gap-6">
          <a href="#top" className="brand-mark" aria-label="На главную">
            <img className="brand-logo-icon" src={brandLogo} alt="Фирменный знак Юлии" />
            <span>
              <strong>Юлия Валерьевна Александровская</strong>
               <small>психолог · психодраматист</small>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a className="btn btn-quiet hidden md:inline-flex" href={telegramUrl} target="_blank" rel="noreferrer">
              Вводная беседа
            </a>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[var(--brand-graphite)] hover:bg-[rgba(37,37,37,0.06)] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[rgba(37,37,37,0.08)] bg-[rgba(250,247,241,0.97)] backdrop-blur-xl">
            <div className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link py-3 text-base border-b border-[rgba(37,37,37,0.06)] last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="btn btn-quiet mt-3 w-full justify-center"
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Вводная беседа
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero-section overflow-hidden">
          <div className="container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
            <div className="hero-copy animate-fade-up">
              <span className="section-eyebrow">Частная психологическая практика · Москва и онлайн по всему миру</span>
              <h1>Поддержка для взрослых детей и пожилых родителей — там, где разговор стал трудным</h1>
              <p className="hero-lead">
                Меня зовут Юлия Валерьевна Александровская — я дипломированный психолог и психодраматист. Я работаю с
                взрослыми людьми, которые устали нести тревогу за стареющего родителя, и с пожилыми людьми, которым
                важно чувствовать себя услышанными — а не «проблемой» для семьи.
              </p>

              <div className="format-strip" aria-label="Форматы работы">
                <span>Онлайн — для всего мира</span>
                <i />
                <span>кабинет в Москве</span>
                <i />
                <span>выезд по согласованию (Москва)</span>
              </div>

              <div className="hero-actions">
                <a className="btn btn-primary" href={telegramUrl} target="_blank" rel="noreferrer">
                  Вводная беседа
                  <ArrowRight size={18} />
                </a>
                <a className="btn btn-secondary" href="#directions">
                  Узнать о форматах работы
                </a>
              </div>

              <p className="microcopy">
                Вводная беседа — это короткий разговор, чтобы описать ситуацию и выбрать подходящий формат работы. Без давления и обязательств.
              </p>
            </div>

            <div className="hero-visual animate-fade-up animation-delay-200">
              {/* Top-right stat badges */}
              <div className="hero-stat-badges">
                <div className="hero-stat-badge">
                  <strong>8+</strong>
                  <span>лет практики</span>
                </div>
                <div className="hero-stat-badge">
                  <strong>Весь мир</strong>
                  <span>онлайн</span>
                </div>
              </div>
              {/* Bottom-right floating quote card with portrait */}
              <div className="hero-quote-card">
                <div className="hero-quote-author">
                  <img
                    src={yuliaPortrait}
                    alt="Юлия Валерьевна Александровская"
                    className="hero-quote-portrait"
                  />
                  <div>
                    <strong>Юлия Валерьевна Александровская</strong>
                    <span>психолог · психодраматист</span>
                  </div>
                </div>
                <blockquote>«Не ускорить, а создать пространство, где разговор становится возможным»</blockquote>
              </div>
              <div className="hero-image-frame">
                <img src={heroImage} alt="Спокойный кабинет с двумя креслами для психологической консультации" />
              </div>
              <div className="hero-note">
                <span>пространство разговора</span>
                <strong>без обвинения сторон</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT YULIA — moved higher for trust and warmth */}
        <section id="about" className="section-block about-section">
          <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="about-image about-portrait">
              <img src={yuliaPortrait} alt="Портрет Юлии Валерьевны Александровской, психолога-психодраматиста, в спокойном кабинете" />
            </div>
            <div>
              <span className="section-eyebrow">Обо мне</span>
              <h2>Меня зовут Юлия Валерьевна Александровская — дипломированный психолог-психодраматист</h2>
              <p>
                Я работаю с взрослыми людьми, семьями и пожилыми родителями в ситуациях, где важны не быстрые советы,
                а аккуратное различение чувств, ролей, границ и возможных шагов. Принимаю онлайн — для клиентов
                из любой страны, и очно — в Москве.
              </p>
              <div className="credentials">
                <div>
                  <BookOpen size={22} />
                  <span>психологическое образование и психодраматический подход</span>
                </div>
                <div>
                  <ShieldCheck size={22} />
                  <span>ясные профессиональные, этические и медицинские границы</span>
                </div>
                <div>
                  <Sparkles size={22} />
                  <span>сдержанный, уважительный тон без давления и обещаний гарантированного результата</span>
                </div>
              </div>

              <div className="volunteer-note">
                <span className="volunteer-note__label">волонтёрская практика</span>
                <div className="volunteer-note__content">
                  <p>Консультирую на волонтёрских началах в&nbsp;Сервисе круглосуточной психологической помощи</p>
                  <a href="https://zhivaya.org/" target="_blank" rel="noopener noreferrer" className="volunteer-note__logo-link" aria-label="Сервис Живая линия">
                    <img src="/manus-storage/zhivaya-liniya-logo_78f031c9.webp" alt="Живая линия" className="volunteer-note__logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DUAL AUDIENCE */}
        <section className="section-block muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="Кому это может помочь"
              title="Сложность семьи часто живёт сразу с двух сторон"
              text="Важная часть моего подхода — не усиливать обвинение, а бережно различать чувства, роли и реальные ограничения каждого участника."
            />
            <div className="family-complexity-layout">
              <div className="two-voices">
                <article>
                  <span>Взрослый ребёнок может чувствовать</span>
                  <h3>тревогу, вину и бессилие</h3>
                  <p>
                    Иногда кажется, что нужно одновременно быть ребёнком, организатором помощи, переговорщиком и человеком,
                    который всё выдерживает. В такой позиции легко потерять собственные границы.
                  </p>
                </article>
                <article>
                  <span>Пожилой родитель может переживать</span>
                  <h3>уязвимость, стыд и потерю роли</h3>
                  <p>
                    Просьбы о помощи могут звучать как контроль, а забота — как напоминание о зависимости. Поэтому работа
                    требует уважительного тона и отказа от инфантилизации.
                  </p>
                </article>
              </div>

              <figure className="session-story-card">
                <img
                  src={sessionWithElderClient}
                  alt="Юлия во время спокойной рабочей встречи с пожилой клиенткой в тёплом кабинете"
                />
                <figcaption>
                  <span>рабочая атмосфера</span>
                  <strong>уважительная дистанция, внимание к обеим сторонам и мягкий темп разговора</strong>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* DIRECTIONS */}
        <section id="directions" className="section-block">
          <div className="container">
            <SectionHeading
              eyebrow="Два направления"
              title="Две ситуации — одно бережное пространство для разговора"
              text="Я не разделяю клиентов на «правых» и «виноватых». Есть два возможных маршрута: семейный контакт и индивидуальная терапия взрослого человека."
            />

            <div className="bridge-layout">
              {directions.map((direction) => (
                <article key={direction.title} id={direction.tone === "cool" ? "individual" : undefined} className={`direction-card ${direction.tone}`}>
                  <span>{direction.eyebrow}</span>
                  <h3>{direction.title}</h3>
                  <p>{direction.text}</p>
                  <ul>
                    {direction.points.map((point) => (
                      <li key={point}>
                        <Check size={16} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <div className="bridge-arc" aria-hidden="true" />
            </div>

            <div className="bridge-image-panel">
              <img src={bridgeImage} alt="Абстрактная линия контакта между двумя сторонами" />
              <div>
                <span className="section-eyebrow">Метафора подхода</span>
                <p>
                  Две стороны не противопоставлены друг другу. Между ними есть опыт, усталость и история, но также может
                  появиться тонкая линия контакта — если для разговора создано достаточно спокойное пространство.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS — how it works */}
        <section className="section-block muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="Как устроена работа"
              title="Три шага — без обязательств и давления"
              text="Начать можно с короткого разговора. Никаких предварительных решений, никакой необходимости сразу собирать всех участников."
            />
            <div className="process-steps">
              {processSteps.map((step) => (
                <article className="process-step" key={step.num}>
                  <span className="process-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT CARDS */}
        <section className="section-block">
          <div className="container">
            <SectionHeading
              eyebrow="Что я могу сделать"
              title="Поддержка начинается с понимания формата"
              text="Работа не сводится к одному сценарию. В зависимости от запроса возможна индивидуальная консультация, встреча с родителем или семейный разговор при согласии участников."
            />
            <div className="support-grid">
              {supportCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article className="support-card" key={card.title}>
                    <Icon size={24} />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FORMATS */}
        <section id="formats" className="section-block format-section">
          <div className="container">
            <SectionHeading
              eyebrow="Форматы работы"
              title="Онлайн — для всего мира. Очно — в Москве"
              text="Онлайн-формат доступен для клиентов из любой страны. Очные встречи проходят в кабинете на Проспекте Мира в Москве."
            />
            <div className="format-grid">
              {formats.map((format) => {
                const Icon = format.icon;
                return (
                  <article className="format-card" key={format.title}>
                    <Icon size={26} />
                    <h3>{format.title}</h3>
                    <p>{format.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="section-block location-section">
          <div className="container">
            <div className="location-layout">
              <div className="location-card">
                <span className="section-eyebrow">Офлайн-кабинет · только Москва</span>
                <h2>Проспект Мира, PsychoPlace</h2>
                <p>
                  Очные консультации проходят по адресу: м. Проспект Мира, улица Щепкина, дом 47, строение 1,
                  этаж 3. При входе скажите консьержу, что идёте в PsychoPlace, офис номер 6, и поднимайтесь
                  на 2-й этаж; по факту подъём ощущается как два с половиной этажа.
                </p>
                <div className="location-actions">
                  <a className="btn btn-primary" href="https://psy.place/co/shchepkina-pm" target="_blank" rel="noreferrer">
                    Открыть фотомаршрут
                    <ExternalLink size={17} />
                  </a>
                  <a className="btn btn-secondary" href="https://psy.place/places/prospekt-mira/prospekt-mira-3" target="_blank" rel="noreferrer">
                    Страница места
                  </a>
                </div>
              </div>

              <div className="route-grid" aria-label="Как найти кабинет от метро Проспект Мира">
                {routeSteps.map((route) => (
                  <article className="route-card" key={route.title}>
                    <Train size={22} />
                    <span>{route.meta}</span>
                    <h3>{route.title}</h3>
                    <p>{route.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section id="method" className="section-block method-section">
          <div className="container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="section-eyebrow">Психодрама как метод</span>
              <h2>Роли, диалог и незавершённые разговоры можно исследовать бережно</h2>
              <p>
                Психодрама в частной психологической практике не обязана выглядеть театрально. Это может быть спокойный
                способ увидеть, какие роли человек вынужден держать, какие разговоры остались незавершёнными и где может
                появиться новый способ контакта.
              </p>
              <div className="method-steps">
                <span>роли</span>
                <span>диалог</span>
                <span>незавершённое</span>
                <span>новый контакт</span>
              </div>
            </div>
            <div className="method-image-frame method-approved-frame">
              <img src={methodImage} alt="Русскоязычная схема психодрамы как метода: пространство, роли, путь диалога и новый способ контакта" />
            </div>
          </div>
        </section>

        {/* BOUNDARY */}
        <section className="section-block boundary-section">
          <div className="container">
            <div className="boundary-card">
              <ShieldCheck size={30} />
              <div>
                <span className="section-eyebrow">Границы помощи</span>
                <h2>Психологическая поддержка не заменяет медицинскую помощь</h2>
                <p>
                  Моя работа не является медицинской диагностикой, лечением, уходом, кризисной службой или услугой
                  сиделки. Если ситуация связана с угрозой жизни, острым психическим состоянием или необходимостью
                  медицинского вмешательства, важно обращаться к профильным специалистам и экстренным службам.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-block faq-section">
          <div className="container">
            <SectionHeading
              eyebrow="FAQ"
              title="Вопросы, которые часто появляются перед первым обращением"
              text="Эти ответы помогают начать спокойно: без необходимости сразу принимать большое решение или собирать всех участников."
            />
            <div className="faq-grid">
              {faqs.map((item) => (
                <article className="faq-card" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="final-cta">
          <div className="container">
            <div className="final-card">
              <span className="section-eyebrow">Первый шаг</span>
              <h2>Начните с короткого разговора</h2>
              <p>
                Вводная беседа — это 20–30 минут, чтобы описать ситуацию, задать вопросы и понять, какой формат
                работы имеет смысл. Это не терапевтическая сессия и не обязательство продолжать.
                Я принимаю онлайн из любой страны.
              </p>
              <div className="final-actions">
                <a className="btn btn-primary" href={telegramUrl} target="_blank" rel="noreferrer">
                  Написать в Telegram
                  <MessageCircle size={18} />
                </a>
                <a className="btn btn-secondary" href="#directions">
                  Узнать о направлениях
                </a>
              </div>
              <small>Telegram: @Yuliapsychodramatist · ответ в течение дня</small>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
