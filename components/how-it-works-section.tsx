"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function HowItWorksSection() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = sectionRef.current?.querySelectorAll(".step")
            steps?.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add("animate-in")
              }, index * 200)
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

  const steps = [
    {
      number: "1",
      title: language === "en" ? "Tell Us About Your Business" : "Conte-nos Sobre Seu Negócio",
      description:
        language === "en"
          ? "We'll have a friendly chat about your business, what you do, and what challenges you're facing."
          : "Teremos uma conversa amigável sobre seu negócio, o que você faz e quais desafios está enfrentando.",
    },
    {
      number: "2",
      title: language === "en" ? "We Create Your Solution" : "Criamos Sua Solução",
      description:
        language === "en"
          ? "Based on your needs, we'll set up a system that's tailored to your business - simple, effective, and easy to use."
          : "Com base em suas necessidades, configuraremos um sistema adaptado ao seu negócio - simples, eficaz e fácil de usar.",
    },
    {
      number: "3",
      title: language === "en" ? "We Show You How It Works" : "Mostramos Como Funciona",
      description:
        language === "en"
          ? "We'll train you and your team on how to use the system - no technical knowledge required."
          : "Treinaremos você e sua equipe sobre como usar o sistema - sem necessidade de conhecimento técnico.",
    },
    {
      number: "4",
      title: language === "en" ? "Ongoing Support When You Need It" : "Suporte Contínuo Quando Precisar",
      description:
        language === "en"
          ? "We're always here to help with any questions or changes you need as your business grows."
          : "Estamos sempre aqui para ajudar com quaisquer dúvidas ou mudanças que você precise à medida que seu negócio cresce.",
    },
  ]

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-gray-50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-orange-500">{language === "en" ? "How It Works" : "Como Funciona"}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            {language === "en"
              ? "Getting started is easy. Here's how we help you bring technology to your business without the headaches."
              : "Começar é fácil. Veja como ajudamos você a trazer tecnologia para seu negócio sem dores de cabeça."}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step relative mb-12 flex opacity-0 transition-all duration-700 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              style={{ transform: "translateY(20px)" }}
            >
              {/* Line connecting steps */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-20 h-[calc(100%+3rem)] w-0.5 bg-orange-200"></div>
              )}

              {/* Step number */}
              <div
                className={`z-10 mr-8 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-3xl font-bold text-white ${
                  index % 2 === 1 ? "ml-8 mr-0" : ""
                }`}
              >
                {step.number}
              </div>

              {/* Step content */}
              <div
                className={`flex-1 rounded-lg bg-white p-6 shadow-md ${index % 2 === 0 ? "text-left" : "text-right"}`}
              >
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

