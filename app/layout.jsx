import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://christinesautomotive.ca'),
  title,
  description: 'Full‑service auto repair in Kitchener. Brakes, oil, diagnostics, A/C, tires. Transparent estimates and friendly service. Call (519) 772‑5044.',
  openGraph,
  alternates,
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Christine’s Automotive",
    "image": "https://christinesautomotive.ca/og.jpg",
    "address",
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
