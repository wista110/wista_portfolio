import React from 'react'
import Head from 'next/head'

interface TimelineEvent {
  id: string
  year: string
  title: string
  organization: string
  description: string
  type: 'education' | 'work' | 'award'
}

interface Skill {
  name: string
  level: number // 1-100
  category: 'Programming' | 'AI/ML' | 'Tools' | 'Cloud'
}

export default function About() {
  const timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      year: '2013',
      title: '工業高校卒業',
      organization: 'O工業高校 - 電子機械科',
      description: '電気、機械、情報、それぞれの基礎分野を学習する学科で幅広い知識をみにつけました。',
      type: 'education',
    },
    {
      id: '2',
      year: '2014',
      title: '建設会社で溶接を経験',
      organization: 'Y社',
      description: '溶接の経験を積み、溶接技術を身につけ、会社を代表して大会にも出場しました。',
      type: 'work',
    },
    {
      id: '3',
      year: '2020',
      title: 'エンジニア派遣会社での経験',
      organization: 'I社',
      description: 'Sealsforceの管理者を務め、システムの運用と改修を経験しました。',
      type: 'work',
    },
    {
      id: '4',
      year: '2022',
      title: '自動車製造業での経験',
      organization: 'A社',
      description: '検査工程で入社し、作業員として、自動検査機のAI判定のプロジェクトに参加し、画像認識分野の経験をしました。',
      type: 'work',
    },
    {
      id: '5',
      year: '2024',
      title: 'フリーランスとしての経験',
      organization: 'フリーランス',
      description: 'GASをつかった業務効率化や、Sealsforceの改修、HP,LPの制作などを経験しました。',
      type: 'work',
    },
    {
      id: '6',
      year: '2025',
      title: '職業訓練校での経験',
      organization: 'WEBエンジニア養成科',
      description: 'WEBエンジニアとしての知識を改めて学習しました。',
      type: 'education',
    },
  ]

  const skills: Skill[] = [
    { name: 'Python', level: 95, category: 'Programming' },
    { name: 'JavaScript/TypeScript', level: 85, category: 'Programming' },
    { name: 'Java', level: 70, category: 'Programming' },
    { name: 'C++', level: 65, category: 'Programming' },
    { name: 'Go', level: 60, category: 'Programming' },
    { name: 'TensorFlow', level: 90, category: 'AI/ML' },
    { name: 'PyTorch', level: 90, category: 'AI/ML' },
    { name: 'scikit-learn', level: 85, category: 'AI/ML' },
    { name: 'Transformers', level: 80, category: 'AI/ML' },
    { name: 'OpenCV', level: 75, category: 'AI/ML' },
    { name: 'Pandas/NumPy', level: 95, category: 'AI/ML' },
    { name: 'React/Next.js', level: 80, category: 'Programming' },
    { name: 'Node.js', level: 75, category: 'Programming' },
    { name: 'FastAPI', level: 85, category: 'Programming' },
    { name: 'Docker', level: 80, category: 'Tools' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Linux', level: 85, category: 'Tools' },
    { name: 'AWS', level: 75, category: 'Cloud' },
    { name: 'GCP', level: 70, category: 'Cloud' },
    { name: 'MongoDB', level: 75, category: 'Tools' },
    { name: 'PostgreSQL', level: 80, category: 'Tools' },
  ]

  const personalInterests = [
    { icon: '📚', title: '読書', description: '技術書のほかに、ラノベや漫画もよく読みます' },
    { icon: '🎮', title: 'ゲーム', description: '対戦ゲームや協力型のゲームが好きです' },
    { icon: '🏃‍♂️', title: 'スポーツ', description: 'ラグビー、サーフィン、スケートボードなど' },
    { icon: '🎵', title: '音楽', description: '邦ロック、洋楽、が中心です' },
    { icon: '🍳', title: '料理', description: '一人暮らし歴が長いのでいろいろチャレンジしてます' },
    { icon: '📷', title: '写真', description: 'サイトの制作からカメラを買い、写真を撮るのが好きになりました' },
    { icon: '🌱', title: '農業', description: '実家や友人の農家を手伝っています' },
    { icon: '🧩', title: 'モノづくり', description: '溶接や木工など、モノづくりが好きです' },
  ]

  const getTimelineIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return '🎓'
      case 'work':
        return '💼'
      case 'award':
        return '🏆'
      default:
        return '📍'
    }
  }

  const getSkillColor = (category: Skill['category']) => {
    switch (category) {
      case 'Programming':
        return 'bg-blue-200'
      case 'AI/ML':
        return 'bg-green-200'
      case 'Tools':
        return 'bg-yellow-200'
      case 'Cloud':
        return 'bg-purple-200'
      default:
        return 'bg-gray-200'
    }
  }

  return (
    <>
      <Head>
        <title>About - Portfolio</title>
        <meta name="description" content="AIエンジニアの経歴、スキル、個人的な興味についてご紹介" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                <span className="text-gradient">About Me</span>
              </h1>
              <p className="text-xl text-primary-600 mb-6 leading-relaxed">
                プログラミングだけでなく、溶接や機械加工など、モノ作りが好きなエンジニアです。
              </p>
              <div className="space-y-4 text-primary-700">
                <p>
                  趣味でアプリ開発やモノづくりをしています。生成AIを活用して新たなチャレンジをしています。
                </p>
                <p>
                  企業でのプログラミング経験は浅いですが、機械学習、インフラ、の経験も少々あり、幅広い知識を持っています。
                  また、製造業での画像判定ロボットのプロジェクトの経験もあり、様々な分野での経験を活かせます。
                </p>
                <p>
                  高度な技術を多くの人へ提供し、
                  人々の生活をより豊かにすることが私の使命だと考えています。
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="card">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">3+</div>
                    <div className="text-sm text-primary-600">年の経験</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">15+</div>
                    <div className="text-sm text-primary-600">プロジェクト</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">5+</div>
                    <div className="text-sm text-primary-600">研究発表</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-800">10+</div>
                    <div className="text-sm text-primary-600">技術スタック</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="section-title">Philosophy</h2>
            <blockquote className="text-xl text-primary-700 italic mb-8 leading-relaxed">
              「素晴らしい技術を手の届かない技術で終わらせず、
              多くの人に提供していきたいと考えています。」
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-semibold text-primary-800 mb-2">目的意識</h3>
                <p className="text-sm text-primary-600">
                  使用者のニーズを第一に考え、技術を提供していきます。
                </p>
              </div>
              <div className="card">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-semibold text-primary-800 mb-2">継続的学習</h3>
                <p className="text-sm text-primary-600">
                  急速に進歩する技術分野で常に最新の知識を習得し、成長し続けています。
                </p>
              </div>
              <div className="card">
                <div className="text-2xl mb-3">🤝</div>
                <h3 className="font-semibold text-primary-800 mb-2">協働の精神</h3>
                <p className="text-sm text-primary-600">
                  技術力よりもまずはチームワークが大事だと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Career Timeline</h2>
            <p className="section-subtitle mx-auto">
              これまでの経歴と主要なマイルストーンをご紹介します。
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-300"></div>
            
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-start mb-8 animate-slide-in-left delay-${index * 100}`}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-primary-300 rounded-full flex items-center justify-center shadow-sm z-10">
                  <span className="text-xl">{getTimelineIcon(event.type)}</span>
                </div>
                
                {/* Content */}
                <div className="ml-6 card flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-lg font-semibold text-primary-800">{event.title}</div>
                    <div className="text-sm text-primary-500 font-medium">{event.year}</div>
                  </div>
                  <div className="text-primary-600 font-medium mb-2">{event.organization}</div>
                  <p className="text-sm text-primary-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle mx-auto">
              現在のスキルレベルと習熟度をカテゴリ別にご紹介します。
            </p>
          </div>
          
          {/* Skills grouped by category */}
          {['Programming', 'AI/ML', 'Tools', 'Cloud'].map((category, categoryIndex) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold text-primary-800 mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`card animate-scale-in delay-${(categoryIndex * 100) + (index * 50)}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-primary-800">{skill.name}</span>
                        <span className="text-sm text-primary-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-primary-100 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getSkillColor(skill.category)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Personal Interests</h2>
            <p className="section-subtitle mx-auto">
              技術以外の分野での興味や趣味をご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {personalInterests.map((interest, index) => (
              <div
                key={interest.title}
                className={`card text-center hover:scale-105 transition-all duration-300 animate-scale-in delay-${index * 100}`}
              >
                <div className="text-3xl mb-3">{interest.icon}</div>
                <h3 className="font-semibold text-primary-800 mb-2">{interest.title}</h3>
                <p className="text-xs text-primary-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              気軽にご連絡下さい！
            </h2>
            <p className="text-xl text-primary-600 mb-8 leading-relaxed">
              プログラミング、モノづくり、AIや技術の相談など、お気軽にご連絡下さい。
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/contact" className="btn-primary">
                お問い合わせ
              </a>
              <a href="/projects" className="btn-secondary">
                プロジェクトを見る
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 