import { AboutSection } from "./_components/AboutSection";
import { ContactSection } from "./_components/ContactSection";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { HeroSection } from "./_components/HeroSection";
import { PageLoader } from "./_components/PageLoader";
import { PortfolioSection } from "./_components/PortfolioSection";
import { ServicesSection } from "./_components/ServicesSection";
import { SkillsSection } from "./_components/SkillsSection";

export default function Home() {
  return (
    <div className="page-shell">
      <PageLoader />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
