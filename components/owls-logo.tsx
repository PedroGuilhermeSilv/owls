"use client"

import { useRef, useState } from "react"
import Image from "next/image"

export default function OwlsLogo() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [clickCount, setClickCount] = useState(0)
  const [lastClickTime, setLastClickTime] = useState(0)

  const handleClick = () => {
    const currentTime = new Date().getTime()
    const timeDiff = currentTime - lastClickTime

    // Check if it's a double click (within 300ms)
    if (timeDiff < 300) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play()
      }
      setClickCount(0)
    } else {
      setClickCount(clickCount + 1)
    }

    setLastClickTime(currentTime)
  }

  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/owls-removebg-preview-kDLd1iRE2iNen4qyT2SHFXOKQt40TV.png"
        alt="Owls Logo"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
      <audio ref={audioRef} src="/owl-sound.mp3" preload="auto" className="hidden">
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

