import {
  Navbar,
  HeroSection,
  WhoWeBuildFor,
  BrandLogos,
  CustomersSection,
  SolutionsSection,
  PortfolioSection,
  TestimonialsSection,
  TeamSection,
  ContactSection,
  Footer,
  SmoothScroll,
} from "@/components";

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
