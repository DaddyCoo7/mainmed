import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingChatButton from './components/FloatingChatButton';
import ChatBot from './components/ChatBot';
import OrganizationSchema from './components/OrganizationSchema';
import GeoRedirect from './components/GeoRedirect';
import { redirectRules } from './config/redirects';

const HomePage = lazy(() => import('./pages/HomePage'));
const PakistanHomePage = lazy(() => import('./pages/PakistanHomePage'));
const PhilippinesHomePage = lazy(() => import('./pages/PhilippinesHomePage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SpecialtiesPage = lazy(() => import('./pages/SpecialtiesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const HipaaCompliancePage = lazy(() => import('./pages/HipaaCompliancePage'));
const DataSecurityPage = lazy(() => import('./pages/DataSecurityPage'));
const PracticeLaunchPage = lazy(() => import('./pages/PracticeLaunchPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const CardiologyPage = lazy(() => import('./pages/CardiologyPage'));
const PhysicalTherapyPage = lazy(() => import('./pages/PhysicalTherapyPage'));
const MentalHealthPage = lazy(() => import('./pages/MentalHealthPage'));
const OrthopedicsPage = lazy(() => import('./pages/OrthopedicsPage'));
const DentalPage = lazy(() => import('./pages/DentalPage'));
const OphthalmologyPage = lazy(() => import('./pages/OphthalmologyPage'));
const OBGYNPage = lazy(() => import('./pages/OBGYNPage'));
const GastroenterologyPage = lazy(() => import('./pages/GastroenterologyPage'));
const UrologyPage = lazy(() => import('./pages/UrologyPage'));
const UrgentCarePage = lazy(() => import('./pages/UrgentCarePage'));
const DermatologyPage = lazy(() => import('./pages/DermatologyPage'));
const AllergyImmunologyPage = lazy(() => import('./pages/AllergyImmunologyPage'));
const PainManagementPage = lazy(() => import('./pages/PainManagementPage'));
const PediatricsPage = lazy(() => import('./pages/PediatricsPage'));
const ENTPage = lazy(() => import('./pages/ENTPage'));
const PulmonologyPage = lazy(() => import('./pages/PulmonologyPage'));
const PlasticSurgeryPage = lazy(() => import('./pages/PlasticSurgeryPage'));
const FamilyMedicinePage = lazy(() => import('./pages/FamilyMedicinePage'));
const ChiropracticPage = lazy(() => import('./pages/ChiropracticPage'));
const NephrologyPage = lazy(() => import('./pages/NephrologyPage'));
const OccupationalTherapyPage = lazy(() => import('./pages/OccupationalTherapyPage'));
const PodiatryPage = lazy(() => import('./pages/PodiatryPage'));
const AnesthesiologyPage = lazy(() => import('./pages/AnesthesiologyPage'));
const OncologyPage = lazy(() => import('./pages/OncologyPage'));
const HomeHealthPage = lazy(() => import('./pages/HomeHealthPage'));
const LaboratoriesPathologyPage = lazy(() => import('./pages/LaboratoriesPathologyPage'));
const DurableMedicalEquipmentPage = lazy(() => import('./pages/DurableMedicalEquipmentPage'));
const PharmacyBillingSpecialtyPage = lazy(() => import('./pages/PharmacyBillingSpecialtyPage'));
const GeneticTestingPage = lazy(() => import('./pages/GeneticTestingPage'));
const RespiratoryTherapyPage = lazy(() => import('./pages/RespiratoryTherapyPage'));
const RheumatologyPage = lazy(() => import('./pages/RheumatologyPage'));
const NeurosurgeryPage = lazy(() => import('./pages/NeurosurgeryPage'));
const ThoracicSurgeryPage = lazy(() => import('./pages/ThoracicSurgeryPage'));
const HematologyPage = lazy(() => import('./pages/HematologyPage'));
const EndocrinologyPage = lazy(() => import('./pages/EndocrinologyPage'));
const InfectiousDiseasePage = lazy(() => import('./pages/InfectiousDiseasePage'));
const WoundCareCentersPage = lazy(() => import('./pages/WoundCareCentersPage'));
const InterventionalRadiologyPage = lazy(() => import('./pages/InterventionalRadiologyPage'));
const GeriatricsPage = lazy(() => import('./pages/GeriatricsPage'));
const TelemedicinePage = lazy(() => import('./pages/TelemedicinePage'));
const CommunityHealthClinicsPage = lazy(() => import('./pages/CommunityHealthClinicsPage'));
const PrimaryCarePracticesPage = lazy(() => import('./pages/PrimaryCarePracticesPage'));
const RehabilitationSportsMedicinePage = lazy(() => import('./pages/RehabilitationSportsMedicinePage'));
const DiagnosticImagingRadiologyPage = lazy(() => import('./pages/DiagnosticImagingRadiologyPage'));
const SpeechTherapyPage = lazy(() => import('./pages/SpeechTherapyPage'));
const SleepMedicinePage = lazy(() => import('./pages/SleepMedicinePage'));
const PathologyPage = lazy(() => import('./pages/PathologyPage'));
const EmergencyMedicinePage = lazy(() => import('./pages/EmergencyMedicinePage'));
const OccupationalHealthClinicsPage = lazy(() => import('./pages/OccupationalHealthClinicsPage'));
const OralMaxillofacialSurgeryPage = lazy(() => import('./pages/OralMaxillofacialSurgeryPage'));
const ClinicalResearchPage = lazy(() => import('./pages/ClinicalResearchPage'));
const MedicalBillingPage = lazy(() => import('./pages/MedicalBillingPage'));
const ARManagementPage = lazy(() => import('./pages/ARManagementPage'));
const MedicalCodingPage = lazy(() => import('./pages/MedicalCodingPage'));
const DenialManagementPage = lazy(() => import('./pages/DenialManagementPage'));
const EligibilityVerificationPage = lazy(() => import('./pages/EligibilityVerificationPage'));
const CredentialingPage = lazy(() => import('./pages/CredentialingPage'));
const ChargeEntryPaymentPostingPage = lazy(() => import('./pages/ChargeEntryPaymentPostingPage'));
const PatientBillingSupportPage = lazy(() => import('./pages/PatientBillingSupportPage'));
const HospitalFacilityBillingPage = lazy(() => import('./pages/HospitalFacilityBillingPage'));
const LaboratoryBillingPage = lazy(() => import('./pages/LaboratoryBillingPage'));
const DMEBillingPage = lazy(() => import('./pages/DMEBillingPage'));
const PhysicianBillingPage = lazy(() => import('./pages/PhysicianBillingPage'));
const TelehealthBillingPage = lazy(() => import('./pages/TelehealthBillingPage'));
const OldARCleanupPage = lazy(() => import('./pages/OldARCleanupPage'));
const RCMAutomationPage = lazy(() => import('./pages/RCMAutomationPage'));
const PracticeManagementConsultingPage = lazy(() => import('./pages/PracticeManagementConsultingPage'));
const AnalyticsReportingPage = lazy(() => import('./pages/AnalyticsReportingPage'));
const CallCenterSchedulingPage = lazy(() => import('./pages/CallCenterSchedulingPage'));
const PaymentReconciliationPage = lazy(() => import('./pages/PaymentReconciliationPage'));
const PayerContractNegotiationPage = lazy(() => import('./pages/PayerContractNegotiationPage'));
const ComplianceHIPAAAuditsPage = lazy(() => import('./pages/ComplianceHIPAAAuditsPage'));
const MIPSMACRAReportingPage = lazy(() => import('./pages/MIPSMACRAReportingPage'));
const EHREMRIntegrationPage = lazy(() => import('./pages/EHREMRIntegrationPage'));
const StaffTrainingSOPPage = lazy(() => import('./pages/StaffTrainingSOPPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const BillingGlossaryPage = lazy(() => import('./pages/BillingGlossaryPage'));
const CEOPage = lazy(() => import('./pages/CEOPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const IndexNowAdminPage = lazy(() => import('./pages/IndexNowAdminPage'));
const ChicagoBillingPage = lazy(() => import('./pages/ChicagoBillingPage'));
const StateBillingPage = lazy(() => import('./pages/StateBillingPage'));
const CityBillingPage = lazy(() => import('./pages/CityBillingPage'));
const ComparisonPage = lazy(() => import('./pages/ComparisonPage'));
const ComparisonsListPage = lazy(() => import('./pages/ComparisonsListPage'));
const WebsiteDesignPage = lazy(() => import('./pages/WebsiteDesignPage'));
const PayerEnrollmentPage = lazy(() => import('./pages/PayerEnrollmentPage'));
const PriorAuthorizationPage = lazy(() => import('./pages/PriorAuthorizationPage'));
const VirtualAssistantsPage = lazy(() => import('./pages/VirtualAssistantsPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const AIPHASPage = lazy(() => import('./pages/AIPHASPage'));
const DigitalPresenceServicesPage = lazy(() => import('./pages/DigitalPresenceServicesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const CPTCodesCheatSheetPage = lazy(() => import('./pages/resources/CPTCodesCheatSheetPage'));
const ICD10CodesReferencePage = lazy(() => import('./pages/resources/ICD10CodesReferencePage'));
const DentalCodesCheatSheetPage = lazy(() => import('./pages/resources/DentalCodesCheatSheetPage'));
const MedicalBillingModifiersGuidePage = lazy(() => import('./pages/resources/MedicalBillingModifiersGuidePage'));
const EMRIntegrationPage = lazy(() => import('./pages/integrations/EMRIntegrationPage'));
const EMRIntegrationsListPage = lazy(() => import('./pages/integrations/EMRIntegrationsListPage'));
const StateBillingLawsPage = lazy(() => import('./pages/resources/StateBillingLawsPage'));

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-medtransic-off-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <OrganizationSchema />
        <GeoRedirect />
        <Header />
        {/* <FloatingChatButton onOpen={() => setIsChatOpen(true)} /> */}
        <main className="overflow-x-hidden">
          <ScrollToTop>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
              </div>
            }>
              <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/pk" element={<PakistanHomePage />} />
            <Route path="/pk/careers" element={<CareersPage />} />
            <Route path="/ph" element={<PhilippinesHomePage />} />
            <Route path="/ph/careers" element={<CareersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/rcm" element={<Navigate to="/services/medical-billing" replace />} />
            <Route path="/services/medical-billing" element={<MedicalBillingPage />} />
            <Route path="/services/ar-management" element={<ARManagementPage />} />
            <Route path="/services/medical-coding" element={<MedicalCodingPage />} />
            <Route path="/services/denial-management" element={<DenialManagementPage />} />
            <Route path="/services/eligibility-verification" element={<EligibilityVerificationPage />} />
            <Route path="/services/credentialing" element={<CredentialingPage />} />
            <Route path="/services/charge-entry-payment-posting" element={<ChargeEntryPaymentPostingPage />} />
            <Route path="/services/patient-billing-support" element={<PatientBillingSupportPage />} />
            <Route path="/services/hospital-facility-billing" element={<HospitalFacilityBillingPage />} />
            <Route path="/services/laboratory-billing" element={<LaboratoryBillingPage />} />
            <Route path="/services/dme-billing" element={<DMEBillingPage />} />
            <Route path="/services/physician-billing" element={<PhysicianBillingPage />} />
            <Route path="/services/telehealth-billing" element={<TelehealthBillingPage />} />
            <Route path="/services/old-ar-cleanup" element={<OldARCleanupPage />} />
            <Route path="/services/rcm-automation" element={<RCMAutomationPage />} />
            <Route path="/services/practice-management-consulting" element={<PracticeManagementConsultingPage />} />
            <Route path="/services/analytics-reporting" element={<AnalyticsReportingPage />} />
            <Route path="/services/call-center-scheduling" element={<CallCenterSchedulingPage />} />
            <Route path="/services/end-to-end-rcm" element={<Navigate to="/services/medical-billing" replace />} />
            <Route path="/services/payment-reconciliation" element={<PaymentReconciliationPage />} />
            <Route path="/services/payer-contract-negotiation" element={<PayerContractNegotiationPage />} />
            <Route path="/services/compliance-hipaa-audits" element={<ComplianceHIPAAAuditsPage />} />
            <Route path="/services/mips-macra-reporting" element={<MIPSMACRAReportingPage />} />
            <Route path="/services/ehr-emr-integration" element={<EHREMRIntegrationPage />} />
            <Route path="/services/staff-training-sop" element={<StaffTrainingSOPPage />} />
            <Route path="/services/outsourcing-medical-billing" element={<Navigate to="/services/medical-billing" replace />} />
            <Route path="/services/payer-enrollment" element={<PayerEnrollmentPage />} />
            <Route path="/services/prior-authorization" element={<PriorAuthorizationPage />} />
            <Route path="/services/virtual-assistants" element={<VirtualAssistantsPage />} />
            <Route path="/services/digital-presence" element={<DigitalPresenceServicesPage />} />
            <Route path="/aiphas" element={<AIPHASPage />} />
            <Route path="/specialties" element={<SpecialtiesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/hipaa-compliance" element={<HipaaCompliancePage />} />
            <Route path="/data-security" element={<DataSecurityPage />} />
            <Route path="/practice-launch" element={<PracticeLaunchPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/specialties/cardiology" element={<CardiologyPage />} />
            <Route path="/specialties/physical-therapy" element={<PhysicalTherapyPage />} />
            <Route path="/specialties/mental-health" element={<MentalHealthPage />} />
            <Route path="/specialties/orthopedics" element={<OrthopedicsPage />} />
            <Route path="/specialties/dental" element={<DentalPage />} />
            <Route path="/specialties/ophthalmology" element={<OphthalmologyPage />} />
            <Route path="/specialties/obgyn" element={<OBGYNPage />} />
            <Route path="/specialties/gastroenterology" element={<GastroenterologyPage />} />
            <Route path="/specialties/urology" element={<UrologyPage />} />
            <Route path="/specialties/urgent-care" element={<UrgentCarePage />} />
            <Route path="/specialties/dermatology" element={<DermatologyPage />} />
            <Route path="/specialties/allergy-immunology" element={<AllergyImmunologyPage />} />
            <Route path="/specialties/pain-management" element={<PainManagementPage />} />
            <Route path="/specialties/pediatrics" element={<PediatricsPage />} />
            <Route path="/specialties/ent" element={<ENTPage />} />
            <Route path="/specialties/pulmonology" element={<PulmonologyPage />} />
            <Route path="/specialties/plastic-surgery" element={<PlasticSurgeryPage />} />
            <Route path="/specialties/family-medicine" element={<FamilyMedicinePage />} />
            <Route path="/specialties/chiropractic" element={<ChiropracticPage />} />
            <Route path="/specialties/nephrology" element={<NephrologyPage />} />
            <Route path="/specialties/occupational-therapy" element={<OccupationalTherapyPage />} />
            <Route path="/specialties/podiatry" element={<PodiatryPage />} />
            <Route path="/specialties/anesthesiology" element={<AnesthesiologyPage />} />
            <Route path="/specialties/oncology" element={<OncologyPage />} />
            <Route path="/specialties/home-health" element={<HomeHealthPage />} />
            <Route path="/specialties/laboratories-pathology" element={<LaboratoriesPathologyPage />} />
            <Route path="/specialties/durable-medical-equipment" element={<DurableMedicalEquipmentPage />} />
            <Route path="/specialties/pharmacy-billing" element={<PharmacyBillingSpecialtyPage />} />
            <Route path="/specialties/genetic-testing" element={<GeneticTestingPage />} />
            <Route path="/specialties/respiratory-therapy" element={<RespiratoryTherapyPage />} />
            <Route path="/specialties/rheumatology" element={<RheumatologyPage />} />
            <Route path="/specialties/neurosurgery" element={<NeurosurgeryPage />} />
            <Route path="/specialties/thoracic-surgery" element={<ThoracicSurgeryPage />} />
            <Route path="/specialties/hematology" element={<HematologyPage />} />
            <Route path="/specialties/endocrinology" element={<EndocrinologyPage />} />
            <Route path="/specialties/infectious-disease" element={<InfectiousDiseasePage />} />
            <Route path="/specialties/wound-care" element={<WoundCareCentersPage />} />
            <Route path="/specialties/interventional-radiology" element={<InterventionalRadiologyPage />} />
            <Route path="/specialties/geriatrics" element={<GeriatricsPage />} />
            <Route path="/specialties/telemedicine" element={<TelemedicinePage />} />
            <Route path="/specialties/community-health-clinics" element={<CommunityHealthClinicsPage />} />
            <Route path="/specialties/primary-care-practices" element={<PrimaryCarePracticesPage />} />
            <Route path="/specialties/rehabilitation-sports-medicine" element={<RehabilitationSportsMedicinePage />} />
            <Route path="/specialties/diagnostic-imaging-radiology" element={<DiagnosticImagingRadiologyPage />} />
            <Route path="/specialties/speech-therapy" element={<SpeechTherapyPage />} />
            <Route path="/specialties/sleep-medicine" element={<SleepMedicinePage />} />
            <Route path="/specialties/pathology" element={<PathologyPage />} />
            <Route path="/specialties/emergency-medicine" element={<EmergencyMedicinePage />} />
            <Route path="/specialties/occupational-health-clinics" element={<OccupationalHealthClinicsPage />} />
            <Route path="/specialties/oral-maxillofacial-surgery" element={<OralMaxillofacialSurgeryPage />} />
            <Route path="/specialties/clinical-research" element={<ClinicalResearchPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/billing-glossary" element={<BillingGlossaryPage />} />
            <Route path="/resources/cpt-codes-cheat-sheet" element={<CPTCodesCheatSheetPage />} />
            <Route path="/resources/icd-10-codes-reference" element={<ICD10CodesReferencePage />} />
            <Route path="/resources/dental-codes-cheat-sheet" element={<DentalCodesCheatSheetPage />} />
            <Route path="/resources/medical-billing-modifiers-guide" element={<MedicalBillingModifiersGuidePage />} />
            <Route path="/resources/emr-integrations" element={<EMRIntegrationsListPage />} />
            <Route path="/resources/state-billing-laws" element={<StateBillingLawsPage />} />
            <Route path="/integrations/:slug" element={<EMRIntegrationPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/ceo" element={<CEOPage />} />
            <Route path="/admin/indexnow" element={<IndexNowAdminPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/chicago-medical-billing" element={<ChicagoBillingPage />} />
            <Route path="/locations/chicago" element={<ChicagoBillingPage />} />
            <Route path="/medical-billing-services/:state" element={<StateBillingPage />} />
            <Route path="/medical-billing-services/:state/:city" element={<CityBillingPage />} />
            <Route path="/comparisons" element={<ComparisonsListPage />} />
            <Route path="/comparisons/:slug" element={<ComparisonPage />} />
            <Route path="/about-website-design" element={<WebsiteDesignPage />} />

            {redirectRules.map((rule) => (
              <Route
                key={rule.from}
                path={rule.from}
                element={<Navigate to={rule.to} replace />}
              />
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </Suspense>
        </ScrollToTop>
        </main>
        <Footer />
        <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </ThemeProvider>
  );
}

export default App;