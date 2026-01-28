import React from 'react'
import Head from 'next/head'
import { 
  SiPython, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiDocker, 
  SiGit, 
  SiLinux, 
  SiAmazon, 
  SiGooglecloud, 
  SiMongodb,
  SiPostgresql,
  SiFastapi
} from 'react-icons/si'
import {
  DiJava,
  DiPython,
  DiPostgresql,
  DiMongodb,
  DiDocker,
  DiGit,
  DiLinux,
  DiAws,
  DiGoogleCloudPlatform,
  DiSwift,
  DiJsBadge,
  DiReact,
  DiDart
} from 'react-icons/di'

interface Skill {
  name: string
  description: string
  category: 'Programming' | 'Tools' | 'Cloud'
  icon?: React.ReactNode
}

export default function Skills() {
  const getSkillIcon = (name: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Python': <DiPython className="w-6 h-6 text-gray-800" />,
      'JavaScript/TypeScript': <DiJsBadge className="w-6 h-6 text-gray-800" />,
      'Java': <DiJava className="w-6 h-6 text-gray-800" />,
      'React/Next.js': <DiReact className="w-6 h-6 text-gray-800" />,
      'Node.js': <SiNodedotjs className="w-6 h-6 text-gray-800" />,
      'Swift': <DiSwift className="w-6 h-6 text-gray-800" />,
      'Dart': <DiDart className="w-6 h-6 text-gray-800" />,
      'Docker': <DiDocker className="w-6 h-6 text-gray-800" />,
      'Git': <DiGit className="w-6 h-6 text-gray-800" />,
      'Linux': <DiLinux className="w-6 h-6 text-gray-800" />,
      'AWS': <DiAws className="w-6 h-6 text-gray-800" />,
      'GCP': <DiGoogleCloudPlatform className="w-6 h-6 text-gray-800" />,
      'MongoDB': <DiMongodb className="w-6 h-6 text-gray-800" />,
      'PostgreSQL': <DiPostgresql className="w-6 h-6 text-gray-800" />,
    }
    return iconMap[name] || <span className="text-2xl">💻</span>
  }

  const skills: Skill[] = [
    { name: 'Python', description: '機械学習での改善活動を経験', category: 'Programming', icon: getSkillIcon('Python') },
    { name: 'JavaScript/TypeScript', description: 'HP制作経験あり', category: 'Programming', icon: getSkillIcon('JavaScript/TypeScript') },
    { name: 'Java', description: '職業訓練で学習', category: 'Programming', icon: getSkillIcon('Java') },
    { name: 'React/Next.js', description: 'アプリ制作経験あり', category: 'Programming', icon: getSkillIcon('React/Next.js') },
    { name: 'Node.js', description: '職業訓練で学習', category: 'Programming', icon: getSkillIcon('Node.js') },
    { name: 'Swift', description: 'アプリ制作での経験あり', category: 'Programming', icon: getSkillIcon('Swift') },
    { name: 'Dart', description: 'アプリ制作での経験あり', category: 'Programming', icon: getSkillIcon('Dart') },
    { name: 'Docker', description: '職業訓練で学習', category: 'Tools', icon: getSkillIcon('Docker') },
    { name: 'Git', description: '職業訓練で学習', category: 'Tools', icon: getSkillIcon('Git') },
    { name: 'Linux', description: '職業訓練で学習', category: 'Tools', icon: getSkillIcon('Linux') },
    { name: 'AWS', description: '書籍で学習', category: 'Cloud', icon: getSkillIcon('AWS') },
    { name: 'GCP', description: '書籍で学習', category: 'Cloud', icon: getSkillIcon('GCP') },
    { name: 'MongoDB', description: 'アプリ制作での経験あり', category: 'Tools', icon: getSkillIcon('MongoDB') },
  ]

  return (
    <>
      <Head>
        <title>Skills - Portfolio</title>
        <meta name="description" content="今まで経験してきたスキルをカテゴリ別にご紹介します" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg.jpg)' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-white">Skills</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              現在のスキルレベルと習熟度をカテゴリ別にご紹介します。
            </p>
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
          {['Programming', 'Tools', 'Cloud'].map((category, categoryIndex) => (
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
                      <div className="flex items-center gap-3 mb-3">
                        {skill.icon && (
                          <div className="flex-shrink-0">
                            {skill.icon}
                          </div>
                        )}
                        <div className="flex-1">
                          <span className="font-medium text-primary-800">{skill.name}</span>
                        </div>
                      </div>
                      <p className="text-sm text-primary-600">{skill.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}
