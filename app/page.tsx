"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation" // Added usePathname hook for active page detection
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { SportsGrid } from "@/components/sports-grid"
import { FAQSection } from "@/components/faq-section"
import { useToast } from "@/hooks/use-toast"
import {
  Menu,
  X,
  Clock,
  Users,
  Trophy,
  Smartphone,
  Settings,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Search,
  MapPin,
  CreditCard,
  Play,
  Shield,
  Star,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() // Added pathname detection for active page highlighting
  const [joinFormData, setJoinFormData] = useState({
    name: "",
    email: "",
    city: "",
    role: "player" as "player" | "owner",
    consent: false,
  })
  const { toast } = useToast()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!joinFormData.consent) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms and conditions to join the waitlist.",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(joinFormData),
      })

      console.log("Waitlist submission:", joinFormData)

      toast({
        title: "You're on the list!",
        description: "We'll notify you when Get My Sport launches in your city.",
      })
      setJoinFormData({ name: "", email: "", city: "", role: "player", consent: false })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/getmysport-logo.png"
                alt="Get My Sport"
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Refund Policy", href: "/refund" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-semibold" // Active page now looks like a small button
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
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
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                  { label: "Refund Policy", href: "/refund" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-left text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-semibold inline-block w-fit" // Active page button styling for mobile
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative bg-slate-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/getmysport-logo.png"
                    alt="Get My Sport"
                    width={60}
                    height={60}
                    className="h-12 w-12 brightness-0 invert"
                  />
                  <p className="text-primary font-heading font-semibold text-lg">Your Game, Your Way.</p>
                </div>
                <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-balance text-white">
                  All Sports. One App.
                </h1>
                <p className="text-xl text-white/80 text-pretty leading-relaxed">
                  Book grounds, find players, join tournaments—launching soon in your city.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
                  onClick={() => scrollToSection("players-owners")}
                >
                  Become a Partner Ground
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2 opacity-60">
                  <Smartphone className="h-5 w-5" />
                  <span className="text-sm">App Store - Coming Soon</span>
                </div>
                <div className="flex items-center space-x-2 opacity-60">
                  <Smartphone className="h-5 w-5" />
                  <span className="text-sm">Play Store - Coming Soon</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <Image
                  src="/images/getmysport-logo.png"
                  alt="Get My Sport Logo"
                  width={400}
                  height={400}
                  className="h-80 w-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sports" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">Every Sport, Every City.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              From cricket to esports, we've got your game covered.
            </p>
          </div>

          <SportsGrid />

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              Don't see your sport?{" "}
              <button onClick={() => scrollToSection("join")} className="text-primary hover:underline font-semibold">
                Tell us
              </button>
              —we'll add it.
            </p>
          </div>
        </div>
      </section>

      <section id="what-you-can-do" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">What You Can Do</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl">Book Grounds Fast</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Real-time slots, secure payments, instant confirmation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-2xl">Find Players & Teams</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">Match by location, time, skill level.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-2xl">Join & Host Tournaments</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fixtures, scoring, leaderboards (post-launch).
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
              Get Early Access
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { step: 1, title: "Search", desc: "Pick sport, city, date.", icon: Search, color: "primary" },
              { step: 2, title: "Choose a Ground", desc: "See time slots & rates.", icon: MapPin, color: "secondary" },
              { step: 3, title: "Book & Pay", desc: "Instant confirmation.", icon: CreditCard, color: "accent" },
              { step: 4, title: "Play", desc: "Show up, game on.", icon: Play, color: "primary" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="text-center space-y-6">
                  <div
                    className={`w-20 h-20 bg-${item.color} rounded-full flex items-center justify-center mx-auto text-${item.color}-foreground`}
                  >
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground">Step {item.step}</div>
                    <h3 className="font-heading font-bold text-xl">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-lg">
              Save favourites, get reminders, manage bookings in one place.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">Features</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary">MVP at Launch</h3>
                </div>
                <div className="grid gap-4">
                  {[
                    "Email OTP login",
                    "Ground discovery & filters",
                    "Time-band pricing",
                    "Instant booking",
                    "Secure payments",
                    "Booking history",
                    "Wishlist/Favourites",
                    "Maps & directions",
                    "Owner portal (approval)",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-secondary">Next Updates</h3>
                  <p className="text-muted-foreground">(soon after launch)</p>
                </div>
                <div className="grid gap-4">
                  {[
                    "Cancellations & reschedules",
                    "Reviews & ratings",
                    "Combo packs & coupons",
                    "Staff access",
                    "Alerts (waitlist/slot opens)",
                    "Basic owner analytics",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="players-owners" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl">For Players</h3>
                </div>

                <div className="space-y-4">
                  {[
                    "Fast booking",
                    "Discovery by sport/time/location",
                    "Favourites & reminders",
                    "Find players (coming soon)",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Settings className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl">For Ground Owners</h3>
                </div>

                <div className="space-y-4">
                  {[
                    "Easy listing",
                    "Slot & pricing setup",
                    "Manual blocks/offline bookings",
                    "Owner dashboard; approvals & visibility",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cities" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">
                Launching in: <span className="text-primary">Ahmedabad</span> •{" "}
                <span className="text-secondary">Rajkot</span> •{" "}
                <span className="text-muted-foreground">[Next Cities]</span>
              </h2>
              <p className="text-xl text-muted-foreground">Built by sports lovers. Designed for speed.</p>
            </div>

            <Card className="max-w-4xl mx-auto p-12">
              <CardContent className="text-center space-y-4">
                <h3 className="font-heading font-semibold text-xl text-muted-foreground">Early Partner Grounds</h3>
                <p className="text-muted-foreground">
                  Partner ground logos will be displayed here once we start onboarding facilities.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 opacity-30">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-16 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Logo {i}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQSection />
          </div>
        </div>
      </section>

      <section id="join" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance">Be first to play.</h2>
              <p className="text-xl text-muted-foreground">Join the waitlist and get launch offers.</p>
            </div>

            <Card className="max-w-lg mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleJoinSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="join-name" className="text-sm font-semibold">
                        Name
                      </Label>
                      <Input
                        id="join-name"
                        value={joinFormData.name}
                        onChange={(e) => setJoinFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="join-email" className="text-sm font-semibold">
                        Email
                      </Label>
                      <Input
                        id="join-email"
                        type="email"
                        value={joinFormData.email}
                        onChange={(e) => setJoinFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="join-city" className="text-sm font-semibold">
                        City
                      </Label>
                      <Input
                        id="join-city"
                        value={joinFormData.city}
                        onChange={(e) => setJoinFormData((prev) => ({ ...prev, city: e.target.value }))}
                        className="h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="join-role" className="text-sm font-semibold">
                        Role
                      </Label>
                      <Select
                        value={joinFormData.role}
                        onValueChange={(value: "player" | "owner") =>
                          setJoinFormData((prev) => ({ ...prev, role: value }))
                        }
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="player">Player</SelectItem>
                          <SelectItem value="owner">Ground Owner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="join-consent"
                      checked={joinFormData.consent}
                      onCheckedChange={(checked) => setJoinFormData((prev) => ({ ...prev, consent: !!checked }))}
                      className="mt-1"
                    />
                    <Label htmlFor="join-consent" className="text-sm leading-relaxed">
                      I agree to the Terms & Conditions and Privacy Policy
                    </Label>
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                    Join Waitlist
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                  { label: "Partner With Us", href: "#players-owners" },
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
            <p className="text-background/60">© 2024 Get My Sport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
