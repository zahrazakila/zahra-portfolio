"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink, Calendar, User, Tag, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const projectDetails = {
  1: {
    title: "BeFit Space",
    description:
      "A web-based gym membership platform with Laravel and Midtrans integration for payment, built with MySQL.",
    longDescription:
      "BeFit Space is a Laravel-based web platform designed for fitness centers to manage member subscriptions, workout schedules, and online payments. It integrates Midtrans for secure payment, supports different membership packages, and provides reminders for renewals.",
    images: ["/images/befit/1.png", "/images/befit/2.png", "/images/befit/3.png"],
    tags: ["Laravel", "PHP", "MySQL", "Midtrans"],
    github: "https://github.com/yourusername/befit-space",
    demo: "",
    date: "2025",
    client: "Personal Project",
    features: [
      "User authentication and role management",
      "Membership package selection and payment",
      "Reminder system before subscription expiry",
      "Admin dashboard for managing members",
      "Midtrans integration",
    ],
    technologies: [
      { name: "Backend", items: ["Laravel", "PHP"] },
      { name: "Database", items: ["MySQL"] },
      { name: "Payment", items: ["Midtrans"] },
      { name: "Deployment", items: ["Localhost"] },
    ],
  },
  2: {
    title: "Risk Management System",
    description:
      "A web-based risk monitoring system for organizations built using native PHP and MySQL.",
    longDescription:
      "A native PHP application for internal use in organizations to monitor and evaluate potential risks. The system allows categorization, scoring, and real-time status tracking of risks.",
    images: ["/images/risk-bbp/2.png", "/images/risk-bbp/3.png", "/images/risk-bbp/4.png"],
    tags: ["PHP", "MySQL"],
    github: "",
    demo: "",
    date: "2024",
    client: "Academic Project",
    features: [
      "Risk categorization",
      "Dynamic scoring system",
      "Color-coded risk levels",
      "Printable risk reports",
    ],
    technologies: [
      { name: "Backend", items: ["PHP"] },
      { name: "Database", items: ["MySQL"] },
      { name: "Deployment", items: ["Localhost"] },
    ],
  },
  3: {
    title: "TB-Box IoT",
    description:
      "An IoT-based smart medicine box for TB patients with alarm and web monitoring system.",
    longDescription:
      "TB-Box is a prototype innovation aimed at improving medication adherence in TB patients. It uses ESP32 to trigger alarms and requires user interaction to ensure medication intake, with monitoring available via a connected web interface.",
    images: ["/images/tb-box/1.jpg", "/images/tb-box/2.jpg"],
    tags: ["IoT", "ESP32", "C++", "Web", "MySQL"],
    github: "https://github.com/yourusername/tb-box-iot",
    demo: "",
    date: "2023",
    client: "Innovation Competition",
    features: [
      "ESP32-based alarm system",
      "Manual confirmation button",
      "Medication schedule setup",
      "Remote monitoring via web app",
    ],
    technologies: [
      { name: "Hardware", items: ["ESP32", "C++"] },
      { name: "Web", items: ["PHP", "MySQL"] },
      { name: "Deployment", items: ["Local Server"] },
    ],
  },
  4: {
    title: "UI/UX Design – TB-Care",
    description:
      "A high-fidelity Figma prototype for TB-Care, a medication adherence app for patients.",
    longDescription:
      "Designed a UI/UX prototype in Figma for a health-oriented mobile application that reminds TB patients to take medication. Includes alarm, progress tracking, and daily tips.",
    images: ["/images/project-ui-tb/1.png", "/images/project-ui-tb/2.png", "/images/project-ui-tb/3.png"],
    tags: ["Figma", "UI/UX", "Prototype", "Health", "Design"],
    github: "",
    demo: "https://figma.com/proto/tb-care-app",
    date: "2025",
    client: "Design Portfolio",
    features: [
      "Reminder screens",
      "Progress dashboard",
      "User-friendly mobile layout",
    ],
    technologies: [
      { name: "Design Tools", items: ["Figma"] },
    ],
  },
  5: {
    title: "Podomoro App",
    description:
      "A simple productivity timer inspired by the Pomodoro technique using basic web technologies.",
    longDescription:
      "The Podomoro App helps users stay productive using structured timer cycles. Built with HTML, CSS, JavaScript, and stores session data in MySQL.",
    images: ["/images/podomoro/1.png", "/images/podomoro/2.png"],
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/yourusername/podomoro-app",
    demo: "",
    date: "2024",
    client: "Personal Tool",
    features: [
      "Pomodoro-style timer",
      "Session tracking",
      "Simple and responsive UI",
    ],
    technologies: [
      { name: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
      { name: "Database", items: ["MySQL"] },
    ],
  },
  6: {
    title: "Lanternship Landing Page",
    description:
      "A modern and responsive landing page built for Lanternship.com startup branding.",
    longDescription:
      "A clean and responsive landing page for Lanternship, designed to highlight their mission, product, and contact options. Built using HTML, CSS, and JavaScript.",
    images: ["/images/lanternship/1.png", "/images/lanternship/2.png"],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "",
    demo: "https://lanternship.com",
    date: "2025",
    client: "Lanternship Startup",
    features: [
      "Hero section with CTA",
      "Feature overview",
      "Responsive layout",
      "Contact form",
    ],
    technologies: [
      { name: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
      { name: "Deployment", items: ["Hostinger", "VPS", "Cpanel"] },
    ],
  },
  7: {
    title: "IoT Projects Collection",
    description:
      "Collection of various IoT mini-projects focusing on health and automation using ESP32.",
    longDescription:
      "A portfolio of mini IoT projects developed using ESP32 microcontrollers, including health sensors, automation tools, and smart devices. Showcases understanding of embedded systems and web integration.",
    images: ["/images/iot/1.jpeg", "/images/iot/2.jpeg", "/images/iot/3.jpeg"],
    tags: ["IoT", "ESP32", "C/C++", "Sensors"],
    github: "https://github.com/yourusername/iot-projects",
    demo: "",
    date: "2023–2025",
    client: "Various Prototypes",
    features: [
      "Sensor data collection",
      "ESP32 + Web dashboard integration",
      "Various themes: health, automation, alerting",
    ],
    technologies: [
      { name: "Hardware", items: ["ESP32", "C/C++"] },
      { name: "Web Integration", items: ["HTML", "PHP", "MySQL"] },
    ],
  },
};


interface ProjectModalProps {
  projectId: number | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ projectId, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!projectId || !isOpen) return null

  const project = projectDetails[projectId as keyof typeof projectDetails]
  if (!project) return null

  // Helper functions to check if links are valid
  const hasValidGithub = project.github && project.github !== "" && project.github !== "#"
  const hasValidDemo = project.demo && project.demo !== "" && project.demo !== "#"

  const handleGithubClick = () => {
    if (hasValidGithub) {
      window.open(project.github, '_blank', 'noopener,noreferrer')
    }
  }

  const handleDemoClick = () => {
    if (hasValidDemo) {
      window.open(project.demo, '_blank', 'noopener,noreferrer')
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 pb-4 px-2 md:pt-24 md:pb-8 md:px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-8rem)] border border-pink-100 dark:border-pink-900/30 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Header - Always visible */}
            <div className="flex-shrink-0 bg-white dark:bg-gray-900 border-b border-pink-100 dark:border-pink-900/30 p-4 md:p-6 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 md:space-x-4 min-w-0 flex-1">
                  <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent truncate">
                    {project.title}
                  </h2>
                  <div className="hidden sm:flex space-x-2">
                    {hasValidGithub && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-pink-200 dark:border-pink-800"
                        onClick={handleGithubClick}
                      >
                        <Github className="h-4 w-4 mr-1 md:mr-2" />
                        <span className="hidden md:inline">Code</span>
                      </Button>
                    )}
                    {hasValidDemo && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-pink-200 dark:border-pink-800"
                        onClick={handleDemoClick}
                      >
                        <ExternalLink className="h-4 w-4 mr-1 md:mr-2" />
                        <span className="hidden md:inline">Demo</span>
                      </Button>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="flex-shrink-0 ml-2 hover:bg-pink-100 dark:hover:bg-pink-900/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile buttons */}
              {(hasValidGithub || hasValidDemo) && (
                <div className="flex sm:hidden space-x-2 mt-3">
                  {hasValidGithub && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-pink-200 dark:border-pink-800 flex-1"
                      onClick={handleGithubClick}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {hasValidDemo && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-pink-200 dark:border-pink-800 flex-1"
                      onClick={handleDemoClick}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              )}
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {/* Image Section */}
              <div className="mb-6">
                <div className="relative rounded-lg overflow-hidden">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-48 md:h-64 lg:h-80 object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Navigation buttons */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Image indicators */}
                {project.images.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? "bg-pink-500" : "bg-gray-300 dark:bg-gray-600 hover:bg-pink-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content - Mobile-first layout */}
              <div className="space-y-6">
                {/* Project Details - Mobile optimized */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-center">
                    <Calendar className="h-5 w-5 mx-auto mb-1 text-pink-500" />
                    <p className="text-xs text-gray-600 dark:text-gray-400">Year</p>
                    <p className="text-sm font-medium">{project.date}</p>
                  </div>
                  <div className="text-center">
                    <User className="h-5 w-5 mx-auto mb-1 text-pink-500" />
                    <p className="text-xs text-gray-600 dark:text-gray-400">Client</p>
                    <p className="text-sm font-medium">{project.client}</p>
                  </div>
                  <div className="text-center col-span-2 md:col-span-2">
                    <Tag className="h-5 w-5 mx-auto mb-1 text-pink-500" />
                    <p className="text-xs text-gray-600 dark:text-gray-400">Tags</p>
                    <div className="flex flex-wrap justify-center gap-1 mt-1">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">Project Overview</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-pink-500" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                  <div className="space-y-4">
                    {project.technologies.map((category, index) => (
                      <div key={index}>
                        <h4 className="text-base md:text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">
                          {category.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 md:px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-xs md:text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}