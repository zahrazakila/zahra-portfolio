"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

// PERBAIKAN: Definisikan 'variants' untuk animasi garis bawah di sini
const underlineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 0.3, ease: "easeOut" } },
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV-Zahra%20Zakila%20A.pdf" // Pastikan file cv.pdf ada di folder /public
    link.download = "CV-Zahra%20Zakila%20A.pdf"
    link.click()
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-pink-200/50 dark:border-pink-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            ZZ
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover="visible" // Mengaktifkan variant 'visible' saat hover
                whileTap={{ scale: 0.95 }}
                initial="hidden" // Kondisi awal variant
                animate="hidden"  // Selalu kembali ke 'hidden' saat tidak di-hover
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors relative py-2"
              >
                {item.name}
                {/* PERBAIKAN: Menggunakan Framer Motion Variants untuk animasi garis bawah */}
                <motion.span
                  variants={underlineVariants}
                  className="absolute -bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600"
                />
              </motion.button>
            ))}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="border-pink-200 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300"
                onClick={handleDownloadCV}
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </motion.div>

            {/* DIKEMBALIKAN: Tombol tema kembali ke struktur asli Anda */}
            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={theme} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}>
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             {/* DIKEMBALIKAN: Tombol tema kembali ke struktur asli Anda */}
            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={theme} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}>
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={isMobileMenuOpen ? "x" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.button key={item.name} onClick={() => scrollToSection(item.href)} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.05 + 0.1 }} className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  {item.name}
                </motion.button>
              ))}
              <motion.button onClick={handleDownloadCV} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: navItems.length * 0.05 + 0.1 }} className="flex items-center w-full text-left px-3 py-2 rounded-md text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}