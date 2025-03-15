"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export default function TestimonialsSection() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll(".testimonial-card")
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in")
              }, index * 150)
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

  const testimonials = [
    {
      quote:
        language === "en"
          ? "Before Owls, I was spending hours on paperwork. Now I can track sales, manage inventory, and see how my business is doing in minutes. It's so easy to use!"
          : "Antes da Owls, eu passava horas com papelada. Agora posso acompanhar vendas, gerenciar estoque e ver como meu negócio está indo em minutos. É tão fácil de usar!",
      author: language === "en" ? "Maria Silva" : "Maria Silva",
      role: language === "en" ? "Boutique Owner" : "Proprietária de Boutique",
      avatar: "MS",
    },
    {
      quote:
        language === "en"
          ? "As a restaurant owner, I needed a system that could keep up with busy service times. Owls made it simple to take orders, manage tables, and keep my kitchen running smoothly."
          : "Como proprietário de restaurante, eu precisava de um sistema que pudesse acompanhar os horários de pico. A Owls tornou simples receber pedidos, gerenciar mesas e manter minha cozinha funcionando sem problemas.",
      author: language === "en" ? "Carlos Oliveira" : "Carlos Oliveira",
      role: language === "en" ? "Restaurant Owner" : "Proprietário de Restaurante",
      avatar: "CO",
    },
    {
      quote:
        language === "en"
          ? "My salon has grown 30% since we started using Owls. The online booking system alone has saved us countless hours on the phone, and clients love getting automatic reminders."
          : "Meu salão cresceu 30% desde que começamos a usar a Owls. Só o sistema de agendamento online nos economizou inúmeras horas ao telefone, e os clientes adoram receber lembretes automáticos.",
      author: language === "en" ? "Ana Santos" : "Ana Santos",
      role: language === "en" ? "Salon Owner" : "Proprietária de Salão",
      avatar: "AS",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-orange-500">
              {language === "en" ? "What Our Customers Say" : "O Que Nossos Clientes Dizem"}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            {language === "en"
              ? "Don't just take our word for it. Here's what real small business owners have to say about working with Owls."
              : "Não apenas acredite em nossa palavra. Veja o que proprietários de pequenos negócios reais têm a dizer sobre trabalhar com a Owls."}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="testimonial-card border-gray-200 opacity-0 transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
              style={{ transform: "translateY(20px)" }}
            >
              <CardHeader>
                <svg
                  className="h-8 w-8 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13456 9H5.37685C5.17587 9 5.01587 8.84 5.01587 8.64V5.5C5.01587 5.22 5.23587 5 5.51587 5H8.51587C8.79587 5 9.01587 5.22 9.01587 5.5V8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.01587 8C5.01587 4.5 6.51587 3 10.0159 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19.0159 9H15.2582C15.0572 9 14.8972 8.84 14.8972 8.64V5.5C14.8972 5.22 15.1172 5 15.3972 5H18.3972C18.6772 5 18.8972 5.22 18.8972 5.5V8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.8972 8C14.8972 4.5 16.3972 3 19.8972 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <Avatar className="transition-transform duration-300 hover:scale-110">
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                  <AvatarFallback className="bg-orange-100 text-orange-500">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

