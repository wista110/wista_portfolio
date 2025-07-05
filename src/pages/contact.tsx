import React, { useState } from 'react'
import Head from 'next/head'
import { Github, Twitter, Instagram, Mail } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須項目です'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須項目です'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = '件名は必須項目です'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージは必須項目です'
    } else if (formData.message.length < 10) {
      newErrors.message = 'メッセージは10文字以上で入力してください'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('送信エラー:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'メール',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com',
    },
    {
      icon: '📱',
      title: 'SNS',
      value: '@example_handle',
      link: 'https://twitter.com/example_handle',
    },
    {
      icon: '📍',
      title: '所在地',
      value: '東京, 日本',
      link: null,
    },
    {
      icon: '⏰',
      title: '対応時間',
      value: '平日 9:00-18:00',
      link: null,
    },
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/wista110', icon: Github },
    { name: 'X', href: 'https://x.com/dfujinari', icon: Twitter },
    { name: 'Instagram', href: 'https://www.instagram.com/wista_dev/', icon: Instagram },
    { name: 'Email', href: 'wista.dev1@gmail.com', icon: Mail },
  ]

  const faqs = [
    {
      question: 'プロジェクトのご相談について',
      answer: 'AI・機械学習プロジェクトのご相談を承っています。まずはお気軽にメールでお問い合わせください。',
    },
    {
      question: '対応可能な開発期間',
      answer: 'プロジェクトの規模により異なりますが、小規模なものは1-2週間、大規模なものは数ヶ月の期間で対応可能です。',
    },
    {
      question: '研究に関するご相談',
      answer: '共同研究、論文査読、技術的なディスカッションなど、研究に関するご相談もお受けしています。',
    },
    {
      question: '料金について',
      answer: 'プロジェクトの内容と期間により料金を決定いたします。詳細はお問い合わせ時にご相談ください。',
    },
  ]

  return (
    <>
      <Head>
        <title>Contact - Portfolio</title>
        <meta name="description" content="お仕事のご相談、共同研究、技術的なディスカッションなどお気軽にお問い合わせください" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              <span className="text-gradient">Contact</span>
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto mb-8">
              お仕事のご相談、共同研究、技術的なディスカッションなど、
              どのようなことでもお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">メッセージをお送りください</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-2xl">
                  <p className="text-green-800">
                    ✅ メッセージを送信いたしました！通常24時間以内にご返信いたします。
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-2xl">
                  <p className="text-red-800">
                    ❌ 送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-800 mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors ${
                        errors.name ? 'border-red-300' : 'border-primary-200'
                      }`}
                      placeholder="山田太郎"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-800 mb-2">
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-300' : 'border-primary-200'
                      }`}
                      placeholder="example@gmail.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-800 mb-2">
                    件名 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors ${
                      errors.subject ? 'border-red-300' : 'border-primary-200'
                    }`}
                    placeholder="プロジェクトのご相談について"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-800 mb-2">
                    メッセージ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-colors resize-none ${
                      errors.message ? 'border-red-300' : 'border-primary-200'
                    }`}
                    placeholder="プロジェクトの詳細や、ご相談内容について具体的にお聞かせください..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : 'メッセージを送信'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">連絡先情報</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-primary-800">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary-600 hover:text-primary-800 transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
                {/* ソーシャルリンク */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary-800 uppercase tracking-wider">
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">よくあるご質問</h2>
            <p className="section-subtitle mx-auto">
              お問い合わせの前に、こちらもご確認ください。
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`card animate-slide-up delay-${index * 100}`}
              >
                <h3 className="text-lg font-semibold text-primary-800 mb-3">{faq.question}</h3>
                <p className="text-primary-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-lg text-primary-600 mb-8">
              小さなご質問から大きなプロジェクトまで、
              どのようなことでも遠慮なくお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#contact-form" className="btn-primary">
                フォームから送信
              </a>
              <a href="mailto:contact@example.com" className="btn-secondary">
                直接メールする
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 