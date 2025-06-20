"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <AnimatedBackground className="min-h-screen py-20 px-1 bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50 dark:from-gray-950 dark:via-pink-950/20 dark:to-purple-950/20 transition-colors duration-500">
      <div ref={ref} className="max-w-6xl mx-auto">
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
            Skills & Technologies
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital
            experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 10,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-100 dark:border-pink-900/30 rounded-xl p-6 text-center group hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
            >
              <motion.div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
               <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mx-auto"
                />
              </motion.div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-3">{skill.name}</h3>

              {/* Enhanced skill level bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full relative"
                >
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: index * 0.1 + 1,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>
              <motion.span
                className="text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 1 }}
              >
                {skill.level}%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  )
}
