"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/styled"
import { Input } from "@/components/ui/styled"
import { Textarea } from "@/components/ui/styled"
import { Mail, Phone, MapPin, Send, Github, Facebook, Instagram } from "lucide-react"
import "./style.css"
import { useRevealer } from "@/hook/useRevealer"
import Link from "next/link"

export default function ContactLayout() {
  useRevealer();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <>
    <div className="revealer"></div>
    <div className="page-wrapper" ref={sectionRef}>
      <div className="contact-container">
        <h1 className="contact-title">
          Get In <span className="highlight">Touch</span>
        </h1>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="contact-info-content">
              <h3 className="contact-info-title">Let&apos;s talk about your project</h3>

              <p className="contact-info-text">
                I&apos;m interested in freelance opportunities – especially ambitious or large projects. However, if you have
                other requests or questions, don&apos;t hesitate to contact me.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <Mail className="contact-icon" />
                  </div>
                  <div className="contact-item-content">
                    <h4 className="contact-item-label">Mail me at</h4>
                    <p className="contact-item-value">thevupro753@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <Phone className="contact-icon" />
                  </div>
                  <div className="contact-item-content">
                    <h4 className="contact-item-label">Call me at</h4>
                    <p className="contact-item-value">0383 697 460</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <MapPin className="contact-icon" />
                  </div>
                  <div className="contact-item-content">
                    <h4 className="contact-item-label">Location</h4>
                    <p className="contact-item-value">Thành phố Hồ Chí Minh</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h4 className="social-title">Connect with me</h4>
                <div className="social-links">
                  <Link
                    href="https://github.com/zuxnewbie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <Github className="social-icon" />
                  </Link>
                  <Link
                    href="https://facebook.com/zux.004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    <Facebook className="social-icon" />
                  </Link>
                  <Link
                    href="https://instagram.com/zux.04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    <Instagram className="social-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Phạm Tờ Vũ"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abcdef@gmail.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Any Inquiry"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  rows={6}
                  required
                  className="form-textarea"
                />
              </div>

              <Button type="submit" className="submit-button" size="lg">
                <Send className="button-icon" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
