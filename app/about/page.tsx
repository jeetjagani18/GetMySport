import Link from "next/link"
import { Users, Target, Zap } from "lucide-react"
import { SharedLayout } from "@/components/shared-layout"

export default function AboutPage() {
  return (
    <SharedLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Get My Sport</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We're revolutionizing how people discover, book, and play sports by connecting players with the perfect
              venues across the country.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-center text-pretty max-w-3xl mx-auto">
                To make sports accessible to everyone by creating a seamless platform that connects passionate players
                with quality sports facilities, fostering community and promoting active lifestyles across the nation.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  Building connections between players, venues, and local sports communities to create lasting
                  relationships.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to providing the highest quality experience for both players and venue owners through
                  innovation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Simplicity</h3>
                <p className="text-muted-foreground">
                  Making sports booking effortless with intuitive design and streamlined processes that save time.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Get My Sport was born from a simple frustration: finding and booking quality sports facilities was
                unnecessarily complicated. Our founders, passionate athletes themselves, experienced firsthand the
                challenges of coordinating games, finding available courts, and managing bookings across different
                venues.
              </p>
              <p className="text-muted-foreground mb-6">
                After countless hours spent on phone calls, visiting venues, and dealing with outdated booking systems,
                we realized there had to be a better way. We envisioned a platform that would make sports booking as
                easy as ordering food online – simple, transparent, and instant.
              </p>
              <p className="text-muted-foreground">
                Today, we're building that vision into reality. Get My Sport is more than just a booking platform; it's
                a community where sports enthusiasts can discover new venues, connect with fellow players, and focus on
                what they love most – playing the game.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">John Smith</h3>
                <p className="text-orange-600 font-medium mb-3">Co-Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Former professional tennis player with 10+ years in sports management and technology.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">MJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Maria Johnson</h3>
                <p className="text-blue-600 font-medium mb-3">Co-Founder & CTO</p>
                <p className="text-muted-foreground text-sm">
                  Software engineer with expertise in mobile applications and marketplace platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/80 mb-6 text-pretty">
              Have questions about Get My Sport? We'd love to hear from you.
            </p>
            <Link
              href="mailto:hello@getmysport.com"
              className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}
