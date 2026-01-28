import React from 'react';
import { getRegionByCode } from '../config/regions';
import SEOHead from '../components/SEOHead';
import RegionalHomePage from './RegionalHomePage';

const PakistanHomePage: React.FC = () => {
  const region = getRegionByCode('pk');
  return (
    <>
      <SEOHead
        title="Pakistan Medical Billing Services | Expert Healthcare RCM Solutions"
        description="Leading medical billing company serving Pakistan healthcare providers. HIPAA-compliant RCM services with 99% clean claim rates. Expert coding, credentialing, and revenue optimization. Free consultation available!"
        canonical="https://medtransic.com/pk"
        keywords="medical billing Pakistan, healthcare RCM Pakistan, medical coding Pakistan, revenue cycle management Pakistan, Pakistan medical billing services, healthcare billing solutions Pakistan"
        ogType="website"
      />
      <h1 className="sr-only">Pakistan Medical Billing Services - Medtransic</h1>
      <RegionalHomePage region={region} />
    </>
  );
};

export default PakistanHomePage;
