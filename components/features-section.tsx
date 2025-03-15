"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Clock, DollarSign, Headphones, ShieldCheck, Smile, Users } from "lucide-react"
import { useEffect, useRef } from "react"

export default function FeaturesSection() {
  const { language } = useLanguage()
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

    // Store current ref value in a variable
    const currentSectionRef = sectionRef.current

    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [])

  const features = [
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: language === "en" ? "Save Time" : "Economize Tempo",
      description:
        language === "en"
          ? "Automate repetitive tasks so you can focus on what matters most - running your business and serving customers."
          : "Automatize tarefas repetitivas para que você possa se concentrar no que é mais importante - administrar seu negócio e atender clientes.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-orange-500" />,
      title: language === "en" ? "Increase Profits" : "Aumente os Lucros",
      description:
        language === "en"
          ? "Track sales, manage inventory, and identify opportunities to reduce costs and boost your bottom line."
          : "Acompanhe vendas, gerencie estoque e identifique oportunidades para reduzir custos e aumentar sua lucratividade.",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: language === "en" ? "Manage Customers" : "Gerencie Clientes",
      description:
        language === "en"
          ? "Keep track of customer information, preferences, and purchase history to provide personalized service."
          : "Mantenha registro de informações dos clientes, preferências e histórico de compras para oferecer um serviço personalizado.",
    },
    {
      icon: <Smile className="h-10 w-10 text-orange-500" />,
      title: language === "en" ? "Easy to Use" : "Fácil de Usar",
      description:
        language === "en"
          ? "Our systems are designed to be simple and intuitive - no technical expertise required to get started."
          : "Nossos sistemas são projetados para serem simples e intuitivos - não é necessário conhecimento técnico para começar.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-orange-500" />,
      title: language === "en" ? "Secure & Reliable" : "Seguro e Confiável",
      description:
        language === "en"
          ? "Your business data is protected with industry-standard security, and our systems work when you need them."
          : "Os dados do seu negócio são protegidos com segurança de nível industrial, e nossos sistemas funcionam quando você precisa deles.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-orange-500" />,
      title: language === "en" ? "Friendly Support" : "Suporte Amigável",
      description:
        language === "en"
          ? "We're always here to help with any questions - no technical jargon, just clear and helpful answers."
          : "Estamos sempre aqui para ajudar com qualquer dúvida - sem jargão técnico, apenas respostas claras e úteis.",
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="bg-gray-50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-orange-500">
              {language === "en" ? "How We Help Your Business" : "Como Ajudamos Seu Negócio"}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            {language === "en"
              ? "Our solutions are designed specifically for small businesses, making technology work for you - not the other way around."
              : "Nossas soluções são projetadas especificamente para pequenos negócios, fazendo a tecnologia trabalhar para você - não o contrário."}
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
                <CardDescription className="text-gray-500 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

