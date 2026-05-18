export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] overflow-hidden">

      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 md:px-14 py-6 border-b border-[#e8e1d4]">

        <h1 className="text-3xl md:text-4xl font-serif text-[#2d4a3a]">
          Psychology Center
        </h1>

        <nav className="hidden md:flex items-center gap-10 text-[#2d4a3a] font-medium">
          <a href="#">О нас</a>
          <a href="#">Услуги</a>
          <a href="#">Контакты</a>
        </nav>

        <button className="bg-[#2d4a3a] text-white px-6 py-3 rounded-full text-sm hover:opacity-90 transition">
          Записаться
        </button>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">

        {/* MAIN GLOW */}
        <div className="absolute w-[800px] h-[800px] bg-[#e7dcc8] rounded-full blur-3xl opacity-60 top-10"></div>

        {/* GREEN GLOW */}
        <div className="absolute w-[350px] h-[350px] bg-[#dfe8d8] rounded-full blur-3xl opacity-40 top-[300px] left-[20%]"></div>

        {/* DECORATIVE LINES */}
        <div className="absolute left-0 top-[250px] w-[300px] h-[300px] border border-[#ddd2be] rounded-full opacity-40"></div>

        <div className="absolute right-0 top-[200px] w-[320px] h-[320px] border border-[#ddd2be] rounded-full opacity-40"></div>

        {/* STARS */}
        <div className="absolute top-28 left-[10%] text-[#cdbb98] text-5xl">✦</div>

        <div className="absolute top-52 left-[28%] text-[#d7c7a8] text-3xl">✧</div>

        <div className="absolute top-24 right-[20%] text-[#cdbb98] text-5xl">✦</div>

        <div className="absolute top-[420px] right-[15%] text-[#d7c7a8] text-4xl">✦</div>

        <div className="absolute bottom-[260px] left-[15%] text-[#d7c7a8] text-4xl">✧</div>

        <div className="absolute bottom-[200px] right-[28%] text-[#d7c7a8] text-3xl">✦</div>

        <div className="absolute top-[340px] left-[5%] text-[#d7c7a8] text-2xl">✦</div>

        <div className="absolute top-[500px] right-[5%] text-[#d7c7a8] text-2xl">✧</div>

        {/* LABEL */}
        <p className="relative z-10 tracking-[0.35em] uppercase text-sm text-[#8a846f] mb-8">
          Центр эмоционального благополучия
        </p>

        {/* TITLE */}
        <h2 className="relative z-10 text-[#2d4a3a] text-4xl md:text-7xl leading-[1] font-serif max-w-5xl">
          Пространство
          <br />
          для роста,
          <br />
          гармонии и исцеления.
        </h2>

        {/* IMAGE */}
        <div className="relative z-10 mt-10">
          <img
            src="/girl.png"
            alt="Wellness Illustration"
            className="w-[340px] md:w-[520px] mx-auto"
          />
        </div>
      </section>
      {/* CONSULTATION TYPES SECTION */}
<section className="relative px-6 md:px-16 py-32 bg-[#f7f3eb] overflow-hidden">

  {/* BIG GLOW */}
  <div className="absolute top-10 left-[20%] w-[500px] h-[500px] bg-[#ece3d3] rounded-full blur-3xl opacity-60"></div>

  {/* GREEN GLOW */}
  <div className="absolute bottom-20 right-[15%] w-[400px] h-[400px] bg-[#dfe8d8] rounded-full blur-3xl opacity-40"></div>

  {/* LARGE CIRCLES */}
  <div className="absolute left-[-120px] top-[220px] w-[320px] h-[320px] border border-[#e5dac5] rounded-full opacity-60"></div>

  <div className="absolute right-[-100px] top-[140px] w-[280px] h-[280px] border border-[#e5dac5] rounded-full opacity-60"></div>

  {/* STARS */}
  <div className="absolute top-24 left-[8%] text-[#d4c29f] text-5xl">✦</div>

  <div className="absolute top-40 left-[18%] text-[#d4c29f] text-2xl">✧</div>

  <div className="absolute top-20 right-[14%] text-[#d4c29f] text-4xl">✦</div>

  <div className="absolute top-[320px] right-[22%] text-[#d4c29f] text-3xl">✧</div>

  <div className="absolute bottom-40 left-[15%] text-[#d4c29f] text-3xl">✦</div>

  <div className="absolute bottom-32 right-[20%] text-[#d4c29f] text-2xl">✧</div>

  <div className="absolute top-[500px] left-[6%] text-[#d4c29f] text-2xl">✦</div>

  <div className="absolute bottom-[220px] right-[8%] text-[#d4c29f] text-4xl">✦</div>

  {/* HEADER */}
  <div className="relative z-10 text-center max-w-5xl mx-auto">

    <p className="tracking-[0.45em] uppercase text-sm text-[#9d957f] mb-8">
      ВИДЫ КОНСУЛЬТАЦИЙ
    </p>

    <h2 className="text-[#2d4a3a] text-4xl md:text-6xl leading-[1.1] font-serif">
      Выберите своё
      <br />
      направление
    </h2>

    <p className="mt-8 text-[#6f6b5f] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
      Выберите формат консультации,
      который поможет вам обрести
      внутреннюю гармонию и развитие.
    </p>
  </div>

  {/* CARDS */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">

    {/* CARD 1 */}
    <div className="bg-[#f9f5ee] border border-white/50 rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-md">

<div className="w-32 h-32 rounded-full bg-[#f6f1e8] border border-[#ebe3d3] shadow-lg mx-auto flex items-center justify-center">

  <img
    src="/family.png"
    alt="Family Psychology"
    className="w-20 h-20 object-contain"
  />

</div>

      <h3 className="text-[#2d4a3a] text-4xl font-serif text-center mt-10 leading-tight">
        Семейная
        <br />
        психология
      </h3>

      <p className="text-[#6f6b5f] text-lg text-center mt-8 leading-relaxed">
        Улучшение семейных отношений,
        коммуникации и создание
        гармоничной атмосферы.
      </p>

      <div className="mt-12 flex flex-col items-center">

        <button className="text-[#2d4a3a] text-xl font-medium flex items-center gap-3 hover:gap-5 transition-all duration-300">
          Выбрать
          <span>→</span>
        </button>

        <div className="flex items-center gap-3 mt-4 opacity-70">
          <div className="w-16 h-[1px] bg-[#d8c6a4]"></div>

          <span className="text-[#d8c6a4] text-sm">
            ✦
          </span>

          <div className="w-16 h-[1px] bg-[#d8c6a4]"></div>
        </div>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-[#f4f1e7] border border-white/50 rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-md">

      <div className="w-32 h-32 rounded-full bg-[#f6f1e8] border border-[#ebe3d3] shadow-lg mx-auto flex items-center justify-center">

  <img
    src="/bussines.png"
    alt="Business Psychology"
    className="w-20 h-20 object-contain"
  />

</div>

      <h3 className="text-[#2d4a3a] text-4xl font-serif text-center mt-10 leading-tight">
        Бизнес
        <br />
        психология
      </h3>

      <p className="text-[#6f6b5f] text-lg text-center mt-8 leading-relaxed">
        Развитие лидерских навыков,
        снижение стресса и улучшение
        рабочей эффективности.
      </p>

      <div className="mt-12 flex flex-col items-center">

        <button className="text-[#2d4a3a] text-xl font-medium flex items-center gap-3 hover:gap-5 transition-all duration-300">
          Выбрать
          <span>→</span>
        </button>

        <div className="flex items-center gap-3 mt-4 opacity-70">
          <div className="w-16 h-[1px] bg-[#d8c6a4]"></div>

          <span className="text-[#d8c6a4] text-sm">
            ✦
          </span>

          <div className="w-16 h-[1px] bg-[#d8c6a4]"></div>
        </div>

      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-[#f1efe3] border border-white/50 rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-md">

     <div className="w-32 h-32 rounded-full bg-[#f6f1e8] border border-[#ebe3d3] shadow-lg mx-auto flex items-center justify-center">

  <img
    src="/self.png"
    alt="Self Development"
    className="w-20 h-20 object-cover rounded-full"
  />

</div>

      <h3 className="text-[#2d4a3a] text-4xl font-serif text-center mt-10 leading-tight">
        Саморазвитие
        <br />
        и рост
      </h3>

      <p className="text-[#6f6b5f] text-lg text-center mt-8 leading-relaxed">
        Помощь в раскрытии потенциала,
        уверенности в себе и
        личностном развитии.
      </p>

      <div className="mt-12 flex flex-col items-center">

        <button className="text-[#2d4a3a] text-xl font-medium flex items-center gap-3 hover:gap-5 transition-all duration-300">
          Выбрать
          <span>→</span>
        </button>

        <div className="flex items-center gap-3 mt-4 opacity-70">
          <div className="w-16 h-[1px] bg-[#d8c6a4]"></div>

          <span className="text-[#d8c6a4] text-sm">
            ✦
          </span>

          <div className="w-16 h-[1px] bg-[#d8c6a4]"></div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* ABOUT SECTION MOBILE */}

<section className="relative overflow-hidden bg-gradient-to-b from-[#aebd9f] via-[#cfd9c3] to-[#edf1e7] px-6 pt-8 pb-24">

  {/* TOP CURVE */}
  <div className="absolute top-0 left-0 w-full h-32 bg-[#f7f3eb] rounded-b-[120px]"></div>

  {/* GRADIENT GLOWS */}
  <div className="absolute top-40 -left-20 w-[320px] h-[320px] bg-[#dfe8d4] opacity-40 blur-3xl rounded-full"></div>

  <div className="absolute bottom-20 -right-20 w-[280px] h-[280px] bg-[#e8efe0] opacity-50 blur-3xl rounded-full"></div>

  {/* DECOR CIRCLES */}
  <div className="absolute top-[240px] right-[-40px] w-[160px] h-[160px] rounded-full border border-[#eef2e8]/30"></div>

  <div className="absolute bottom-[300px] left-[-50px] w-[180px] h-[180px] rounded-full border border-[#eef2e8]/20"></div>

  {/* STARS */}
  <div className="absolute top-44 right-10 text-[#f5f3ea] text-4xl opacity-90">
    ✦
  </div>

  <div className="absolute top-[520px] left-4 text-[#f5f3ea] text-6xl opacity-20">
    ❋
  </div>

  <div className="absolute bottom-[420px] right-6 text-[#f5f3ea] text-5xl opacity-30">
    ✧
  </div>

  {/* WAVE */}
  <div className="absolute top-[670px] right-[-20px] text-[#eef2e8]/40 text-[120px] rotate-12">
    ⟿
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-md mx-auto">

    {/* LABEL */}
    <div className="flex items-center gap-4 mt-10 mb-10">

      <p className="uppercase tracking-[0.35em] text-[#eef2e8] text-[11px]">
        ОБО МНЕ
      </p>

      <div className="h-[1px] w-24 bg-[#eef2e8]/40"></div>

    </div>

    {/* IMAGE BLOCK */}
    <div className="relative flex justify-center">

      {/* MAIN IMAGE */}
      <div className="relative">

        <div className="absolute -inset-5 bg-[#edf2e6] opacity-50 blur-3xl rounded-[40px]"></div>

        <img
          src="/dilorom.jpeg"
          alt="Алимова Дилором"
          className="relative w-full max-w-[330px] aspect-[3/4] object-cover rounded-[38px] border-[6px] border-[#f5f2ea] shadow-2xl"
        />

      </div>

      {/* FLOATING MINI IMAGE */}
      <div className="absolute -bottom-8 right-0">

        <div className="bg-[#f7f3eb] p-2 rounded-full shadow-xl border border-[#ebe3d3]">

          <img
            src="/ali_dilorom.jpg"
            alt="Psychologist"
            className="w-28 h-28 object-cover rounded-full"
          />

        </div>

      </div>

    </div>

    {/* NAME */}
    <div className="mt-16">

      <h2 className="text-[#4f5f45] text-[62px] leading-[0.88] font-serif">

        Алимова
        <br />
        Дилором

      </h2>

      <p className="mt-5 uppercase tracking-[0.28em] text-[#5f6d57] text-xs">

        КЛИНИЧЕСКИЙ ПСИХОЛОГ

      </p>

    </div>

    {/* DIVIDER */}
    <div className="flex items-center gap-4 mt-7 mb-8">

      <div className="h-[1px] w-14 bg-[#d8dfcf]"></div>

      <span className="text-[#f4f1e8] text-xl">
        ✦
      </span>

      <div className="h-[1px] w-full bg-[#d8dfcf]"></div>

    </div>

    {/* DESCRIPTION */}
    <div className="space-y-6 text-[#3f473a] text-[18px] leading-relaxed">

      <p>
        Я работаю с тревожностью,
        эмоциональным выгоранием,
        внутренними конфликтами
        и личностным ростом.
      </p>

      <p>
        Моя цель — создать безопасное пространство,
        где вы сможете быть услышанными,
        понятыми и поддержанными
        на пути к изменениям.
      </p>

    </div>

    {/* EDUCATION + EXPERIENCE TEXT */}
    <div className="mt-14 space-y-12">

      {/* EDUCATION */}
      <div>

        <div className="flex items-center gap-4 mb-6">

          <h3 className="text-[#4f5f45] text-[38px] leading-none font-serif">
            Образование
          </h3>

          <div className="h-[1px] flex-1 bg-[#d8dfcf]"></div>

          <span className="text-[#eef2e8] text-xl">
            ✦
          </span>

        </div>

        <div className="space-y-5 text-[#465043] text-[17px] leading-relaxed">

          <p>
            • 2004–2008 — Ташкентский Государственный
            Педагогический Университет.
            Английский язык.
          </p>

          <p>
            • 2020–2021 — Психология семьи
            и педагогическая психология.
          </p>

          <p>
            • NLP курс и сертификация.
          </p>

          <p>
            • Когнитивная терапия
            и психофизиология.
          </p>

          <p>
            • Международные программы
            повышения квалификации.
          </p>

        </div>

      </div>

      {/* EXPERIENCE */}
      <div>

        <div className="flex items-center gap-4 mb-6">

          <h3 className="text-[#4f5f45] text-[38px] leading-none font-serif">
            Опыт работы
          </h3>

          <div className="h-[1px] flex-1 bg-[#d8dfcf]"></div>

          <span className="text-[#eef2e8] text-xl">
            ✦
          </span>

        </div>

        <div className="space-y-5 text-[#465043] text-[17px] leading-relaxed">

          <p>
            • Более 10 лет практики
            в сфере психологического консультирования.
          </p>

          <p>
            • Работа с тревожностью,
            эмоциональным выгоранием,
            внутренними конфликтами
            и самооценкой.
          </p>

          <p>
            • Индивидуальные консультации,
            поддержка подростков,
            взрослых и семей.
          </p>

        </div>

      </div>

    </div>

    {/* QUOTE */}
    <div className="relative mt-14 bg-[#f5f2ea]/95 backdrop-blur-sm rounded-[30px] px-7 py-8 border border-[#ebe3d3] overflow-hidden">

      <div className="absolute bottom-0 right-2 text-[90px] opacity-10 text-[#70806a]">
        ❋
      </div>

      <div className="absolute top-5 right-6 text-[#cfd6c5] text-2xl">
        ✦
      </div>

      <p className="text-[#55634c] text-[22px] leading-relaxed relative z-10">

        “Исцеление начинается
        с принятия, понимания
        и внутреннего спокойствия.”

      </p>

    </div>

  </div>
</section>
<section className="relative overflow-hidden bg-[#f6f2ea] px-5 py-20">

  {/* верхняя волна закрытия прошлой секции */}
  <div className="absolute top-0 left-0 h-24 w-full overflow-hidden">
    <div className="absolute -top-32 left-1/2 h-[240px] w-[160%] -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-[#aebd98] to-[#f6f2ea]" />
  </div>

  {/* декор */}
  <div className="absolute top-32 left-8 text-[#d7c68d]/70 text-3xl">
    ✦
  </div>

  <div className="absolute top-40 right-10 text-[#d7c68d]/60 text-2xl">
    ✧
  </div>

  <div className="absolute bottom-20 left-6 text-[#d7c68d]/50 text-2xl">
    ✦
  </div>

  <div className="absolute bottom-32 right-8 text-[#d7c68d]/50 text-3xl">
    ✧
  </div>

  <div className="absolute top-[280px] left-[-40px] h-[140px] w-[140px] rounded-full border border-[#c8d2bc]/30" />

  <div className="absolute bottom-[140px] right-[-30px] h-[120px] w-[120px] rounded-full border border-[#c8d2bc]/30" />

  <div className="absolute top-[420px] right-[20px] text-[#cfd8c5]/40 text-[70px] rotate-12">
    ⟿
  </div>

  <div className="absolute bottom-[240px] left-[-10px] text-[#cfd8c5]/30 text-[80px] -rotate-12">
    ⟿
  </div>

  {/* контейнер */}
  <div className="relative z-10 mx-auto max-w-[420px] rounded-[36px] border border-white/50 bg-[#fffdf9]/95 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm">

    {/* title */}
    <div className="mb-8 text-center">

      <div className="mb-3 flex items-center justify-center gap-3 text-[#d8c98f]">
        <span className="text-lg">✦</span>
        <span className="h-[1px] w-14 bg-[#d8c98f]/60" />
        <span className="text-lg">✧</span>
      </div>

      <h2 className="font-serif text-[42px] leading-none text-[#4e6a46]">
        Оставьте заявку
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-[#7b7b7b]">
        Заполните форму ниже, и я свяжусь с вами
        в течение 24 часов
      </p>

    </div>

    {/* form */}
    <div className="space-y-5">

      <div>
        <label className="mb-2 block text-sm text-[#4a4a4a]">
          Ваше имя
        </label>

        <input
          type="text"
          placeholder="Dildora Alimova"
          className="w-full rounded-2xl border border-[#ece8df] bg-[#fffdf9] px-5 py-4 text-sm text-[#3e3e3e] placeholder:text-[#8c8c8c] outline-none transition focus:border-[#7f9370]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-[#4a4a4a]">
          Email
        </label>

        <input
          type="email"
          placeholder="dildora@example.com"
          className="w-full rounded-2xl border border-[#ece8df] bg-[#fffdf9] px-5 py-4 text-sm text-[#3e3e3e] placeholder:text-[#8c8c8c] outline-none transition focus:border-[#7f9370]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-[#4a4a4a]">
          Номер телефона
        </label>

        <input
          type="text"
          placeholder="+998 94 123-45-67"
          className="w-full rounded-2xl border border-[#ece8df] bg-[#fffdf9] px-5 py-4 text-sm text-[#3e3e3e] placeholder:text-[#8c8c8c] outline-none transition focus:border-[#7f9370]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-[#4a4a4a]">
          Тип консультации
        </label>

        <select className="w-full rounded-2xl border border-[#ece8df] bg-[#fffdf9] px-5 py-4 text-sm text-[#3e3e3e] outline-none">

          <option>Выберите тип консультации</option>
          <option>Индивидуальная</option>
          <option>Семейная</option>
          <option>Онлайн</option>

        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm text-[#4a4a4a]">
          Расскажите о своей ситуации
        </label>

        <textarea
          placeholder="Кратко опишите, что привело вас сюда..."
          className="min-h-[140px] w-full rounded-2xl border border-[#ece8df] bg-[#fffdf9] px-5 py-4 text-sm text-[#3e3e3e] placeholder:text-[#8c8c8c] outline-none transition focus:border-[#7f9370]"
        />
      </div>

      {/* button */}
      <button className="mt-3 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#5f7f56] to-[#7e9b73] px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:scale-[1.01]">

        Отправить заявку

        <span className="text-[#efe6b7]">
          ✦
        </span>

      </button>

      <p className="mt-4 text-center text-[12px] leading-relaxed text-[#9b9b9b]">
        Ваши данные в безопасности и не будут
        переданы третьим лицам.
      </p>

    </div>

  </div>
  
<section className="relative overflow-hidden bg-[#f6f2ea] px-4 py-10 md:px-8">
  {/* декор */}
  <div className="absolute left-5 top-24 text-[#d7c68d]/60 text-lg">
    ✦
  </div>

  <div className="absolute right-6 top-32 text-[#d7c68d]/50 text-base">
    ✧
  </div>

  <div className="absolute bottom-16 left-4 text-[#d7c68d]/50 text-lg">
    ✦
  </div>

  <div className="absolute bottom-8 right-8 h-20 w-20 rounded-full border border-[#c9d3bf]/20" />

  <div className="absolute top-[240px] right-[20px] text-[#cfd8c5]/20 text-[40px] rotate-12">
    ⟿
  </div>

  {/* карточка */}
  <div className="relative z-10 mx-auto flex max-w-5xl flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-[#edf1e7] to-[#f8f5ef] shadow-[0_10px_35px_rgba(0,0,0,0.05)] md:flex-row">

    {/* левая часть */}
    <div className="flex-1 px-6 py-8 md:px-10 md:py-10">

      <h2 className="font-serif text-[34px] leading-[1.08] tracking-[-1px] text-[#476243] md:text-[52px]">
        Готовы
        <br />
        изменить свою
        <br />
        жизнь?
      </h2>

      <p className="mt-4 max-w-[340px] text-[14px] leading-[1.7] text-[#666666]">
        Сделайте первый шаг к лучшему психическому
        здоровью и личностному росту.
        Запишитесь на консультацию уже сегодня.
      </p>

      {/* пункты */}
      <div className="mt-7 space-y-4">

        <div className="flex items-start gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dfe7d7] text-lg">
            📅
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-[#2d2d2d]">
              Гибкий график
            </h3>

            <p className="mt-1 text-[13px] leading-relaxed text-[#707070]">
              Вечерние и выходные приёмы доступны
            </p>
          </div>

        </div>

        <div className="flex items-start gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dfe7d7] text-lg">
            ☎️
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-[#2d2d2d]">
              Быстрый ответ
            </h3>

            <p className="mt-1 text-[13px] leading-relaxed text-[#707070]">
              Подтверждение в течение 24 часов
            </p>
          </div>

        </div>

        <div className="flex items-start gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dfe7d7] text-lg">
            🛡️
          </div>

          <div>
            <h3 className="text-[17px] font-medium text-[#2d2d2d]">
              Конфиденциальность
            </h3>

            <p className="mt-1 text-[13px] leading-relaxed text-[#707070]">
              Ваша информация в безопасности
            </p>
          </div>

        </div>

      </div>

      {/* кнопка */}
      <button className="mt-7 rounded-full bg-gradient-to-r from-[#5f7f56] to-[#7e9b73] px-6 py-3 text-[13px] font-medium text-white shadow-md transition hover:scale-[1.02]">
        Записаться ✦
      </button>

    </div>

    {/* правая часть */}
    <div className="relative flex items-center justify-center p-5 md:w-[45%]">

      {/* glow */}
      <div className="absolute h-[280px] w-[280px] rounded-full bg-[#cdd8bf]/25 blur-3xl" />

      {/* фото */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">

        <img
          src="/girly.png"
          alt="psychology"
          className="h-full w-full object-cover"
        />

      </div>

      {/* звездочки */}
      <div className="absolute left-6 top-8 text-[#d7c68d]/60 text-xl">
        ✦
      </div>

      <div className="absolute right-6 bottom-10 text-[#d7c68d]/50 text-lg">
        ✧
      </div>

      {/* линии */}
      <div className="absolute left-[-20px] top-[50%] h-[1px] w-[70px] rotate-12 bg-gradient-to-r from-transparent to-[#d7c68d]/30" />

      <div className="absolute bottom-[60px] right-[-10px] h-[1px] w-[60px] -rotate-12 bg-gradient-to-r from-[#d7c68d]/30 to-transparent" />

    </div>

  </div>

</section>
  {/* FOOTER */}
  <footer className="mx-auto mt-14 max-w-5xl border-t border-[#d9d2c5] pt-10">

    <div className="grid gap-10 md:grid-cols-3">

      {/* left */}
      <div>

        <h3 className="font-serif text-[28px] text-[#476243]">
          Дилором Алимова
        </h3>

        <p className="mt-2 text-[14px] text-[#777777]">
          Клинический психолог
        </p>

        <div className="mt-5 flex items-center gap-3 text-[#d7c68d]">
          <span>✦</span>
          <div className="h-[1px] w-12 bg-[#d7c68d]/50" />
          <span>✧</span>
        </div>

        <p className="mt-5 max-w-[220px] text-[14px] leading-[1.8] text-[#6d6d6d]">
          Помогаю вам услышать себя
          и найти внутреннюю опору
        </p>

      </div>

      {/* center */}
      <div className="space-y-4 text-[14px] text-[#5f5f5f]">

        <p className="flex items-center gap-3">
          📍 Ташкент, Узбекистан
        </p>

        <p className="flex items-center gap-3">
          📞 +998 90 123 45 67
        </p>

        <p className="flex items-center gap-3">
          ✉️ info@dilorom-psychology.uz
        </p>

      </div>

      {/* right */}
      <div className="space-y-4 text-[14px] text-[#5f5f5f]">

        <a
          href="#"
          className="flex items-center gap-3 transition hover:text-[#476243]"
        >
          📷 @dilorom.psychologist
        </a>

        <a
          href="#"
          className="flex items-center gap-3 transition hover:text-[#476243]"
        >
          ✈️ t.me/dilorom_psy
        </a>

      </div>

    </div>

    {/* низ */}
    <div className="mt-10 flex items-center justify-center gap-3 border-t border-[#e7e1d6] pt-6 text-center text-[13px] text-[#8a8a8a]">

      <span className="text-[#d7c68d]">
        ✦
      </span>

      <p>
        © 2026 Дилором Алимова. Все права защищены.
      </p>

      <span className="text-[#d7c68d]">
        ✧
      </span>

    </div>

  </footer>

</section>
    </main>
  );
}