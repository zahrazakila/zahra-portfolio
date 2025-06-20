"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import AnimatedBackground from "./animated-background"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <AnimatedBackground className="min-h-screen py-20 px-1 bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50 dark:from-gray-950 dark:via-pink-950/20 dark:to-purple-950/20 transition-colors duration-500">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Lets Connect
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Lets discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="h-full"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-100 dark:border-pink-900/30 rounded-xl p-8 h-full flex flex-col justify-between hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h3>

                <div className="space-y-6 mb-8">
                  {[
                    { icon: Mail, label: "Email", value: "zahrazakila59@gmail.com", color: "pink" },
                    { icon: Phone, label: "Phone", value: "+6281247615112", color: "purple" },
                    { icon: MapPin, label: "Location", value: "Yogyakarta, Indonesia", color: "pink" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center space-x-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                    >
                      <div
                        className={`w-12 h-12 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-lg flex items-center justify-center`}
                      >
                        <item.icon className={`h-6 w-6 text-${item.color}-500`} />
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">{item.label}</p>
                        <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom section */}
              <div className="pt-6 border-t border-pink-100 dark:border-pink-900/30">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Lets Work Together</h4>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <p>🚀 Available for freelance projects</p>
                  <p>⚡ Response time: Within 24 hours</p>
                  <p>🌍 Open to remote collaboration</p>
                  <p>💼 Currently accepting new clients</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Photo - Right Side */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="h-full"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-100 dark:border-pink-900/30 rounded-xl p-8 h-full flex flex-col justify-center hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
              <div className="text-center">
                <div className="relative mb-6 inline-block">
                  <img
                    src="/aef-1.jpeg?height=200&width=200"
                    alt="John Doe Profile"
                    className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-pink-200 dark:border-pink-800"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-pink-500/20 to-transparent" />

                  {/* Simple status indicator */}
                  <motion.div
                    className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Zahra Zakila Anindha Rahmanti</h4>
                <p className="text-pink-600 dark:text-pink-400 font-medium mb-6 text-lg">Web Developer & IoT Programming</p>

                <div className="space-y-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <p className="flex items-center justify-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Available for new projects</span>
                    </p>
                  </div>

                  {/* Skills highlight */}
                  <div className="pt-4 border-t border-pink-100 dark:border-pink-900/30">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Specializing in</h5>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["C/C++", "PHP", "Laravel"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.3, ease: "easeOut" }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedBackground>
  )
}
