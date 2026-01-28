/*
  # Create Careers Tables for Multi-Region Job Postings

  ## Summary
  This migration creates tables for managing job postings and applications across three regions (US, PK, PH).

  ## New Tables
  
  ### `job_postings`
  - `id` (uuid, primary key) - Unique identifier for each job posting
  - `region` (text) - Region code (us, pk, ph)
  - `title` (text) - Job title
  - `department` (text) - Department name
  - `location` (text) - Job location
  - `employment_type` (text) - Full-time, Part-time, Contract, etc.
  - `description` (text) - Detailed job description
  - `requirements` (text) - Job requirements
  - `responsibilities` (text) - Job responsibilities
  - `benefits` (text) - Job benefits
  - `salary_range` (text, optional) - Salary range if disclosed
  - `is_active` (boolean) - Whether job is currently accepting applications
  - `created_at` (timestamptz) - When the job was posted
  - `updated_at` (timestamptz) - Last update timestamp
  - `expires_at` (timestamptz, optional) - Job posting expiration date

  ### `job_applications`
  - `id` (uuid, primary key) - Unique identifier for each application
  - `job_posting_id` (uuid, foreign key) - Reference to job posting
  - `applicant_name` (text) - Full name of applicant
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `resume_url` (text, optional) - URL to uploaded resume
  - `cover_letter` (text, optional) - Cover letter text
  - `linkedin_url` (text, optional) - LinkedIn profile URL
  - `portfolio_url` (text, optional) - Portfolio website URL
  - `experience_years` (integer) - Years of experience
  - `current_location` (text) - Current location
  - `availability` (text) - When can start
  - `status` (text) - Application status (pending, reviewing, interviewed, rejected, accepted)
  - `notes` (text, optional) - Internal notes about application
  - `created_at` (timestamptz) - When application was submitted
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on both tables
  - Public can view active job postings
  - Public can submit applications (anonymous insert)
  - Authenticated users can view all applications (for admin purposes)
  - Authenticated users can manage job postings

  ## Indexes
  - Index on region for filtering
  - Index on job_posting_id for applications lookup
  - Index on is_active for active jobs filtering
*/

-- Create job_postings table
CREATE TABLE IF NOT EXISTS job_postings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  region text NOT NULL CHECK (region IN ('us', 'pk', 'ph')),
  title text NOT NULL,
  department text NOT NULL,
  location text NOT NULL,
  employment_type text NOT NULL DEFAULT 'Full-time',
  description text NOT NULL,
  requirements text NOT NULL,
  responsibilities text NOT NULL,
  benefits text DEFAULT '',
  salary_range text DEFAULT '',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  expires_at timestamptz
);

-- Create job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_posting_id uuid NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
  applicant_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  resume_url text DEFAULT '',
  cover_letter text DEFAULT '',
  linkedin_url text DEFAULT '',
  portfolio_url text DEFAULT '',
  experience_years integer DEFAULT 0,
  current_location text NOT NULL,
  availability text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interviewed', 'rejected', 'accepted')),
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_job_postings_region ON job_postings(region);
CREATE INDEX IF NOT EXISTS idx_job_postings_is_active ON job_postings(is_active);
CREATE INDEX IF NOT EXISTS idx_job_applications_job_posting_id ON job_applications(job_posting_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);

-- Enable RLS
ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for job_postings
CREATE POLICY "Anyone can view active job postings"
  ON job_postings FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can view all job postings"
  ON job_postings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert job postings"
  ON job_postings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update job postings"
  ON job_postings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete job postings"
  ON job_postings FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for job_applications
CREATE POLICY "Anyone can submit job applications"
  ON job_applications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all applications"
  ON job_applications FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update applications"
  ON job_applications FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete applications"
  ON job_applications FOR DELETE
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_job_postings_updated_at ON job_postings;
CREATE TRIGGER update_job_postings_updated_at
  BEFORE UPDATE ON job_postings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_job_applications_updated_at ON job_applications;
CREATE TRIGGER update_job_applications_updated_at
  BEFORE UPDATE ON job_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
