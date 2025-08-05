import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "さくら皮膚科クリニック",
  description: "皮膚科専門医による丁寧な診察で、お肌のお悩みを解決いたします",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
