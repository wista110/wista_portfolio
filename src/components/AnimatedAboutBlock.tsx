'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedAboutBlockProps {
  children: React.ReactNode
}

export default function AnimatedAboutBlock({ children }: AnimatedAboutBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {children}
    </motion.div>
  )
}
