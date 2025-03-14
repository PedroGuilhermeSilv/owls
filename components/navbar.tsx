"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useTranslations } from 'next-intl'
import Link from "next/link"
import { useState } from "react"
import LanguageSwitcher from "./language-switcher"
import OwlsLogo from "./owls-logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('navigation')

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <OwlsLogo />
          <span className="hidden text-xl font-bold text-orange-500 sm:inline-block">Owls</span>
        </div>

        <nav className="hidden md:flex md:gap-6">
          <Link href="#" className="text-gray-600 hover:text-orange-500">
            {t('home')}
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-orange-500">
            {t('services')}
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-orange-500">
            {t('testimonials')}
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-orange-500">
            {t('contact')}
          </Link>
        </nav>

        <div className="hidden md:flex md:gap-4 items-center">
          <LanguageSwitcher />
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            {t('login')}
          </Button>
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            {t('getStarted')}
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="#" className="text-gray-600 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
              {t('home')}
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
              {t('services')}
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('testimonials')}
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
              {t('contact')}
            </Link>
            <div className="flex flex-col gap-4 pt-2">
              <LanguageSwitcher />
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  {t('login')}
                </Button>
                <Button className="bg-orange-500 text-white hover:bg-orange-600">
                  {t('getStarted')}
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

