export function FooterSection() {
  return (
    <footer className="relative w-full">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-bottom"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kling%2030%20Pro%20-%20A%20minimal_%20seamless%20looping%20animation%20of%20a%20stylized%20flat%20illustration%20showing%20Qatari%204K-5peIzc5cYUKtx9u46pWzY1qnSoBzyd.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-[600px] flex-col items-center px-6 text-center md:min-h-[700px] lg:min-h-[800px]">
        {/* Main Content - Upper */}
        <div className="flex flex-col items-center pt-12 md:pt-16 lg:pt-20">
          <h2 className="max-w-4xl text-balance">
            <span className="block text-4xl font-black text-white md:text-5xl lg:text-6xl xl:text-7xl">
              {"Let's Work"}
            </span>
            <span className="block text-4xl font-black text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Together towards
            </span>
            <span className="block text-4xl font-black text-white md:text-5xl lg:text-6xl xl:text-7xl">
              A Resilient
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg lg:mt-8">
            At Hamad Bin Khalifa University, we bring together experts, researchers,
            and communities to deepen understanding of autism, advance research,
            and drive meaningful impact across Qatar and beyond.
          </p>
        </div>

        {/* Copyright - Bottom */}
        <div className="mt-auto pb-6 md:pb-8">
          <p className="text-sm text-white/80 md:text-base">
            © 2026 All rights reserved to Hamad Bin Khalifa University.
          </p>
        </div>
      </div>
    </footer>
  )
}
