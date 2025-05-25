import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://zonezen.app"),  // <-- Added here for correct social image URLs
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased pt-16",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}
