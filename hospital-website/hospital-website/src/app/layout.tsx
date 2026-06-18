import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from "@/components/FloatingButtons"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: 'Patil Hospital | Advanced Healthcare & Medical Excellence',
    template: '%s | Patil Hospital',
  },
  description:
    'Patil Hospital offers world-class healthcare with expert specialists in Cardiology, Neurology, Orthopedics, Pediatrics, Gynecology, and Oncology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://www.patilhospital.com" />
      </head>

      <body className="antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* Floating Buttons */}
        <FloatingButtons />
      </body>
    </html>
  )
}