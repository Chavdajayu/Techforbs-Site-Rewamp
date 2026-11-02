import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import WhoWeBuildFor from "@/components/who-we-build-for/WhoWeBuildFor";
import BrandLogos from "@/components/brand-logos/BrandLogos";
import CustomersSection from "@/components/customers/CustomersSection";
import SolutionsSection from "@/components/solutions/SolutionsSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import TeamSection from "@/components/team/TeamSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#101010] text-white selection:bg-[#00e5ff] selection:text-black">
        {/* Navigation Bar (Change 03, 04, 05, 06) */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10 flex flex-col">
          {/* 1. Hero Section (Change 01, 02, 07) */}
          <HeroSection />

          {/* 2. Who We Build For */}
          <WhoWeBuildFor />

          {/* 3. Brand Logos (Change 08) */}
          <BrandLogos />

          {/* 4. Our Customers (Change 09) */}
          <CustomersSection />

          {/* 5. What We Do / Solutions */}
          <SolutionsSection />

          {/* 6. Portfolio (Change 10A, 10B) */}
          <PortfolioSection />

          {/* 7. Testimonials */}
          <TestimonialsSection />

          {/* 8. Our Team */}
          <TeamSection />

          {/* 9. Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
