'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAVIGATION } from '@/constants'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  
  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }
  
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
    },
    open: {
      opacity: 1,
      height: 'auto',
    },
  }
  
  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  }
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-krovos" />
              <span className="text-xl font-bold text-gray-900">
                Krovos
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.main.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.name === 'Services' && setOpenDropdown('services')}
                onMouseLeave={() => item.name === 'Services' && setOpenDropdown(null)}
              >
                {item.name === 'Services' ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle('services')}
                      className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={cn(
                        'h-4 w-4 transition-transform',
                        openDropdown === 'services' && 'rotate-180'
                      )} />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === 'services' && (
                        <motion.div
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                          className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-gray-200 bg-white p-2 shadow-lg"
                        >
                          {NAVIGATION.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Get Started
            </Button>
            <Button variant="primary" size="sm">
              Contact Sales
            </Button>
          </div>
          
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-1 pb-4 pt-2">
                {NAVIGATION.main.map((item) => (
                  <div key={item.name}>
                    {item.name === 'Services' ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => handleDropdownToggle('mobile-services')}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={cn(
                            'h-5 w-5 transition-transform',
                            openDropdown === 'mobile-services' && 'rotate-180'
                          )} />
                        </button>
                        
                        <AnimatePresence>
                          {openDropdown === 'mobile-services' && (
                            <motion.div
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={dropdownVariants}
                              className="ml-4 space-y-1 border-l border-gray-200 pl-4"
                            >
                              {NAVIGATION.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                                  onClick={closeMenu}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 space-y-2">
                  <Button variant="ghost" fullWidth onClick={closeMenu}>
                    Get Started
                  </Button>
                  <Button variant="primary" fullWidth onClick={closeMenu}>
                    Contact Sales
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
