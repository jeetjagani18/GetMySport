"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "When are you launching?",
    answer:
      "We're launching in Q2 2024, starting with Ahmedabad and Rajkot. We'll notify waitlist members first with exclusive early access and special launch offers.",
  },
  {
    question: "Which cities first?",
    answer:
      "We're starting with Ahmedabad and Rajkot, then expanding to other major cities based on demand and ground partner availability. Join our waitlist to vote for your city!",
  },
  {
    question: "How do I list my ground?",
    answer:
      "Join our waitlist as a 'Ground Owner' and we'll guide you through the simple onboarding process. You'll get a dedicated owner portal to manage bookings, pricing, and availability.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer:
      "Yes! Cancellation and rescheduling features will be available soon after launch. Our flexible booking system is designed with players in mind, offering fair cancellation policies.",
  },
  {
    question: "What sports are supported?",
    answer:
      "We support 14+ sports including Cricket, Football, Badminton, Tennis, Basketball, Swimming, and more. Don't see your sport? Tell us and we'll add it to our platform!",
  },
  {
    question: "Is payment secure?",
    answer:
      "Absolutely. We use industry-standard encryption and secure payment gateways to protect your financial information. Your data is safe with us and we never store sensitive payment details.",
  },
  {
    question: "Do I need an account to view slots?",
    answer:
      "You can browse available slots without an account, but you'll need to sign up (with just email OTP) to book and manage your reservations. No lengthy registration process!",
  },
  {
    question: "What are owner fees/commissions?",
    answer:
      "We charge a small commission only on successful bookings. No upfront fees, no monthly charges. You earn more when you host more games. Transparent pricing, always.",
  },
]

export function FAQSection() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
          <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-primary transition-colors py-6">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
