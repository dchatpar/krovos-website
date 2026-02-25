"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/container";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { MegaMenu, MobileMegaMenu } from "@/components/mega-menu/mega-menu";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    hasMegaMenu: true,
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function HeaderEnhanced() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMegaMenuOpen, setMobileMegaMenuOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaMenuOpen(false);
        setMobileMegaMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Mega menu open with delay to prevent accidental closes
  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 500);
  };

  // Close mega menu when clicking outside (handled by backdrop)

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-gray-200 bg-white/95 backdrop-blur-xl shadow-lg"
            : "border-b border-gray-200/50 bg-white/80 backdrop-blur-lg"
        )}
      >
        <Container size="xl">
          <nav className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 shadow-lg shadow-primary-500/20" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400/20 to-secondary-400/20 backdrop-blur-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold tracking-tight text-gray-900">
                    Krovos
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      .
                    </span>
                  </span>
                  <span className="text-xs text-gray-500">Automation Agency</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-1 lg:flex">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasMegaMenu ? (
                    <div
                      className="group relative"
                      onMouseEnter={handleMegaMenuEnter}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        {item.name}
                        <ChevronDown className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          megaMenuOpen && "rotate-180"
                        )} />
                      </button>
                      
                      {/* Active indicator */}
                      <div className={cn(
                        "absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-300",
                        megaMenuOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      )} />
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
                    >
                      {item.name}
                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden items-center space-x-3 lg:flex">
              <Button
                variant="outline"
                size="sm"
                href="/contact"
                className="border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-100"
              >
                Get Quote
              </Button>
              <Button
                variant="gradient"
                size="sm"
                href="/contact"
                className="shadow-lg shadow-primary-500/20"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Desktop Mega Menu */}
      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-xl">
          <Container size="xl">
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasMegaMenu ? (
                    <button
                      onClick={() => setMobileMegaMenuOpen(true)}
                      className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Button
                  variant="outline"
                  href="/contact"
                  className="w-full border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-100"
                >
                  Get Quote
                </Button>
                <Button
                  variant="gradient"
                  href="/contact"
                  className="w-full"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Mobile Mega Menu */}
      <MobileMegaMenu 
        isOpen={mobileMegaMenuOpen} 
        onClose={() => {
          setMobileMegaMenuOpen(false);
          setMobileMenuOpen(false);
        }} 
      />
    </>
  );
}
