'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span
            className="text-teal font-mono text-sm"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            &gt;_ hawi.contact()
          </span>
          <h2
            className="text-4xl font-bold mt-3 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's Build Together
          </h2>
          <p
            className="text-ink-light max-w-xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Open to full-stack roles, mobile development, and AI automation projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="gradient-border rounded-2xl bg-white p-8 shadow-lg">
              <h3
                className="text-xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Hawi Alemu
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:hawi4936@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-parchment hover:bg-teal/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <Mail size={18} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-gray" style={{ fontFamily: 'DM Sans, sans-serif' }}>Email</p>
                    <p className="font-medium text-ink text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      hawi4936@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Hawyaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-parchment hover:bg-teal/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <Github size={18} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-gray" style={{ fontFamily: 'DM Sans, sans-serif' }}>GitHub</p>
                    <p className="font-medium text-ink text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    https://github.com/Hawyaa
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-parchment">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                    <MapPin size={18} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-gray" style={{ fontFamily: 'DM Sans, sans-serif' }}>Location</p>
                    <p className="font-medium text-ink text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Adama, Ethiopia 🇪🇹 · Remote-friendly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/90 border border-white/60 rounded-2xl p-8 shadow-sm">
              <h3
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Send a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    className="block text-xs font-medium text-ink-light mb-1.5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-parchment/50 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-medium text-ink-light mb-1.5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-parchment/50 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-medium text-ink-light mb-1.5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the project..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-parchment/50 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all resize-none"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-teal text-white font-medium rounded-xl hover:bg-teal-dark transition-colors shadow-md"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
