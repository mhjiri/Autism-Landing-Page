"use client"

import { useState } from "react"
import { Play, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HBKULogo } from "@/components/hbku-logo"
import { QuizModal } from "@/components/quiz-modal"

export function HeroSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kling%2030%20Pro%20-%20A%20minimal_%20seamless%20looping%20animation%20of%20a%20stylized%20flat%20illustration%20showing%20a%20Qata%20%281%29-a12Q0KJn15rbaMjI1VaGfGJ5YSfL9G.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[95vh] flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-2 py-4 sm:px-6 md:px-12 lg:px-16">
          <HBKULogo className="h-[80px] w-[80px] text-white sm:h-[97px] sm:w-[97px] md:h-[117px] md:w-[117px] lg:h-[136px] lg:w-[136px]" />
          <button
            className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-[#0b1539] text-white hover:opacity-80 transition-opacity md:h-[63px] md:w-[63px]"
            aria-label="Open menu"
          >
            <Menu className="h-10 w-10 md:h-[48px] md:w-[48px]" />
          </button>
        </header>

        {/* Hero Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-32 pt-8 text-center sm:px-6 sm:pt-0 sm:-mt-28 md:pb-40 md:-mt-36">
          <h1 className="max-w-4xl text-balance leading-tight">
            <span className="block text-[2.5rem] leading-[1.1] sm:text-[3rem] md:text-[3.85rem] lg:text-[4.5rem] xl:text-[5.3rem]">
              <span className="font-black text-shine">April</span>{" "}
              <span className="font-normal text-shine">is</span>{" "}
              <span className="font-black text-shine">Autism</span>
            </span>
            <span className="block text-[2.5rem] font-black text-shine leading-[1.1] sm:text-[3rem] md:text-[3.85rem] lg:text-[4.5rem] xl:text-[5.3rem]">
              Awareness Month
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg lg:mt-8 lg:max-w-2xl">
            At Hamad Bin Khalifa University, we bring together experts, researchers,
            and communities to deepen understanding of autism, advance research,
            and drive meaningful impact across Qatar and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-7 sm:flex-row lg:mt-10">
            <div className="relative">
              {/* Radiation rings */}
              <span className="absolute inset-0 h-14 w-14 animate-ping rounded-full bg-white/40" style={{ animationDuration: '2s' }} />
              <span className="absolute inset-0 h-14 w-14 animate-ping rounded-full bg-white/30" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
              <span className="absolute inset-0 h-14 w-14 animate-ping rounded-full bg-white/20" style={{ animationDuration: '2s', animationDelay: '1s' }} />
              <button
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#1A1A2E] shadow-lg transition-transform hover:scale-105"
                aria-label="Play video"
              >
                <Play className="h-6 w-6 fill-current" />
              </button>
            </div>
            <Button
              onClick={() => setIsQuizOpen(true)}
              className="gradient-border-btn h-14 rounded-[5px] bg-[#0b1539] px-6 text-sm font-medium text-white hover:bg-[#0b1539]/90 md:px-8 md:text-base"
            >
              Take a Quiz and assess
            </Button>
          </div>
        </div>
      </div>

      {/* Quiz Modal */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  )
}
