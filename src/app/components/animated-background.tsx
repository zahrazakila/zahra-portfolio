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
      
      {/* CSS-only animated elements */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        {/* Floating orbs using CSS animations only */}
        <div className="absolute w-32 h-32 bg-gradient-radial from-pink-400/30 to-transparent rounded-full blur-xl animate-float-slow" 
             style={{ left: '10%', top: '20%' }} />
        <div className="absolute w-24 h-24 bg-gradient-radial from-purple-400/30 to-transparent rounded-full blur-xl animate-float-medium" 
             style={{ left: '70%', top: '10%' }} />
        <div className="absolute w-40 h-40 bg-gradient-radial from-pink-300/20 to-transparent rounded-full blur-2xl animate-float-fast" 
             style={{ left: '50%', top: '60%' }} />
        <div className="absolute w-28 h-28 bg-gradient-radial from-purple-300/25 to-transparent rounded-full blur-xl animate-float-slow" 
             style={{ left: '20%', top: '70%' }} />
        <div className="absolute w-36 h-36 bg-gradient-radial from-pink-400/20 to-transparent rounded-full blur-2xl animate-float-medium" 
             style={{ left: '80%', top: '80%' }} />
        
        {/* Simple geometric shapes */}
        <div className="absolute w-4 h-4 bg-pink-400/40 rounded-full animate-pulse-slow" 
             style={{ left: '30%', top: '30%' }} />
        <div className="absolute w-3 h-3 bg-purple-400/40 rounded-sm rotate-45 animate-spin-slow" 
             style={{ left: '60%', top: '40%' }} />
        <div className="absolute w-5 h-5 bg-pink-300/30 rounded-full animate-pulse-fast" 
             style={{ left: '40%', top: '80%' }} />
        <div className="absolute w-4 h-4 bg-purple-300/35 rounded-lg animate-bounce-slow" 
             style={{ left: '75%', top: '25%' }} />
        <div className="absolute w-3 h-3 bg-pink-400/45 rounded-full animate-pulse-medium" 
             style={{ left: '15%', top: '85%' }} />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.1) 2px, transparent 2px)`,
               backgroundSize: '60px 60px'
             }} 
        />
      </div>

      {children}

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-5px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(15px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(-10px); }
          50% { transform: translateY(5px) translateX(10px); }
          75% { transform: translateY(-5px) translateX(-5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 3s ease-in-out infinite; }
        .animate-pulse-fast { animation: pulse-fast 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}