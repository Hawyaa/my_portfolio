import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hawi Alemu — Full-Stack Developer',
  description: 'Full-Stack Web & Mobile Developer specializing in React, Node.js, and AI Automation. Based in Adama, Ethiopia.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'React Native', 'AI Automation', 'Ethiopia'],
  openGraph: {
    title: 'Hawi Alemu — Full-Stack Developer',
    description: 'Full-Stack Web & Mobile Developer specializing in React, Node.js, and AI Automation.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@300;400;500;600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
