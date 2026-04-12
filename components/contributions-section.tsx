"use client"

import { Button } from "@/components/ui/button"

export function ContributionsSection() {
  return (
    <section className="relative w-full">
      {/* Blue background - reduced height */}
      <div className="absolute inset-x-0 top-0 h-[80%] bg-[#0b1539]" />
      
      <div className="relative z-10 px-6 py-9 md:px-12 md:py-14 lg:px-16 lg:py-[72px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-xl lg:max-w-lg flex-shrink-0">
            <h2 className="text-[1.9rem] font-medium leading-tight text-white md:text-[2.5rem] lg:text-[3rem]">
              <span className="block">{"HBKU's contributions"}</span>
              <span className="block">to autism research</span>
              <span className="block">and discourse.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/80 md:mt-8 md:text-lg">
              HBKU plays a vital role in advancing autism
              research and discourse through interdisciplinary
              studies, innovative solutions, and active
              knowledge sharing.
            </p>

            <div className="relative mt-10 inline-block md:mt-12">
              {/* Soft glow effect */}
              <span className="absolute -inset-1 animate-pulse rounded-[7px] bg-white/10" style={{ animationDuration: '3s' }} />
              <span className="absolute -inset-0.5 animate-pulse rounded-[6px] bg-white/5" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
              <Button
                variant="outline"
                className="relative h-14 rounded-[5px] border-white/50 bg-transparent px-8 text-base font-normal text-white hover:bg-white/10 hover:text-white"
              >
                Our Research at Galance
              </Button>
            </div>
          </div>

          {/* Right Content - 4 Placeholder Cards */}
          <div className="w-full lg:w-[550px] flex-shrink-0">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-8 sm:gap-y-4 md:gap-x-12 md:gap-y-6">
              {/* Placeholder 1 - Outlined Puzzle */}
              <div className="aspect-[4/3] rounded-lg bg-transparent flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 563.93 497.92" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <clipPath id="clippath-outline">
                      <rect x="47.47" y="70.46" width="469" height="357" transform="translate(-69.02 113.71) rotate(-20.37)"/>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#clippath-outline)">
                    <path stroke="#fff" strokeMiterlimit="10" fill="none" d="M435.78,137.19l-56.08,20.82-44.3-119.3L0,163.25l124.26,334.68,119.66-44.43-20.78-55.96c-9.84-26.49,3.73-55.99,30.28-65.85,26.55-9.86,56.08,3.64,65.91,30.13l20.78,55.96,119.66-44.43-44.33-119.4,56.08-20.82c26.55-9.86,40.11-39.36,30.24-65.94-9.93-26.45-39.42-39.86-65.97-30h0Z"/>
                  </g>
                </svg>
              </div>
              {/* Placeholder 2 - Green Puzzle Background */}
              <div className="aspect-[4/3] rounded-lg relative overflow-hidden flex flex-col justify-between p-2 sm:p-4">
                {/* Green Puzzle SVG Background */}
                <svg viewBox="0 0 333 542" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full -top-[20%]" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <clipPath id="clippath-green">
                      <rect x="0" y="0" width="333" height="542"/>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#clippath-green)">
                    <path fill="#5aca8f" d="M55.75,318.99H.1v119.18h118.76v55.9c0,26.46,21.39,47.94,47.74,47.94s47.74-21.48,47.74-47.94v-55.9h118.67V103.84h-118.76v-55.9c0-26.46-21.39-47.94-47.74-47.94s-47.74,21.48-47.74,47.94v55.9H0v119.18h55.66c26.35,0,47.83,21.48,47.83,47.94s-21.39,48.04-47.74,48.04Z"/>
                  </g>
                </svg>
                <span className="relative z-10 text-white text-lg sm:text-2xl font-bold self-end">01</span>
                <p className="relative z-10 text-[#0b1539] text-xs sm:text-sm font-medium leading-tight self-start">Early Detection & Digital Diagnostics</p>
              </div>
              {/* Placeholder 3 - Pink Puzzle Background */}
              <div className="aspect-[4/3] rounded-lg relative overflow-visible flex flex-col justify-between p-2 sm:p-4">
                {/* Pink Puzzle SVG Background */}
                <svg viewBox="0 0 439 439" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-[130%] h-[130%] -left-[28%] -top-[15%]" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <clipPath id="clippath-pink">
                      <rect width="439" height="439"/>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#clippath-pink)">
                    <path fill="#f6006b" d="M439,439v-119.5h-55.99c-26.51,0-48.02-21.52-48.02-48.03s21.51-48.03,48.02-48.03h55.99v-119.4h-119.47v-56c0-26.51-21.51-48.03-48.02-48.03s-48.02,21.52-48.02,48.03v56h-119.47v119.4h-55.99C21.51,223.44,0,244.96,0,271.47s21.51,48.03,48.02,48.03h55.99v119.5h334.99Z"/>
                  </g>
                </svg>
                <span className="relative z-10 text-white text-lg sm:text-2xl font-bold self-end">02</span>
                <p className="relative z-10 text-[#0b1539] text-xs sm:text-sm font-medium leading-tight self-start">Innovation, Intervention<br />& Care</p>
              </div>
              {/* Placeholder 4 - Yellow Puzzle Background */}
              <div className="aspect-[4/3] rounded-lg relative overflow-hidden flex flex-col justify-between p-2 sm:p-4">
                {/* Yellow Puzzle SVG Background */}
                <svg viewBox="0 0 440 335" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-[180%] h-[180%] -left-[55%] -top-[40%]" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <clipPath id="clippath-yellow">
                      <rect width="440" height="335"/>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#clippath-yellow)">
                    <path fill="#fec400" d="M440,335V0h-119.68v56.01c0,26.52-21.57,48.04-48.14,48.04s-48.14-21.52-48.14-48.04V0h-119.77v119.42h-56.13C21.57,119.42,0,140.94,0,167.45s21.57,48.04,48.14,48.04h56.13v119.51h335.73Z"/>
                  </g>
                </svg>
                <span className="relative z-10 text-[#0b1539] text-lg sm:text-2xl font-bold self-end">03</span>
                <p className="relative z-10 text-[#0b1539] text-xs sm:text-sm font-medium leading-tight self-start">Community, Policy & Global Discourse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
