import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Streamer Base — всё для стримера',
  description: 'Новости платформ, советы от топов, инструменты и вакансии для стримеров',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <header className="bg-[#0e0e0e] border-b border-[#2a2a2a] sticky top-0 z-10">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl">🎮</span>
      <span className="text-white text-xl font-bold">
        STREAMER<span className="text-[#107C10]">BASE</span>
      </span>
    </Link>
    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
      <Link href="/news" className="text-white hover:text-[#107C10] transition-colors">НОВОСТИ</Link>
      <Link href="/tips" className="text-white hover:text-[#107C10] transition-colors">СОВЕТЫ</Link>
      <Link href="/tools" className="text-white hover:text-[#107C10] transition-colors">ИНСТРУМЕНТЫ</Link>
      <Link href="/jobs" className="text-white hover:text-[#107C10] transition-colors">БИРЖА</Link>
    </nav>
  </div>
</header>
        {children}
        <footer className="border-t bg-gray-50 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-500">
            © 2024 Streamer Base — проект с открытым кодом на{' '}
            <a href="https://github.com/kva4is/streamer-base" className="text-twitch hover:underline">
              GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  )
}
