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

  return (
    <>
      <Head>
        <title>About - Portfolio</title>
        <meta name="description" content="AIエンジニアの経歴、スキル、個人的な興味についてご紹介" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg.jpg)' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-white">About Me</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              プログラミングだけでなく、溶接や機械加工など、モノ作りが好きです。<br />
              生成AIを活用し、アプリ開発やモノづくりなどをしています。
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="section-title">Philosophy</h2>
            <blockquote className="text-xl text-primary-700 italic mb-8 leading-relaxed">
              「新しい技術を手の届かない技術で終わらせず、
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
                <h3 className="font-semibold text-primary-800 mb-2">人に寄り添う</h3>
                <p className="text-sm text-primary-600">
                  作って終わりではなく、人に喜んでもらうまで改善を続けます。
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
              これまでの経歴をご紹介します。
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
              プログラミング、モノづくり、アプリ開発、AIや技術の相談など、お気軽にご連絡下さい。
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/contact" className="btn-primary">
                お問い合わせ
              </a>
              <a href="/works" className="btn-secondary">
                プロジェクトを見る
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 