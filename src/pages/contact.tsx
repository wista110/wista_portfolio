import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Github, Twitter, Instagram, Mail } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      name: 'Email',
      value: 'wista.dev1@gmail.com',
      href: 'mailto:wista.dev1@gmail.com',
      icon: Mail,
    },
    {
      name: 'GitHub',
      value: 'github.com/wista110',
      href: 'https://github.com/wista110',
      icon: Github,
    },
    {
      name: 'X',
      value: '@dfujinari',
      href: 'https://x.com/dfujinari',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      value: '@wista_dev',
      href: 'https://www.instagram.com/wista_dev/',
      icon: Instagram,
    },
  ]

  return (
    <>
      <Head>
        <title>Contact - Portfolio</title>
        <meta name="description" content="お仕事のご相談、共同研究、技術的なディスカッションなどお気軽にお問い合わせください" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg.jpg)' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-white">Contact</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              お仕事のご相談、アプリ開発、技術的な相談など、<br />
              どのようなことでもお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            {/* 画像 */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/IMG_0289.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 名前 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-900 mb-6">伊藤 達也</h2>
            </div>

            {/* 連絡先 */}
            <div className="w-full space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={info.name}
                    className="flex items-center justify-center space-x-4 p-4 rounded-2xl hover:bg-primary-50 transition-colors"
                  >
                    <IconComponent className="h-6 w-6 text-primary-600" />
                    <a
                      href={info.href}
                      className="text-lg text-primary-600 hover:text-primary-800 transition-colors"
                      target={info.href.startsWith('http') || info.href.startsWith('mailto') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 