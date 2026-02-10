import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import OrganizationSchema from '../components/OrganizationSchema';
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
import MedicalBillingEducation from '../components/MedicalBillingEducation';
import ChoosingBillingPartner from '../components/ChoosingBillingPartner';

const HomePage: React.FC = () => {
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Wait for all components to mount and render before signaling ready
    // This ensures lazy-loaded components and react-helmet-async have time to complete
    const timeoutId = setTimeout(() => {
      setIsContentReady(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <SEOHead
        title="Medical Billing Services 2025 | Expert RCM | 99% Clean Claims"
        description="Expert medical billing and RCM services. 99% clean claims, 25% revenue increase, 60% faster payments. HIPAA-compliant. Free consultation available today."
        canonical="https://medtransic.com/"
        keywords="medical billing services, revenue cycle management, RCM, medical coding accuracy, healthcare billing guide, denial management strategies, accounts receivable management, HIPAA compliance, certified medical coders, billing company selection, practice management, claims processing"
        ogType="website"
      />
      <OrganizationSchema />
      <h1 className="sr-only">Expert Medical Billing Services 2025 - Medtransic</h1>
      <Hero />
      <AsSeenOnBanner />
      <AboutUsSection />
      <AdvantagesSection />
      <Services />
      <SpecialtyServices />
      <MedicalBillingEducation />
      <ChoosingBillingPartner />
      <VirtualReceptionist />
      <EHRLogosSection />
      <ProcessFlow />
      <MipsCompliance />
    </>
  );
};

export default HomePage;