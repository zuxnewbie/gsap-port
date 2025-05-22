"use client";

import { useEffect, useRef } from "react";
import { Code, Database, Wrench } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import { useRevealer } from "@/hook/useRevealer";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="category-icon" />,
    description:
      "My core expertise is in frontend technologies, creating responsive and interactive user interfaces.",
    skills: [
      {
        group: "Core Technologies",
        items: [
          "HTML5",
          "CSS3",
          "JavaScript (ES6+)",
          "TypeScript",
          "Responsive Design",
          "Web Accessibility",
        ],
      },
      {
        group: "Frameworks & Libraries",
        items: ["ReactJs", "NextJs", "Redux", "Context API", "React Query"],
      },
      {
        group: "Styling",
        items: [
          "Tailwind CSS",
          "Styled Components",
          "CSS Modules",
          "Sass/SCSS",
          "Material UI",
          "Ant design",
          "Bootstrap",
        ],
      },
      {
        group: "Animation & Interaction",
        items: [
          "GSAP",
          "Framer Motion",
          "CSS Animations",
          "ThreeJs",
          "Canvas API",
          "SVG Animation",
        ],
      },
    ],
  },
  {
    title: "Backend Knowledge",
    icon: <Database className="category-icon" />,
    description:
      "I have working knowledge of backend technologies to better collaborate with backend teams and build full-stack applications when needed.",
    skills: [
      {
        group: "Languages & Frameworks",
        items: [
          "NodeJs",
          "ExpressJs",
          "NextJs API Routes",
          "RESTful APIs",
          "NestJs",
        ],
      },
      {
        group: "Databases",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      },
      {
        group: "Authentication & Security",
        items: ["JWT", "NextAuthJs", "API Security Best Practices"],
      },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench className="category-icon" />,
    description:
      "I use modern development tools and follow efficient workflows to ensure high-quality code and smooth collaboration.",
    skills: [
      {
        group: "Version Control & Collaboration",
        items: ["Git", "GitHub", "GitLab", "Jira", , "Figma", "Adobe XD"],
      },
      {
        group: "Build Tools & Package Managers",
        items: ["Webpack", "Vite", "npm", "yarn", "pnpm", "ESLint", "Prettier"],
      },
      // {
      //   group: "Testing & Quality Assurance",
      //   items: ["Jest", "React Testing Library", "Cypress", "Storybook", "Lighthouse", "Web Vitals"],
      // },
      {
        group: "Deployment & DevOps",
        items: ["Vercel", "Netlify", "Docker", "GitHub Actions"],
      },
    ],
  },
];

export default function Skills() {
  useRevealer();
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Create animation for section title
      gsap.from(".skills-title", {
        scrollTrigger: {
          trigger: ".skills-title",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Create staggered animation for skill categories
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: ".skills-categories",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
      });

      // Create animation for approach section
      gsap.from(".approach-section", {
        scrollTrigger: {
          trigger: ".approach-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Create staggered animation for approach items
      gsap.from(".approach-item", {
        scrollTrigger: {
          trigger: ".approach-section",
          start: "top 70%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div className="revealer"></div>
    <div className="page-wrapper" ref={sectionRef}>
      <div className="skills-container">
        <h1 className="skills-title">
          My <span className="highlight">Skills</span>
        </h1>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon-wrapper">{category.icon}</div>
                <h2 className="category-title">{category.title}</h2>
              </div>

              <p className="category-description">{category.description}</p>

              <div className="skill-groups">
                {category.skills.map((skillGroup, groupIndex) => (
                  <div key={groupIndex} className="skill-group">
                    <h3 className="group-title">{skillGroup.group}</h3>
                    <div className="skills-grid">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <div className="skill-dot"></div>
                          <span className="skill-name">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="approach-section">
          <h2 className="approach-title">My Frontend Development Approach</h2>

          <div className="approach-grid">
            <div className="approach-item">
              <h3 className="approach-item-title">
                Learning Performance Best Practices
              </h3>
              <p className="approach-item-description">
                I&apos;m continuously learning how to build performant web
                applications by exploring techniques like code splitting, lazy
                loading, and optimizing rendering to improve load times and user
                experience.
              </p>
            </div>

            <div className="approach-item">
              <h3 className="approach-item-title">
                Responsive & Accessible by Default
              </h3>
              <p className="approach-item-description">
                I aim to build responsive interfaces with a mobile-first
                mindset, and I’m gradually applying accessibility guidelines to
                make sure my projects are usable by everyone.
              </p>
            </div>

            <div className="approach-item">
              <h3 className="approach-item-title">
                Writing Clear & Understandable Code
              </h3>
              <p className="approach-item-description">
                I focus on writing clear and organized code by following naming
                conventions, using reusable components, and keeping things easy
                to understand for future improvement.
              </p>
            </div>

            <div className="approach-item">
              <h3 className="approach-item-title">
                Building Confidence with Testing
              </h3>
              <p className="approach-item-description">
                I&apos;m learning how to use testing tools like unit testing and
                integration testing to improve the quality and reliability of my
                code as I grow in my development journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
