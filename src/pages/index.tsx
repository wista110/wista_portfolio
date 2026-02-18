import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, ChevronDown, Mail } from 'lucide-react'

// framer-motion は useReducer 等のフックを使うため SSR でエラーになるため、クライアント専用で読み込む
const AnimatedHeroCard = dynamic(
  () => import('@/components/AnimatedHeroCard'),
  { ssr: false, loading: () => <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl min-h-[200px]" /> }
)
const AnimatedAboutBlock = dynamic(
  () => import('@/components/AnimatedAboutBlock'),
  { ssr: false, loading: () => <div className="text-center mb-16 min-h-[120px]" /> }
)

export default function Home() {
  const skills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'TensorFlow', 'PyTorch', 'Docker', 'AWS', 'Git', 'MongoDB'
  ]

  const recentProjects = [
    {
      title: 'AIチャットボット',
      description: '自然言語処理を活用したインテリジェントな対話システム',
      category: 'AI',
      tech: ['Python', 'TensorFlow', 'React'],
    },
    {
      title: 'スマートフォン向けタスク管理アプリ',
      description: 'iOS向けのタスク管理アプリケーション',
      category: 'Mobile',
      tech: ['Swift', 'SwiftUI', 'Firebase'],
    },
    {
      title: 'ログ監視・アラート自動化ツール',
      description: 'ログデータを監視し、異常を検知してアラートを自動化するツール',
      category: 'Tools',
      tech: ['Tomcat', 'Apache', 'Java', 'Python'],
    },
  ]

  return (
    <>
      <Head>
        <title>Portfolio - 社内SEエンジニア</title>
        <meta name="description" content="業務改善とセキュリティで、企業のIT基盤を支えるエンジニアのポートフォリオサイト" />
        <meta name="keywords" content="AI, Machine Learning, エンジニア, ポートフォリオ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section - Transparent Background */}
      <section className="hero-transparent relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Content with Glass Card */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <AnimatedHeroCard>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                  幅広い経験と技術を活用し
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                  企業のIT基盤を支えます
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                社内システムの構築・運用からセキュリティ対策まで、
                <br />
                企業のIT基盤を安定して支えるソリューションを提供します
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  href="/works"
                  className="inline-flex items-center px-8 py-4 bg-white/90 text-gray-900 rounded-full font-medium hover:bg-white transition-all duration-200 shadow-lg backdrop-blur-sm"
                >
                  プロジェクトを見る
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/60 text-white rounded-full font-medium hover:bg-white/20 hover:border-white transition-all duration-200 backdrop-blur-sm"
                >
                  お問い合わせ
                  <Mail className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedHeroCard>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="backdrop-blur-sm bg-white/10 rounded-full p-2 border border-white/20">
              <ChevronDown className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-background-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedAboutBlock>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              企業のIT基盤を支える社内SEとして
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              業務プロセスの改善からセキュリティ対策まで、企業のITインフラを安定して運用するための
              ソリューションを提供します。社内システムの構築・保守・運用を通じて、組織の生産性向上をサポートします。
            </p>
          </AnimatedAboutBlock>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="section-background-blur py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              社内システムの構築・運用に必要な技術スタックです。エンタープライズ環境での実務経験を活かし、安定したシステム運用を実現します。
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-white/20 p-6 hover:shadow-md transition-all duration-300 text-center hover:scale-105 transition-transform duration-300 animate-scale-in delay-${index % 5 * 100}`}
              >
                <span className="font-medium text-gray-900">{skill}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-900 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/90 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md">
              すべてのスキルを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-background-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="section-title">最近の活動</h2>
            <p className="section-subtitle mx-auto">
              最近取り組んでいるプロジェクトをご紹介します。アプリ制作、セキュリティ対策を中心に活動しています。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {recentProjects.map((project, index) => (
              <div
                key={project.title}
                className={`card hover:scale-105 transition-all duration-300 animate-slide-up delay-${index * 200}`}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'AI' ? 'bg-blue-100 text-blue-800' :
                      project.category === 'IoT' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">{project.title}</h3>
                  <p className="text-primary-600 mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/works" className="btn-primary">
              全プロジェクトを見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-background-blur py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              ぜひお気軽にご連絡ください。
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              社内SEとして、業務改善とセキュリティで企業のIT基盤を支えたいと考えています。
              <br className="hidden md:block" />
              採用に関するご連絡をお待ちしております。
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact" className="btn-primary">
                お問い合わせ
              </Link>
              <Link href="/skills" className="btn-secondary">
                スキルを見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 