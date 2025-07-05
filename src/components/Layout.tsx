import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AIWidget from './AIWidget'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* 固定背景動画 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed-video-background"
      >
        <source src="/tech_bg.mp4" type="video/mp4" />
        <source src="/hero-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* 固定背景オーバーレイ */}
      <div className="fixed-video-overlay"></div>

      {/* ヘッダー */}
      <Header />

      {/* メインコンテンツ */}
      <main className="main-content">
        {children}
      </main>

      {/* フッター */}
      <Footer />
      <AIWidget />
    </div>
  )
}

export default Layout 