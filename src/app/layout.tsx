import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { AppProviders } from "@/providers/app-providers"
import { HOSPITAL } from "@/lib/constants"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: `${HOSPITAL.shortName} — Hospital Information Management`,
    template: `%s · ${HOSPITAL.shortName}`,
  },
  description:
    "Enterprise hospital information management: clinical workflows, patient portal, diagnostics, pharmacy, revenue cycle, and integration-ready architecture.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
