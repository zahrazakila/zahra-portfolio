"use client"

import { useEffect, useRef, useState } from "react"
import AnimatedBackground from "./animated-background"

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 85 },
  { name: "Laravel", icon: "https://api.iconify.design/logos/laravel.svg", level: 85 },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 85 },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 82 },
  { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg", level: 80 },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 80 },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 78 },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 75 },
  { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 75 },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 70 },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 70 }
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Delay skills animation slightly
          setTimeout(() => setSkillsAnimated(true), 300)
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <AnimatedBackground className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50 dark:from-gray-950 dark:via-pink-950/20 dark:to-purple-950/20">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital
            experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-100 dark:border-pink-900/30 rounded-xl p-6 text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10 ${
                skillsAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 skill-icon">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mx-auto"
                  loading="lazy"
                />
              </div>
              
              {/* Skill Name */}
              <h3 className="text-gray-900 dark:text-white font-semibold mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                <div
                  className={`skill-progress bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out ${
                    skillsAnimated ? 'w-full' : 'w-0'
                  }`}
                  style={{
                    width: skillsAnimated ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 50 + 200}ms`
                  }}
                />
              </div>
              
              {/* Percentage */}
              <span 
                className={`text-sm text-gray-500 dark:text-gray-400 transition-opacity duration-300 ${
                  skillsAnimated ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 50 + 400}ms`
                }}
              >
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skill-card {
          will-change: transform;
        }
        
        .skill-card:hover .skill-icon img {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
        
        .skill-progress {
          position: relative;
          overflow: hidden;
        }
        
        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
          animation-delay: 1s;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        /* Reduce animations on low-end devices */
        @media (prefers-reduced-motion: reduce) {
          .skill-card {
            transition: none;
          }
          
          .skill-progress::after {
            animation: none;
          }
        }
      `}</style>
    </AnimatedBackground>
  )
}