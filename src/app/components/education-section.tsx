"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <AnimatedBackground className="min-h-screen py-20 px-1 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
            animate={
              isInView
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Education
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise.
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 border border-pink-100 dark:border-pink-900/30 rounded-xl p-8 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>
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

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

              <div className="flex flex-wrap gap-3">
                {edu.achievements.map((achievement, achIndex) => (
                  <motion.div
                    key={achIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: index * 0.3 + achIndex * 0.1 + 0.5,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full"
                  >
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  )
}
