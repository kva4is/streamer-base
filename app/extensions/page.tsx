import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  // Основные разделы в стиле Xbox Game Pass
  const hubCards = [
    {
      icon: '📰',
      title: 'Новости',
      description: 'Twitch, YouTube, Kick, Trovo — все обновления правил и алгоритмов',
      href: '/news',
      color: 'from-[#107C10] to-[#0e6a0e]',
      stat: '24 новых',
    },
    {
      icon: '🎙️',
      title: 'Советы',
      description: 'Гайды от стримеров-миллионников. Расти, удерживай, монетизируй',
      href: '/tips',
      color: 'from-[#107C10] to-[#0e6a0e]',
      stat: '45+ гайдов',
    },
    {
      icon: '🛠️',
      title: 'Инструменты',
      description: 'Боты, оверлеи, алерты, аналитика — только проверенные сервисы',
      href: '/tools',
      color: 'from-[#107C10] to-[#0e6a0e]',
      stat: '50+ сервисов',
    },
    {
      icon: '💼',
      title: 'Биржа',
      description: 'Монтажёры, модераторы, дизайнеры. Найди команду или работу',
      href: '/jobs',
      color: 'from-[#107C10] to-[#0e6a0e]',
      stat: '12 вакансий',
    },
    {
      icon: '🧩',
      title: 'Расширения',
      description: 'Готовые виджеты, сцены и оверлеи для OBS и Streamlabs',
      href: '/extensions',
      color: 'from-[#107C10] to-[#0e6a0e]',
      stat: 'Скоро',
    },
    {
      icon: '📊',
      title: 'Аналитика',
      description: 'Сравнение платформ, статистика по нишам, тренды стриминга',
      href: '/analytics',
      color: 'from-[#107C10] to-[#0e6a0e]',
      stat: 'Новое',
    },
  ]

  // Последние материалы (как Xbox Wire)
  const latestContent = [
    {
      tag: 'TWITCH',
      title: 'Обновление правил модерации: что нужно знать',
      description: 'Twitch ужесточает требования к контенту с 1 июня. Главные изменения.',
      image: 'https://images.unsplash.com/photo-1561883088-039e53143d73?w=600&h=340&fit=crop',
      href: '/news/twitch-moderation',
    },
    {
      tag: 'YOUTUBE',
      title: 'Новая аналитика YouTube Studio: доход поминутно',
      description: 'Теперь видно, в какие моменты стрима зрители уходят, а когда — донатят.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=340&fit=crop',
      href: '/news/youtube-analytics',
    },
    {
      tag: 'СОВЕТ',
      title: 'Как я набрал 1000 фолловеров за месяц — Dizzy',
      description: 'Стример с 500k подписчиков делится стратегией быстрого роста на Twitch.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=340&fit=crop',
      href: '/tips/dizzy-growth',
    },
  ]

  return (
    <main className="bg-[#0e0e0e] min-h-screen">
      {/* HERO — Xbox стиль: тёмный фон + зелёный градиент + крупный текст */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] via-[#0e0e0e] to-[#0e0e0e] border-b border-[#2a2a2a]">
        {/* Декоративные элементы как у Xbox */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-[#107C10] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#107C10] rounded-full blur-[120px] opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            {/* Метка "Новое" в стиле Xbox Game Pass */}
            <div className="inline-block mb-6">
              <span className="bg-[#107C10] text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-wider">
                ПЕРВЫЙ ПОРТАЛ ДЛЯ СТРИМЕРОВ
              </span>
            </div>

            {/* Главный заголовок */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Всё для роста
              <br />
              <span className="text-[#107C10]">твоего канала</span>
            </h1>

            {/* Подзаголовок */}
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
              Новости платформ, инструменты, советы от топов и биржа специалистов — 
              твой путь к успешному стриму начинается здесь.
            </p>

            {/* Кнопки в стиле Xbox */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/news"
                className="bg-[#107C10] hover:bg-[#0e6a0e] text-white px-8 py-4 text-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                ЧИТАТЬ НОВОСТИ
                <span className="text-xl">→</span>
              </Link>
              <Link
                href="/tools"
                className="border border-[#3a3a3a] hover:border-[#107C10] text-white px-8 py-4 text-lg font-semibold transition-colors bg-transparent"
              >
                ВСЕ ИНСТРУМЕНТЫ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ХАБЫ — карточки в стиле Xbox (крупные плитки с иконками) */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Исследуй возможности
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Всё, что нужно стримеру — в одном месте
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#107C10] transition-all p-6"
            >
              {/* Иконка */}
              <div className="text-4xl mb-6">{card.icon}</div>

              {/* Заголовок и статистика */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#107C10] transition-colors">
                  {card.title}
                </h3>
                <span className="text-xs font-semibold text-[#107C10] bg-[#107C10]/10 px-2 py-1">
                  {card.stat}
                </span>
              </div>

              {/* Описание */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Декоративная полоска снизу при ховере */}
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-[#107C10] transition-all duration-300" />
            </Link>
          ))}
        </div>
      </section>

      {/* ПОСЛЕДНИЕ МАТЕРИАЛЫ — Xbox Wire стиль */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 border-t border-[#2a2a2a]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Xbox Wire
            </h2>
            <p className="text-gray-400 text-lg">
              Последние новости и советы
            </p>
          </div>
          <Link
            href="/news"
            className="text-[#107C10] hover:text-white text-sm font-semibold transition-colors hidden md:block"
          >
            ВСЕ НОВОСТИ →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              {/* Картинка */}
              <div className="aspect-video bg-[#1a1a1a] mb-4 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>

              {/* Тег */}
              <span className="text-xs font-bold text-[#107C10] uppercase tracking-wider">
                {item.tag}
              </span>

              {/* Заголовок */}
              <h3 className="text-xl font-bold text-white group-hover:text-[#107C10] transition-colors mt-2 mb-2">
                {item.title}
              </h3>

              {/* Описание */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/news"
          className="md:hidden block text-center mt-8 text-[#107C10] font-semibold border border-[#2a2a2a] py-4 hover:bg-[#1a1a1a] transition-colors"
        >
          ВСЕ НОВОСТИ →
        </Link>
      </section>

      {/* БАННЕР С ПРИЗЫВОМ — Xbox Game Pass стиль */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        <div className="bg-gradient-to-r from-[#107C10] to-[#0a5c0a] p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Хочешь поделиться опытом?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Мы открыты для контента от стримеров. Предложи свой гайд, инструмент 
            или расскажи историю успеха — мы опубликуем!
          </p>
          <a
            href="https://github.com/kva4is/streamer-base"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#107C10] px-8 py-4 text-lg font-bold hover:bg-gray-100 transition-colors"
          >
            ПРЕДЛОЖИТЬ НА GITHUB →
          </a>
        </div>
      </section>
    </main>
  )
}
