/*
  # Fix Contact Submissions Anonymous Access

  1. Problem
    - Anonymous users cannot insert into contact_submissions table
    - RLS policy exists but doesn't properly grant access to anon role

  2. Solution
    - Drop and recreate the policy specifically for the anon role
    - Grant explicit INSERT permission to anon role
    - Ensure usage permission on the table's sequence

  3. Important Notes
    - Allows public form submissions without authentication
    - Only INSERT is permitted for anonymous users
    - All other operations require authentication
*/

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create policy specifically for anon role
CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Grant necessary table permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON TABLE public.contact_submissions TO anon;

-- Grant sequence usage for id generation
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;
