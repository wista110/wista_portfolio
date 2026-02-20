import React, { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

const QUICK_REPLIES = [
  '強みは何ですか？',
  'どんなプロジェクトを経験していますか？',
  '対応可能な技術は？',
  'AIについてのスキルを教えてください',
]

export default function AIWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'こんにちは！伊藤達也のバーチャルアシスタントです。ポートフォリオについてのご質問や、スキル・経歴についてお気軽にお聞きください。',
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getErrorMessage = (errorCode?: string): string => {
    if (errorCode === 'API_KEY_NOT_CONFIGURED' || errorCode === 'API_KEY_INVALID') {
      return '申し訳ございません。現在チャット機能は準備中のためご利用いただけません。お問い合わせはCONTACTフォームからお願いいたします。'
    }
    return '申し訳ございません。エラーが発生しました。しばらく時間をおいてからお試しください。'
  }

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      isBot: false,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const apiMessages = messages
        .filter(msg => msg.id !== '1' || messages.length === 1)
        .map(msg => ({
          role: (msg.isBot ? 'assistant' : 'user') as 'user' | 'assistant',
          content: msg.content,
        }))
        .concat([{ role: 'user' as const, content: userMessage.content }])

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      const data = await response.json()

      if (!response.ok) {
        const errorMsg = getErrorMessage(data?.error)
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            content: errorMsg,
            isBot: true,
            timestamp: new Date(),
          },
        ])
        return
      }

      if (data?.message) {
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            content: data.message,
            isBot: true,
            timestamp: new Date(),
          },
        ])
      } else {
        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            content: getErrorMessage(),
            isBot: true,
            timestamp: new Date(),
          },
        ])
      }
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          content: getErrorMessage(),
          isBot: true,
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isOpen ? 'w-[380px] sm:w-[400px] h-[520px] sm:h-[560px]' : 'w-14 h-14'
      }`}
    >
      {isOpen ? (
        <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-primary-600/50 bg-primary-900/95 shadow-2xl backdrop-blur-xl">
          {/* ヘッダー - ダークテック */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-primary-700/80 bg-primary-800/90">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 ring-2 ring-primary-500/50">
                <span className="text-xs font-bold text-white">AI</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">アシスタント</p>
                <p className="text-xs text-primary-300">伊藤達也について</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-primary-300 transition-colors hover:bg-primary-700 hover:text-white"
              aria-label="閉じる"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* メッセージエリア */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-primary-900/80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    message.isBot
                      ? 'bg-primary-700/80 text-primary-100 border border-primary-600/50'
                      : 'bg-primary-600 text-white border border-primary-500/50'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-primary-600/50 bg-primary-700/80 px-4 py-2.5 text-sm text-primary-200">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary-400 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary-400 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary-400 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* クイックリプライ */}
          {messages.length <= 3 && !isLoading && (
            <div className="border-t border-primary-700/80 bg-primary-800/60 px-4 py-2.5">
              <p className="mb-2 text-xs text-primary-400">よくある質問</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_REPLIES.map((reply, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleQuickReply(reply)}
                    className="rounded-full border border-primary-600 bg-primary-800/80 px-3 py-1.5 text-xs text-primary-200 transition-colors hover:border-primary-500 hover:bg-primary-700 hover:text-white"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 入力エリア */}
          <div className="border-t border-primary-700/80 bg-primary-800/90 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="メッセージを入力..."
                disabled={isLoading}
                className="flex-1 rounded-xl border border-primary-600 bg-primary-900/80 px-3 py-2.5 text-sm text-white placeholder:text-primary-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 disabled:opacity-60"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white transition-colors hover:bg-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="送信"
              >
                {isLoading ? (
                  <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12s5.373 12 12 12v-2a10 10 0 01-10-10z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-700 text-white shadow-lg ring-2 ring-primary-600/50 transition-all hover:scale-105 hover:bg-primary-600 hover:shadow-xl"
          aria-label="チャットを開く"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}
    </div>
  )
}
