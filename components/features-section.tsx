"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Cloud, Code, Layers, Shield, Zap } from "lucide-react"
import { useTranslations } from 'next-intl'
import { useEffect, useRef } from "react"

export default function FeaturesSection() {
  const t = useTranslations('features')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll(".feature-card")
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const features = [
    {
      icon: <Code className="h-10 w-10 text-orange-500" />,
      title: t('webDev'),
      description: "Tailored software solutions designed to meet your specific business needs and challenges.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-orange-500" />,
      title: t('cloudSolutions'),
      description: "Scalable and secure cloud infrastructure to power your applications and services.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-orange-500" />,
      title: t('dataAnalytics'),
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      title: t('cybersecurity'),
      description: "Protect your business with our comprehensive security solutions and best practices.",
    },
    {
      icon: <Zap className="h-10 w-10 text-orange-500" />,
      title: t('consulting'),
      description: "Streamline your development and operations with our automation solutions.",
    },
    {
      icon: <Layers className="h-10 w-10 text-orange-500" />,
      title: t('mobileDev'),
      description: "Seamlessly connect your systems and applications for improved efficiency.",
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="bg-gray-50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-orange-500">{t('title')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card border-gray-200 opacity-0 transition-all duration-500 hover:shadow-md hover:-translate-y-2"
              style={{ transform: "translateY(20px)" }}
            >
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-500">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

