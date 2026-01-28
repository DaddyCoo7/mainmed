import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Shield, Lock, Eye, FileText, Users, Clock, Mail, Phone } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Privacy Policy | HIPAA-Compliant Data Protection | Medtransic"
        description="Comprehensive privacy policy detailing how Medtransic protects your healthcare data with HIPAA-compliant security measures, encrypted data storage, and strict access controls. Learn about your privacy rights and our commitment to healthcare data security."
        canonical="https://medtransic.com/privacy"
        keywords="privacy policy, HIPAA privacy, data protection, patient privacy, healthcare data security, HIPAA compliance, medical billing privacy, PHI protection"
        ogType="website"
        noindex={true}
      />
      {/* Logo background overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 space-y-12">
          {/* Information We Collect */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We collect personal information you provide directly to us when you interact with our services. 
                The types of personal information we may collect include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Practice Information:</strong> Practice name, medical specialty, location, NPI numbers</li>
                <li><strong>Professional Information:</strong> Medical credentials, licensing information, certifications</li>
                <li><strong>Billing and Payment Information:</strong> Payment details, billing addresses, financial account information</li>
                <li><strong>Communication Data:</strong> Records of communications with our support team, feedback, and inquiries</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information when you visit our website</li>
                <li><strong>SMS/Text Messaging:</strong> Phone numbers for appointment reminders and practice communications (with your consent)</li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-6">
                <p className="font-semibold text-blue-900 mb-2">Protected Health Information (PHI)</p>
                <p className="text-blue-800">
                  As a HIPAA-compliant business associate, we may also handle Protected Health Information (PHI) 
                  on behalf of healthcare providers. All PHI is handled in strict accordance with HIPAA regulations 
                  and is stored on secure 256-bit encrypted servers.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>We use the personal information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Delivery:</strong> Provide, maintain, and improve our medical billing and RCM services</li>
                <li><strong>Transaction Processing:</strong> Process payments, billing, and send related financial information</li>
                <li><strong>Communication:</strong> Send service updates, technical notices, support messages, and respond to inquiries</li>
                <li><strong>Practice Management:</strong> Assist with credentialing, insurance verification, and administrative tasks</li>
                <li><strong>SMS Communications:</strong> Send appointment reminders, billing notifications, and practice updates (with your explicit consent)</li>
                <li><strong>Compliance:</strong> Meet legal obligations, maintain HIPAA compliance, and protect our rights and your data</li>
                <li><strong>Quality Improvement:</strong> Analyze service performance and improve our processes</li>
              </ul>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 mt-6">
                <p className="font-semibold text-green-900 mb-2">Lawful Basis for Processing</p>
                <p className="text-green-800">
                  We process your personal information based on: (1) your consent, (2) performance of our contract 
                  with you, (3) our legitimate business interests, and (4) compliance with legal obligations.
                </p>
              </div>
            </div>
          </section>

          {/* SMS Communications */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">SMS Communications and Privacy</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                When you opt in to receive SMS messages from Medtransic, we collect your phone number and 
                (optionally) your name or other contact details via our secure web form or lead form. 
                You have given explicit consent to receive these messages (e.g., by checking an opt-in box 
                or replying "Yes").
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">Types of SMS Messages We Send</h4>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Account notifications and service updates</li>
                  <li>Customer support communications</li>
                  <li>Delivery and credentialing status updates</li>
                  <li>Occasional informational or educational updates about billing and compliance</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Your SMS Rights and Controls</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Opt-Out:</strong> You may reply "STOP" at any time to unsubscribe from SMS messages</li>
                  <li><strong>Help:</strong> Reply "HELP" for assistance or contact us directly</li>
                  <li><strong>Rates:</strong> Message and data rates may apply based on your mobile plan</li>
                  <li><strong>Data Access:</strong> You may request access, correction, or deletion of your SMS-related data</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h4 className="font-bold text-yellow-900 mb-3">SMS Terms & Conditions</h4>
                <div className="space-y-3 text-yellow-800">
                  <p>By opting in to receive SMS messages from Medtransic, you agree to the following terms:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Messaging frequency may vary</li>
                    <li>Message and data rates may apply</li>
                    <li>To opt out at any time, text STOP</li>
                    <li>For assistance, text HELP or visit our website at <a href="https://medtransic.com" className="underline hover:text-yellow-700">https://medtransic.com</a></li>
                  </ul>
                  <p className="text-sm">
                    Visit <Link to="/privacy" className="underline hover:text-yellow-700">https://medtransic.com/privacy</Link> for privacy policy and 
                    <Link to="/terms-of-service" className="underline hover:text-yellow-700 ml-1">Terms of Service</Link>.
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h4 className="font-bold text-red-900 mb-3">SMS Data Protection</h4>
                <p className="text-red-800 font-semibold mb-2">
                  SMS consent is not shared with third parties or affiliates.
                </p>
                <p className="text-red-700">
                  We will not share your SMS opt-in data or consent status with third parties for marketing 
                  purposes. We may, however, share your information with trusted service providers who assist 
                  us with message delivery, subject to appropriate confidentiality safeguards. Your SMS data 
                  is stored on encrypted servers and accessed only by authorized personnel.
                </p>
              </div>
              
              <p>
                We retain SMS data only as long as necessary to support your communications and comply with 
                legal and business requirements. This SMS privacy policy is publicly accessible and available 
                via any form where you opt in to receive SMS messages.
              </p>
            </div>
          </section>
          {/* Information Sharing */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Information Sharing</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We respect your privacy and do not sell, trade, or rent your personal information to third parties. 
                We may share your personal information only in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., cloud hosting, payment processing) under strict confidentiality agreements</li>
                <li><strong>Healthcare Providers:</strong> With your healthcare practice as necessary to provide our services</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with continued privacy protection)</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
              
              <div className="bg-red-50 rounded-lg p-6 border border-red-200 mt-6">
                <h4 className="font-bold text-red-900 mb-3">SMS/Text Messaging Privacy</h4>
                <p className="text-red-800 font-semibold mb-2">
                  SMS consent is not shared with third parties or affiliates.
                </p>
                <p className="text-red-700">
                  Your phone number and SMS consent information is kept strictly confidential and is never 
                  sold, shared, or disclosed to any third parties or affiliate companies. We use this 
                  information solely for the purpose of sending you authorized practice-related communications.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-6">
                <h4 className="font-bold text-blue-900 mb-3">HIPAA-Protected Information</h4>
                <p className="text-blue-800">
                  Protected Health Information (PHI) is shared only as permitted under our Business Associate 
                  Agreement and HIPAA regulations. We never use or disclose PHI for marketing purposes or 
                  share it with unauthorized parties.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <p className="font-semibold text-blue-900">
                  We store all PHI data on secure 256-bit encrypted servers with industry-leading 
                  security protocols and HIPAA-compliant infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications and SMS messages at any time</li>
                <li><strong>Restrict Processing:</strong> Request limitation of how we process your personal information</li>
                <li><strong>Complaint:</strong> File a complaint with regulatory authorities if you believe your privacy rights have been violated</li>
              </ul>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">How to Exercise Your Rights</h4>
                <p className="text-gray-700 mb-3">
                  To exercise any of these rights, please contact us using the information provided below. 
                  We will respond to your request within 30 days.
                </p>
                <p className="text-gray-700">
                  <strong>SMS Opt-Out:</strong> To stop receiving SMS messages, reply "STOP" to any text message 
                  or contact us directly.
                </p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Data Retention</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes 
                for which it was collected, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>For the duration of our service relationship with you</li>
                <li>As required by applicable laws and regulations</li>
                <li>To resolve disputes and enforce our agreements</li>
                <li>For legitimate business purposes such as fraud prevention</li>
              </ul>
              <p>
                PHI is retained in accordance with HIPAA requirements and your healthcare provider's 
                record retention policies.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span>contact@medtransic.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span>+1 (888) 777-0860</span>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-6">
                <p className="text-blue-800">
                  <strong>Privacy Officer:</strong> For privacy-related inquiries, you may also contact our 
                  designated Privacy Officer at the above contact information.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link to="/" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;