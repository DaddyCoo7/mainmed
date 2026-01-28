/*
  # Fix Contact Submissions RLS Policy for Anonymous Users

  1. Problem
    - The existing RLS policy for anonymous submissions is not working
    - Anonymous users (public form submissions) cannot insert into the table

  2. Solution
    - Drop and recreate the INSERT policy for anonymous users
    - Ensure the policy correctly allows public form submissions
    - Grant necessary permissions to the anon role

  3. Important Notes
    - This allows anyone to submit the contact form without authentication
    - The policy is intentionally permissive for INSERT operations only
    - Read/Update operations still require authentication
*/

-- Drop the existing policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Recreate the policy with proper permissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, public
  WITH CHECK (true);

-- Ensure anon role has insert permission on the table
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON contact_submissions TO public;
