"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stories = [
  {
    id: 1,
    title: "AutismTech",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, sem ac semper egestas, lacus diam luctus nisi, sit amet luctus purus metus pulvinar odio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cc8a5c15a737604bd968a076e376277f%20%281%29-FX8BSgdqQ5aOWxp8yLSQOjFoJW4mXa.jpg",
    accentColor: "#00A19A",
  },
  {
    id: 2,
    title: "A-Sense Autism Diagnosis Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, sem ac semper egestas, lacus diam luctus nisi, sit amet luctus purus metus pulvinar odio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32230571a1612bc231f19f458bb5cc11-2A6yPVvU8XTWbNeJiKXGhGF4DuU1bW.jpg",
    accentColor: "#E91E63",
  },
  {
    id: 3,
    title: "National policy mapping",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, sem ac semper egestas, lacus diam luctus nisi, sit amet luctus purus metus pulvinar odio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71a94ea7617f14c0dd6b4942ea05bdf6-9nNDitlaqDIzeXm1zCyXRTUuTgwSaS.jpg",
    accentColor: "#FFC107",
  },
  {
    id: 4,
    title: "Autism and Education",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, sem ac semper egestas, lacus diam luctus nisi, sit amet luctus purus metus pulvinar odio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cc8a5c15a737604bd968a076e376277f%20%281%29-FX8BSgdqQ5aOWxp8yLSQOjFoJW4mXa.jpg",
    accentColor: "#00A19A",
  },
  {
    id: 5,
    title: "Community Support Programs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, sem ac semper egestas, lacus diam luctus nisi, sit amet luctus purus metus pulvinar odio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/32230571a1612bc231f19f458bb5cc11-2A6yPVvU8XTWbNeJiKXGhGF4DuU1bW.jpg",
    accentColor: "#E91E63",
  },
  {
    id: 6,
    title: "Research Breakthroughs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, sem ac semper egestas, lacus diam luctus nisi, sit amet luctus purus metus pulvinar odio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71a94ea7617f14c0dd6b4942ea05bdf6-9nNDitlaqDIzeXm1zCyXRTUuTgwSaS.jpg",
    accentColor: "#FFC107",
  },
]

export function MoreStoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Responsive items per slide - show 1 on mobile, 2 on tablet, 3 on desktop
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }
    return 3
  }
  
  const ITEMS_PER_SLIDE = 3 // For calculation purposes, actual display handled by CSS
  const totalSlides = Math.ceil(stories.length / ITEMS_PER_SLIDE)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const currentStories = stories.slice(
    currentSlide * ITEMS_PER_SLIDE,
    currentSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  )

  return (
    <section className="w-full bg-[#0b1539] px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-start justify-between md:mb-12">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            More Stories about
            <br />
            Autism
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                currentSlide === 0
                  ? "border-white/20 text-white/30 cursor-not-allowed"
                  : "border-white/40 text-white/60 hover:border-white hover:text-white"
              }`}
              aria-label="Previous stories"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                currentSlide === totalSlides - 1
                  ? "border-white/20 text-white/30 cursor-not-allowed"
                  : "border-white/40 text-white/60 hover:border-white hover:text-white"
              }`}
              aria-label="Next stories"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentStories.map((story) => (
            <div key={story.id} className="group cursor-pointer">
              {/* Image with side ribbon */}
              <div className="relative flex overflow-hidden">
                <div 
                  className="w-[7px] flex-shrink-0" 
                  style={{ backgroundColor: story.accentColor }}
                />
                <div className="relative h-[220px] w-full overflow-hidden md:h-[260px]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white md:text-xl">
                  {story.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
