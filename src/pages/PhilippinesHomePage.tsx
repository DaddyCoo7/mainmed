import React from 'react';
import { getRegionByCode } from '../config/regions';
import SEOHead from '../components/SEOHead';
import RegionalHomePage from './RegionalHomePage';

const PhilippinesHomePage: React.FC = () => {
  const region = getRegionByCode('ph');
  return (
    <>
      <SEOHead
        title="Medical Billing Philippines | 99% Clean Claims"
        description="Premier medical billing company serving Philippines healthcare providers. HIPAA-compliant RCM services with 99% clean claim rates. Expert coding, credentialing, and revenue optimization. Free consultation available!"
        canonical="https://medtransic.com/ph"
        keywords="medical billing Philippines, healthcare RCM Philippines, medical coding Philippines, revenue cycle management Philippines, Philippines medical billing services, healthcare billing solutions Philippines"
        ogType="website"
      />
      <h1 className="sr-only">Philippines Medical Billing Services - Medtransic</h1>
      <RegionalHomePage region={region} />
    </>
  );
};

export default PhilippinesHomePage;
