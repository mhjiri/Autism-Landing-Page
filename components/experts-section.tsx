"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const advices = [
  {
    id: 1,
    title: "Start early whenever possible",
    description: "Early identification and intervention can significantly improve communication, learning, and social development.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1-9kW8tAkc9XC1dKloJFZ60JcF9BuLTm.png",
    color: "#00A19A", // Teal
  },
  {
    id: 2,
    title: "Follow evidence-based therapies",
    description: "Early identification and intervention can significantly improve communication, learning, and social development.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-22-UGVysg8e7WPlsgOQVcAc2rQAnZpzIY.png",
    color: "#E91E63", // Pink
  },
  {
    id: 3,
    title: "Create structured environments",
    description: "Consistent routines and visual schedules help reduce anxiety and support better understanding of daily activities.",
    image: "/placeholder.svg?height=400&width=300",
    color: "#FFC107", // Yellow
  },
  {
    id: 4,
    title: "Build a support network",
    description: "Connect with other families, support groups, and professionals who understand the journey and can offer guidance.",
    image: "/placeholder.svg?height=400&width=300",
    color: "#4CAF50", // Green
  },
  {
    id: 5,
    title: "Celebrate small victories",
    description: "Every milestone matters. Recognizing progress, no matter how small, builds confidence and motivation.",
    image: "/placeholder.svg?height=400&width=300",
    color: "#9C27B0", // Purple
  },
  {
    id: 6,
    title: "Embrace individual strengths",
    description: "Focus on unique abilities and interests to foster self-esteem and discover potential pathways for growth.",
    image: "/placeholder.svg?height=400&width=300",
    color: "#FF5722", // Orange
  },
]

export function ExpertsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 2
  const totalSlides = Math.ceil(advices.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const visibleAdvices = advices.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  )

  return (
    <section className="w-full bg-[#f5f5f5] px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#0b1539] md:text-3xl lg:text-4xl">
            Advises from our Experts
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                currentSlide === 0
                  ? "border-gray-300 text-gray-400"
                  : "border-[#0b1539] text-[#0b1539] hover:bg-[#0b1539] hover:text-white"
              }`}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                currentSlide === totalSlides - 1
                  ? "border-gray-300 text-gray-400"
                  : "border-[#0b1539] text-[#0b1539] hover:bg-[#0b1539] hover:text-white"
              }`}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Advice Cards */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {visibleAdvices.map((advice) => (
            <div key={advice.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 transition-opacity duration-300">
              {/* Image */}
              <div className="relative h-[200px] w-full sm:h-[280px] sm:w-[180px] md:h-[320px] md:w-[240px] flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={advice.image}
                  alt={advice.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col justify-center">
                {/* Numbered Circle */}
                <div 
                  className="mb-2 sm:mb-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white md:h-10 md:w-10 md:text-base"
                  style={{ backgroundColor: advice.color }}
                >
                  {advice.id}
                </div>
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-[#0b1539] md:text-2xl">
                  {advice.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                  {advice.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#0b1539]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
