/*
  # Enable RLS with Public Insert Policy for Contact Submissions

  1. Problem
    - RLS was temporarily disabled for debugging
    - Need to re-enable with a policy that actually works with Supabase's authentication

  2. Solution
    - Re-enable RLS on contact_submissions table
    - Create policy using "public" role which applies to all users including anon
    - Ensure all necessary permissions are granted

  3. Important Notes
    - The "public" role in Supabase includes both anon and authenticated users
    - This allows contact form submissions from unauthenticated visitors
    - Read and update operations still require authentication
*/

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop any existing insert policies
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create policy for public INSERT (works for both anon and authenticated)
CREATE POLICY "public_can_insert_contact_submissions"
  ON contact_submissions
  AS PERMISSIVE
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Ensure permissions are granted
GRANT INSERT ON TABLE public.contact_submissions TO anon;
GRANT INSERT ON TABLE public.contact_submissions TO authenticated;
