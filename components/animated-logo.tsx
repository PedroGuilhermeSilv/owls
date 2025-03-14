"use client"

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AnimatedLogo({ className = "", size = 200 }: { className?: string; size?: number }) {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentLogoRef = logoRef.current

    if (currentLogoRef) {
      const animation = gsap.to(currentLogoRef, {
        // animation properties...
      })

      return () => {
        animation.kill()
      }
    }

    return () => { }
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

