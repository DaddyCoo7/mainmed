import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ServiceSchema from '../components/ServiceSchema';
import { Shield, Lock, FileCheck, Users, AlertTriangle, CheckCircle, Award, Eye } from 'lucide-react';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const HipaaCompliancePage: React.FC = () => {
  usePrerenderReady(true);

  const complianceFeatures = [
    {
      icon: Shield,
      title: 'Administrative Safeguards',
      description: 'Comprehensive policies and procedures to protect PHI access and usage.'
    },
    {
      icon: Lock,
      title: 'Physical Safeguards',
      description: 'Secure facilities and workstations with controlled access to PHI.'
    },
    {
      icon: FileCheck,
      title: 'Technical Safeguards',
      description: 'Advanced encryption, access controls, and audit logging systems.'
    },
    {
      icon: Users,
      title: 'Staff Training',
      description: 'Regular HIPAA training and certification for all team members.'
    }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="HIPAA Compliance | 256-Bit Encrypted Billing"
        description="HIPAA-compliant medical billing services with 256-bit encryption and comprehensive security. Learn about our commitment to patient data security, healthcare compliance, and PHI protection standards."
        canonical="https://medtransic.com/hipaa-compliance"
        keywords="HIPAA compliance, healthcare compliance, patient data security, HIPAA compliant billing, PHI protection, 256-bit encryption"
        ogType="website"
      />
      <ServiceSchema
        name="HIPAA Compliance Services"
        description="HIPAA-compliant medical billing services with 256-bit encryption and comprehensive security. Learn about our commitment to patient data security, healthcare compliance, and PHI protection standards."
        url="https://medtransic.com/hipaa-compliance"
        serviceType="Medical Support Service"
      />
      {/* Logo background overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              HIPAA Compliance
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are fully committed to maintaining the highest standards of HIPAA compliance 
            to protect your patients' protected health information (PHI).
          </p>
        </div>

        {/* Compliance Overview */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 mb-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Our HIPAA Commitment</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Medtransic is a HIPAA-compliant business associate that understands the critical 
              importance of protecting patient privacy and maintaining the confidentiality, 
              integrity, and availability of protected health information.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-8 border border-green-200 mb-12">
            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-4">256-Bit Encryption Security</h3>
                <p className="text-green-800 leading-relaxed">
                  We store all PHI data on secure 256-bit encrypted servers with multiple layers 
                  of security protection, ensuring your patients' sensitive information remains 
                  completely secure and accessible only to authorized personnel.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Associate Agreement */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 mb-12">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
              <FileCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Business Associate Agreement</h2>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              As your business associate, Medtransic enters into a comprehensive Business Associate 
              Agreement (BAA) with each healthcare provider client. This agreement ensures:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Proper use and disclosure of PHI only as permitted or required</li>
              <li>Implementation of appropriate safeguards to prevent unauthorized use or disclosure</li>
              <li>Reporting of any security incidents or breaches immediately</li>
              <li>Ensuring subcontractors also comply with HIPAA requirements</li>
              <li>Return or destruction of PHI upon contract termination</li>
            </ul>
          </div>
        </div>

        {/* Security Measures */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 mb-12">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Security Measures</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Safeguards</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  256-bit AES encryption for data at rest and in transit
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Multi-factor authentication for all system access
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Role-based access controls and user permissions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Comprehensive audit logging and monitoring
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Administrative Safeguards</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Designated HIPAA Security Officer
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Regular staff training and certification
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Incident response and breach notification procedures
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Regular security risk assessments
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Breach Response */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 mb-12">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Breach Response Protocol</h2>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              In the unlikely event of a security incident, we have established comprehensive 
              breach response procedures:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Immediate Response</h4>
                <p className="text-sm">Contain and assess the incident within 1 hour</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Client Notification</h4>
                <p className="text-sm">Notify affected clients within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Regulatory Reporting</h4>
                <p className="text-sm">Report to HHS and other authorities as required</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Compliance */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our HIPAA Compliance?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our HIPAA Security Officer is available to answer any questions about our 
              compliance measures and security protocols.
            </p>
            <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
              Contact Our Security Officer
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HipaaCompliancePage;