'use client'
import { useEffect, useRef } from 'react'

export default function AnimatedWaves() {
  const path1Ref = useRef<SVGPathElement>(null)
  const path2Ref = useRef<SVGPathElement>(null)
  const path3Ref = useRef<SVGPathElement>(null)

  useEffect(() => {
    let frame = 0
    let animId: number

    const animate = () => {
      frame += 0.008
      const t1 = Math.sin(frame) * 18
      const t2 = Math.sin(frame + 1.2) * 14
      const t3 = Math.sin(frame + 2.4) * 10

      if (path1Ref.current) {
        path1Ref.current.setAttribute(
          'd',
          `M0,${100 + t1} C150,${80 + t1} 300,${120 - t1} 450,${100 + t2} C600,${80 - t2} 750,${120 + t1} 900,${100 + t3} C1050,${80 - t3} 1200,${120 + t2} 1440,${100 + t1} L1440,320 L0,320 Z`
        )
      }
      if (path2Ref.current) {
        path2Ref.current.setAttribute(
          'd',
          `M0,${140 - t2} C200,${120 - t2} 400,${160 + t2} 600,${140 + t3} C800,${120 - t3} 1000,${160 + t1} 1200,${140 - t2} C1300,${130 + t2} 1380,${150 - t1} 1440,${140 + t3} L1440,320 L0,320 Z`
        )
      }
      if (path3Ref.current) {
        path3Ref.current.setAttribute(
          'd',
          `M0,${180 + t3} C250,${160 + t1} 500,${200 - t3} 750,${180 - t2} C1000,${160 + t2} 1200,${200 - t1} 1440,${180 + t3} L1440,320 L0,320 Z`
        )
      }

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top waves */}
      <svg
        className="absolute top-0 left-0 w-full"
        style={{ height: '340px' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={path3Ref}
          d="M0,180 C250,160 500,200 750,180 C1000,160 1200,200 1440,180 L1440,320 L0,320 Z"
          fill="rgba(13,148,136,0.04)"
        />
        <path
          ref={path2Ref}
          d="M0,140 C200,120 400,160 600,140 C800,120 1000,160 1200,140 L1440,140 L1440,320 L0,320 Z"
          fill="rgba(13,148,136,0.06)"
        />
        <path
          ref={path1Ref}
          d="M0,100 C150,80 300,120 450,100 C600,80 750,120 900,100 C1050,80 1200,120 1440,100 L1440,320 L0,320 Z"
          fill="rgba(13,148,136,0.08)"
        />
      </svg>

      {/* Floating orbs */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '500px',
          height: '500px',
          top: '-100px',
          right: '-100px',
          background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '400px',
          height: '400px',
          bottom: '10%',
          left: '-80px',
          background: 'radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute rounded-full blur-2xl"
        style={{
          width: '300px',
          height: '300px',
          top: '40%',
          left: '40%',
          background: 'radial-gradient(circle, rgba(13,148,136,0.05) 0%, transparent 70%)',
          animation: 'float 12s ease-in-out infinite 2s',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13,148,136,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,148,136,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
