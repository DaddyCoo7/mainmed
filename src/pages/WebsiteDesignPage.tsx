import { motion } from 'framer-motion';
import { Eye, Target, Clock, MessageSquare, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import ServiceSchema from '../components/ServiceSchema';

export default function WebsiteDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEOHead
        title="Website Design | User-Centered Approach"
        description="Learn about Medtransic's intentional approach to website design - structured, simple, and focused on clear communication for busy healthcare professionals."
        canonicalUrl="https://medtransic.com/about-website-design"
      />
      <ServiceSchema
        name="Website Design"
        description="Learn about Medtransic's intentional approach to website design - structured, simple, and focused on clear communication for busy healthcare professionals."
        url="https://medtransic.com/services/websitedesign"
        serviceType="Medical Billing Service"
      />

      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About Our Website Design
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Intentionally structured, deliberately simple, and focused on what matters most: your time and information.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Design Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In an era of constant digital noise—where websites compete for attention with flashy animations,
                autoplay videos, and endless pop-ups—we've made a conscious choice to take a different path.
                The design of Medtransic.com is intentionally structured and deliberately simple, and there's a
                meaningful reason behind every decision we've made.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Respecting Sensory Boundaries</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Today's digital landscape bombards us with sensory overload from all directions—social media feeds,
                video content, notifications, and complex interfaces that demand our attention. We recognize that
                this constant stimulation can be exhausting, especially for healthcare professionals who are already
                managing demanding workdays filled with critical decisions and patient care responsibilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our website design respects your sensory boundaries. You won't find autoplay videos, distracting
                animations, or excessive graphics competing for your attention. Instead, we've created a calm,
                focused environment where information takes center stage.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Core Design Principles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Clear Communication</h3>
                <p className="text-gray-700 leading-relaxed">
                  Medtransic believes in communicating clearly and effectively. The best way to achieve
                  this is to focus on the information itself, not on superficial visual distractions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Respecting Your Time</h3>
                <p className="text-gray-700 leading-relaxed">
                  Healthcare professionals are busy. You don't have time to navigate complicated websites,
                  wait for videos to load, or hunt for information buried beneath layers of design elements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <Layers className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Structured Simplicity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our structured approach means information is organized logically and consistently.
                  You can quickly find what you need without cognitive overload.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visual Clarity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Clean typography, appropriate white space, and a calm color palette create a reading
                  experience that's easy on the eyes and conducive to understanding.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Performance</h3>
                <p className="text-gray-700 leading-relaxed">
                  By minimizing heavy graphics and videos, our website loads quickly and performs smoothly
                  on all devices, even with slower internet connections.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content-First Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every page prioritizes substance over style. We provide comprehensive information about
                  our services without forcing you through unnecessary visual experiences.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Over Decoration</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While many websites use elaborate graphics, background videos, and complex interactions,
                we've chosen to focus on what truly matters: delivering accurate, comprehensive information
                about our medical billing and revenue cycle management services. This isn't a minimalist
                aesthetic choice—it's a practical decision rooted in respect for your professional needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When you visit our website, you're likely researching medical billing solutions, comparing
                service options, or looking for specific information about compliance, coding, or revenue
                cycle management. You need clear answers, not entertainment. Our design philosophy ensures
                that nothing stands between you and the information you're seeking.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Accessibility and Inclusivity</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A simple, structured design also means better accessibility for everyone. Users with visual
                impairments, cognitive differences, or those using assistive technologies can navigate our
                website more easily. By avoiding unnecessary complexity, we've created an inclusive digital
                space that serves all visitors effectively.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Professional Trust Through Transparency</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In healthcare revenue cycle management, trust is everything. Our straightforward website
                design reflects our business philosophy: transparency, clarity, and no hidden complexities.
                What you see is what you get—both in our website and in our services. We don't need flashy
                marketing tactics because we're confident in the quality of our work and the value we provide
                to healthcare practices.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Continuous Improvement</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While we're committed to maintaining our core design philosophy, we're always looking to
                improve the user experience. We regularly review website analytics, gather feedback from
                clients, and refine our content to ensure we're meeting your needs effectively.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your input is invaluable in this process. If you have suggestions for how we can make our
                website more useful, comments about the information we provide, or ideas for additional
                resources you'd like to see, we want to hear from you. Your feedback helps us serve the
                healthcare community better.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Share Your Thoughts</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We value your feedback about our website design and content. Help us continue to improve
                by sharing your comments and suggestions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Us Your Feedback
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
