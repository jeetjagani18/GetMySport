import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, RefreshCw, Clock, CreditCard, AlertCircle } from "lucide-react"

export default function RefundPolicyPage() {
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
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Refund & Cancellation Policy</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We understand plans change. Here's everything you need to know about cancellations and refunds.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 15, 2025</p>
          </div>

          {/* Quick Reference */}
          <div className="mb-16">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Quick Reference</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">24+ Hours</h3>
                  <p className="text-sm text-muted-foreground">Full refund available</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">2-24 Hours</h3>
                  <p className="text-sm text-muted-foreground">50% refund available</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Under 2 Hours</h3>
                  <p className="text-sm text-muted-foreground">No refund available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">1. General Cancellation Policy</h2>
              <p className="text-muted-foreground mb-4">
                At Get My Sport, we understand that sometimes plans change. Our cancellation policy is designed to be
                fair to both players and venue owners while providing flexibility when possible.
              </p>
              <p className="text-muted-foreground mb-4">
                All cancellation requests must be made through your Get My Sport account or by contacting our customer
                support team. Cancellations made outside of our platform may not be processed or eligible for refunds.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">2. Refund Schedule</h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">24+ Hours Before Booking</h3>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li>
                    <strong>100% refund</strong> of booking amount
                  </li>
                  <li>Service fees are fully refunded</li>
                  <li>Processing time: 3-5 business days</li>
                  <li>No questions asked cancellation</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-800">2-24 Hours Before Booking</h3>
                <ul className="list-disc pl-6 text-orange-700 space-y-2">
                  <li>
                    <strong>50% refund</strong> of booking amount
                  </li>
                  <li>Service fees are non-refundable</li>
                  <li>Processing time: 3-5 business days</li>
                  <li>Venue may retain 50% for short notice</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Less Than 2 Hours Before Booking</h3>
                <ul className="list-disc pl-6 text-red-700 space-y-2">
                  <li>
                    <strong>No refund</strong> available
                  </li>
                  <li>Full payment is retained by venue</li>
                  <li>Service fees are non-refundable</li>
                  <li>Exceptions may apply for emergencies</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">3. How to Cancel a Booking</h2>

              <h3 className="text-xl font-semibold mb-4">Through Your Account</h3>
              <ol className="list-decimal pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Log in to your Get My Sport account</li>
                <li>Navigate to "My Bookings"</li>
                <li>Find the booking you want to cancel</li>
                <li>Click "Cancel Booking"</li>
                <li>Confirm your cancellation and reason</li>
                <li>Receive confirmation email with refund details</li>
              </ol>

              <h3 className="text-xl font-semibold mb-4">Contact Customer Support</h3>
              <p className="text-muted-foreground mb-4">
                If you're unable to cancel through your account, contact our support team:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Email: support@getmysport.com</li>
                <li>Phone: (555) 123-SPORT</li>
                <li>Live chat: Available 24/7 on our platform</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Special Circumstances</h2>

              <h3 className="text-xl font-semibold mb-4">Weather-Related Cancellations</h3>
              <p className="text-muted-foreground mb-4">
                For outdoor venues, we understand that weather can impact your ability to play:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Severe weather warnings: Full refund available</li>
                <li>Light rain or minor conditions: Standard policy applies</li>
                <li>Venue closure due to weather: Full refund guaranteed</li>
                <li>Weather decisions are made 2 hours before booking time</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Medical Emergencies</h3>
              <p className="text-muted-foreground mb-4">
                We understand that medical emergencies can occur unexpectedly:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Full refund available with medical documentation</li>
                <li>Documentation must be provided within 48 hours</li>
                <li>Applies to player or immediate family member</li>
                <li>Contact support immediately for assistance</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Venue-Initiated Cancellations</h3>
              <p className="text-muted-foreground mb-4">If a venue cancels your booking:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>100% refund guaranteed regardless of timing</li>
                <li>Additional compensation may be provided</li>
                <li>We'll help you find alternative venues</li>
                <li>Priority booking for future reservations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5. Refund Processing</h2>

              <h3 className="text-xl font-semibold mb-4">Processing Timeline</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>
                  <strong>Credit/Debit Cards:</strong> 3-5 business days
                </li>
                <li>
                  <strong>PayPal:</strong> 1-2 business days
                </li>
                <li>
                  <strong>Bank Transfers:</strong> 5-7 business days
                </li>
                <li>
                  <strong>Digital Wallets:</strong> 1-3 business days
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Refund Method</h3>
              <p className="text-muted-foreground mb-4">
                Refunds are processed using the same payment method used for the original booking. If the original
                payment method is no longer available, please contact our support team to arrange an alternative refund
                method.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">6. Group Bookings</h2>
              <p className="text-muted-foreground mb-4">Special considerations apply to group bookings (5+ people):</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>48+ hours notice required for full refund</li>
                <li>Partial cancellations may be allowed</li>
                <li>Group organizer is responsible for cancellation</li>
                <li>Individual refunds processed to original payment methods</li>
                <li>Contact support for assistance with group changes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7. Recurring Bookings</h2>
              <p className="text-muted-foreground mb-4">For recurring or subscription-based bookings:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Individual sessions follow standard cancellation policy</li>
                <li>Subscription cancellations require 7 days notice</li>
                <li>Unused sessions may be refunded pro-rata</li>
                <li>Pausing subscriptions available for up to 30 days</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">8. Disputes and Appeals</h2>
              <p className="text-muted-foreground mb-4">
                If you believe your cancellation should be treated differently:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Contact our support team within 48 hours</li>
                <li>Provide detailed explanation and any supporting documentation</li>
                <li>We'll review your case within 2 business days</li>
                <li>Appeals decisions are final</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">9. Policy Updates</h2>
              <p className="text-muted-foreground mb-4">
                We may update this policy from time to time. Changes will be communicated via:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Email notification to all users</li>
                <li>In-app notifications</li>
                <li>Updated policy posted on our website</li>
                <li>30 days notice for major changes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4">For questions about cancellations or refunds, contact us:</p>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> support@getmysport.com
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Phone:</strong> (555) 123-SPORT
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Live Chat:</strong> Available 24/7 on our platform
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Address:</strong> Get My Sport, Inc.
                  <br />
                  123 Sports Avenue
                  <br />
                  San Francisco, CA 94105
                </p>
                <p className="text-muted-foreground">
                  <strong>Hours:</strong> Monday-Friday 9AM-6PM PST
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
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
