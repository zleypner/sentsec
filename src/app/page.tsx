import { Header } from "@/components/ui/Header";
import { StickyWhatsApp } from "@/components/ui/StickyWhatsApp";
import {
  Hero,
  Problem,
  Solution,
  Benefits,
  Testimonials,
  Trust,
  Process,
  CTA,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Testimonials />
        <Trust />
        <Process />
        <CTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
