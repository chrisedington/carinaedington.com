import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Carina Edington | Personal CFO",
  description: "Financial modeling and CFO services for SaaS and startups",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="py-6 px-4 border-b">
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
              <a href="/" className="text-2xl font-serif font-bold">
                Carina Edington
              </a>
              <ul className="flex space-x-6">
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/experience" className="hover:underline">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="/qualifications" className="hover:underline">
                    Qualifications
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
              <ModeToggle />
            </nav>
          </header>
          <main className="max-w-6xl mx-auto px-4 py-12">{children}</main>
          <footer className="py-6 px-4 border-t">
            <div className="max-w-6xl mx-auto text-center text-sm">
              © {new Date().getFullYear()} Carina Edington. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

