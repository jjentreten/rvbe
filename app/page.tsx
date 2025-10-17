import Header from "@/components/header"
import PromotionalBanners from "@/components/promotional-banners"
import HeroBanner from "@/components/hero-banner"
import BenefitsSection from "@/components/benefits-section"
import SpecialDealsSection from "@/components/special-deals-section"
import CollagenSection from "@/components/collagen-section"
import ComboSection from "@/components/combo-section"
import CreatineSection from "@/components/creatine-section"
import JointCollagenSection from "@/components/joint-collagen-section"
import CustomerFeedback from "@/components/customer-feedback"
import SecuritySection from "@/components/security-section"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PromotionalBanners />
      <HeroBanner />
      <BenefitsSection />
      <SpecialDealsSection />
      <CollagenSection />
      <ComboSection />
      <CreatineSection />
      <JointCollagenSection />
      <CustomerFeedback />
      <SecuritySection />
      <Newsletter />
      <Footer />
    </div>
  )
}
