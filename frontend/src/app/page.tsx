import { CTASection } from "../components/home/cta-section";
import { FeatureCarousel } from "../components/home/feature-carousel";
import { FeaturedProjects } from "../components/home/featured-projects";
import { FeaturesSection } from "../components/home/features-section";
import { HeroSection } from "../components/home/hero-section";
import { NewsletterSection } from "../components/home/newsletter-section";
import { SiteFooter } from "../components/layout/site-footer";
import { SiteHeader } from "../components/layout/site-header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <FeatureCarousel />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FeaturedProjects />
        <CTASection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  );
}
