import React, { useState, useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type ProjectCategory = 'All' | 'AI' | 'Mobile' | 'Tools' | 'IoT'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: ProjectCategory
  technologies: string[]
  status: '完了' | '進行中' | '未着手'
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
}

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All')
  const [searchTerm, setSearchTerm] = useState('')

  const projects: Project[] = [
    {
      id: '1',
      title: 'AIチャットボット',
      description: '自然言語処理を活用したインテリジェントな対話システム',
      longDescription: 'Transformerアーキテクチャを使用した日本語対応のチャットボット。感情分析、意図理解、コンテキスト保持機能を実装。',
      category: 'AI',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      status: '完了',
      githubUrl: 'https://github.com/example/ai-chatbot',
      demoUrl: 'https://demo.example.com/chatbot',
    },
    {
      id: '2',
      title: 'スマートフォン向けタスク管理アプリ',
      description: 'iOS向けのタスク管理アプリケーション',
      longDescription: '詳細は後で修正します。',
      category: 'Mobile',
      technologies: ['Swift', 'SwiftUI', 'Firebase'],
      status: '進行中',
      githubUrl: 'https://github.com/example/iot-dashboard',
      demoUrl: 'https://demo.example.com/iot',
    },
    {
      id: '3',
      title: 'ログ監視・アラート自動化ツール',
      description: 'ログデータを監視し、異常を検知してアラートを自動化するツール',
      longDescription: 'セキュリティ運用の自動化を支援し、現場の負荷を下げるためのツール',
      category: 'Tools',
      technologies: ['Tomcat', 'Apache', 'Java', 'Python'],
      status: '進行中',
      githubUrl: 'https://github.com/example/ar-recognition',
    },
    {
      id: '4',
      title: 'OD対策薬管理システム',
      description: 'OD対策のために、一定自時間毎に薬のロックを解除するシステム',
      longDescription: 'スマートホンと連携をして、薬の管理と管理の記録、緊急の時に薬のロックを解除するシステム',
      category: 'IoT',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Python', 'Arduino'],
      status: '進行中',
      githubUrl: 'https://github.com/example/smart-home',
    },
    {
      id: '5',
      title: 'Embedding型チャットボット',
      description: 'OpenAIのAPIを使用したEmbedding型チャットボット',
      longDescription: '質問とサイト内情報の類似度を計算、最も近い回答を返す',
      category: 'AI',
      technologies: ['Python', 'JavaScript', 'MySQL', 'OpenAI API'],
      status: '未着手',
      githubUrl: 'https://github.com/example/emotion-recognition',
      demoUrl: 'https://demo.example.com/emotion',
    },
    {
      id: '6',
      title: 'ToDoアプリ',
      description: '職業訓練時制作課題',
      longDescription: 'Javaの実習課題でToDoアプリを制作しました。',
      category: 'Tools',
      technologies: ['Java', 'Tomcat', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      status: '完了',
      githubUrl: 'https://github.com/example/task-pwa',
    },
  ]

  const featuredProjects = projects.filter(p => ['1', '2'].includes(p.id))

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm, projects])

  const categories: ProjectCategory[] = ['All', 'AI', 'Mobile', 'IoT']

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case '完了':
        return 'bg-green-100 text-green-800'
      case '進行中':
        return 'bg-blue-100 text-blue-800'
      case '未着手':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: ProjectCategory) => {
    switch (category) {
      case 'AI':
        return 'bg-purple-100 text-purple-800'
      case 'Mobile':
        return 'bg-blue-100 text-blue-800'
      case 'IoT':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <Head>
        <title>Works - Portfolio</title>
        <meta name="description" content="AI、IoT、モバイルアプリケーション開発プロジェクトの一覧" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg.jpg)' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-white">Works</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              AI・機械学習・IoT・モバイルアプリケーション開発プロジェクトをご紹介します。<br />
              研究から実用化まで、幅広い技術領域での取り組みをご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              特に注目していただきたいプロジェクトを厳選してご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`card hover:scale-105 transition-all duration-300 animate-slide-up delay-${index * 200}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-primary-800 mb-3">{project.title}</h3>
                <p className="text-primary-600 mb-4">{project.description}</p>
                <p className="text-sm text-primary-500 mb-6">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 transition-colors text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 transition-colors text-sm"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">All Projects</h2>
            <p className="section-subtitle mx-auto">
              カテゴリ別に絞り込んでプロジェクトを探索できます。
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-800 text-white shadow-md'
                      : 'bg-white text-primary-600 hover:bg-primary-100 border border-primary-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="プロジェクトを検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-primary-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`card hover:scale-105 transition-all duration-300 animate-scale-in delay-${index % 3 * 100}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{project.title}</h3>
                <p className="text-primary-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex space-x-3 text-sm">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary-600">該当するプロジェクトが見つかりませんでした。</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              プロジェクトに興味をお持ちですか？
            </h2>
            <p className="text-lg text-primary-600 mb-8">
              詳細な説明や技術的な質問や意見、協業のご相談など、お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="btn-primary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
