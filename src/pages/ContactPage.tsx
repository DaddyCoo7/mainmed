import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Calendar, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { supabase } from '../lib/supabase';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    specialty: '',
    message: '',
    smsOptIn: false,
    contactType: 'new_client',
    contactPurpose: '',
    preferredContactMethod: 'email',
    companySize: 'not_specified',
    currentBillingSystem: '',
    estimatedMonthlyCharges: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const errors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }

    if (submissionSuccess) setSubmissionSuccess(false);
    if (submissionError) setSubmissionError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(false);

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            practice: formData.practice || null,
            specialty: formData.specialty || null,
            message: formData.message || null,
            sms_opt_in: formData.smsOptIn,
            contact_type: formData.contactType,
            contact_purpose: formData.contactPurpose || null,
            preferred_contact_method: formData.preferredContactMethod,
            company_size: formData.companySize,
            current_billing_system: formData.currentBillingSystem || null,
            estimated_monthly_charges: formData.estimatedMonthlyCharges ? parseInt(formData.estimatedMonthlyCharges) : null,
            status: 'new'
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      setSubmissionSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        practice: '',
        specialty: '',
        message: '',
        smsOptIn: false,
        contactType: 'new_client',
        contactPurpose: '',
        preferredContactMethod: 'email',
        companySize: 'not_specified',
        currentBillingSystem: '',
        estimatedMonthlyCharges: ''
      });
      console.log('Form submitted successfully:', data);

    } catch (error) {
      setSubmissionError(true);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const showPracticeFields = formData.contactType === 'new_client' || formData.contactType === 'existing_client';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden pt-20">
      <SEOHead
        title="Contact Medtransic | Get Medical Billing Solutions Today | Free Consultation"
        description="Contact Medtransic for expert medical billing services and RCM solutions. Schedule a free consultation to discuss your practice's billing needs. Call 888-777-0860 or fill out our contact form for a custom quote."
        canonical="https://medtransic.com/contact"
        keywords="contact medtransic, medical billing consultation, RCM consultation, billing services contact, healthcare billing quote, free consultation"
        ogType="website"
      />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
              Ready to optimize your practice's revenue cycle? Let's discuss how
              Medtransic can help you achieve your financial goals.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-6">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+1 (888) 777-0860</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-6">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">contact@medtransic.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-6">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">30 N Gould St Ste R, Sheridan, WY 82801</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Medtransic?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">HIPAA Compliant & SOC 2 Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">24/7 Customer Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">98% First-Pass Claim Rate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send Us a Message</h2>

            {submissionSuccess && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                  <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submissionError && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                <div>
                  <p className="text-red-800 font-medium">Failed to send message</p>
                  <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500 ${
                      validationErrors.name ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                  {validationErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500 ${
                      validationErrors.email ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500"
                    placeholder="(555) 123-4567"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContactMethod"
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500"
                    disabled={isSubmitting}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="sms">SMS/Text</option>
                    <option value="any">Any Method</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contactType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  I am contacting you for: *
                </label>
                <select
                  id="contactType"
                  name="contactType"
                  value={formData.contactType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-500"
                  disabled={isSubmitting}
                  required
                >
                  <option value="new_client">New Client - Interested in Billing Services</option>
                  <option value="existing_client">Existing Client - Questions/Support</option>
                  <option value="security_inquiry">Security Inquiry - HIPAA/Data Security Questions</option>
                  <option value="partnership">Partnership - Business Opportunities</option>
                  <option value="employment">Employment - Career Opportunities</option>
                  <option value="vendor">Vendor - Supplier Inquiries</option>
                  <option value="other">Other Inquiries</option>
                </select>
              </div>

              <div>
                <label htmlFor="contactPurpose" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject/Purpose
                </label>
                <input
                  type="text"
                  id="contactPurpose"
                  name="contactPurpose"
                  value={formData.contactPurpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-500"
                  placeholder="Brief subject or purpose of your inquiry"
                  disabled={isSubmitting}
                />
              </div>

              {showPracticeFields && (
                <>
                  <div>
                    <label htmlFor="practice" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Practice Name
                    </label>
                    <input
                      type="text"
                      id="practice"
                      name="practice"
                      value={formData.practice}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500"
                      placeholder="Your practice name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Medical Specialty
                    </label>
                    <select
                      id="specialty"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500"
                      disabled={isSubmitting}
                    >
                      <option value="">Select your specialty</option>
                      <option value="allergy-immunology">Allergy & Immunology</option>
                      <option value="anesthesiology">Anesthesiology</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="chiropractic">Chiropractic</option>
                      <option value="clinical-research">Clinical Research</option>
                      <option value="community-health-clinics">Community Health Clinics</option>
                      <option value="dental">Dental</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="diagnostic-imaging-radiology">Diagnostic Imaging & Radiology</option>
                      <option value="durable-medical-equipment">Durable Medical Equipment (DME)</option>
                      <option value="emergency-medicine">Emergency Medicine</option>
                      <option value="endocrinology">Endocrinology</option>
                      <option value="ent">ENT (Otolaryngology)</option>
                      <option value="family-medicine">Family Medicine</option>
                      <option value="gastroenterology">Gastroenterology</option>
                      <option value="genetic-testing">Genetic Testing</option>
                      <option value="geriatrics">Geriatrics</option>
                      <option value="hematology">Hematology</option>
                      <option value="home-health">Home Health</option>
                      <option value="hospital-facility-billing">Hospital & Facility Billing</option>
                      <option value="infectious-disease">Infectious Disease</option>
                      <option value="interventional-radiology">Interventional Radiology</option>
                      <option value="laboratories-pathology">Laboratories & Pathology</option>
                      <option value="mental-health">Mental Health & Psychiatry</option>
                      <option value="nephrology">Nephrology</option>
                      <option value="neurosurgery">Neurosurgery</option>
                      <option value="obgyn">OB/GYN</option>
                      <option value="occupational-health-clinics">Occupational Health Clinics</option>
                      <option value="occupational-therapy">Occupational Therapy</option>
                      <option value="oncology">Oncology</option>
                      <option value="ophthalmology">Ophthalmology</option>
                      <option value="oral-maxillofacial-surgery">Oral & Maxillofacial Surgery</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pain-management">Pain Management</option>
                      <option value="pathology">Pathology</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="pharmacy-billing-specialty">Pharmacy Billing & Specialty</option>
                      <option value="physical-therapy">Physical Therapy</option>
                      <option value="plastic-surgery">Plastic Surgery</option>
                      <option value="podiatry">Podiatry</option>
                      <option value="primary-care-practices">Primary Care Practices</option>
                      <option value="pulmonology">Pulmonology</option>
                      <option value="rehabilitation-sports-medicine">Rehabilitation & Sports Medicine</option>
                      <option value="respiratory-therapy">Respiratory Therapy</option>
                      <option value="rheumatology">Rheumatology</option>
                      <option value="sleep-medicine">Sleep Medicine</option>
                      <option value="speech-therapy">Speech Therapy</option>
                      <option value="telemedicine">Telemedicine</option>
                      <option value="thoracic-surgery">Thoracic Surgery</option>
                      <option value="urgent-care">Urgent Care</option>
                      <option value="urology">Urology</option>
                      <option value="wound-care-centers">Wound Care Centers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Practice/Company Size
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500"
                        disabled={isSubmitting}
                      >
                        <option value="not_specified">Prefer not to say</option>
                        <option value="solo">Solo Provider</option>
                        <option value="small_2_10">Small (2-10 providers)</option>
                        <option value="medium_11_50">Medium (11-50 providers)</option>
                        <option value="large_51_plus">Large (51+ providers)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="estimatedMonthlyCharges" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Estimated Monthly Claims
                      </label>
                      <input
                        type="number"
                        id="estimatedMonthlyCharges"
                        name="estimatedMonthlyCharges"
                        value={formData.estimatedMonthlyCharges}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500"
                        placeholder="e.g., 500"
                        min="0"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="currentBillingSystem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Current Billing System (if applicable)
                    </label>
                    <input
                      type="text"
                      id="currentBillingSystem"
                      name="currentBillingSystem"
                      value={formData.currentBillingSystem}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500"
                      placeholder="e.g., Practice Fusion, AdvancedMD"
                      disabled={isSubmitting}
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500"
                  placeholder="Tell us about your inquiry..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {showPracticeFields && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <label className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      name="smsOptIn"
                      checked={formData.smsOptIn}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      disabled={isSubmitting}
                    />
                    <span className="ml-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      By checking this box, you agree to receive SMS messages from Medtransic related to appointment reminders, billing updates, and practice communications. You may reply STOP to opt out at any time. Reply HELP to +1 (888) 777-0860 for assistance. Messagesand data rates may apply. Message frequency will vary. Learn more on our{' '}
                      <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                        Privacy Policy
                      </Link>
                      {' '}and{' '}
                      <Link to="/terms-of-service" className="text-blue-600 hover:text-blue-700 underline font-medium">
                        Terms & Conditions
                      </Link>.
                    </span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg transition-all duration-200 shadow-lg font-semibold text-lg flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                <p>
                  By submitting this form, you agree to our{' '}
                  <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline font-medium">
                    Privacy Policy
                  </Link>
                  . We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
