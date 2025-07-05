import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Instagram, Mail } from 'lucide-react'

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'プロジェクト', href: '/projects' },
  { name: '研究', href: '/research' },
  { name: '自己紹介', href: '/about' },
  { name: 'お問い合わせ', href: '/contact' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/wista110', icon: Github },
  { name: 'X', href: 'https://x.com/dfujinari', icon: Twitter },
  { name: 'Instagram', href: 'https://www.instagram.com/wista_dev/', icon: Instagram },
  { name: 'Email', href: 'wista.dev1@gmail.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-primary-50 border-t border-primary-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ブランド */}
          <div className="space-y-4">
            <Image src="/wista_logo.png" alt="WISTA Logo" width={120} height={40} className="hover:scale-105 transition-transform duration-200" priority/>
            <p className="text-sm text-primary-600 max-w-sm">
              AIとテクノロジーで未来を創造する。研究とエンジニアリングの融合を通じて、より良い世界の実現を目指します。
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary-800 uppercase tracking-wider">
              サイトマップ
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ソーシャルリンク */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary-800 uppercase tracking-wider">
              SNS
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary-600 hover:text-primary-800 hover:scale-110 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-primary-200 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-600">
            © {new Date().getFullYear()} WISTA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 