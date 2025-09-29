"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "@/components/waitlist-modal"
import { Menu, X, Mail, Instagram, Twitter, Linkedin } from "lucide-react"

interface SharedLayoutProps {
  children: React.ReactNode
}

export function SharedLayout({ children }: SharedLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    // For internal pages, navigate to home page with hash
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/getmysport-logo.png"
                  alt="Get My Sport"
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <button
                onClick={() => scrollToSection("sports")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Sports
              </button>
              <button
                onClick={() => scrollToSection("what-you-can-do")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                What You Can Do
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("players-owners")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Players & Owners
              </button>
              <button
                onClick={() => scrollToSection("cities")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Cities
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <WaitlistModal>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Join
                </Button>
              </WaitlistModal>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <button
                  onClick={() => scrollToSection("sports")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Sports
                </button>
                <button
                  onClick={() => scrollToSection("what-you-can-do")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  What You Can Do
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("players-owners")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Players & Owners
                </button>
                <button
                  onClick={() => scrollToSection("cities")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Cities
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </button>
                <Link
                  href="/about"
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <WaitlistModal>
                  <Button size="sm" className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
                    Join
                  </Button>
                </WaitlistModal>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Image
                src="/images/getmysport-logo.png"
                alt="Get My Sport"
                width={140}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="text-background/80 text-lg">Your Game, Your Way.</p>
            </div>

            <div className="space-y-6">
              <h4 className="font-heading font-bold text-lg">Links</h4>
              <div className="space-y-3 text-background/80">
                {[
                  { label: "About", href: "/about" },
                  { label: "Partner With Us", href: "/#players-owners" },
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                  { label: "Refund Policy", href: "/refund" },
                ].map((link) => (
                  <div key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-heading font-bold text-lg">Contact</h4>
              <div className="space-y-3 text-background/80">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@getmysport.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-heading font-bold text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  )
                })}
              </div>
              <p className="text-sm text-background/60">@getmysport</p>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60">© 2025 Get My Sport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
