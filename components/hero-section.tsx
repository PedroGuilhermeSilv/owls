"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight, Scissors, ShoppingBag, Store, Utensils, Volume2, VolumeX } from "lucide-react"
import { useRef, useState } from "react"
import AnimatedLogo from "./animated-logo"
import Navbar from "./navbar"

export default function HeroSection() {
  const { language } = useLanguage()
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative">
      <Navbar />
      <div className="container flex flex-col items-center justify-center gap-4 py-20 text-center md:py-32">
        <div className="absolute right-0 top-20 -z-10 hidden opacity-10 lg:block">
          <AnimatedLogo size={400} />
        </div>
        <h1 className="animate-fade-in text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {language === "en" ? (
            <>
              Making Technology <span className="text-orange-500">Simple</span> for Your Small Business
            </>
          ) : (
            <>
              Tornando a Tecnologia <span className="text-orange-500">Simples</span> para Seu Pequeno Negócio
            </>
          )}
        </h1>
        <p className="animate-fade-in max-w-[700px] text-gray-500 md:text-xl">
          {language === "en" ? (
            <>
              We create easy-to-use systems that help your business grow, save time, and make your customers happier -
              without the technical headaches.
            </>
          ) : (
            <>
              Criamos sistemas fáceis de usar que ajudam seu negócio a crescer, economizar tempo e deixar seus clientes
              mais satisfeitos - sem dores de cabeça técnicas.
            </>
          )}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-500">
            <ShoppingBag size={18} />
            <span>{language === "en" ? "Retail" : "Varejo"}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-500">
            <Utensils size={18} />
            <span>{language === "en" ? "Restaurants" : "Restaurantes"}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-500">
            <Scissors size={18} />
            <span>{language === "en" ? "Beauty Salons" : "Salões de Beleza"}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-500">
            <Store size={18} />
            <span>{language === "en" ? "Local Shops" : "Comércios Locais"}</span>
          </div>
        </div>
        <div className="animate-fade-in mt-8 flex flex-col gap-4 min-[400px]:flex-row">
          <Button className="bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105">
            {language === "en" ? "See How We Can Help" : "Veja Como Podemos Ajudar"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105"
          >
            {language === "en" ? "Watch Demo" : "Assistir Demo"}
          </Button>
        </div>
        <div className="mt-12 w-full max-w-4xl overflow-hidden rounded-lg border border-gray-200 shadow-xl transition-all duration-500 hover:shadow-2xl relative">
          <video
            ref={videoRef}
            className="w-full object-cover transition-transform duration-500 hover:scale-105 rounded-lg shadow-xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="video-inicial.mp4" type="video/mp4" />
            {language === "en"
              ? "Your browser does not support the video tag."
              : "Seu navegador não suporta a tag de vídeo."}
          </video>

          <Button
            onClick={toggleMute}
            variant="secondary"
            size="icon"
            className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all"
            aria-label={isMuted ? (language === "en" ? "Unmute" : "Ativar som") : (language === "en" ? "Mute" : "Silenciar")}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </section>
  )
}

