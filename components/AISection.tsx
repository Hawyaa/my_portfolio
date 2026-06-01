'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Database, Zap, GitBranch, MessageSquare } from 'lucide-react'

const aiSkills = [
  {
    icon: Brain,
    name: 'LangChain',
    desc: 'Building LLM-powered chains, memory, and tools for complex reasoning pipelines.',
    status: 'active',
  },
  {
    icon: Zap,
    name: 'OpenAI API',
    desc: 'GPT-4 integration for text generation, embeddings, and function calling.',
    status: 'active',
  },
  {
    icon: Database,
    name: 'Vector Databases',
    desc: 'Pinecone & ChromaDB for semantic search, embeddings storage, and retrieval.',
    status: 'active',
  },
  {
    icon: MessageSquare,
    name: 'RAG Architecture',
    desc: 'Retrieval-Augmented Generation — the chat widget on this site is a live demo!',
    status: 'demo',
  },
  {
    icon: GitBranch,
    name: 'CrewAI',
    desc: 'Multi-agent orchestration for autonomous, collaborative AI workflow automation.',
    status: 'active',
  },
]

export default function AISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ai" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            className="text-teal font-mono text-sm"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            &gt;_ import &#123; intelligence &#125; from 'ai'
          </span>
          <h2
            className="text-4xl font-bold mt-3 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            AI Automation Focus
          </h2>
          <p
            className="text-ink-light max-w-2xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Building intelligent AI agents for workflow automation — my current frontier.
          </p>
        </motion.div>

        {/* Banner card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden mb-12 shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 40%, #1A1612 100%)',
          }}
        >
          {/* Decorative waves */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <svg viewBox="0 0 1200 300" className="absolute bottom-0 w-full" preserveAspectRatio="none">
              <path
                d="M0,150 C200,100 400,200 600,150 C800,100 1000,200 1200,150 L1200,300 L0,300 Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="relative z-10 p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-4xl backdrop-blur-sm border border-white/20">
                🤖
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-300 text-sm font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    actively learning
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Building Intelligent AI Agents
                </h3>
                <p className="text-white/70 mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  for workflow automation — one pipeline at a time.
                </p>
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-3">
              {['LangChain', 'OpenAI API', 'Vector Databases', 'RAG', 'CrewAI', 'Embeddings', 'Agents'].map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-medium border border-white/20 backdrop-blur-sm"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiSkills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="relative bg-white/90 border border-white/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                {skill.status === 'demo' && (
                  <span className="absolute top-4 right-4 text-xs font-mono text-teal bg-teal/10 px-2 py-0.5 rounded-full border border-teal/20">
                    live demo ✦
                  </span>
                )}

                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/15 transition-colors">
                  <Icon size={22} className="text-teal" />
                </div>

                <h4
                  className="font-semibold text-ink mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {skill.name}
                </h4>
                <p
                  className="text-ink-light text-sm leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {skill.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Chat hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p
            className="text-warm-gray text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            💬 The chat widget (bottom right) is a live RAG demo using mock embeddings + cosine similarity retrieval —
            ask it anything about Hawi!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
