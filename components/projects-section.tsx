"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import AnimatedLogo from "./animated-logo"

export default function ProjectsSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll(".project-card")
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

  const projects = [
    {
      title: "TechCorp Enterprise Portal",
      description:
        "A comprehensive enterprise portal that streamlined internal processes and improved productivity by 35%.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Web Application", "React", "Node.js"],
      link: "#",
    },
    {
      title: "GrowthHub Analytics Dashboard",
      description:
        "Custom analytics platform providing real-time insights and data visualization for business intelligence.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Data Analytics", "Python", "React"],
      link: "#",
    },
    {
      title: "SecureBank Mobile App",
      description:
        "Secure banking application with biometric authentication and advanced encryption for financial transactions.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Mobile App", "React Native", "Security"],
      link: "#",
    },
    {
      title: "HealthTrack Patient Management",
      description: "Integrated healthcare solution for managing patient records, appointments, and treatment plans.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Healthcare", "Full Stack", "Cloud"],
      link: "#",
    },
    {
      title: "EcoSmart IoT Platform",
      description: "IoT platform for monitoring and optimizing energy consumption in commercial buildings.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["IoT", "Cloud", "Data Analytics"],
      link: "#",
    },
    {
      title: "RetailPro Inventory System",
      description: "Automated inventory management system with predictive ordering and supply chain integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Retail", "Automation", "AI"],
      link: "#",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="relative py-20">
      <div className="absolute left-0 top-40 -z-10 hidden opacity-5 lg:block">
        <AnimatedLogo size={300} />
      </div>
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <div className="mb-6 flex items-center justify-center">
            <AnimatedLogo size={60} className="mr-4" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-orange-500">{t("projects.title")}</span>
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">{t("projects.subtitle")}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card overflow-hidden border-gray-200 opacity-0 transition-all duration-500 hover:shadow-xl"
              style={{ transform: "translateY(20px)" }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-orange-100 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105"
                >
                  {t("projects.viewCase")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105">
            {t("projects.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  )
}

