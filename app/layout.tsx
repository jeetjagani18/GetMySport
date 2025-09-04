import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Get My Sport – Your Game, Your Way.",
  description: "Book grounds, find players, join tournaments. All sports in one app - launching soon in your city.",
  generator: "v0.app",
  openGraph: {
    title: "Get My Sport – Your Game, Your Way.",
    description: "Book grounds, find players, join tournaments. All sports in one app - launching soon in your city.",
    url: "https://getmysport.com",
    siteName: "Get My Sport",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get My Sport – Your Game, Your Way.",
    description: "Book grounds, find players, join tournaments. All sports in one app - launching soon in your city.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans ${montserrat.variable} ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
