'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Github, Mail, ArrowDown, Sparkles } from 'lucide-react'

const codeLines = [
  { text: 'const hawi = {', indent: 0, type: 'bracket' },
  { text: "  name: 'Hawi Alemu',", indent: 2, type: 'string' },
  { text: "  role: 'Full-Stack Developer',", indent: 2, type: 'string' },
  { text: "  location: 'Adama, Ethiopia 🇪🇹',", indent: 2, type: 'string' },
  { text: '  stack: [', indent: 2, type: 'bracket' },
  { text: "    'React', 'Next.js', 'Node.js',", indent: 4, type: 'array' },
  { text: "    'React Native', 'Firebase',", indent: 4, type: 'array' },
  { text: '  ],', indent: 2, type: 'bracket' },
  { text: "  currentFocus: 'AI Automation 🤖',", indent: 2, type: 'highlight' },
  { text: "  learning: ['LangChain', 'RAG', 'CrewAI'],", indent: 2, type: 'array' },
  { text: "  openTo: 'exciting opportunities',", indent: 2, type: 'string' },
  { text: '}', indent: 0, type: 'bracket' },
]

const colorMap: Record<string, string> = {
  bracket: '#0D9488',
  string: '#1A1612',
  array: '#D97706',
  highlight: '#0F766E',
}

function TypedCode() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    if (visibleLines >= codeLines.length) {
      setDone(true)
      return
    }
    const currentLine = codeLines[visibleLines]
    if (charIndex < currentLine.text.length) {
      const t = setTimeout(() => setCharIndex(c => c + 1), 28)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setVisibleLines(l => l + 1)
        setCharIndex(0)
      }, 60)
      return () => clearTimeout(t)
    }
  }, [visibleLines, charIndex, done])

  return (
    <div className="code-wave font-mono text-sm leading-7 p-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      {codeLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} style={{ color: colorMap[line.type] }}>
          {line.text}
        </div>
      ))}
      {visibleLines < codeLines.length && (
        <div style={{ color: colorMap[codeLines[visibleLines].type] }}>
          {codeLines[visibleLines].text.slice(0, charIndex)}
          <span className="animate-blink text-teal">|</span>
        </div>
      )}
      {done && (
        <div className="mt-2 text-warm-gray text-xs">
          <span className="text-teal">&gt;_ </span>
          <span className="cursor" />
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-teal font-mono text-sm" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  &gt;_ hello world
                </span>
                <span className="animate-blink text-teal font-mono">|</span>
              </div>

              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Hawi{' '}
                <span className="text-teal italic">Alemu</span>
              </h1>

              <h2
                className="text-xl lg:text-2xl text-ink-light font-normal mb-6"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Full-Stack Web & Mobile Developer
              </h2>

              <div className="flex flex-wrap items-center gap-4 mb-8 text-warm-gray text-sm">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-teal" />
                  Adama, Ethiopia
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber" />
                  Learning AI Automation
                </span>
              </div>

              <p
                className="text-ink-light leading-relaxed mb-10 max-w-lg"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem' }}
              >
                I build end-to-end digital products — from responsive web apps and mobile experiences 
                to AI-powered automation pipelines. Currently diving deep into LangChain, RAG, and CrewAI.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3 bg-teal text-white font-medium rounded-xl shadow-md hover:bg-teal-dark transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3 border-2 border-teal text-teal font-medium rounded-xl hover:bg-teal/5 transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Get in Touch
                </motion.a>
              </div>

              <div className="flex items-center gap-5 mt-8">
                <a
                  href="https://github.com/Hawyaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray hover:text-teal transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:hawi4936@gmail.com"
                  className="text-warm-gray hover:text-teal transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Floating code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="animate-bob"
          >
            <div className="gradient-border rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-white/95 backdrop-blur-sm">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span
                    className="ml-3 text-xs text-warm-gray"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    hawi.js
                  </span>
                </div>
                <TypedCode />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-gray"
        >
          <span className="text-xs font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
