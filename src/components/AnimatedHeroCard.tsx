'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AnimatedHeroCardProps {
  children: React.ReactNode
}

export default function AnimatedHeroCard({ children }: AnimatedHeroCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
    >
      {children}
    </motion.div>
  )
}
