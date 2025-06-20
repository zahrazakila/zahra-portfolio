"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import SkillsSection from "./components/skills-section"
import ProjectsSection from "./components/projects-section"
import ContactSection from "./components/contact-section"
import { ThemeProvider } from "./components/theme-provider"
import EducationSection from "./components/education-section"
import ExperienceSection from "./components/experience-section"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-500">
        {/* Animated background with pink accents */}
        <motion.div className="fixed inset-0 opacity-30" style={{ y: backgroundY }}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-50 dark:from-pink-950/20 dark:via-black dark:to-pink-900/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ec4899%22 fillOpacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
        </motion.div>

        <Navbar />

        <main className="relative z-10">
          <section id="home">
            <HeroSection />
          </section>

          <section id="education">
            <EducationSection />
          </section>

          <section id="experience">
            <ExperienceSection />
          </section>

          <section id="skills">
            <SkillsSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}