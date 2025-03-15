"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full" aria-label="Select language">
          <Globe className="h-4 w-4" />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
            {language.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={`flex items-center gap-2 ${language === "en" ? "bg-orange-100" : ""}`}
          onClick={() => setLanguage("en")}
        >
          <span className="h-4 w-6 rounded-sm bg-blue-900 text-center text-[10px] font-bold text-white">EN</span>
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`flex items-center gap-2 ${language === "pt" ? "bg-orange-100" : ""}`}
          onClick={() => setLanguage("pt")}
        >
          <span className="h-4 w-6 rounded-sm bg-green-600 text-center text-[10px] font-bold text-white">PT</span>
          <span>Português</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

