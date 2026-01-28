/*
  # Grant All Necessary Permissions for Anonymous Contact Submissions

  1. Problem
    - RLS policies exist but anon role still cannot insert
    - Need to ensure all permissions are properly granted

  2. Solution
    - Grant all necessary schema and table permissions
    - Recreate RLS policy with explicit permissions
    - Grant sequence permissions for auto-generated IDs

  3. Important Notes
    - This explicitly grants all necessary permissions to the anon role
    - Allows public form submissions without authentication
*/

-- Ensure anon role exists and has proper grants
DO $$
BEGIN
  -- Grant schema usage
  GRANT USAGE ON SCHEMA public TO anon;
  
  -- Grant table permissions
  GRANT SELECT, INSERT ON TABLE public.contact_submissions TO anon;
  
  -- Grant sequence permissions for UUID generation
  GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;
  
  -- Alter default privileges for future objects
  ALTER DEFAULT PRIVILEGES IN SCHEMA public 
  GRANT SELECT, INSERT ON TABLES TO anon;
  
  ALTER DEFAULT PRIVILEGES IN SCHEMA public 
  GRANT USAGE, SELECT ON SEQUENCES TO anon;
END $$;

-- Drop and recreate the policy to ensure it's correct
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create a simple, permissive policy for INSERT
CREATE POLICY "anon_insert_contact_submissions"
  ON contact_submissions
  AS PERMISSIVE
  FOR INSERT
  TO anon
  WITH CHECK (true);
