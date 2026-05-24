// src/App.tsx — versión final
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import Toast from '@/components/ui/Toast';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import CategoryGrid from '@/components/sections/CategoryGrid';
import HowItWorks from '@/components/sections/HowItWorks';
import FeaturedProviders from '@/components/sections/FeaturedProviders';
import RequestBoard from '@/components/sections/RequestBoard';
import TraceabilitySection from '@/components/sections/TraceabilitySection';
import PricingPlans from '@/components/sections/PricingPlans';
import ProviderCTA from '@/components/sections/ProviderCTA';
import ImpactCalculator from '@/features/impact/components/ImpactCalculator';
import { useCatalog } from '@/features/catalog/hooks/useCatalog';
import { useToast } from '@/hooks/useToast';

const App = () => {
  const catalog = useCatalog();
  const { toast, showToast, hideToast } = useToast();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased font-sans">
      <Navbar onShowToast={showToast} />

      <main className="flex-grow">
        <ErrorBoundary>
          <Hero query={catalog.query} onSearch={catalog.handleSearch} />
        </ErrorBoundary>

        <StatsBar />

        <ErrorBoundary>
          <CategoryGrid />
        </ErrorBoundary>

        <HowItWorks />

        <ErrorBoundary>
          <FeaturedProviders
            providers={catalog.filteredProviders}
            isFiltering={catalog.isFiltering}
            resultCount={catalog.resultCount}
            onShowToast={showToast}
          />
        </ErrorBoundary>

        <ErrorBoundary>
          <RequestBoard onShowToast={showToast} />
        </ErrorBoundary>

        <TraceabilitySection />

        <ErrorBoundary>
          <ImpactCalculator />
        </ErrorBoundary>

        <PricingPlans />

        <ErrorBoundary>
          <ProviderCTA onShowToast={showToast} />
        </ErrorBoundary>
      </main>

      <Footer />

      {/* Sistema global de notificaciones */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export default App;
