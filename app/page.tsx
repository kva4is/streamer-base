import Link from 'next/link'

export default function Home() {
  const sections = [
    {
      title: '📰 Новости платформ',
      desc: 'Twitch, YouTube, Trovo — все обновления в одном месте',
      href: '/news',
      color: 'bg-purple-100 hover:bg-purple-200',
    },
    {
      title: '🎙️ Советы стримеров',
      desc: 'Опыт крупных авторов: как расти, настраивать, общаться',
      href: '/tips',
      color: 'bg-blue-100 hover:bg-blue-200',
    },
    {
      title: '🛠️ Инструменты',
      desc: 'Боты, оверлеи, плагины, аналитика — всё для эфира',
      href: '/tools',
      color: 'bg-green-100 hover:bg-green-200',
    },
    {
      title: '💼 Вакансии',
      desc: 'Монтажеры, модераторы, дизайнеры — найди команду',
      href: '/jobs',
      color: 'bg-orange-100 hover:bg-orange-200',
    },
    {
      title: '🧩 Магазин расширений',
      desc: 'Готовые решения для OBS и Streamlabs',
      href: '/extensions',
      color: 'bg-pink-100 hover:bg-pink-200',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="bg-twitch text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🎮 Streamer Base
          </h1>
          <p className="text-xl md:text-2xl text-purple-100">
            Всё для роста твоего канала в одном месте
          </p>
        </div>
      </div>

      {/* Секции */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className={`block p-6 rounded-xl transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md ${section.color}`}
            >
              <h2 className="text-xl font-bold mb-2">{section.title}</h2>
              <p className="text-gray-600">{section.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Последние обновления (плейсхолдер) */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">🔥 Горячие обновления</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-yellow-800">
            🚧 Раздел наполняется контентом. Первые новости и советы появятся здесь совсем скоро!
          </p>
        </div>
      </div>
    </main>
  )
}
