import { NavBar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LifecycleTabs } from "@/components/lifecycle-tabs"
import { ExistingLLM } from "@/components/existing-llm"
import { EnterprisePilot } from "@/components/enterprise-pilot"
import { FAQ } from "@/components/faq"
import { LinkedInSection } from "@/components/linkedin-section"
import { JoinCommunity } from "@/components/join-community"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar />
      <Hero />
      <LifecycleTabs />
      <ExistingLLM />
      <EnterprisePilot />
      <FAQ />
      <LinkedInSection />
      <JoinCommunity />
      <Footer />
    </main>
  )
}
