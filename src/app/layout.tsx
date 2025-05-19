import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
// import TransitionProvider from "@/components/transitions/TransitionProvider"
import Footer from "@/components/footer"
import { ViewTransitions } from "next-view-transitions"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Frontend Developer",
  description: "Personal portfolio showcasing my frontend development projects and skills",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <TransitionProvider> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
          <Footer />
        {/* </TransitionProvider> */}
        </ThemeProvider>
      </body>
    </html>
    </ViewTransitions>
  )
}
