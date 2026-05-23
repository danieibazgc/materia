import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CategoryGrid from "@/components/sections/CategoryGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedProviders from "@/components/sections/FeaturedProviders";
import RequestBoard from "@/components/sections/RequestBoard";
import TraceabilitySection from "@/components/sections/TraceabilitySection";
import PricingPlans from "@/components/sections/PricingPlans";
import Testimonials from "@/components/sections/Testimonials";
import ProviderCTA from "@/components/sections/ProviderCTA";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsBar />
        <CategoryGrid />
        <HowItWorks />
        <FeaturedProviders />
        <RequestBoard />
        <TraceabilitySection />
        <PricingPlans />
        <Testimonials />
        <ProviderCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
