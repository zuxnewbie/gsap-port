"use client";

import Image from "next/image";
import "./style.css";
import { useRevealer } from "@/hook/useRevealer";

export default function About() {
  useRevealer();

  return (
    <>
      <div className="revealer"></div>
      <div className="page-wrapper">
        <div className="about-container">
          <h1 className="about-title">
            About <span className="highlight">Me</span>
          </h1>

          <div className="about-grid">
            <div className="about-image-container">
              <Image
                src="/me.jpg"
                alt="Profile"
                fill
                className="about-image"
              />
              <div className="image-overlay"></div>
            </div>

            <div className="about-content">
              <h3 className="about-heading">
                Frontend Developer with a passion for creating exceptional user
                experiences
              </h3>

              <p className="about-text">
                I&apos;m a frontend developer specializing in React, Next.js,
                TypeScript, and animation libraries like GSAP to create fluid,
                interactive interfaces that engage users.
              </p>

              <p className="about-text">
                I focus on writing clean and maintainable code while
                continuously learning to improve performance, accessibility, and
                user experience. I enjoy combining creativity with solid
                frontend fundamentals to build user-friendly interfaces.
              </p>

              <div className="expertise-section">
                <h4 className="expertise-title">My Expertise</h4>
                <div className="expertise-grid">
                  <div className="expertise-item">
                    <div className="expertise-dot"></div>
                    <span>React & Next.js</span>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-dot"></div>
                    <span>TypeScript</span>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-dot"></div>
                    <span>Animation & Interaction</span>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-dot"></div>
                    <span>Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h2 className="experience-title">Experience & Education</h2>

            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-date">October 2024 - Present</div>
                  <h3 className="timeline-title">Frontend Developer</h3>
                  <p className="timeline-description">
                    Working at SEA DRAGON TECHNOLOGY COMPANY LIMITED as a
                    Frontend Developer, focusing on building modern web
                    applications with React and Next.js.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2022 - 2024</div>
                  <h3 className="timeline-title">
                    Information Technology College HoChiMinh City (ITC)
                  </h3>
                  <p className="timeline-description">
                    Studied Information Technology with good degree, focusing on
                    web development and programming fundamentals.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2019 - 2022</div>
                  <h3 className="timeline-title">LOC HIEP High School</h3>
                  <p className="timeline-description">
                    Completed high school education with a focus on mathematics
                    and sciences, developing a strong foundation for future
                    technical studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
