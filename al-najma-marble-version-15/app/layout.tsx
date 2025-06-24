import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AL-NAJMA Marble - Premium Marble Polishing & Restoration in Dubai",
  description:
    "Dubai's elite marble restoration service for high-end residential and commercial clients seeking immaculate flooring aesthetics.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ PNG favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Fonts (if you're using them) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Cinzel:wght@400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Unbounded:wght@400;500;700&family=Sora:wght@400;500;700&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
