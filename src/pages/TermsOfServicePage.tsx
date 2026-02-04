import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { usePrerenderReady } from '../hooks/usePrerenderReady';
import {
  FileText,
  Shield,
  CreditCard,
  Users,
  AlertTriangle,
  CheckCircle,
  Phone, 
  Mail,
  Clock,
  Gavel
} from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  usePrerenderReady(true);

  return (

    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Terms of Service | Medical Billing Service Agreement | Medtransic"
        description="Review Medtransic's comprehensive terms of service for medical billing and RCM services. Understand service commitments, billing responsibilities, HIPAA compliance requirements, payment terms, and dispute resolution procedures. Transparent service terms for healthcare providers."
        canonical="https://medtransic.com/terms-of-service"
        keywords="terms of service, service terms, terms and conditions, medical billing agreement, RCM service terms, healthcare billing contract, service level agreement"
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
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of Medtransic's medical billing and revenue cycle management services.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 space-y-12">
          {/* Acceptance of Terms */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Gavel className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                By accessing or using Medtransic's services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                prohibited from using or accessing our services.
              </p>
              <p>
                These terms apply to all users of our services, including healthcare providers, practice 
                administrators, and authorized personnel who access our platform on behalf of healthcare practices.
              </p>
            </div>
          </section>

          {/* Services Description */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Services Description</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Medtransic provides comprehensive medical billing and revenue cycle management services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Medical billing and claims processing</li>
                <li>Medical coding services</li>
                <li>Provider credentialing and enrollment</li>
                <li>Virtual receptionist services</li>
                <li>Practice audits and compliance reviews</li>
                <li>MIPS compliance and reporting</li>
                <li>Revenue cycle management consulting</li>
                <li>Practice launch and setup services</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time 
                with reasonable notice to our clients.
              </p>
            </div>
          </section>

          {/* SMS Communications Terms */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">SMS Communications Terms</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                By opting in to receive SMS messages from Medtransic, you agree to receive text messages 
                related to your account and our services. These may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account notifications and service updates</li>
                <li>Appointment reminders and scheduling confirmations</li>
                <li>Billing and payment notifications</li>
                <li>Credentialing status updates</li>
                <li>Customer support communications</li>
                <li>Educational content about billing and compliance</li>
              </ul>
              
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h4 className="font-bold text-yellow-900 mb-3">SMS Terms & Conditions</h4>
                <ul className="list-disc list-inside space-y-2 text-yellow-800">
                  <li>Messaging frequency may vary</li>
                  <li>Message and data rates may apply</li>
                  <li>To opt out at any time, text STOP</li>
                  <li>For assistance, text HELP or visit our website at <a href="https://medtransic.com" className="underline hover:text-yellow-700">https://medtransic.com</a></li>
                </ul>
                <p className="text-sm mt-3">
                  Visit <Link to="/privacy" className="underline hover:text-yellow-700">https://medtransic.com/privacy</Link> for privacy policy and 
                  <Link to="/terms-of-service" className="underline hover:text-yellow-700 ml-1">Terms of Service</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">User Responsibilities</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Comply with all applicable healthcare laws and regulations</li>
                <li>Notify us promptly of any changes to your practice information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>
          </section>

          {/* Privacy and Data Protection */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Privacy and Data Protection</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We are committed to protecting your privacy and maintaining HIPAA compliance. Our handling 
                of personal information and protected health information (PHI) is governed by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our Privacy Policy (available at <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">medtransic.com/privacy</Link>)</li>
                <li>Business Associate Agreements with healthcare providers</li>
                <li>HIPAA regulations and requirements</li>
                <li>Industry-standard security measures including 256-bit encryption</li>
              </ul>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <p className="text-blue-800 font-semibold">
                  All PHI data is stored on secure 256-bit encrypted servers with multiple layers 
                  of protection, ensuring complete security and access only by authorized personnel.
                </p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Payment Terms</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Payment terms are established in individual service agreements with each client. 
                General payment terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Billing services are typically charged as a percentage of monthly collections</li>
                <li>Credentialing services are charged per application/provider</li>
                <li>Other services are priced according to agreed-upon rates</li>
                <li>Payments are due according to the terms specified in your service agreement</li>
                <li>Late payments may incur additional fees as specified in your agreement</li>
              </ul>
              <p>
                For detailed pricing information, please visit our <Link to="/pricing" className="text-blue-600 hover:text-blue-700 underline">pricing page</Link> 
                or contact us for a customized quote.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Limitation of Liability</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                To the maximum extent permitted by law, Medtransic shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to 
                loss of profits, data, or use, arising out of or relating to these terms or our services.
              </p>
              <p>
                Our total liability for any claims arising from or related to our services shall not 
                exceed the amount paid by you for our services in the twelve (12) months preceding 
                the claim.
              </p>
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <p className="text-red-800">
                  <strong>Important:</strong> Some jurisdictions do not allow the exclusion or limitation 
                  of certain damages, so some of the above limitations may not apply to you.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Termination</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Either party may terminate the service agreement with appropriate notice as specified 
                in the individual service contract. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All outstanding fees become immediately due and payable</li>
                <li>We will provide a final accounting of all transactions</li>
                <li>Client data will be returned or destroyed as requested and permitted by law</li>
                <li>Confidentiality obligations will survive termination</li>
              </ul>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Changes to Terms</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes by posting the updated terms on our website and, where appropriate, 
                by email or other communication methods.
              </p>
              <p>
                Your continued use of our services after any changes constitutes acceptance of the 
                new terms. If you do not agree to the modified terms, you must discontinue use of our services.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
                  <strong>Legal Department:</strong> For legal inquiries related to these terms, 
                  you may contact our legal department at the above contact information.
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

export default TermsOfServicePage;