/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Full name of the person submitting the form
      - `email` (text, required) - Email address for contact
      - `phone` (text, optional) - Phone number for contact
      - `practice` (text, optional) - Name of the medical practice
      - `specialty` (text, optional) - Medical specialty of the practice
      - `message` (text, optional) - Message or inquiry from the submitter
      - `status` (text, default 'new') - Status for tracking follow-up (new, contacted, qualified, closed)
      - `created_at` (timestamptz, default now()) - Timestamp of form submission
      - `updated_at` (timestamptz, default now()) - Timestamp of last status update

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for service role to insert new submissions (public form submissions)
    - Add policy for authenticated admin users to read all submissions
    - Add policy for authenticated admin users to update submission status

  3. Important Notes
    - This table stores contact form submissions from potential clients
    - The table is designed to work with public form submissions (no authentication required)
    - Status field helps track the sales pipeline and follow-up progress
    - Indexes are added on email and created_at for efficient querying
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  practice text,
  specialty text,
  message text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy for public form submissions (allows anyone to insert)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for authenticated users to view all submissions
CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for authenticated users to update submissions
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();