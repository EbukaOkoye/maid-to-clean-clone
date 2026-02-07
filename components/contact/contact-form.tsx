"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    suburb: "",
    phone: "",
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
  }

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Contact Us
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Fill out the form below and we{"'"}ll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl shadow-sm p-8 md:p-10 space-y-6"
        >
          {/* Name Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="contact-firstName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                First Name<span className="text-red-500">*</span>
              </label>
              <Input
                id="contact-firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full"
                placeholder="First name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-lastName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Last Name<span className="text-red-500">*</span>
              </label>
              <Input
                id="contact-lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full"
                placeholder="Last name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full"
              placeholder="your@email.com"
            />
          </div>

          {/* Suburb */}
          <div>
            <label
              htmlFor="contact-suburb"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Suburb
            </label>
            <Input
              id="contact-suburb"
              type="text"
              value={formData.suburb}
              onChange={(e) =>
                setFormData({ ...formData, suburb: e.target.value })
              }
              className="w-full"
              placeholder="e.g. Brunswick, Carlton"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Phone
            </label>
            <Input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full"
              placeholder="0400 000 000"
            />
          </div>

          {/* Comment */}
          <div>
            <label
              htmlFor="contact-comment"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Comment
            </label>
            <textarea
              id="contact-comment"
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[140px] focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Tell us how we can help..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}
