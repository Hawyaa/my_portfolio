'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User, Minimize2 } from 'lucide-react'
import { ragChat, type ChatMessage } from '@/lib/rag'

const SUGGESTIONS = [
  "What's Hawi's tech stack?",
  'Tell me about her projects',
  'What AI tools is she learning?',
  'Where did she study?',
  'What experience does she have?',
]

function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
        <Bot size={14} className="text-teal" />
      </div>
      <div className="flex items-center gap-1 px-4 py-2.5 bg-white rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-teal typing-dot" />
        <div className="w-2 h-2 rounded-full bg-teal typing-dot" />
        <div className="w-2 h-2 rounded-full bg-teal typing-dot" />
      </div>
    </div>
  )
}

function MessageBubble({ msg }: { msg: ChatMessage }) {
  const isUser = msg.role === 'user'
  const isAI = msg.content.includes('⚡ CURRENT FOCUS') || msg.content.includes('🤖')
  
  // Parse simple markdown-ish formatting
  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={i} className="font-semibold mb-1">{line.slice(2, -2)}</p>
        }
        if (line.startsWith('⚡') || line.startsWith('🤖') || line.startsWith('💡') || line.startsWith('📬') || line.startsWith('💬')) {
          return <p key={i} className={`${i > 0 ? 'mt-2' : ''} font-semibold`}>{line}</p>
        }
        if (line === '') return <br key={i} />
        return <p key={i} className={i > 0 ? 'mt-1' : ''}>{line}</p>
      })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex items-start gap-2 px-3 py-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
        isUser ? 'bg-teal' : 'bg-teal/10'
      }`}>
        {isUser
          ? <User size={13} className="text-white" />
          : <Bot size={13} className="text-teal" />
        }
      </div>

      <div
        className={`max-w-[82%] text-sm leading-relaxed px-4 py-3 rounded-2xl ${
          isUser
            ? 'bg-teal text-white rounded-tr-none'
            : isAI
            ? 'bg-gradient-to-br from-teal/10 to-teal/5 text-ink border border-teal/20 rounded-tl-none shadow-sm'
            : 'bg-white text-ink border border-gray-100 rounded-tl-none shadow-sm'
        }`}
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        {formatContent(msg.content)}
      </div>
    </motion.div>
  )
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm a RAG-powered assistant that knows all about Hawi. Ask me about her skills, projects, experience, or AI work!",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const sendMessage = async (text?: string) => {
    const query = text || input.trim()
    if (!query || loading) return

    const userMsg: ChatMessage = { role: 'user', content: query, timestamp: new Date() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const response = await ragChat(query)
      const assistantMsg: ChatMessage = { role: 'assistant', content: response, timestamp: new Date() }
      setMessages(prev => [...prev, assistantMsg])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I had trouble retrieving that. Try asking something else!', timestamp: new Date() },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="chat-widget w-[360px] max-h-[560px] flex flex-col rounded-2xl overflow-hidden bg-[#FAF8F3] border border-white/60"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-teal">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Hawi's RAG Assistant
                  </p>
                  <p className="text-white/70 text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    cosine similarity · retrieval
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Minimize2 size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto py-2" style={{ minHeight: 0 }}>
              {messages.map((msg, i) => (
                <MessageBubble key={i} msg={msg} />
              ))}
              {loading && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions (only at start) */}
            {messages.length === 1 && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTIONS.slice(0, 3).map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 text-ink-light hover:border-teal hover:text-teal transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 py-3 border-t border-gray-100 bg-white/80">
              <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-3 py-2 focus-within:border-teal focus-within:ring-2 focus-within:ring-teal/20 transition-all">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about Hawi..."
                  disabled={loading}
                  className="flex-1 text-sm text-ink bg-transparent outline-none placeholder-warm-gray"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={loading || !input.trim()}
                  className="w-7 h-7 rounded-lg bg-teal flex items-center justify-center text-white disabled:opacity-40 hover:bg-teal-dark transition-colors shrink-0"
                >
                  <Send size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onClick={() => setIsOpen(o => !o)}
        className="relative w-14 h-14 bg-teal rounded-2xl flex items-center justify-center shadow-xl hover:bg-teal-dark transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={22} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse */}
        {!isOpen && (
          <span className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
          </span>
        )}
      </motion.button>
    </div>
  )
}
