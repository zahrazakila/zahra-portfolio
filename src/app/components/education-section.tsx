"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import AnimatedBackground from "./animated-background"

const educationData = [
  {
    degree: "Bachelor of Informatics",
    school: "Islamic State University of Sunan Kalijaga",
    location: "Yogyakarta, Indonesia",
    period: "2023 - Now",
    description: "Specialized in Iot and Web Programming",
    achievements: ["GPA: 3.86/4.0", "ASEAN Student Mobility Program Delegate", "President of Study Club"],
  },
  {
    degree: "Natural Sciences",
    school: "MAN 2 Yogyakarta",
    location: "Yogyakarta, Indonesia",
    period: "2020 - 2023",
    description: "Focused on Research Activities. Active in Olympiad",
    achievements: ["GPA: 90/100", "Madrasah Young Researcher Supercamp Winner", "Best Graduate of Natural Sciences"],
  },
]

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <AnimatedBackground className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`education-card bg-white dark:bg-gray-800 border border-pink-100 dark:border-pink-900/30 rounded-xl p-8 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10 ${
                isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="icon-container w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-lg text-pink-600 dark:text-pink-400 font-semibold">{edu.school}</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

              {/* Achievements */}
              <div className="flex flex-wrap gap-3">
                {edu.achievements.map((achievement, achIndex) => (
                  <div
                    key={achIndex}
                    className={`achievement-badge flex items-center space-x-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full transition-all duration-500 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: `${index * 200 + achIndex * 100 + 300}ms`
                    }}
                  >
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education-card {
          will-change: transform;
        }
        
        .icon-container:hover {
          transform: rotate(360deg) scale(1.1);
          transition: transform 0.3s ease;
        }
        
        .achievement-badge:hover {
          transform: scale(1.05);
        }
        
        /* Reduce animations on low-end devices */
        @media (prefers-reduced-motion: reduce) {
          .education-card,
          .achievement-badge,
          .icon-container {
            transition: none !important;
          }
          
          .icon-container:hover {
            transform: none;
          }
        }
      `}</style>
    </AnimatedBackground>
  )
}