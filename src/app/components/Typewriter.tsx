"use client"

import { useState, useEffect } from "react"

const words = ["Tech Enthusiast", "IoT Programmer", "Web Developer"]

export default function Typewriter() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  // Proses mengetik/menghapus
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, 50))

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  // Efek kedip pada kursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearTimeout(timeout2)
  }, [blink])

  return (
    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-semibold">
      {`${words[index].substring(0, subIndex)}`}
      <span className={`transition-opacity duration-300 ${blink ? "opacity-100" : "opacity-0"}`}>|</span>
    </h2>
  )
}