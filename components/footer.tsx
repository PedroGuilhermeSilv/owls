"use client"

import { useLanguage } from "@/contexts/language-context"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import OwlsLogo from "./owls-logo"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-white py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <OwlsLogo size={40} />
            <span className="text-xl font-bold text-orange-500">Owls</span>
          </div>
          <p className="text-gray-500">
            {language === "en"
              ? "Empowering small businesses with simple and effective software solutions."
              : "Capacitando pequenas empresas com soluções de software simples e eficazes."}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-orange-500">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-orange-500">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-orange-500">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-orange-500">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-orange-500">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium">{t("footer.company")}</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-orange-500">
                {t("footer.about")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                {t("footer.careers")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                {t("footer.blog")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium">{t("footer.support")}</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-orange-500">
                {t("footer.help")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                {t("footer.faq")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                {t("footer.contact")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium">{t("footer.legal")}</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-orange-500">
                {t("footer.terms")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                {t("footer.privacy")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                {t("footer.cookies")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 border-t border-gray-200 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-500">
            © 2024 Owls Software. {t("footer.rights")}
          </p>
          <div className="flex space-x-4">
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </footer>
  )
}

