'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'

const timeline = [
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Full Stack Web & Mobile Developer',
    org: 'Space Science and Geospatial Institute (SSGI)',
    location: 'Addis Ababa, Ethiopia',
    period: '2023 — 2024',
    desc: 'Built cross-platform mobile applications using React Native and Firebase for geospatial data collection and visualization workflows. Integrated real-time Firestore syncing, cloud functions, and authentication systems.',
    tags: ['React Native', 'Firebase', 'Firestore', 'Cloud Functions', 'REST APIs'],
    color: 'teal',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Full Stack Web Development Program',
    org: 'Evangadi Networks',
    location: 'Remote',
    period: '2023',
    desc: 'Intensive full-stack program covering React, Node.js, Express, and MySQL. Built production-grade projects including the Evangadi Forum Q&A platform with full authentication and database design.',
    tags: ['React', 'Node.js', 'MySQL', 'Express', 'JWT'],
    color: 'amber',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'B.S. Software Engineering',
    org: 'Adama Science & Technology University (ASTU)',
    location: 'Adama, Ethiopia',
    period: '2019 — 2023',
    desc: 'Studied core software engineering fundamentals including algorithms, data structures, systems design, and software architecture. Built a strong foundation in multiple programming paradigms.',
    tags: ['Algorithms', 'Data Structures', 'OOP', 'Systems Design', 'Python'],
    color: 'teal',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span
            className="text-teal font-mono text-sm"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            &gt;_ git log --oneline
          </span>
          <h2
            className="text-4xl font-bold mt-3 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Experience & Education
          </h2>
          <p className="text-ink-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            The commits that shaped my stack.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-teal via-teal/40 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 top-6 w-9 h-9 rounded-xl flex items-center justify-center hidden md:flex shadow-sm ${
                    item.color === 'amber' ? 'bg-amber/15' : 'bg-teal/10'
                  }`}>
                    <Icon size={16} className={item.color === 'amber' ? 'text-amber' : 'text-teal'} />
                  </div>

                  {/* Card */}
                  <div className="bg-white/90 border border-white/60 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                            item.type === 'experience'
                              ? 'bg-teal/10 text-teal'
                              : 'bg-amber/10 text-amber'
                          }`}>
                            {item.type === 'experience' ? '⚙ Work' : '🎓 Education'}
                          </span>
                        </div>
                        <h3
                          className="text-lg font-bold text-ink"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-teal font-medium text-sm mt-0.5"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {item.org}
                        </p>
                        <p className="text-warm-gray text-xs mt-0.5">{item.location}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-warm-gray text-sm shrink-0">
                        <Calendar size={13} />
                        <span style={{ fontFamily: 'JetBrains Mono, monospace' }} className="text-xs">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p
                      className="text-ink-light text-sm leading-relaxed mb-5"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-lg bg-parchment text-ink-light font-mono"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
