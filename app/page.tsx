import { HeroSection } from "@/components/hero-section"
import { ContributionsSection } from "@/components/contributions-section"
import { StoriesSection } from "@/components/stories-section"
import { MoreStoriesSection } from "@/components/more-stories-section"
import { ExpertsSection } from "@/components/experts-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      <section className="snap-start">
        <HeroSection />
      </section>
      <section className="snap-start">
        <ContributionsSection />
      </section>
      <section className="snap-start">
        <StoriesSection />
      </section>
      <section className="snap-start">
        <MoreStoriesSection />
      </section>
      <section className="snap-start">
        <ExpertsSection />
      </section>
      <section className="snap-start">
        <FooterSection />
      </section>
    </main>
  )
}
