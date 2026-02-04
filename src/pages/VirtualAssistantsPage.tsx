import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Headphones,
  Calendar,
  Phone,
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Target,
  Award,
  TrendingUp,
  MessageSquare,
  Bot
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import HeroSection from '../components/HeroSection';
import RelatedServices from '../components/RelatedServices';
import ServiceSchema from '../components/ServiceSchema';
import { getRelatedLinks } from '../config/internalLinks';

const VirtualAssistantsPage: React.FC = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description: 'Efficient appointment booking and calendar management to maximize your schedule utilization.',
      features: ['Online scheduling', 'Appointment confirmations', 'Reminder calls', 'Rescheduling management']
    },
    {
      icon: Phone,
      title: 'Call Management',
      description: 'Professional answering services ensuring every patient call is handled with care.',
      features: ['Inbound call handling', 'Message taking', 'Call routing', 'After-hours coverage']
    },
    {
      icon: CheckCircle,
      title: 'Insurance Verification',
      description: 'Pre-visit insurance verification to prevent payment delays and surprises.',
      features: ['Eligibility checks', 'Benefit verification', 'Authorization tracking', 'Coverage confirmation']
    },
    {
      icon: MessageSquare,
      title: 'Patient Communication',
      description: 'Responsive communication that enhances patient satisfaction and retention.',
      features: ['Patient inquiries', 'Follow-up calls', 'Test result notifications', 'Referral coordination']
    }
  ];

  return (
    <>
      <SEOHead
        title="Virtual Medical Assistants | Remote Support"
        description="Professional virtual medical assistants for appointment scheduling, call management, insurance verification, and patient communication. Reduce costs while improving efficiency."
        keywords="virtual medical assistant, remote medical receptionist, healthcare virtual assistant, medical answering service, appointment scheduling service, patient communication"
        canonicalUrl="https://www.medtransic.com/services/virtual-assistants"
      />
      <ServiceSchema
        name="Virtual Assistants"
        description="Professional virtual medical assistants for appointment scheduling, call management, insurance verification, and patient communication. Reduce costs while improving efficiency."
        url="https://medtransic.com/services/virtualassistants"
        serviceType="Medical Billing Service"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        <HeroSection
          title="Virtual Medical Assistants"
          subtitle="Professional Remote Support for Your Practice"
          description="Enhance patient experience and reduce administrative costs with our skilled virtual assistants who handle scheduling, calls, and patient communications."
          primaryButtonText="Get Started"
          primaryButtonLink="/contact"
          secondaryButtonText="View Pricing"
          secondaryButtonLink="/pricing"
          backgroundImage="/medium-vecteezy_doctor-working.jpg"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimatedSection animation="slideUp" className="mb-24">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Comprehensive Virtual Assistant Services
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our trained virtual assistants become an extension of your team, providing professional support that keeps your practice running smoothly
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <InteractiveCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  variant="blue"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" className="mb-24">
            <div className="bg-white rounded-2xl p-12">
              <div className="text-center mb-12">
                <motion.h2
                  className="text-4xl font-bold mb-6 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  The Benefits for Your Practice
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Virtual assistants deliver significant operational and financial advantages for your practice
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Significant Cost Savings</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Save 60-70% compared to hiring full-time staff. No overhead costs for benefits, office space, equipment, or training. Pay only for the hours you need with flexible scheduling options.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Extended Coverage Hours</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Provide coverage during lunch breaks, after hours, and weekends without staff overtime. Never miss a patient call or appointment opportunity, improving patient satisfaction and retention.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Enhanced Patient Experience</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Shorter wait times, faster appointment scheduling, and professional communication create positive patient experiences. Reduce no-shows with proactive appointment confirmations and reminders.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Target className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Focus on Patient Care</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Free your in-office staff from phone calls and administrative tasks so they can focus on providing excellent direct patient care. Improve workflow efficiency and reduce staff burnout.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Scalable Operations</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Easily scale support up or down based on your practice's changing needs. Add coverage during busy seasons or reduce during slower periods without hiring or layoff complications.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Trained Healthcare Professionals</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our virtual assistants are trained in medical terminology, HIPAA compliance, and healthcare workflows. They understand your practice needs and represent your brand professionally.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" className="mb-24">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-12">
              <div className="text-center mb-12">
                <Bot className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Why Choose Medtransic Virtual Assistants?
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Our virtual assistants combine technology, training, and dedication to provide exceptional support that feels like an in-house team
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Healthcare Expertise</h3>
                  <p className="text-gray-600">
                    Trained specifically in medical office procedures, insurance processes, and patient communication best practices.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Seamless Integration</h3>
                  <p className="text-gray-600">
                    Works directly with your existing EHR and practice management systems for smooth operations and data consistency.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Dedicated Support</h3>
                  <p className="text-gray-600">
                    Consistent team members learn your preferences and workflows, providing personalized service to your patients.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" className="mb-24">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
              <motion.h2
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Enhance Your Practice Operations?
              </motion.h2>
              <motion.p
                className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let our virtual assistants handle administrative tasks while you focus on providing exceptional patient care
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>

          <RelatedServices services={getRelatedLinks('virtual-assistants')} />
        </div>
      </div>
    </>
  );
};

export default VirtualAssistantsPage;
