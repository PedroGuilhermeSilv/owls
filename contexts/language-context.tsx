"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Language = "pt" | "en"

type Translations = {
  [key: string]: {
    en: string
    pt: string
  }
}

// Basic translations for demonstration
const translations: Translations = {
  // Navbar
  "nav.home": {
    en: "Home",
    pt: "Início",
  },
  "nav.services": {
    en: "How We Help",
    pt: "Como Ajudamos",
  },
  "nav.business": {
    en: "For Your Business",
    pt: "Para Seu Negócio",
  },
  "nav.howItWorks": {
    en: "How It Works",
    pt: "Como Funciona",
  },
  "nav.clients": {
    en: "Customers",
    pt: "Clientes",
  },
  "nav.contact": {
    en: "Contact",
    pt: "Contato",
  },
  "nav.login": {
    en: "Login",
    pt: "Entrar",
  },
  "nav.getStarted": {
    en: "Get Started",
    pt: "Começar",
  },

  // Contact
  "contact.title": {
    en: "Let's Talk About Your Business",
    pt: "Vamos Conversar Sobre Seu Negócio",
  },
  "contact.subtitle": {
    en: "Have questions? Want to see how we can help? Reach out and we'll get back to you quickly.",
    pt: "Tem perguntas? Quer ver como podemos ajudar? Entre em contato e responderemos rapidamente.",
  },
  "contact.name": {
    en: "Name",
    pt: "Nome",
  },
  "contact.email": {
    en: "Email",
    pt: "Email",
  },
  "contact.subject": {
    en: "Subject",
    pt: "Assunto",
  },
  "contact.message": {
    en: "Message",
    pt: "Mensagem",
  },
  "contact.send": {
    en: "Send Message",
    pt: "Enviar Mensagem",
  },
  "contact.location": {
    en: "Our Location",
    pt: "Nossa Localização",
  },
  "contact.emailUs": {
    en: "Email Us",
    pt: "Envie-nos um Email",
  },
  "contact.callUs": {
    en: "Call Us",
    pt: "Ligue para Nós",
  },
  "contact.hours": {
    en: "Business Hours",
    pt: "Horário de Funcionamento",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  // Load saved language preference from localStorage only on client side
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage only on client side
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

