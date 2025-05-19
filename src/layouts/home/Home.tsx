"use client"

import { Button } from "@/components/ui/styled"
import { ArrowRight } from "lucide-react"
import "./style.css"
import { useRevealer } from "@/hook/useRevealer"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import SplitText from "gsap/SplitText"

gsap.registerPlugin(SplitText)

export default function HomeLayout() {
  useRevealer();

  const heroContentRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)
  const codeBlockRef = useRef(null)

  useGSAP(() => {
    // Wait for the revealer animation to complete
    const delay = 1.5 // Slightly longer than the revealer animation

    // Create a timeline for hero content animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: delay,
    })

    // Instead of using SplitText which might cause issues, animate the whole title
    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
    })

      // Animate subtitle
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4", // Start slightly before the title animation finishes
      )

      // Animate buttons
      .from(
        ".hero-button",
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=0.3",
      )

      // Animate code block container
      .from(
        codeBlockRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 30,
          duration: 0.8,
        },
        "-=0.4",
      )

      // Animate code lines with a typing effect
      .from(
        ".code-line",
        {
          opacity: 0,
          x: -20,
          stagger: 0.08,
          duration: 0.4,
        },
        "-=0.6",
      )
  }, {})
  
  return (
    <>
    <div className="revealer"></div>
    <div className="page-wrapper">
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-bg"></div>
          <div className="radial-bg"></div>
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" ref={heroContentRef}>
              <h1 className="hero-title" ref={titleRef}>
                Frontend <span className="highlight">Developer</span>
              </h1>
              <p className="hero-subtitle" ref={subtitleRef}>
                I build exceptional user interfaces and web experiences with modern technologies
              </p>
              <div className="hero-buttons" ref={buttonsRef}>
                <Button size="lg" className="hero-button" as="a" href="/about">
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="hero-button" as="a" href="/projects">
                  View My Work
                </Button>
              </div>
            </div>

            <div className="code-block" ref={codeBlockRef}>
              <span className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {"{"}
              </span>
              <span className="code-line code-indent-1">
                <span className="code-variable">name</span>:{" "}
                <span className="code-string">&quot;Frontend Developer&quot;</span>,
              </span>
              <span className="code-line code-indent-1">
                <span className="code-variable">skills</span>: [<span className="code-string">&quot;React&quot;</span>,{" "}
                <span className="code-string">&quot;Next.js&quot;</span>,{" "}
                <span className="code-string">&quot;TypeScript&quot;</span>,{" "}
                <span className="code-string">&quot;GSAP&quot;</span>],
              </span>
              <span className="code-line code-indent-1">
                <span className="code-variable">passion</span>:{" "}
                <span className="code-string">&quot;Creating beautiful user experiences&quot;</span>,
              </span>
              <span className="code-line code-indent-1">
                <span className="code-function">code</span>: () {"=>"} {"{"}
              </span>
              <span className="code-line code-indent-2">
                <span className="code-keyword">return</span>{" "}
                <span className="code-string">&quot;Clean, efficient, and maintainable&quot;</span>;
              </span>
              <span className="code-line code-indent-1">{"}"}</span>
              <span className="code-line">{"}"}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
