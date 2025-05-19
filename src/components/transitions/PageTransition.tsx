"use client"

import type React from "react"
import { useTransition } from "./TransitionProvider"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const { isTransitioning } = useTransition()

  return (
    <div className={`page-content transition-opacity duration-300 ${isTransitioning ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      {children}
    </div>
  )
}
