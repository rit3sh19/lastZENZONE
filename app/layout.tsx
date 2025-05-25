import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'ZenZone - Your Mental Health Companion',
  description: 'Track your mood, practice mindfulness, and connect with a supportive community',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'ZenZone - Your Mental Health Companion',
    description: 'Track your mood, practice mindfulness, and connect with a supportive community',
    url: 'https://zonezen.app',
    siteName: 'ZenZone',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZenZone - Your Mental Health Companion',
    description: 'Track your mood, practice mindfulness, and connect with a supportive community',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}
