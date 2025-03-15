"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Briefcase, Heart, Home, Scissors, ShoppingBag, Store, Truck, Utensils } from "lucide-react"
import { useEffect, useRef } from "react"

export default function BusinessTypesSection() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll(".business-card")
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

  const businessTypes = [
    {
      icon: <ShoppingBag className="h-12 w-12 text-orange-500" />,
      title: language === "en" ? "Retail Stores" : "Lojas de Varejo",
      description:
        language === "en"
          ? "Manage inventory, track sales, and create a seamless checkout experience for your customers."
          : "Gerencie estoque, acompanhe vendas e crie uma experiência de checkout perfeita para seus clientes.",
      features:
        language === "en"
          ? ["Point of Sale", "Inventory Management", "Customer Loyalty"]
          : ["Ponto de Venda", "Gestão de Estoque", "Fidelidade do Cliente"],
    },
    {
      icon: <Utensils className="h-12 w-12 text-orange-500" />,
      title: language === "en" ? "Restaurants & Cafés" : "Restaurantes e Cafés",
      description:
        language === "en"
          ? "Take orders, manage tables, and streamline kitchen operations to serve more customers with less stress."
          : "Receba pedidos, gerencie mesas e otimize operações de cozinha para atender mais clientes com menos estresse.",
      features:
        language === "en"
          ? ["Table Management", "Order Taking", "Kitchen Display"]
          : ["Gestão de Mesas", "Recebimento de Pedidos", "Display de Cozinha"],
    },
    {
      icon: <Scissors className="h-12 w-12 text-orange-500" />,
      title: language === "en" ? "Beauty & Wellness" : "Beleza e Bem-estar",
      description:
        language === "en"
          ? "Schedule appointments, manage staff, and keep your clients coming back with automated reminders."
          : "Agende compromissos, gerencie funcionários e mantenha seus clientes voltando com lembretes automatizados.",
      features:
        language === "en"
          ? ["Online Booking", "Staff Scheduling", "Client Management"]
          : ["Agendamento Online", "Escala de Funcionários", "Gestão de Clientes"],
    },
    {
      icon: <Briefcase className="h-12 w-12 text-orange-500" />,
      title: language === "en" ? "Professional Services" : "Serviços Profissionais",
      description:
        language === "en"
          ? "Track client projects, manage billing, and organize your workflow to deliver services efficiently."
          : "Acompanhe projetos de clientes, gerencie faturamento e organize seu fluxo de trabalho para entregar serviços com eficiência.",
      features:
        language === "en"
          ? ["Project Tracking", "Time Billing", "Document Management"]
          : ["Acompanhamento de Projetos", "Faturamento por Tempo", "Gestão de Documentos"],
    },
    {
      icon: <Store className="h-12 w-12 text-orange-500" />,
      title: language === "en" ? "Small Shops" : "Pequenas Lojas",
      description:
        language === "en"
          ? "Simple solutions to manage your shop, from sales and inventory to customer relationships."
          : "Soluções simples para gerenciar sua loja, desde vendas e estoque até relacionamento com clientes.",
      features:
        language === "en"
          ? ["Easy Sales", "Basic Inventory", "Customer Records"]
          : ["Vendas Fáceis", "Estoque Básico", "Registros de Clientes"],
    },
    {
      icon: <Truck className="h-12 w-12 text-orange-500" />,
      title: language === "en" ? "Delivery Services" : "Serviços de Entrega",
      description:
        language === "en"
          ? "Manage routes, track deliveries, and keep your customers informed about their orders."
          : "Gerencie rotas, acompanhe entregas e mantenha seus clientes informados sobre seus pedidos.",
      features:
        language === "en"
          ? ["Route Planning", "Delivery Tracking", "Customer Notifications"]
          : ["Planejamento de Rotas", "Rastreamento de Entregas", "Notificações para Clientes"],
    },
    {
      icon: <Home className="h-12 w-12 text-orange-500" />,
      title: language === "en" ? "Home Services" : "Serviços Domésticos",
      description:
        language === "en"
          ? "Schedule appointments, manage your team, and provide estimates for home service businesses."
          : "Agende compromissos, gerencie sua equipe e forneça orçamentos para empresas de serviços domésticos.",
      features:
        language === "en"
          ? ["Appointment Scheduling", "Team Management", "Quote Generation"]
          : ["Agendamento", "Gestão de Equipe", "Geração de Orçamentos"],
    },
    {
      icon: <Heart className="h-12 w-12 text-orange-500" />,
      title: language === "en" ? "Healthcare Providers" : "Provedores de Saúde",
      description:
        language === "en"
          ? "Manage patient appointments, records, and billing for small healthcare practices."
          : "Gerencie consultas, registros e faturamento de pacientes para pequenas práticas de saúde.",
      features:
        language === "en"
          ? ["Patient Records", "Appointment Scheduling", "Billing Management"]
          : ["Registros de Pacientes", "Agendamento de Consultas", "Gestão de Faturamento"],
    },
  ]

  return (
    <section id="business-types" ref={sectionRef} className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-orange-500">
              {language === "en" ? "Solutions for Every Small Business" : "Soluções para Cada Pequeno Negócio"}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            {language === "en"
              ? "No matter what type of business you run, we have tools designed specifically for your needs."
              : "Não importa que tipo de negócio você administra, temos ferramentas projetadas especificamente para suas necessidades."}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessTypes.map((business, index) => (
            <Card
              key={index}
              className="business-card border-gray-200 opacity-0 transition-all duration-500 hover:shadow-md hover:-translate-y-2"
              style={{ transform: "translateY(20px)" }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                  {business.icon}
                </div>
                <CardTitle className="text-xl">{business.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{business.description}</p>
                <div className="mt-4">
                  <ul className="space-y-2">
                    {business.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-orange-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  {language === "en" ? "Learn More" : "Saiba Mais"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

