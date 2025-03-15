"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import LanguageSwitcher from "./language-switcher"
import OwlsLogo from "./owls-logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <OwlsLogo size={40} />
          <span className="hidden text-xl font-bold text-orange-500 sm:inline-block">Owls</span>
        </div>

        <nav className="hidden md:flex md:gap-6">
          <Link href="#" className="text-gray-600 hover:text-orange-500">
            {t("nav.home")}
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-orange-500">
            {t("nav.services")}
          </Link>
          <Link href="#business-types" className="text-gray-600 hover:text-orange-500">
            {t("nav.business")}
          </Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-orange-500">
            {t("nav.howItWorks")}
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-orange-500">
            {t("nav.clients")}
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-orange-500">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <LanguageSwitcher />
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            {t("nav.login")}
          </Button>
          <Button className="bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-transform duration-300">
            {t("nav.getStarted")}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="#" className="text-gray-600 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
              {t("nav.home")}
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
              {t("nav.services")}
            </Link>
            <Link
              href="#business-types"
              className="text-gray-600 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.business")}
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.howItWorks")}
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.clients")}
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
              {t("nav.contact")}
            </Link>
            <div className="flex gap-4 pt-2">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                {t("nav.login")}
              </Button>
              <Button className="bg-orange-500 text-white hover:bg-orange-600">{t("nav.getStarted")}</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

