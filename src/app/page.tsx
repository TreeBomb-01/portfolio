import Nav from '@/components/portfolio/Nav'
import HeroSection from '@/components/portfolio/HeroSection'
import ValuesSection from '@/components/portfolio/ValuesSection'
import ProjectsSection from '@/components/portfolio/ProjectsSection'
import AwardsSection from '@/components/portfolio/AwardsSection'
import ContactSection from '@/components/portfolio/ContactSection'

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <ValuesSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
    </main>
  )
}
