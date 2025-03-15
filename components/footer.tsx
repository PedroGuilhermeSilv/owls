import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import OwlsLogo from "./owls-logo"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <OwlsLogo size={40} />
              <span className="text-xl font-bold text-orange-500">Owls</span>
            </div>
            <p className="text-gray-500">
              Innovative software solutions for businesses of all sizes. Transforming ideas into powerful software.
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
            <h3 className="mb-4 text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  DevOps & Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Enterprise Integration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Owls Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

