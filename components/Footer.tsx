'use client'
import { Terminal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-teal rounded-lg flex items-center justify-center">
            <Terminal size={13} className="text-white" />
          </div>
          <span className="font-mono text-sm text-ink-light" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            hawi.dev
          </span>
        </div>

        <p className="text-warm-gray text-xs text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Built with Next.js 14 · Framer Motion · Tailwind CSS · RAG-powered chat
        </p>

        <div className="flex items-center gap-1.5 font-mono text-xs text-warm-gray" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <span className="text-teal">&gt;_</span>
          <span>© 2024 Hawi Alemu</span>
        </div>
      </div>
    </footer>
  )
}
