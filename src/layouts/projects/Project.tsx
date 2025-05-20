"use client"

import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/styled"
import "./style.css"

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A modern e-commerce dashboard with real-time analytics, inventory management, and order processing",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "React Query"],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Interactive Landing Page",
    description: "A highly interactive landing page with GSAP animations, parallax effects, and responsive design",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "GSAP", "Framer Motion", "Styled Components"],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A real-time chat application with message encryption, file sharing, and user presence indicators",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Socket.io", "Tailwind CSS", "TypeScript", "Firebase"],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A drag-and-drop task management application with team collaboration features",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Redux Toolkit", "React DnD", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A weather dashboard with location-based forecasts, interactive maps, and historical data",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "OpenWeatherMap API", "Leaflet", "TypeScript"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A creative portfolio website with smooth animations and transitions",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
]

export default function Projects() {
  // Filter featured projects
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <>
    <div className="revealer"></div>
    <div className="page-wrapper">
      <div className="projects-container">
        <h1 className="projects-title">
          My <span className="highlight">Projects</span>
        </h1>

        <div className="featured-projects-section">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <div key={project.id} className="featured-project">
                <div className="featured-project-grid">
                  <div className="featured-project-image-container">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="featured-project-image"
                    />
                  </div>

                  <div className="featured-project-content">
                    <div>
                      <h3 className="featured-project-title">{project.title}</h3>
                      <p className="featured-project-description">{project.description}</p>

                      <div className="project-tags">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-links">
                      <Button
                        variant="outline"
                        size="sm"
                        className="project-link-button"
                        as="a"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="button-icon" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="project-link-button"
                        as="a"
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="button-icon" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="other-projects-section">
          <h2 className="section-heading">Other Projects</h2>
          <div className="other-projects">
            {otherProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="project-image" />
                  <div className="project-image-overlay"></div>
                </div>

                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="project-tag">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && <span className="project-tag">+{project.tags.length - 3}</span>}
                  </div>

                  <div className="project-links">
                    <Button
                      variant="outline"
                      size="sm"
                      className="project-link-button"
                      as="a"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="button-icon" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="project-link-button"
                      as="a"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="button-icon" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
