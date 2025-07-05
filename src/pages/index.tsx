import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      title: 'IoTデータ可視化',
      description: 'リアルタイムセンサーデータの分析・可視化システム',
      category: 'IoT',
      tech: ['Python', 'AWS', 'React'],
    },
    {
      title: 'AR画像認識アプリ',
      description: '深層学習による画像認識技術を活用したモバイルアプリ',
      category: 'Mobile',
      tech: ['React Native', 'TensorFlow', 'Python'],
    },
  ]

  return (
    <>
      <Head>
        <title>Portfolio - AIエンジニア</title>
        <meta name="description" content="AIとテクノロジーで未来を創造するエンジニアのポートフォリオサイト" />
        <meta name="keywords" content="AI, Machine Learning, エンジニア, ポートフォリオ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section - Transparent Background */}
      <section className="hero-transparent relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Content with Glass Card */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                  革新的な技術で
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                  未来を創造する
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                AI・IoT・モバイル開発を通じて、
                <br />
                人々の生活をより豊かにするソリューションを提供します
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  href="/projects"
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
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              テクノロジーで未来を切り開く
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI・IoT・モバイル開発の専門知識を活かし、革新的なソリューションを提供します。
              研究開発から実装まで、幅広い技術領域でお手伝いします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="section-background-blur py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              現在使用している主要な技術スタックです。常に新しい技術の学習と習得に取り組んでいます。
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
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle mx-auto">
              最近取り組んでいるプロジェクトをご紹介します。AI・IoT・モバイルアプリ開発を中心に活動しています。
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
            <Link href="/projects" className="btn-primary">
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
              一緒にプロジェクトを始めませんか？
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              AI・機械学習・IoTプロジェクトのご相談や、研究開発の協業について
              <br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact" className="btn-primary">
                お問い合わせ
              </Link>
              <Link href="/research" className="btn-secondary">
                研究内容を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 