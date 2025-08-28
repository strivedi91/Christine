import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://christinesautomotive.ca'),
  title: { default: 'Christine’s Automotive — Honest Auto Repair in Kitchener', template: '%s | Christine’s Automotive' },
  description: 'Full‑service auto repair in Kitchener. Brakes, oil, diagnostics, A/C, tires. Transparent estimates and friendly service. Call (519) 772‑5044.',
  openGraph: {
    title: 'Christine’s Automotive — Honest Auto Repair in Kitchener',
    description: 'Full‑service auto repair in Kitchener. Brakes, oil, diagnostics, A/C, tires.',
    url: 'https://christinesautomotive.ca',
    siteName: 'Christine’s Automotive',
    locale: 'en_CA',
    type: 'website'
  },
  alternates: { canonical: 'https://christinesautomotive.ca' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Christine’s Automotive",
    "image": "https://christinesautomotive.ca/og.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "38 Hanson Ave, Unit 2",
      "addressLocality": "Kitchener",
      "addressRegion": "ON",
      "postalCode": "N2C 2E2",
      "addressCountry": "CA"
    },
    "telephone": "+1-519-772-5044",
    "url": "https://christinesautomotive.ca",
    "openingHours": "Mo-Th 08:00-17:00 Fr 08:00-16:00",
    "priceRange": "$$"
  }
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-50 text-gray-900'}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
