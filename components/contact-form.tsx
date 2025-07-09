"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HeaderSection } from "./header-section"
import Image from "next/image"
import Email from "@/assets/email-icon.svg"
import Whats from "@/assets/whats-icon.svg"
import Linkedin from "@/assets/linkedin-icon.svg"
import Arrow from "@/assets/arrow-right.svg"
import ArrowSend from "@/assets/arrow-icon.svg"
import Link from "next/link"
import FadeInWhenVisible from "./fadeIn-when-visible"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const data = [
    {
      title: "Email",
      text: "diogosoarespeixoto41@gmail.com",
      icon: Email
    },
    {
      title: "Whatsapp",
      text: "(38)9 9997-7397",
      icon: Whats
    },
    {
      title: "Linkedin",
      text: "Diogo Peixoto",
      icon: Linkedin
    },
  ]

  return (
    <FadeInWhenVisible id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 flex flex-col items-center gap-16">
      <HeaderSection title="Contact" subtitle="Contact forms" />

      <div className=" grid grid-cols-1 justify-between gap-10 lg:gap-20 md:grid-cols-2">
        <div className="flex flex-col gap-6 items-center">
          <h4 className="text-xl mb-2 sm:text-2xl">Talk to me</h4>
          <ul className="flex flex-col gap-4 w-[300px] md:w-[250px] lg:w-[300px] ">
            {
              data.map((item, index) => (
                <li key={item.title} className="h-[150px] flex flex-col items-center gap-1 p-4 rounded-xl bg-white border border-black/10 text-xs sm:text-sm">
                  <Image src={item.icon} alt={item.title} className="w-8 h-8" />
                  <p className="">{item.title}</p>
                  <p className="text-[#757575] inline md:hidden lg:inline">{item.text}</p>
                  <Link className="flex items-center text-[#757575]" href={""}>
                    <p>Access</p>
                    <Image src={Arrow} alt="arrow" />
                  </Link>
                </li>
              ))
            }
            
          </ul>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <h4 className="text-xl mb-2 sm:text-2xl">Write a message</h4>

          <form className="flex-1 flex flex-col gap-5 justify-between w-full lg:w-[360px]">
            <div className="border border-black/30 rounded-xl relative">
              <Label className="text-sm text-[#757575] bg-[#FAFAFA] absolute top-[-11px] left-4 px-1" htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="Name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-none h-12 pl-4 sm:h-16 sm:pl-6"
              />
            </div>

            <div className="border border-black/30 rounded-xl relative">
              <Label className="text-sm text-[#757575] bg-[#FAFAFA] absolute top-[-11px] left-4 px-1" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-none h-12 pl-4 sm:h-16 sm:pl-6"
              />
            </div>

            <div className="border border-black/30 rounded-xl relative">
              <Label className="text-sm text-[#757575] bg-[#FAFAFA] absolute top-[-11px] left-4 px-1" htmlFor="email">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-transparent border-none resize-none pl-4 pt-4 sm:h-16 sm:pl-6"
              />
            </div>
              <Button className="h-12 sm:h-[60px] sm:w-60 bg-[#333333] rounded-2xl text-sm sm:text-base">
                Send message
                <Image src={ArrowSend} alt="" width={24} height={24} />
              </Button>
          </form>
        </div>
      </div>
    </FadeInWhenVisible>
  )
}
