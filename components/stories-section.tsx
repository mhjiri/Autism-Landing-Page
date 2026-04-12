import { Play } from "lucide-react"
import Image from "next/image"

const videos = [
  {
    id: 1,
    title: "Supporting Children with Autism During Times of Uncertainty",
    description: "Dr. Julie Dcock a Senior Scientist at HBKU explains the molecular Aspects of Autism.",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video-2-tTfthsGTXusp4t6boUkzwhVh9IIhNb.png",
  },
  {
    id: 2,
    title: "The Many Faces of Autism",
    description: "Dr. Dena Al thani a Senior Researcher at HBKU explains How parents should contribute to early detection of Autism",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video-1-bPt8dYh2yuxEfdsZoaXhq2FIKbgfQj.png",
  },
  {
    id: 3,
    title: "Genetic research in MENA",
    description: "Dr. Julie Dcock a Senior Scientist at HBKU explains the molecular Aspects of Autism.",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video-3-xdu1eC71PQufOn1sCUQrWLVYRLKda7.png",
  },
]

export function StoriesSection() {
  return (
    <section className="w-full bg-white px-6 pt-4 pb-16 md:px-12 md:pt-5 md:pb-20 lg:px-16 lg:pt-6 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Title, Description, and First Video */}
          <div className="flex flex-col">
            {/* Title and Description */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-3xl font-bold leading-tight text-[#0b1539] md:text-4xl lg:text-[2.75rem]">
                Stories from HBKU
                <br />
                Community About
                <br />
                Autism Month
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#0b1539]/80">
                A collection of voices from the HBKU community sharing personal experiences, research journeys, and reflections on Autism Month.
              </p>
            </div>

            {/* First Video Card - Large */}
            <div className="group">
              <div className="relative h-[280px] w-full overflow-hidden rounded-lg md:h-[320px]">
                <Image
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-white/40" style={{ animationDuration: '2s' }} />
                    <span className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-white/30" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                    <span className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-white/20" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                    <button
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#0b1539] shadow-lg transition-transform hover:scale-110"
                      aria-label={`Play ${videos[0].title}`}
                    >
                      <Play className="h-7 w-7 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-tight text-[#0b1539] md:text-2xl">
                {videos[0].title}
              </h3>
              <p className="mt-2 text-sm text-[#0b1539]/70">
                {videos[0].description}
              </p>
            </div>
          </div>

          {/* Right Column - Two Stacked Videos */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Second Video Card */}
            <div className="group">
              <div className="relative h-[280px] w-full overflow-hidden rounded-lg md:h-[320px]">
                <Image
                  src={videos[1].thumbnail}
                  alt={videos[1].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-white/40" style={{ animationDuration: '2s' }} />
                    <span className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-white/30" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                    <span className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-white/20" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                    <button
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#0b1539] shadow-lg transition-transform hover:scale-110"
                      aria-label={`Play ${videos[1].title}`}
                    >
                      <Play className="h-7 w-7 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-tight text-[#0b1539] md:text-2xl">
                {videos[1].title}
              </h3>
              <p className="mt-2 text-sm text-[#0b1539]/70">
                {videos[1].description}
              </p>
            </div>

            {/* Third Video Card */}
            <div className="group">
              <div className="relative h-[280px] w-full overflow-hidden rounded-lg md:h-[320px]">
                <Image
                  src={videos[2].thumbnail}
                  alt={videos[2].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-white/40" style={{ animationDuration: '2s' }} />
                    <span className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-white/30" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                    <span className="absolute inset-0 h-16 w-16 animate-ping rounded-full bg-white/20" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                    <button
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#0b1539] shadow-lg transition-transform hover:scale-110"
                      aria-label={`Play ${videos[2].title}`}
                    >
                      <Play className="h-7 w-7 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-tight text-[#0b1539] md:text-2xl">
                {videos[2].title}
              </h3>
              <p className="mt-2 text-sm text-[#0b1539]/70">
                {videos[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
