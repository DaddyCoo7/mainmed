import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import AsSeenOnBanner from '../components/AsSeenOnBanner';
import AboutUsSection from '../components/AboutUsSection';
import AdvantagesSection from '../components/AdvantagesSection';
import Services from '../components/Services';
import SpecialtyServices from '../components/SpecialtyServices';
import VirtualReceptionist from '../components/VirtualReceptionist';
import EHRLogosSection from '../components/EHRLogosSection';
import ProcessFlow from '../components/ProcessFlow';
import MipsCompliance from '../components/MipsCompliance';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Medical Billing Services 2025 | 99% Clean Claims Rate | Expert RCM Solutions"
        description="Boost revenue by 30% with certified medical billing experts. HIPAA-compliant RCM solutions, 99% clean claims, faster payments. Free consultation for healthcare practices nationwide. Call 888-777-0860!"
        canonical="https://medtransic.com/"
        keywords="medical billing services 2025, revenue cycle management, RCM, medical coding, healthcare billing, practice management, denial management, provider credentialing, HIPAA compliance, certified medical billers"
        ogType="website"
      />
      <h1 className="sr-only">Expert Medical Billing Services 2025 - Medtransic</h1>
      <Hero />
      <AsSeenOnBanner />
      <AboutUsSection />
      <AdvantagesSection />
      <Services />
      <SpecialtyServices />
      <VirtualReceptionist />
      <EHRLogosSection />
      <ProcessFlow />
      <MipsCompliance />
    </>
  );
};

export default HomePage;