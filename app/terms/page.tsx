import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Scale, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/getmysport-logo.png"
                alt="Get My Sport"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">Get My Sport</span>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="h-10 w-10 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Terms and Conditions</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Please read these terms carefully before using Get My Sport. By using our platform, you agree to these
              terms.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 15, 2025</p>
          </div>

          {/* Important Notice */}
          <div className="mb-16">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                  <p className="text-amber-700 text-sm">
                    These terms constitute a legally binding agreement between you and Get My Sport. Please read them
                    carefully and contact us if you have any questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using Get My Sport ("the Platform"), you agree to be bound by these Terms and Conditions
                ("Terms"). If you do not agree to these Terms, please do not use our Platform.
              </p>
              <p className="text-muted-foreground mb-4">
                These Terms apply to all users of the Platform, including but not limited to players, venue owners, and
                visitors. We reserve the right to modify these Terms at any time, and such modifications will be
                effective immediately upon posting.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Get My Sport is a digital platform that connects sports enthusiasts with sports facilities and venues.
                Our services include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Venue discovery and search functionality</li>
                <li>Online booking and reservation system</li>
                <li>Payment processing for bookings</li>
                <li>User profiles and booking management</li>
                <li>Communication tools between users and venues</li>
                <li>Reviews and rating system</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">3. User Accounts</h2>

              <h3 className="text-xl font-semibold mb-4">Account Creation</h3>
              <p className="text-muted-foreground mb-4">
                To use certain features of the Platform, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>Be responsible for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Account Eligibility</h3>
              <p className="text-muted-foreground mb-4">
                You must be at least 18 years old to create an account. If you are under 18, you may use the Platform
                only with the involvement and consent of a parent or guardian.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Booking and Payments</h2>

              <h3 className="text-xl font-semibold mb-4">Booking Process</h3>
              <p className="text-muted-foreground mb-4">When you make a booking through our Platform:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>You enter into a direct agreement with the venue</li>
                <li>Get My Sport acts as an intermediary to facilitate the booking</li>
                <li>All bookings are subject to venue availability and policies</li>
                <li>Confirmation is required from both the venue and our system</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Payment Terms</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Payment is required at the time of booking</li>
                <li>We use secure third-party payment processors</li>
                <li>Service fees may apply to bookings</li>
                <li>Refunds are subject to venue policies and our refund policy</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5. User Conduct</h2>
              <p className="text-muted-foreground mb-4">You agree not to use the Platform to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Post false, misleading, or defamatory content</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to access the Platform</li>
                <li>Interfere with the Platform's operation</li>
                <li>Engage in fraudulent activities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">6. Venue Responsibilities</h2>
              <p className="text-muted-foreground mb-4">Venues using our Platform agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Provide accurate facility information and availability</li>
                <li>Honor confirmed bookings made through the Platform</li>
                <li>Maintain their facilities in safe, playable condition</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respond promptly to booking requests and inquiries</li>
                <li>Update their availability and pricing information regularly</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The Platform and its content, including but not limited to text, graphics, logos, images, and software,
                are owned by Get My Sport and protected by intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Create derivative works based on our Platform</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">8. Privacy and Data</h2>
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our
                Privacy Policy, which is incorporated into these Terms by reference. By using the Platform, you consent
                to our privacy practices as described in the Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">9. Disclaimers and Limitations</h2>

              <h3 className="text-xl font-semibold mb-4">Service Availability</h3>
              <p className="text-muted-foreground mb-4">
                We strive to maintain Platform availability but cannot guarantee uninterrupted service. We reserve the
                right to modify, suspend, or discontinue any part of the Platform at any time.
              </p>

              <h3 className="text-xl font-semibold mb-4">Third-Party Venues</h3>
              <p className="text-muted-foreground mb-4">
                Get My Sport is not responsible for the quality, safety, or condition of third-party venues. Users book
                venues at their own risk and should verify venue conditions before use.
              </p>

              <h3 className="text-xl font-semibold mb-4">Limitation of Liability</h3>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by law, Get My Sport shall not be liable for any indirect, incidental,
                special, or consequential damages arising from your use of the Platform.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">10. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify and hold harmless Get My Sport, its officers, directors, employees, and agents
                from any claims, damages, or expenses arising from your use of the Platform or violation of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">11. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend your account and access to the Platform at any time, with or without notice,
                for conduct that we believe violates these Terms or is harmful to other users or our business interests.
              </p>
              <p className="text-muted-foreground mb-4">
                You may terminate your account at any time by contacting us. Upon termination, your right to use the
                Platform will cease immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">12. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by and construed in accordance with the laws of the State of California,
                without regard to conflict of law principles. Any disputes arising under these Terms will be subject to
                the exclusive jurisdiction of the courts in San Francisco, California.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">13. Contact Information</h2>
              <p className="text-muted-foreground mb-4">If you have questions about these Terms, please contact us:</p>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> legal@getmysport.com
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Address:</strong> Get My Sport, Inc.
                  <br />
                  123 Sports Avenue
                  <br />
                  San Francisco, CA 94105
                </p>
                <p className="text-muted-foreground">
                  <strong>Phone:</strong> (555) 123-SPORT
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Image src="/images/getmysport-logo.png" alt="Get My Sport" width={32} height={32} className="h-8 w-8" />
              <span className="font-semibold">Get My Sport</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/refund" className="hover:text-foreground transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
