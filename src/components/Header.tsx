import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'プロジェクト', href: '/projects' },
  { name: '記事', href: '/research' },
  { name: '自己紹介', href: '/about' },
  { name: 'お問い合わせ', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-primary-100' 
          : 'bg-white'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <div className="flex lg:flex-1">
            <Link href="/" className="group">
              <Image
                src="/wista_logo.png"
                alt="WISTA Logo"
                width={120}
                height={40}
                className="hover:scale-105 transition-transform duration-200"
                priority
              />
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  router.pathname === item.href
                    ? 'text-primary-800'
                    : 'text-primary-600 hover:text-primary-800'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-800 transition-all duration-200 group-hover:w-full ${
                  router.pathname === item.href ? 'w-full' : 'w-0'
                }`} />
              </Link>
            ))}
          </div>

          {/* モバイルメニューボタン */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl p-2.5 text-primary-700 hover:bg-primary-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                    router.pathname === item.href
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-primary-600 hover:bg-primary-50 hover:text-primary-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 