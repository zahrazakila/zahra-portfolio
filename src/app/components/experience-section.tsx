"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react"
import AnimatedBackground from "./animated-background"

const experienceData = [
  {
    position: "President",
    company: "Study Club of Informatics",
    location: "Yogyakarta, Indonesia",
    period: "2025 - Present",
    type: "Leadership",
    description:
      "Overseeing the strategic direction, coordination, and growth of the Informatics Study Club. Fostering a collaborative environment to empower members through workshops, projects, and peer-learning programs.",
    achievements: [
      "Initiated and led 10+ technical workshops and mentoring sessions",
      "Increased member engagement by 70% through structured learning programs",
      "Collaborated with lecturers and external mentors to enhance learning quality",
      "Built and guided a core team of 8 to manage operations and community outreach"
    ],
    images: ["/images/scit/scit-1.jpeg", "/images/scit/sciit-2.jpeg"],
  },
  {
    position: "Vice President",
    company: "Student Association of Informatics",
    location: "Yogyakarta, Indonesia",
    period: "2025 - Present",
    type: "Leadership",
    description:
      "Assisting the President in managing strategic initiatives, coordinating internal divisions, and ensuring effective execution of academic, social, and technical programs within the Informatics department.",
    achievements: [
      "Coordinated cross-division collaboration for 15+ academic and social events",
      "Improved organizational workflow and accountability by implementing structured reporting systems",
      "Supported leadership development programs for 50+ students",
      "Fostered partnerships with industry professionals and faculty for community projects"
    ],
    images: ["/images/hmit/hmit-1.jpeg", "/images/hmit/hmit-2.jpeg"],
  },
  {
    position: "Awardee",
    company: "XL Future Leaders",
    location: "Hybrid",
    period: "Nov 2024 - June 2025",
    type: "Leadership",
    description:
      "Selected as one of only 100 awardees from over 67,000 participants and the only representative from UIN",
    achievements: [
      "Gained practical skills in leadership, entrepreneurship, and design thinking",
      "Completed collaborative innovation projects with diverse team members",
      "Trained in effective communication, critical thinking, and problem-solving",
      "Adapted to fast-paced learning environments and managed change effectively",
      "Initiated SisterCorner, a women empowerment project that reached 300+ participants through interactive workshops and campaigns"
    ],
    images: ["/images/ffl/1.jpg", "/images/ffl/2.jpeg"],
  },

  {
    position: "Student Delegate",
    company: "ASEAN Student Mobility 2025",
    location: "Kuala Lumpur, Malaysia",
    period: "2025",
    type: "Exchange Program",
    description:
      "Represented Indonesia in a cross-cultural academic mobility program involving students from ASEAN countries. Engaged in collaborative projects, intercultural dialogue, and leadership activities focused on regional development and innovation.",
    achievements: [
      "Collaborated with 30+ students from 10 ASEAN countries on social innovation initiatives",
      "Presented a group project addressing regional issues aligned with SDGs",
      "Co-initiated and served as CTO of InterNex ASEAN, a platform connecting students with remote internship opportunities across ASEAN",
      "Promoted Indonesia's tech and youth leadership potential on an international platform"
    ],
    images: ["/images/aef/aef-1.jpeg", "/images/aef/aef-2.jpeg"],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <AnimatedBackground className="min-h-screen py-20 px-1 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-pink-950/20 dark:via-black dark:to-purple-950/20 relative overflow-hidden">
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
            Experience & Achievements
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the impact Ive made in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-600 hidden lg:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                  <div className="lg:col-span-3">
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-6 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hidden lg:block"
                      whileHover={{ scale: 1.5 }}
                      style={{ top: "2rem" }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="lg:ml-16 bg-white/90 dark:bg-gray-900/90 border border-pink-100 dark:border-pink-900/30 rounded-xl p-8 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 h-full backdrop-blur-sm"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                          <motion.div
                            className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Briefcase className="w-8 h-8 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                            <p className="text-lg text-pink-600 dark:text-pink-400 font-semibold">{exp.company}</p>
                            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm mt-2">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-pink-500" />
                          Key Achievements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, achIndex) => (
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
                              className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-pink-500 rounded-full" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Two photos for experience - Full height to match left content */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.3 + 0.3 }}
                    className="hidden lg:block lg:col-span-2"
                  >
                    <div className="h-full flex flex-col gap-6">
                      {exp.images.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          className="bg-white/80 dark:bg-gray-900/80 border border-pink-100 dark:border-pink-900/30 rounded-xl p-4 backdrop-blur-sm"
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex flex-col">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`${exp.company} Experience ${imgIndex + 1}`}
                              className="w-full aspect-video object-contain rounded-lg mb-3"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white text-center mb-1">
                                {imgIndex === 0 ? `${exp.company} Photo` : `${exp.company} Activity`}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                                {imgIndex === 0 ? "Activity Snapshot" : "Activity Snapshot"}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedBackground>
  )
}
