'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Globe, Smartphone, Database, Film, ShoppingBag } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Netflix Replication',
    description:
      'A complete Netflix clone with streaming capabilities. Features user authentication, video playback, personalized recommendations, watchlist, and content categorization using TMDB API.',
    image: '/placeholder-netflix.png',
    placeholder: '🎬',
    tech: ['React', 'REST API', 'TMDB API', 'CSS3', 'Firebase Auth'],
    type: 'web',
    deployed: true,
    github: 'https://github.com/Hawyaa/Netflix-Project',
    live: 'https://hawyaa.github.io/Netflix-Project/',
    highlight: 'Full streaming platform with REST API integration',
  },
  {
    id: 2,
    title: 'Alora Lipgloss E-Commerce',
    description:
      'Modern beauty e-commerce platform for lipgloss products. Includes product catalog, shopping cart, user authentication, order management, payment integration, and admin dashboard.',
    image: '/placeholder-alora.png',
    placeholder: '💄',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    type: 'web',
    deployed: true,
    github: 'https://github.com/Hawyaa/alora-ecommerce',
    live: 'https://alora-tau.vercel.app/',
    highlight: 'Full-stack e-commerce with MongoDB and Next.js',
  },
  {
    id: 3,
    title: 'RAG Intelligent Document System',
    description:
      'Advanced document processing and Q&A system using Retrieval-Augmented Generation. Ingests documents, creates vector embeddings, and provides contextual answers with AI-powered automation.',
    image: '/placeholder-rag.png',
    placeholder: '🤖',
    tech: ['Next.js', 'Node.js', 'Python', 'Groq', 'n8n', 'RAG'],
    type: 'ai',
    deployed: true,
    github: 'https://github.com/Hawyaa/rag-system',
    live: 'https://ragsystem-nine.vercel.app/',
    highlight: 'AI-powered document processing with Groq LLM',
  },
  {
    id: 4,
    title: 'E-Commerce & Streaming Platform',
    description:
      'A full-featured e-commerce platform with integrated content streaming. Includes user authentication, product catalog, shopping cart, order management, and streaming media delivery.',
    image: '/placeholder-ecommerce.png',
    placeholder: '🛒',
    tech: ['React', 'MySQL', 'Node.js', 'CSS3', 'Auth', 'Stripe'],
    type: 'web',
    deployed: true,
    github: 'https://github.com/Hawyaa',
    live: 'https://amazon-project-25a1.vercel.app/',
    highlight: 'Complete e-commerce with payment integration',
  },
]

const typeIcon = (type: string) => {
  if (type === 'mobile') return <Smartphone size={14} />
  if (type === 'ai') return <Database size={14} />
  return <Globe size={14} />
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
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
            &gt;_ projects.filter(p =&gt; p.built)
          </span>
          <h2
            className="text-4xl font-bold mt-3 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Featured Projects
          </h2>
          <p className="text-ink-light max-w-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            From full-stack web apps to mobile experiences and AI pipelines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden bg-white/90 border shadow-sm hover:shadow-xl transition-all duration-400 ${
                project.type === 'ai'
                  ? 'gradient-border'
                  : 'border-white/60'
              }`}
            >
              {/* Image area */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    project.type === 'ai'
                      ? 'linear-gradient(135deg, #0D9488 0%, #0F766E 50%, #1A1612 100%)'
                      : project.type === 'mobile'
                      ? 'linear-gradient(135deg, #F2EFE7 0%, #E8E4D9 100%)'
                      : project.id === 1
                      ? 'linear-gradient(135deg, #E50914 0%, #B20710 50%, #141414 100%)'
                      : project.id === 2
                      ? 'linear-gradient(135deg, #FF69B4 0%, #FF1493 50%, #8B008B 100%)'
                      : project.id === 3
                      ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #1E1B4B 100%)'
                      : 'linear-gradient(135deg, #F2EFE7 0%, #EAE6DC 100%)',
                }}
              >
                <span className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                  {project.placeholder}
                </span>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium ${
                    project.type === 'ai'
                      ? 'bg-white/20 text-white backdrop-blur-sm'
                      : 'bg-white/80 text-ink-light'
                  }`}>
                    {typeIcon(project.type)}
                    {project.type === 'mobile' ? 'Mobile' : project.type === 'ai' ? 'AI/ML' : 'Web'}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  {project.deployed ? (
                    <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-green-500/90 text-white font-medium backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Live
                    </span>
                  
                  ) : null}
                </div>

                {/* Replace image note */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] text-white/60 bg-black/30 px-2 py-0.5 rounded backdrop-blur-sm">
                    Replace with screenshot
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-bold text-ink mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {project.title}
                </h3>

                <p className="text-ink-light text-sm leading-relaxed mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {project.description}
                </p>

                {/* Highlight */}
                {project.highlight && (
                  <div className="flex items-center gap-2 mb-4 p-2.5 rounded-lg bg-teal/5 border border-teal/10">
                    <span className="text-teal text-xs">✦</span>
                    <span className="text-teal text-xs font-medium">{project.highlight}</span>
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-parchment text-ink-light font-mono"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-ink-light hover:text-teal transition-colors font-medium"
                    >
                      <Github size={15} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-teal hover:text-teal-dark transition-colors font-medium"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}