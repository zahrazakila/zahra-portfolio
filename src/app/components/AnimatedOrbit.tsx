"use client"

import { motion } from "framer-motion"
import { ScanLine } from "lucide-react"

export default function AnimatedOrbit() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
      {/* Lingkaran Luar */}
      <motion.div
        className="absolute w-full h-full border-2 border-purple-500/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      {/* Lingkaran Tengah */}
      <motion.div
        className="absolute w-2/3 h-2/3 border border-pink-500/40 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      {/* Titik-titik di lingkaran luar */}
      <motion.div className="absolute w-full h-full">
        <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full" />
        <motion.div className="absolute bottom-0 right-1/2 translate-x-1/2 w-2 h-2 bg-cyan-500 rounded-full" />
      </motion.div>

      {/* Ikon di Tengah */}
      <motion.div
        className="w-24 h-24 sm:w-32 sm:h-32 bg-purple-900/30 backdrop-blur-sm border border-purple-500/50 rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(168, 85, 247, 0.7)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ScanLine className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400" />
      </motion.div>
    </div>
  )
}