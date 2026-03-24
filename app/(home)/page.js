import CTAPrimary from "@/components/ui/CTAPrimary";
import CTASecondary from "@/components/ui/CTASecondary";
import FeaturesSection from "@/components/ui/FeaturesSection";
import HeroSection from "@/components/ui/HeroSection";
import LandingPageNavbar from "@/components/ui/LandingPageNavbar";
import MoreFeaturesSection from "@/components/ui/MoreFeaturesSection";
import PrimaryFooter from "@/components/ui/PrimaryFooter";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <LandingPageNavbar />
      <HeroSection />
      <FeaturesSection />
      <CTAPrimary />
      <MoreFeaturesSection />
      <CTASecondary />
      <PrimaryFooter />
    </div>
  );
}

export default LandingPage;
