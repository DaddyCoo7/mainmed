import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';
import {
  Shield,
  Lock,
  Server,
  Eye,
  AlertTriangle,
  CheckCircle,
  Key,
  Monitor,
  FileCheck,
  Users,
  Clock,
  Award
} from 'lucide-react';

const DataSecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: '256-Bit Encryption',
      description: 'All PHI data is protected with military-grade 256-bit AES encryption both at rest and in transit.',
      highlight: true
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'HIPAA-compliant data centers with redundant security measures and 24/7 monitoring.'
    },
    {
      icon: Key,
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access ensure only authorized personnel can access data.'
    },
    {
      icon: Monitor,
      title: 'Continuous Monitoring',
      description: 'Real-time security monitoring and automated threat detection systems.'
    },
    {
      icon: FileCheck,
      title: 'Regular Audits',
      description: 'Comprehensive security audits and penetration testing performed regularly.'
    },
    {
      icon: Users,
      title: 'Staff Training',
      description: 'All team members receive ongoing security awareness training and certification.'
    }
  ];

  const certifications = [
    { name: 'HIPAA Compliant', icon: Shield },
    { name: 'SOC 2 Certified', icon: Award },
    { name: 'HITECH Compliant', icon: FileCheck },
    { name: '24/7 Monitoring', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Data Security | Secure Healthcare Information Protection | 256-Bit Encryption"
        description="Enterprise-level data security for medical billing with military-grade 256-bit encryption. HIPAA-compliant infrastructure, SOC 2 certified, and comprehensive security measures to protect patient information 24/7."
        canonical="https://medtransic.com/data-security"
        keywords="data security, healthcare data security, medical information protection, secure billing, 256-bit encryption, HIPAA security, SOC 2"
        ogType="website"
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
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Data Security
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your patients' protected health information deserves the highest level of security. 
            We implement enterprise-grade security measures to protect sensitive healthcare data.
          </p>
        </div>

        {/* Key Security Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 shadow-xl text-white mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Data Protection</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              We store all PHI data on secure 256-bit encrypted servers with multiple layers 
              of protection, ensuring your patients' sensitive information remains completely 
              secure and accessible only to authorized personnel.
            </p>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Security Measures</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our multi-layered security approach protects your data at every level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border-2 ${
                  feature.highlight 
                    ? 'bg-blue-50 border-blue-200' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${
                    feature.highlight 
                      ? 'bg-blue-100' 
                      : 'bg-gray-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.highlight 
                        ? 'text-blue-600' 
                        : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${
                      feature.highlight 
                        ? 'text-blue-900' 
                        : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      feature.highlight 
                        ? 'text-blue-800' 
                        : 'text-gray-700'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Certifications</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We maintain the highest industry certifications and compliance standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Data Handling Practices */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 mb-12">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
              <FileCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Data Handling Practices</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Collection</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Minimal data collection principle
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Purpose limitation and consent
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Secure data transmission protocols
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Storage</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Encrypted databases and file systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Geographically distributed backups
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Secure data retention policies
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Incident Response */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 mb-12">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Security Incident Response</h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Our comprehensive incident response plan ensures rapid detection, containment, 
              and resolution of any security events:
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Detection</h4>
                <p className="text-sm">24/7 monitoring and automated alerts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Containment</h4>
                <p className="text-sm">Immediate isolation and threat mitigation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Notification</h4>
                <p className="text-sm">Client and regulatory notification</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Recovery</h4>
                <p className="text-sm">System restoration and improvement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mb-24">
          <RelatedServices services={getRelatedLinks('data-security')} />
        </div>

        {/* Contact Security Team */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Data Security?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our security team is available to discuss our data protection measures 
              and answer any questions about how we keep your information safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
                Contact Security Team
              </Link>
              <Link to="/hipaa-compliance" className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-lg">
                View HIPAA Compliance
              </Link>
            </div>
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

export default DataSecurityPage;