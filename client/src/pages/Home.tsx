/*
Design reminder for this page: "Премиальный гуманистический минимализм с мотивом межпоколенческого моста".
Every section must reinforce a warm private practice, clear professional boundaries, two client paths, and a subtle bridge/contact metaphor.
*/
import {
  ArrowRight,
  BookOpen,
  Check,
  ExternalLink,
  HeartHandshake,
  Home as HomeIcon,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Train,
  UserRound,
  Video,
} from "lucide-react";
import { toast } from "sonner";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663559220273/oX7TcFRJv9UoQ7DnACq2pm/yulia-hero-therapy-room-UChiRB75i79LEQG3Fh7jt8.webp";
const bridgeImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663559220273/oX7TcFRJv9UoQ7DnACq2pm/yulia-bridge-abstract-fx2j2chjrrf7sNPkCZ5gs6.webp";
const methodImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663559220273/oX7TcFRJv9UoQ7DnACq2pm/yulia-method-psychodrama-fHRyXC4ZXvrZtyAigsdDTk.webp";
const detailImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663559220273/oX7TcFRJv9UoQ7DnACq2pm/yulia-consultation-detail-5qVTXJiThyK3ME3i3bnuAz.webp";

const navItems = [
  { label: "Направления", href: "#directions" },
  { label: "Форматы", href: "#formats" },
  { label: "Адрес", href: "#location" },
  { label: "Метод", href: "#method" },
  { label: "О Юлии", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const directions = [
  {
    title: "Родитель и семейный контакт",
    eyebrow: "Первый путь",
    text: "Поддержка пожилого родителя, взрослого ребёнка и семьи там, где накопленные обиды, тревога или усталость мешают говорить спокойно.",
    points: ["бережный первичный разбор", "уважение к обеим сторонам", "поиск возможного формата встречи"],
    tone: "warm",
  },
  {
    title: "Терапия для себя",
    eyebrow: "Второй путь",
    text: "Индивидуальная работа со взрослыми людьми, которые проходят жизненный переход, кризис, потерю опоры или сложное изменение роли.",
    points: ["личные границы", "зрелые решения", "поддержка в переходных периодах"],
    tone: "cool",
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
    text: "Работа строится уважительно, без ощущения, что человек стал «проблемой» для семьи или объектом исправления.",
  },
  {
    icon: HeartHandshake,
    title: "Семейная встреча",
    text: "При согласии участников можно создать пространство, где стороны слышат не только претензии, но и потребности друг друга.",
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
    title: "Онлайн",
    text: "Удобный формат для первичной консультации, регулярной терапии и ситуаций, когда очная встреча пока невозможна.",
  },
  {
    icon: MapPin,
    title: "Кабинет на Проспекте Мира",
    text: "Очная работа проходит в PsychoPlace: м. Проспект Мира, улица Щепкина, дом 47, строение 1, этаж 3.",
  },
  {
    icon: HomeIcon,
    title: "Выезд по согласованию",
    text: "Формат обсуждается отдельно, если состояние пожилого человека или семейная ситуация требуют более гибкого решения.",
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
    q: "Юлия работает как врач или сиделка?",
    a: "Нет. Это психологическая работа. Она не заменяет медицинскую помощь, уход, диагностику или экстренное вмешательство.",
  },
  {
    q: "Нужно ли сразу приводить всю семью?",
    a: "Нет. Формат подбирается после первичного разговора. Иногда достаточно индивидуальной консультации, иногда возможна встреча с несколькими участниками.",
  },
  {
    q: "Психодрама — это обязательно сцена и роли?",
    a: "Нет. В частной практике метод может использоваться очень сдержанно: через исследование ролей, внутренних диалогов и незавершённых разговоров.",
  },
];

function handleContactClick() {
  toast("Контактные данные пока не добавлены", {
    description:
      "Сюда можно подключить Telegram, WhatsApp, телефон или форму записи после того, как вы передадите реальные контакты Юлии.",
  });
}

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
  return (
    <div className="site-shell min-h-screen bg-[var(--brand-milk)] text-[var(--brand-graphite)]">
      <header className="sticky top-0 z-50 border-b border-[rgba(37,37,37,0.08)] bg-[rgba(250,247,241,0.82)] backdrop-blur-xl">
        <nav className="container flex h-20 items-center justify-between gap-6">
          <a href="#top" className="brand-mark" aria-label="На главную">
            <span className="brand-monogram">Ю</span>
            <span>
              <strong>Юлия</strong>
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

          <button className="btn btn-quiet hidden md:inline-flex" onClick={handleContactClick}>
            Первичная консультация
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section overflow-hidden">
          <div className="container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
            <div className="hero-copy animate-fade-up">
              <span className="section-eyebrow">Премиальная частная практика</span>
              <h1>Психологическая поддержка для взрослых людей, пожилых родителей и контакта между поколениями</h1>
              <p className="hero-lead">
                Юлия — дипломированный психолог и психодраматист. Она помогает взрослым людям проходить жизненные кризисы,
                сопровождает пожилых родителей и поддерживает семьи там, где старые обиды, тревога и усталость мешают
                говорить друг с другом спокойно.
              </p>

              <div className="format-strip" aria-label="Форматы работы">
                <span>Онлайн</span>
                <i />
                <span>кабинет в центре Москвы</span>
                <i />
                <span>выезд по согласованию</span>
              </div>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#directions">
                  Поддержка для родителя и семьи
                  <ArrowRight size={18} />
                </a>
                <a className="btn btn-secondary" href="#individual">
                  Терапия для себя
                </a>
              </div>

              <p className="microcopy">
                Можно начать с первичной консультации, чтобы описать ситуацию и выбрать подходящий формат работы.
              </p>
            </div>

            <div className="hero-visual animate-fade-up animation-delay-200">
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

        <section id="directions" className="section-block">
          <div className="container">
            <SectionHeading
              eyebrow="Два направления"
              title="Две ситуации — одно бережное пространство для разговора"
              text="Сайт не разделяет клиентов на «правых» и «виноватых». Он помогает увидеть два возможных маршрута: семейный контакт и индивидуальную терапию взрослого человека."
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
                <span className="section-eyebrow">Метафора сайта</span>
                <p>
                  Две стороны не противопоставлены друг другу. Между ними есть опыт, усталость и история, но также может
                  появиться тонкая линия контакта — если для разговора создано достаточно спокойное пространство.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="Когда контакт становится трудным"
              title="Сложность семьи часто живёт сразу с двух сторон"
              text="Важная часть подхода — не усиливать обвинение, а бережно различать чувства, роли и реальные ограничения каждого участника."
            />
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
                  требует уважительного тона и отказа от infantilизации.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <SectionHeading
              eyebrow="Что может делать Юлия"
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

        <section id="formats" className="section-block format-section">
          <div className="container">
            <SectionHeading
              eyebrow="Форматы работы"
              title="Три организованных способа начать разговор"
              text="Формат выбирается не случайно, а по ситуации: где клиенту безопаснее, что возможно для родителя и какая глубина работы сейчас уместна."
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

        <section id="location" className="section-block location-section">
          <div className="container">
            <div className="location-layout">
              <div className="location-card">
                <span className="section-eyebrow">Офлайн-кабинет</span>
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
            <div className="method-image-frame">
              <img src={methodImage} alt="Концептуальная схема психодрамы с креслами и линиями диалога" />
            </div>
          </div>
        </section>

        <section id="about" className="section-block about-section">
          <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="about-image">
              <img src={detailImage} alt="Деталь кабинета психолога: блокнот, книги и мягкий свет" />
            </div>
            <div>
              <span className="section-eyebrow">О Юлии</span>
              <h2>Дипломированный психолог-психодраматист с уважением к границам клиента</h2>
              <p>
                Юлия работает с взрослыми людьми, семьями и пожилыми родителями в ситуациях, где важны не быстрые советы,
                а аккуратное различение чувств, ролей, границ и возможных шагов.
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
            </div>
          </div>
        </section>

        <section className="section-block boundary-section">
          <div className="container">
            <div className="boundary-card">
              <ShieldCheck size={30} />
              <div>
                <span className="section-eyebrow">Границы помощи</span>
                <h2>Психологическая поддержка не заменяет медицинскую помощь</h2>
                <p>
                  Работа Юлии не является медицинской диагностикой, лечением, уходом, кризисной службой или услугой
                  сиделки. Если ситуация связана с угрозой жизни, острым психическим состоянием или необходимостью
                  медицинского вмешательства, важно обращаться к профильным специалистам и экстренным службам.
                </p>
              </div>
            </div>
          </div>
        </section>

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

        <section id="contact" className="final-cta">
          <div className="container">
            <div className="final-card">
              <span className="section-eyebrow">Первый шаг</span>
              <h2>Можно начать с короткого описания ситуации</h2>
              <p>
                Расскажите, кто обращается, что происходит сейчас и какой формат кажется возможным. После этого можно
                выбрать бережный следующий шаг: онлайн, кабинет или выезд по согласованию.
              </p>
              <div className="final-actions">
                <button className="btn btn-primary" onClick={handleContactClick}>
                  Записаться на консультацию
                  <ArrowRight size={18} />
                </button>
                <a className="btn btn-secondary" href="#directions">
                  Вернуться к направлениям
                </a>
              </div>
              <small>Контактные данные и стоимость можно добавить после утверждения финального текста.</small>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
