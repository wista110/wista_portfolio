import React from 'react'
import Head from 'next/head'

interface ResearchProject {
  id: string
  title: string
  description: string
  category: 'Academic' | 'Industry' | 'Personal'
  status: 'Published' | 'Under Review' | 'In Progress' | 'Completed'
  technologies: string[]
  venue?: string
  year?: number
  paperUrl?: string
  githubUrl?: string
}

export default function Research() {
  const researchProjects: ResearchProject[] = [
    {
      id: '1',
      title: '深層学習による自然言語理解システムの構築',
      description: 'Transformerアーキテクチャを基盤とした日本語自然言語理解モデルの開発。感情分析、意図理解、文脈理解における性能向上を実現。',
      category: 'Academic',
      status: 'Published',
      technologies: ['Python', 'PyTorch', 'Transformers', 'BERT', 'Japanese NLP'],
      venue: 'NLP Conference 2024',
      year: 2024,
      paperUrl: 'https://example.com/paper1',
      githubUrl: 'https://github.com/example/nlp-research',
    },
    {
      id: '2',
      title: 'IoTシステムにおける異常検知アルゴリズムの最適化',
      description: '機械学習を活用したリアルタイム異常検知システム。エッジコンピューティング環境での高速処理と高精度検知を両立。',
      category: 'Industry',
      status: 'Completed',
      technologies: ['Python', 'scikit-learn', 'Edge Computing', 'MQTT', 'Time Series Analysis'],
      year: 2023,
      githubUrl: 'https://github.com/example/iot-anomaly',
    },
    {
      id: '3',
      title: 'マルチモーダル感情認識における注意機構の応用',
      description: '音声・テキスト・画像データを統合した感情認識システム。注意機構を活用してモダリティ間の相互作用を学習。',
      category: 'Academic',
      status: 'Under Review',
      technologies: ['Python', 'PyTorch', 'Computer Vision', 'Audio Processing', 'Multimodal Learning'],
      venue: 'ICML 2024',
      year: 2024,
    },
    {
      id: '4',
      title: '対話AIシステムの個性化に関する研究',
      description: 'ユーザーの嗜好と対話履歴を学習して個性的な応答を生成する対話システム。強化学習とメタ学習を組み合わせたアプローチ。',
      category: 'Personal',
      status: 'In Progress',
      technologies: ['Python', 'Reinforcement Learning', 'Meta Learning', 'Dialogue Systems', 'LLM'],
      year: 2024,
      githubUrl: 'https://github.com/example/personalized-ai',
    },
  ]

  const researchInterests = [
    {
      title: '自然言語処理',
      description: '日本語を中心とした言語理解、生成、対話システムの研究',
      icon: '💬',
    },
    {
      title: 'マルチモーダルAI',
      description: '音声、画像、テキストを統合した知的システムの開発',
      icon: '🎭',
    },
    {
      title: '機械学習最適化',
      description: 'エッジデバイスでの高速・高精度な推論システム',
      icon: '⚡',
    },
    {
      title: 'Human-AI Interaction',
      description: '人間とAIの自然で効果的なインタラクション設計',
      icon: '🤝',
    },
    {
      title: 'IoT & エッジコンピューティング',
      description: 'リアルタイムデータ処理と分散学習システム',
      icon: '🌐',
    },
    {
      title: '強化学習',
      description: 'マルチエージェント環境での最適化問題の解決',
      icon: '🎯',
    },
  ]

  const getStatusColor = (status: ResearchProject['status']) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800'
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Completed':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: ResearchProject['category']) => {
    switch (category) {
      case 'Academic':
        return 'bg-blue-100 text-blue-800'
      case 'Industry':
        return 'bg-green-100 text-green-800'
      case 'Personal':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <Head>
        <title>Research - Portfolio</title>
        <meta name="description" content="AI・機械学習・自然言語処理分野での研究活動と成果をご紹介" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              <span className="text-gradient">Research</span>
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto mb-8">
              AI・機械学習・自然言語処理分野での研究活動をご紹介します。
              学術研究から産業応用まで、幅広い研究テーマに取り組んでいます。
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Research Overview</h2>
            <p className="section-subtitle mx-auto">
              多様な研究領域で革新的なソリューションの開発に取り組んでいます。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center animate-slide-in-left">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">学術研究</h3>
              <p className="text-primary-600">
                大学院での研究活動を通じて、自然言語処理とマルチモーダルAIの基礎理論と応用技術を探究しています。
              </p>
            </div>
            <div className="card text-center animate-fade-in delay-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">産業研究</h3>
              <p className="text-primary-600">
                企業との共同研究や実用的なシステム開発を通じて、研究成果の社会実装に取り組んでいます。
              </p>
            </div>
            <div className="card text-center animate-slide-in-right">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">個人研究</h3>
              <p className="text-primary-600">
                新しいアイデアの検証や興味深い技術課題に対する独自のアプローチを探求しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Research Projects</h2>
            <p className="section-subtitle mx-auto">
              現在進行中および完了した主要な研究プロジェクトをご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <div
                key={project.id}
                className={`card hover:scale-105 transition-all duration-300 animate-slide-up delay-${index * 200}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  {project.year && (
                    <span className="text-xs text-primary-500">{project.year}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{project.title}</h3>
                <p className="text-primary-600 mb-4 text-sm">{project.description}</p>
                {project.venue && (
                  <p className="text-xs text-primary-500 mb-4 italic">📝 {project.venue}</p>
                )}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 text-primary-700 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3 text-sm">
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      Paper
                    </a>
                  )}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Research Interests</h2>
            <p className="section-subtitle mx-auto">
              特に関心を持って取り組んでいる研究分野です。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <div
                key={interest.title}
                className={`card text-center hover:scale-105 transition-all duration-300 animate-scale-in delay-${index % 3 * 100}`}
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2">{interest.title}</h3>
                <p className="text-primary-600 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Research Philosophy</h2>
            <blockquote className="text-xl text-primary-700 italic mb-8 leading-relaxed">
              「技術は人間の可能性を拡張するためのツールである。
              AIと機械学習の研究を通じて、人々の生活をより豊かで便利にし、
              社会全体の発展に貢献することが私の使命だと考えています。」
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="card">
                <h4 className="font-semibold text-primary-800 mb-2">実用性重視</h4>
                <p className="text-sm text-primary-600">
                  理論的な美しさだけでなく、実際の問題解決に役立つ研究を心がけています。
                </p>
              </div>
              <div className="card">
                <h4 className="font-semibold text-primary-800 mb-2">学際的アプローチ</h4>
                <p className="text-sm text-primary-600">
                  計算機科学だけでなく、心理学や言語学など多分野の知見を活用します。
                </p>
              </div>
              <div className="card">
                <h4 className="font-semibold text-primary-800 mb-2">オープンサイエンス</h4>
                <p className="text-sm text-primary-600">
                  研究成果の共有とコミュニティへの貢献を大切にしています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              研究に関するご相談・協業について
            </h2>
            <p className="text-lg text-primary-600 mb-8">
              共同研究やテクニカルディスカッション、論文査読などのご相談がございましたら、
              お気軽にお問い合わせください。
            </p>
            <a href="/contact" className="btn-primary">
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 