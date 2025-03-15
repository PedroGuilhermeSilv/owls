"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight, Briefcase, Scissors, ShoppingBag, Store, Utensils } from "lucide-react"
import AnimatedLogo from "./animated-logo"
import Navbar from "./navbar"

export default function HeroSection() {
  const { language } = useLanguage()

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
            <Briefcase size={18} />
            <span>{language === "en" ? "Professional Services" : "Serviços Profissionais"}</span>
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
        <div className="mt-12 w-full max-w-4xl overflow-hidden rounded-lg border border-gray-200 shadow-xl transition-all duration-500 hover:shadow-2xl">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt={language === "en" ? "Owls Software for Small Business" : "Software Owls para Pequenos Negócios"}
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

