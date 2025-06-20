"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectModal from "./project-modal"

const projects = [
  {
    id: 1,
    title: "BeFit Space",
    description: "A web-based gym membership platform with Laravel and Midtrans integration for payment, built with MySQL.",
    image: "/images/befit/1.png",
    tags: ["Laravel", "PHP", "MySQL", "Midtrans"],
    github: "https://github.com/zahrazakila/BeFit-Space",
  },
  {
    id: 2,
    title: "Risk Management System",
    description: "A web-based risk monitoring system for organizations built using native PHP and MySQL.",
    image: "/images/risk-bbp/1.png",
    tags: ["PHP", "MySQL"],
    github: "https://github.com/zahrazakila/risk-management",
  },
  {
    id: 3,
    title: "TB-Box IoT",
    description: "An IoT-based smart medicine box for TB patients with alarm and web monitoring system.",
    image: "/images/tb-box/1.jpg",
    tags: ["IoT", "ESP32", "C++", "Web", "MySQL"],
  },
  {
    id: 4,
    title: "UI/UX Design – TB-Care",
    description: "A high-fidelity Figma prototype for TB-Care, a medication adherence app for patients.",
    image: "/images/project-ui-tb/1.png",
    tags: ["Figma", "UI/UX", "Prototype", "Health", "Design"],
    demo: "https://www.figma.com/proto/kFMpIXsmSFNCHPuzPrdgUZ/TB-Care?page-id=0%3A1&node-id=222-3533&viewport=-1%2C599%2C0.19&t=sWRC7OrlZ80LhtgD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=222%3A3533&show-proto-sidebar=1",
  },
  {
    id: 5,
    title: "Podomoro App",
    description: "A simple productivity timer inspired by the Pomodoro technique using basic web technologies.",
    image: "/images/podomoro/1.png",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/zahrazakila/pomodoro-app",
  },
  {
    id: 6,
    title: "Lanternship Landing Page",
    description: "A modern and responsive landing page built for Lanternship.com startup branding.",
    image: "/images/lanternship/1.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    demo: "https://lanternship.com",
  },
  {
    id: 7,
    title: "IoT Projects Collection",
    description: "Collection of various IoT mini-projects focusing on health and automation using ESP32.",
    image: "/images/iot/1.jpeg",
    tags: ["IoT", "ESP32", "C/C++", "Sensors"],
    github: "https://github.com/zahrazakila/Iot-Project",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <div className="min-h-screen py-20 px-1 bg-gradient-to-br from-white via-purple-50 to-pink-50 dark:from-black dark:via-purple-950/20 dark:to-pink-950/20 transition-colors duration-500">
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
            Featured Projects
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0, rotateX: -15 }}
              animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, rotateX: 5, rotateY: 5, scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-pink-100 dark:border-pink-900/30 rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + tagIndex * 0.1 + 0.5, duration: 0.5, ease: "easeOut" }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {project.github && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.github, "_blank")
                          }}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </motion.div>
                    )}
                    {project.demo && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.demo, "_blank")
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </motion.div>
                    )}
                  </div>

                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300"
                    >
                      View Details →
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More Projects <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <ProjectModal
        projectId={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
