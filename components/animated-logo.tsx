"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AnimatedLogo({ className = "", size = 200 }: { className?: string; size?: number }) {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (logoRef.current) {
      observer.observe(logoRef.current)
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={logoRef}
      className={`opacity-0 transition-all duration-1000 ${className}`}
      style={{ transform: "translateY(20px)" }}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/owls-removebg-preview-kDLd1iRE2iNen4qyT2SHFXOKQt40TV.png"
        alt="Owls Logo"
        width={size}
        height={size}
        className={`object-contain transition-transform duration-500 hover:scale-105`}
        style={{ width: size, height: size }}
      />
    </div>
  )
}

