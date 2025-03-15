"use client"

import Image from "next/image";
import { useRef, useState } from "react";

export default function OwlsLogo({ size, className, imageClassName, showText }: { size: number; className?: string; imageClassName?: string; showText?: boolean }) {
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
    <div className={`relative cursor-pointer ${className}`} onClick={handleClick}>
      <Image
        src="/images/owls-logo.png"
        alt="Owls Logo"
        width={size}
        height={size}
        className={`h-10 w-10 object-contain transition-transform duration-300 hover:scale-110 ${imageClassName}`}
      />
      <audio ref={audioRef} src="/owl-sound.mp3" preload="auto" className="hidden">
        Your browser does not support the audio element.
      </audio>
      {showText && (
        <div className="text-center mt-2">
          {clickCount}
        </div>
      )}
    </div>
  )
}

