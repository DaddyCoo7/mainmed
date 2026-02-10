import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Send,
  CheckCircle,
  Building,
  Users,
  TrendingUp,
  Heart
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import RegionBanner from '../components/RegionBanner';
import AnimatedSection from '../components/AnimatedSection';
import OrganizationSchema from '../components/OrganizationSchema';
import { supabase } from '../lib/supabase';
import { getRegionByCode, RegionConfig } from '../config/regions';

interface JobPosting {
  id: string;
  region: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  salary_range: string;
  created_at: string;
}

const CareersPage: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const regionCode = pathname.startsWith('/pk') ? 'pk' : pathname.startsWith('/ph') ? 'ph' : 'us';
  const region: RegionConfig = getRegionByCode(regionCode);

  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    applicant_name: '',
    email: '',
    phone: '',
    resume_url: '',
    cover_letter: '',
    linkedin_url: '',
    portfolio_url: '',
    experience_years: '',
    current_location: '',
    availability: ''
  });

  useEffect(() => {
    fetchJobs();
  }, [pathname, regionCode]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .eq('region', regionCode)
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    try {
      const { error } = await supabase
        .from('job_applications')
        .insert([
          {
            job_posting_id: selectedJob.id,
            ...formData,
            experience_years: parseInt(formData.experience_years) || 0
          }
        ]);

      if (error) throw error;

      setApplicationSubmitted(true);
      setFormData({
        applicant_name: '',
        email: '',
        phone: '',
        resume_url: '',
        cover_letter: '',
        linkedin_url: '',
        portfolio_url: '',
        experience_years: '',
        current_location: '',
        availability: ''
      });

      setTimeout(() => {
        setIsApplying(false);
        setApplicationSubmitted(false);
        setSelectedJob(null);
      }, 3000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const stats = [
    { icon: Building, label: 'Global Offices', value: '3' },
    { icon: Users, label: 'Team Members', value: '200+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '45%' },
    { icon: Heart, label: 'Employee Satisfaction', value: '95%' }
  ];

  return (
    <>
      <SEOHead
        title={`Careers at Medtransic ${region.name} | Join Our Team`}
        description={`Explore exciting career opportunities at Medtransic ${region.name}. Join our team of healthcare revenue cycle management professionals and grow your career.`}
        canonical={`https://medtransic.com${regionCode === 'us' ? '/careers' : `/${regionCode}/careers`}`}
        keywords={`careers ${region.name}, jobs ${region.name}, medical billing jobs, healthcare careers, RCM careers, Medtransic jobs`}
      />
      <OrganizationSchema />

      <RegionBanner region={region} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptMTYgMTZ2OGg4di04aC04em0tMTYgMTZ2OGg4di04aC04em0tMTYgMHY4aDh2LThoLTh6bS0xNiAwdjhoOHYtOGgtOHptMC0xNnY4aDh2LThoLTh6bTAtMTZ2OGg4di04aC04eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Build Your Career at Medtransic
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our team in {region.name} and help transform healthcare revenue cycle management
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center text-white">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-medium">{region.name}</span>
              </div>
              <div className="w-px h-6 bg-blue-300"></div>
              <div className="flex items-center text-white">
                <Briefcase className="w-5 h-5 mr-2" />
                <span className="font-medium">{jobs.length} Open Positions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Job Listings */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No open positions at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer"
                  onClick={() => {
                    setSelectedJob(job);
                    setIsApplying(true);
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Building className="w-4 h-4 mr-2" />
                          {job.department}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.employment_type}
                        </div>
                        {job.salary_range && (
                          <div className="flex items-center text-gray-600">
                            <DollarSign className="w-4 h-4 mr-2" />
                            {job.salary_range}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 line-clamp-2">{job.description}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ml-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                        setIsApplying(true);
                      }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Application Modal */}
      {isApplying && selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8"
          >
            {applicationSubmitted ? (
              <div className="p-12 text-center">
                <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                <p className="text-lg text-gray-600">
                  Thank you for your interest. We'll review your application and get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="p-8 border-b border-gray-200">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Apply for {selectedJob.title}</h3>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedJob.location}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="applicant_name"
                        value={formData.applicant_name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <input
                        type="number"
                        name="experience_years"
                        value={formData.experience_years}
                        onChange={handleInputChange}
                        required
                        min="0"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Location *
                      </label>
                      <input
                        type="text"
                        name="current_location"
                        value={formData.current_location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Availability *
                      </label>
                      <input
                        type="text"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        placeholder="e.g., Immediate, 2 weeks notice"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Resume URL
                      </label>
                      <input
                        type="url"
                        name="resume_url"
                        value={formData.resume_url}
                        onChange={handleInputChange}
                        placeholder="Google Drive, Dropbox, etc."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedin_url"
                        value={formData.linkedin_url}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Portfolio/Website
                    </label>
                    <input
                      type="url"
                      name="portfolio_url"
                      value={formData.portfolio_url}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      name="cover_letter"
                      value={formData.cover_letter}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell us why you're a great fit for this position..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <motion.button
                      type="button"
                      onClick={() => {
                        setIsApplying(false);
                        setSelectedJob(null);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Application
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CareersPage;
