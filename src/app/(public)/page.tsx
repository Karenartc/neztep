import { LandingAppDownload } from "@/components/landing/landing-app-download";
import { LandingCtaBanner } from "@/components/landing/landing-cta-banner";
import { LandingFeatures } from "@/components/landing/landing-features";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingHowItWorks } from "@/components/landing/landing-how-it-works";
import { LandingNav } from "@/components/landing/landing-nav";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingAppDownload />
      <LandingCtaBanner />
      <LandingFooter />
    </div>
  );
}
