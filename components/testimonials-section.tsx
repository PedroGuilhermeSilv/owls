"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentSection = sectionRef.current;
            const cards = currentSection?.querySelectorAll(".testimonial-card");
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const testimonials = [
    {
      quote:
        "Owls Software transformed our business operations with their custom software solution. Their team was professional, responsive, and delivered beyond our expectations.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "SJ",
    },
    {
      quote:
        "The cloud migration project handled by Owls was seamless and efficient. They understood our needs and provided a solution that scaled with our growing business.",
      author: "Michael Chen",
      role: "IT Director, GrowthHub",
      avatar: "MC",
    },
    {
      quote:
        "Working with Owls on our data analytics platform was a game-changer. Their expertise and innovative approach helped us gain valuable insights from our data.",
      author: "Emma Rodriguez",
      role: "Data Manager, InsightCo",
      avatar: "ER",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our <span className="text-orange-500">Clients</span> Say
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Owls.
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

