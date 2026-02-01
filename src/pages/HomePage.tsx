import React from 'react';
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
import IndustryInsights from '../components/IndustryInsights';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Medical Billing Services 2025 | Expert RCM | 99% Clean Claims"
        description="Comprehensive guide to medical billing and revenue cycle management. Expert insights on choosing billing partners, industry trends, compliance, coding accuracy, and denial management. Certified professionals helping practices increase revenue by 30%. Free consultation available."
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
      <IndustryInsights />
      <ChoosingBillingPartner />
      <VirtualReceptionist />
      <EHRLogosSection />
      <ProcessFlow />
      <MipsCompliance />
    </>
  );
};

export default HomePage;