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
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-twitch">
              🎮 Streamer Base
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/news" className="hover:text-twitch">Новости</Link>
              <Link href="/tips" className="hover:text-twitch">Советы</Link>
              <Link href="/tools" className="hover:text-twitch">Инструменты</Link>
              <Link href="/jobs" className="hover:text-twitch">Вакансии</Link>
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
