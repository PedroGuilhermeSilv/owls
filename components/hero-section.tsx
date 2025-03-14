"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import AnimatedLogo from "./animated-logo"
export default function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center gap-4 py-20 text-center md:py-32">
        <div className="absolute right-0 top-20 -z-10 hidden opacity-10 lg:block">
          <AnimatedLogo size={400} />
        </div>
        <h1 className="animate-fade-in text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-orange-500">{t('title')}</span>
        </h1>
        <p className="animate-fade-in max-w-[700px] text-gray-500 md:text-xl">
          {t('subtitle')}
        </p>
        <div className="animate-fade-in flex flex-col gap-4 min-[400px]:flex-row">
          <Button className="bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105">
            {t('cta')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105"
          >
            {t('learnMore')}
          </Button>
        </div>
        <div className="mt-12 w-full max-w-4xl overflow-hidden rounded-lg border border-gray-200 shadow-xl transition-all duration-500 hover:shadow-2xl">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Owls Software Dashboard"
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}

