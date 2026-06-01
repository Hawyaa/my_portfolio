'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    icon: '{}',
    skills: ['JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3'],
    color: 'teal',
  },
  {
    title: 'Frontend',
    icon: '⚡',
    skills: ['React', 'Next.js', 'React Native', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    color: 'teal',
  },
  {
    title: 'Backend & DB',
    icon: '⚙',
    skills: ['Node.js','python', 'Express', 'MySQL','mongodb','postgres','Firebase', 'Firestore', 'REST APIs'],
    color: 'amber',
  },
  {
    title: 'Tools',
    icon: '🛠',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm/yarn'],
    color: 'teal',
  },
  {
    title: 'AI Automation ✨',
    icon: '🤖',
    skills: ['n8n','LangChain', 'OpenAI API', 'Vector DBs', 'RAG', 'CrewAI', 'Embeddings'],
    color: 'special',
    // note: 'Currently Learnin',
  },
]

function SkillPill({ skill, delay, color }: { skill: string; delay: number; color: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className={`skill-pill inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border cursor-default select-none ${
        color === 'special'
          ? 'bg-teal/10 border-teal/30 text-teal-dark hover:bg-teal hover:text-white hover:border-teal'
          : color === 'amber'
          ? 'bg-amber/10 border-amber/30 text-amber hover:bg-amber hover:text-white hover:border-amber'
          : 'bg-teal/5 border-teal/20 text-ink-light hover:bg-teal hover:text-white hover:border-teal'
      }`}
      style={{ fontFamily: 'DM Sans, sans-serif', transition: 'all 0.25s ease' }}
    >
      {skill}
    </motion.span>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
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
            &gt;_ skills.map(s =&gt; s)
          </span>
          <h2
            className="text-4xl font-bold mt-3 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Technical Arsenal
          </h2>
          <p className="text-ink-light max-w-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            A full-stack toolkit honed across web, mobile, and now AI automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                cat.color === 'special'
                  ? 'gradient-border bg-white shadow-lg'
                  : 'bg-white/80 border border-white/60 shadow-sm backdrop-blur-sm'
              }`}
            >
              {/* {cat.note && ( */}
                {/* <span className="absolute top-4 right-4 text-xs font-mono text-teal bg-teal/10 px-2 py-1 rounded-full"> */}
                  {/* {cat.note} */}
                {/* </span> */}
              {/* )} */}

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3
                  className="font-semibold text-ink"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <SkillPill
                    key={skill}
                    skill={skill}
                    delay={inView ? ci * 0.1 + si * 0.05 : 0}
                    color={cat.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
