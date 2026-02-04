import React from 'react';
import { RegionConfig } from '../config/regions';
import SEOHead from '../components/SEOHead';
import RegionBanner from '../components/RegionBanner';
import Hero from '../components/Hero';
import AboutUsSection from '../components/AboutUsSection';
import AdvantagesSection from '../components/AdvantagesSection';
import Services from '../components/Services';
import SpecialtyServices from '../components/SpecialtyServices';
import VirtualReceptionist from '../components/VirtualReceptionist';
import ProcessFlow from '../components/ProcessFlow';
import MipsCompliance from '../components/MipsCompliance';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

interface RegionalHomePageProps {
  region: RegionConfig;
}

const RegionalHomePage: React.FC<RegionalHomePageProps> = ({ region }) => {
  return (
    <>
      <SEOHead
        title={`${region.fullName} - Medical Billing & Revenue Cycle Management Services`}
        description={`Professional medical billing, coding, and RCM services in ${region.name}. Maximize revenue, reduce denials, and streamline your practice operations with Medtransic's expert billing solutions.`}
        canonical={`https://medtransic.com${region.code === 'us' ? '/' : `/${region.code}`}`}
        keywords={`medical billing ${region.name}, revenue cycle management ${region.name}, RCM ${region.name}, medical coding, healthcare billing, ${region.name} medical billing services`}
        ogType="website"
      />
      <h1 className="sr-only">{region.fullName} Medical Billing & RCM Services - Medtransic</h1>
      <RegionBanner region={region} />
      <Hero />
      <AboutUsSection />
      <AdvantagesSection />
      <Services />
      <SpecialtyServices />
      <VirtualReceptionist />
      <ProcessFlow />
      <MipsCompliance />
    </>
  );
};

export default RegionalHomePage;
