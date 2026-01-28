import React, { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

export default function AIWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '現在この機能は調整中です。ご利用いただけません。',
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // シミュレートされたボット応答（将来的にAI APIに置き換え）
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isBot: true,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const generateBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()
    
    if (lowerInput.includes('プロジェクト') || lowerInput.includes('project')) {
      return 'プロジェクトページでは、AI、IoT、モバイルアプリケーションなどの様々なプロジェクトをご覧いただけます。特にAIチャットボットやIoTデータ可視化システムに興味がおありでしたら、詳細をご説明いたします。'
    }
    
    if (lowerInput.includes('研究') || lowerInput.includes('research')) {
      return '現在、深層学習を活用した自然言語理解、IoTシステムの異常検知、マルチモーダル感情認識などの研究に取り組んでいます。特定の研究内容についてお聞きになりたいことがありましたら、お教えください。'
    }
    
    if (lowerInput.includes('スキル') || lowerInput.includes('skill') || lowerInput.includes('技術')) {
      return 'Python、JavaScript/TypeScript、機械学習、クラウドコンピューティングなどの技術スキルを保有しています。自己紹介ページで詳細なスキルセットをご確認いただけます。'
    }
    
    if (lowerInput.includes('連絡') || lowerInput.includes('contact') || lowerInput.includes('お問い合わせ')) {
      return 'お問い合わせページからメッセージをお送りいただけます。協業やプロジェクトのご相談など、お気軽にご連絡ください。'
    }
    
    return 'ご質問ありがとうございます。このチャットは現在調整中です。詳細な情報については、該当するページをご覧いただくか、お問い合わせフォームからご連絡ください。他にも何かご不明な点がございましたら、お聞かせください。'
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* チャットウィジェット */}
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isOpen ? 'w-80 h-96' : 'w-14 h-14'}`}>
        {isOpen ? (
          /* チャットウィンドウ */
          <div className="bg-white rounded-3xl shadow-xl border border-primary-200 h-full flex flex-col">
            {/* ヘッダー */}
            <div className="flex items-center justify-between p-4 border-b border-primary-100 rounded-t-3xl bg-primary-50">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <span className="font-medium text-primary-800">アシスタント</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-600 hover:text-primary-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* メッセージエリア */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
                      message.isBot
                        ? 'bg-primary-100 text-primary-800'
                        : 'bg-primary-800 text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-2xl text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* 入力エリア */}
            <div className="p-4 border-t border-primary-100">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="メッセージを入力..."
                  className="flex-1 px-3 py-2 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim()}
                  className="px-4 py-2 bg-primary-800 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* フローティングボタン */
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-primary-800 text-white rounded-full shadow-lg hover:bg-primary-700 hover:scale-110 transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        )}
      </div>
    </>
  )
} 