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
              <span className="block">BEYOND LABELS:</span>
              <span className="block">UNDERSTANDING AUTISM</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/80 md:mt-8 md:text-lg">
              Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that influences how individuals communicate, interact and experience the world around them.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Autism exists on a spectrum, meaning that each person&apos;s strengths, challenges and needs are unique.
            </p>
          </div>

          {/* Right Content - 4 Info Boxes */}
          <div className="w-full lg:w-[550px] flex-shrink-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {/* Box 1 - Building Awareness */}
              <div className="rounded-xl bg-[#5aca8f] p-4 sm:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
                <h3 className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight">BUILDING AWARENESS</h3>
                <p className="text-[#0b1539] text-xs sm:text-sm font-medium leading-tight mt-3">creates more inclusive communities</p>
              </div>
              {/* Box 2 - Early Detection */}
              <div className="rounded-xl bg-[#f6006b] p-4 sm:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
                <h3 className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight">EARLY DETECTION</h3>
                <p className="text-[#0b1539] text-xs sm:text-sm font-medium leading-tight mt-3">makes a lifelong difference</p>
              </div>
              {/* Box 3 - Better Knowledge */}
              <div className="rounded-xl bg-[#fec400] p-4 sm:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
                <h3 className="text-[#0b1539] text-sm sm:text-base md:text-lg font-bold leading-tight">BETTER KNOWLEDGE</h3>
                <p className="text-[#0b1539] text-xs sm:text-sm font-medium leading-tight mt-3">transforms limitations to abilities</p>
              </div>
              {/* Box 4 - Embracing Differences */}
              <div className="rounded-xl bg-white/10 border border-white/30 p-4 sm:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
                <h3 className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight">EMBRACING DIFFERENCES</h3>
                <p className="text-white/80 text-xs sm:text-sm font-medium leading-tight mt-3">is where true inclusion begins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
