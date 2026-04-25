import type { Metadata } from 'next'
import { HeroUIProvider } from '@heroui/react'
import './globals.css'

export const metadata: Metadata = {
  title: "DeBaRuN's Billing System",
  description: 'Eat like a king, pay like one too',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-brand-cream">
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  )
}
