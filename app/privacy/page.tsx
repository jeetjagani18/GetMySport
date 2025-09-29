import { Shield, Eye, Lock, Users } from "lucide-react"
import { SharedLayout } from "@/components/shared-layout"

export default function PrivacyPolicyPage() {
  return (
    <SharedLayout>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 15, 2025</p>
          </div>

          {/* Quick Overview */}
          <div className="mb-16">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Privacy at a Glance</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <Eye className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Transparency</h3>
                    <p className="text-sm text-muted-foreground">We're clear about what data we collect and why.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Your data is protected with industry-standard security.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Control</h3>
                    <p className="text-sm text-muted-foreground">You have control over your personal information.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                When you use Get My Sport, we may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Profile information and preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Booking history and sports preferences</li>
                <li>Location data (with your permission) to find nearby venues</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Usage Information</h3>
              <p className="text-muted-foreground mb-4">
                We automatically collect certain information about how you use our platform:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Device information (type, operating system, browser)</li>
                <li>IP address and general location</li>
                <li>App usage patterns and feature interactions</li>
                <li>Search queries and booking preferences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use your information to provide and improve our services:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Process bookings and facilitate payments</li>
                <li>Send booking confirmations and important updates</li>
                <li>Personalize your experience and recommend relevant venues</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our platform and develop new features</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information in these limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>
                  <strong>With venue partners:</strong> Necessary booking details to facilitate your reservations
                </li>
                <li>
                  <strong>Service providers:</strong> Third-party companies that help us operate our platform
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law or to protect our rights
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with mergers or acquisitions
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and monitoring</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure payment processing through certified providers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">You have several rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of your personal information
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a portable format
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications
                </li>
                <li>
                  <strong>Location:</strong> Control location data sharing in your device settings
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Essential cookies for platform functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Preference cookies to remember your settings</li>
                <li>Marketing cookies for personalized advertising (with consent)</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">7. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Get My Sport is not intended for children under 13. We do not knowingly collect personal information
                from children under 13. If we become aware that we have collected such information, we will take steps
                to delete it promptly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">8. International Users</h2>
              <p className="text-muted-foreground mb-4">
                If you are accessing Get My Sport from outside the United States, please note that your information may
                be transferred to, stored, and processed in the United States where our servers are located.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">9. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on our platform and updating the "Last updated" date. Your continued use of Get
                My Sport after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">10. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> privacy@getmysport.com
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
      </div>
    </SharedLayout>
  )
}
