"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useTranslations } from 'next-intl'
import { useEffect, useRef } from "react"
import AnimatedLogo from "./animated-logo"

export default function ContactSection() {
  const t = useTranslations('contact')
  const sectionRef = useRef<HTMLDivElement>(null)

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

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [])

  return (
    <section id="contact" className="relative bg-gray-50 py-20">
      <div className="absolute right-0 bottom-20 -z-10 hidden opacity-5 lg:block">
        <AnimatedLogo size={250} />
      </div>
      <div
        ref={sectionRef}
        className="container opacity-0 transition-all duration-1000"
        style={{ transform: "translateY(20px)" }}
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-orange-500">{t('title')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            {t('subtitle')}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Card className="border-gray-200 transition-all duration-500 hover:shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t('name')}
                    </label>
                    <Input
                      id="name"
                      placeholder={t('name')}
                      className="transition-all duration-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t('email')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('email')}
                      className="transition-all duration-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t('subject')}
                  </label>
                  <Input
                    id="subject"
                    placeholder={t('subject')}
                    className="transition-all duration-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t('message')}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t('message')}
                    className="min-h-[120px] transition-all duration-300 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105"
                >
                  {t('send')}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4 transition-all duration-300 hover:-translate-x-2">
              <MapPin className="h-6 w-6 text-orange-500" />
              <div>
                <h3 className="font-medium">{t('location')}</h3>
                <p className="text-gray-500">123 Innovation Street, Tech City, TC 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4 transition-all duration-300 hover:-translate-x-2">
              <Mail className="h-6 w-6 text-orange-500" />
              <div>
                <h3 className="font-medium">{t('emailUs')}</h3>
                <p className="text-gray-500">contact@owlssoftware.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 transition-all duration-300 hover:-translate-x-2">
              <Phone className="h-6 w-6 text-orange-500" />
              <div>
                <h3 className="font-medium">{t('callUs')}</h3>
                <p className="text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-6 rounded-lg bg-gray-100 p-6 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center">
                <h3 className="mb-2 font-medium">{t('businessHours')}</h3>
                <AnimatedLogo size={30} className="ml-auto" />
              </div>
              <ul className="space-y-2 text-gray-500">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

