"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  size: string
  color: string
  shape: string
  left: number
  top: number
  animationDelay: number
}

interface GeometricShape {
  id: number
  shape: 'triangle' | 'diamond' | 'hexagon'
  left: number
  top: number
  size: number
  color: string
  rotation: number
}

interface PulsingDot {
  id: number
  left: number
  top: number
  size: number
  delay: number
}

interface AnimatedBackgroundProps {
  className?: string
  children: React.ReactNode
}

export default function AnimatedBackground({ className = "", children }: AnimatedBackgroundProps) {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([])
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; top: number }>>([])
  const [glowOrbs, setGlowOrbs] = useState<
    Array<{
      id: number
      left: number
      top: number
      width: number
      height: number
      color: string
    }>
  >([])
  const [geometricShapes, setGeometricShapes] = useState<GeometricShape[]>([])
  const [pulsingDots, setPulsingDots] = useState<PulsingDot[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Enhanced floating elements with more variety
    const elements: FloatingElement[] = []
    for (let i = 0; i < 30; i++) {
      elements.push({
        id: i,
        size: `w-${2 + Math.floor(Math.random() * 8)} h-${2 + Math.floor(Math.random() * 8)}`,
        color: Math.random() > 0.6 
          ? "bg-pink-400/70 dark:bg-pink-300/60" 
          : Math.random() > 0.3 
          ? "bg-purple-400/70 dark:bg-purple-300/60"
          : "bg-gradient-to-br from-pink-400/70 to-purple-400/70",
        shape: Math.random() > 0.7 ? "rounded-full" : Math.random() > 0.4 ? "rounded-lg" : "rounded-sm rotate-45",
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 3,
      })
    }
    setFloatingElements(elements)

    // Enhanced sparkles with more intensity
    const sparkleElements = []
    for (let i = 0; i < 40; i++) {
      sparkleElements.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
      })
    }
    setSparkles(sparkleElements)

    // More vibrant glowing orbs
    const orbElements = []
    for (let i = 0; i < 8; i++) {
      orbElements.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: 80 + Math.random() * 120,
        height: 80 + Math.random() * 120,
        color: Math.random() > 0.5 
          ? "bg-gradient-radial from-pink-400/50 via-pink-300/30 to-transparent" 
          : "bg-gradient-radial from-purple-400/50 via-purple-300/30 to-transparent",
      })
    }
    setGlowOrbs(orbElements)

    // Geometric shapes for modern feel
    const shapes: GeometricShape[] = []
    for (let i = 0; i < 15; i++) {
      shapes.push({
        id: i,
        shape: ['triangle', 'diamond', 'hexagon'][Math.floor(Math.random() * 3)] as 'triangle' | 'diamond' | 'hexagon',
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 15 + Math.random() * 25,
        color: Math.random() > 0.5 ? 'text-pink-400/60' : 'text-purple-400/60',
        rotation: Math.random() * 360,
      })
    }
    setGeometricShapes(shapes)

    // Pulsing dots for rhythm
    const dots: PulsingDot[] = []
    for (let i = 0; i < 20; i++) {
      dots.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 2,
      })
    }
    setPulsingDots(dots)
  }, [])

  const renderGeometricShape = (shape: GeometricShape) => {
    const commonClasses = `${shape.color} opacity-70`
    const size = shape.size

    switch (shape.shape) {
      case 'triangle':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" className={commonClasses}>
            <path d="M12 2 L22 20 L2 20 Z" fill="currentColor" />
          </svg>
        )
      case 'diamond':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" className={commonClasses}>
            <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="currentColor" />
          </svg>
        )
      case 'hexagon':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" className={commonClasses}>
            <path d="M17.5 3.5 L22.5 12 L17.5 20.5 L6.5 20.5 L1.5 12 L6.5 3.5 Z" fill="currentColor" />
          </svg>
        )
      default:
        return null
    }
  }

  if (!isClient) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 opacity-80 mix-blend-overlay z-0">
          <div
            className="absolute w-6 h-6 bg-pink-400/60 dark:bg-pink-300/50 rounded-full blur-sm"
            style={{ left: "20%", top: "30%" }}
          />
          <div
            className="absolute w-4 h-6 bg-purple-400/60 dark:bg-purple-300/50 rounded-lg blur-sm"
            style={{ left: "70%", top: "60%" }}
          />
          <div
            className="absolute w-6 h-4 bg-gradient-to-br from-pink-400/60 to-purple-400/60 rounded-full blur-sm"
            style={{ left: "40%", top: "80%" }}
          />
        </div>
        {children}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Main background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/20 to-pink-50/30 dark:from-pink-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
      
      <div className="absolute inset-0 opacity-85 mix-blend-overlay pointer-events-none z-0">
        {/* Enhanced floating elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute"
            style={{ left: `${element.left}%`, top: `${element.top}%` }}
            animate={{ 
              y: [-30, 30, -30], 
              x: [-15, 15, -15], 
              rotate: [0, 360, 0],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: element.animationDelay,
            }}
          >
            <div className={`absolute ${element.size} ${element.color} ${element.shape} blur-[1px] shadow-lg`} />
          </motion.div>
        ))}

        {/* Enhanced sparkles with twinkling effect */}
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute"
            style={{ left: `${sparkle.left}%`, top: `${sparkle.top}%` }}
          >
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-sm"
              animate={{ 
                opacity: [0, 1, 0.7, 1, 0], 
                scale: [0, 1.2, 0.8, 1.5, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          </motion.div>
        ))}

        {/* Enhanced glowing orbs */}
        {glowOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className={`absolute rounded-full blur-2xl ${orb.color} shadow-2xl`}
            style={{
              left: `${orb.left}%`,
              top: `${orb.top}%`,
              width: `${orb.width}px`,
              height: `${orb.height}px`,
            }}
            animate={{ 
              scale: [1, 1.3, 0.9, 1.2, 1], 
              opacity: [0.4, 0.8, 0.5, 0.9, 0.4],
              x: [-20, 20, -20],
              y: [-10, 10, -10]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Geometric shapes */}
        {geometricShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{ left: `${shape.left}%`, top: `${shape.top}%` }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360, shape.rotation],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          >
            {renderGeometricShape(shape)}
          </motion.div>
        ))}

        {/* Pulsing dots for rhythm */}
        {pulsingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute bg-gradient-to-r from-pink-500/80 to-purple-500/80 rounded-full shadow-sm"
            style={{ 
              left: `${dot.left}%`, 
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`
            }}
            animate={{ 
              scale: [1, 1.8, 1], 
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay for modern tech feel */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      {children}
    </div>
  )
}