"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface TransitionContextType {
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
})

export const useTransition = () => useContext(TransitionContext)

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Define the navigation function
    window.navigateTo = async (url: string) => {
    setIsTransitioning(true)

    // Wait for the transition to start (e.g., GSAP animation duration)
    await new Promise((res) => setTimeout(res, 500)) // <- Adjust timing

    router.push(url)

    // Reset transition after navigation, give slight delay
    setTimeout(() => {
        setIsTransitioning(false)
    }, 100)
    }


    // Handle link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (
        link &&
        link.getAttribute("href") &&
        link.getAttribute("href")?.startsWith("/") &&
        !link.getAttribute("target")
      ) {
        e.preventDefault()
        const url = link.getAttribute("href") as string
        window.navigateTo(url)
      }
    }

    document.addEventListener("click", handleLinkClick)

    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [router])

  return (
    <TransitionContext.Provider value={{ isTransitioning }}>
      <div className={`page-wrapper ${isTransitioning ? "page-transitioning" : ""}`}>{children}</div>
    </TransitionContext.Provider>
  )
}

// Add navigateTo to window type
declare global {
  interface Window {
    navigateTo: (url: string) => void
  }
}
