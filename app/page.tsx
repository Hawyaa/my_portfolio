import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import AISection from '@/components/AISection'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnimatedWaves from '@/components/AnimatedWaves'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated background */}
      <AnimatedWaves />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <AISection />
        <Experience />
        <Contact />
        <Footer />
      </div>

      {/* RAG Chat Widget */}
      <ChatWidget />
    </main>
  )
}
