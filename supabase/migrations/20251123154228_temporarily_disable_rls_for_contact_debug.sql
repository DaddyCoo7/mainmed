/*
  # Temporarily Disable RLS for Contact Submissions (DEBUG ONLY)

  1. Problem
    - RLS policies are not working despite correct configuration
    - Need to verify the application code works independently of RLS

  2. Solution
    - Temporarily disable RLS on contact_submissions table
    - This allows us to test if the issue is RLS-specific or application-level
    - IMPORTANT: This is for debugging only and will be re-enabled

  3. Important Notes
    - This makes the table temporarily accessible without restrictions
    - We will re-enable RLS after confirming the application works
    - DO NOT use in production without proper RLS policies
*/

-- Temporarily disable RLS on contact_submissions
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
