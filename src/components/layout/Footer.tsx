import Link from 'next/link'
import { COMPANY_INFO, NAVIGATION } from '@/constants'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Mail, MapPin, Phone, Twitter, Linkedin, Github, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-krovos" />
              <span className="text-2xl font-bold text-gray-900">
                Krovos
              </span>
            </div>
            
            <p className="text-sm">
              {COMPANY_INFO.description}
            </p>
            
            <div className="flex space-x-4">
              <a
                href={COMPANY_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Info
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <span className="text-sm">{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">{COMPANY_INFO.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">{COMPANY_INFO.email}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Newsletter
              </h3>
              <p className="text-sm mb-3">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white border-gray-300 text-gray-900"
                />
                <Button variant="primary" fullWidth>
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {currentYear} {COMPANY_INFO.name}. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              {NAVIGATION.footer.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
