"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface AnimatedBackgroundProps {
  className?: string
  children: React.ReactNode
}

export default function AnimatedBackground({ className = "", children }: AnimatedBackgroundProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/20 via-purple-50/10 to-pink-50/20 dark:from-pink-950/10 dark:via-purple-950/5 dark:to-pink-950/10" />
        {children}
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/20 via-purple-50/10 to-pink-50/20 dark:from-pink-950/10 dark:via-purple-950/5 dark:to-pink-950/10" />
      
      {/* Minimal animated elements - only 2 orbs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute w-24 h-24 bg-gradient-radial from-pink-400/20 to-transparent rounded-full blur-xl animate-float" 
             style={{ left: '15%', top: '25%' }} />
        <div className="absolute w-32 h-32 bg-gradient-radial from-purple-400/15 to-transparent rounded-full blur-2xl animate-float-reverse" 
             style={{ left: '70%', top: '60%' }} />
      </div>

      {children}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(5px); }
        }
        
        .animate-float { 
          animation: float 6s ease-in-out infinite;
          will-change: transform;
        }
        .animate-float-reverse { 
          animation: float-reverse 8s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}