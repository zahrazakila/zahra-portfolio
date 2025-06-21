"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import AnimatedBackground from "./animated-background"
import Typewriter from "./Typewriter"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [isWaving, setIsWaving] = useState(false)
  
  const greetings = [
    { text: "Hi there! 👋", delay: 0 },
    { text: "Hello! 🌟", delay: 2000 },
    { text: "Welcome! ✨", delay: 4000 },
    { text: "Nice to meet you! 😊", delay: 6000 }
  ]

  const handleScrollDown = () => {
    const nextSection = document.querySelector("#education");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const triggerWave = () => {
    setIsWaving(true)
    setTimeout(() => setIsWaving(false), 1000)
  }

  return (
    <AnimatedBackground>
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Kolom Kiri: Teks */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Zahra Zakila
                </span>
              </h1>

              <div className="mb-6 h-12">
                <Typewriter />
              </div>

              <p className="text-lg text-muted-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
                I love building things that make a difference. Whether it's apps, communities, or bold ideas that empower others.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0"
                  onClick={handleScrollDown}
                >
                  Explore My Journey <ArrowDown className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/zahrazakila" className="text-muted-foreground hover:text-pink-500 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/zahrazakila" className="text-muted-foreground hover:text-pink-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:zahrazakila59@gmail.com" className="text-muted-foreground hover:text-pink-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            {/* Kolom Kanan: Cute Greeting Character */}
            <motion.div
              className="hidden lg:flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Main Character Container */}
                <div 
                  className="relative cursor-pointer transform transition-transform hover:scale-105"
                  onClick={triggerWave}
                >
                  {/* Character Body */}
                  <div className="w-48 h-64 bg-gradient-to-b from-pink-100 to-pink-200 rounded-full relative shadow-xl">
                    {/* Face */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-pink-50 to-pink-100 rounded-full">
                      {/* Eyes */}
                      <div className="absolute top-8 left-6 w-4 h-6 bg-black rounded-full animate-blink"></div>
                      <div className="absolute top-8 right-6 w-4 h-6 bg-black rounded-full animate-blink"></div>
                      
                      {/* Blush */}
                      <div className="absolute top-12 left-2 w-6 h-4 bg-pink-300 rounded-full opacity-60"></div>
                      <div className="absolute top-12 right-2 w-6 h-4 bg-pink-300 rounded-full opacity-60"></div>
                      
                      {/* Mouth */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-pink-400 rounded-full"></div>
                    </div>
                    
                    {/* Hair */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-36 h-20 bg-gradient-to-b from-purple-400 to-purple-500 rounded-t-full"></div>
                    
                    {/* Hair Accessories */}
                    <div className="absolute top-2 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-8 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
                    
                    {/* Arms */}
                    <motion.div 
                      className="absolute top-20 -left-8 w-12 h-8 bg-pink-200 rounded-full origin-right"
                      animate={isWaving ? { rotate: [0, -30, 30, -20, 20, 0] } : { rotate: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      {/* Hand */}
                      <div className="absolute -left-2 top-1 w-6 h-6 bg-pink-100 rounded-full">
                        <span className="absolute inset-0 flex items-center justify-center text-lg">👋</span>
                      </div>
                    </motion.div>
                    
                    <div className="absolute top-20 -right-8 w-12 h-8 bg-pink-200 rounded-full">
                      <div className="absolute -right-2 top-1 w-6 h-6 bg-pink-100 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Floating Hearts */}
                  <motion.div
                    className="absolute -top-4 -right-4 text-2xl"
                    animate={{ y: [-10, -20, -10], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    💖
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-8 -left-8 text-lg"
                    animate={{ y: [-5, -15, -5], rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    ✨
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 right-4 text-xl"
                    animate={{ y: [-8, -18, -8], rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    🌟
                  </motion.div>
                </div>
                
                {/* Speech Bubble */}
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2"
                  key={currentGreeting}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-2xl px-6 py-3 shadow-lg relative border border-pink-200">
                    <p className="text-lg font-semibold text-gray-700 whitespace-nowrap">
                      {greetings[currentGreeting].text}
                    </p>
                    {/* Speech bubble tail */}
                    <div className="absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2">
                      <div className="border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Interactive hint */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground/60 text-center">
                  👆 Click me to wave!
                </div>
                
                {/* Sparkle effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [-20, -40, -60],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        
        .animate-blink {
          animation: blink 3s infinite;
        }
      `}</style>
    </AnimatedBackground>
  )
}