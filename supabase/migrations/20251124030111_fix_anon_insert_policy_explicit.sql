/*
  # Fix anonymous insert policy with explicit conditions

  1. Changes
    - Drop existing insert policies
    - Create new explicit policy for anon role that allows all inserts
    
  2. Security
    - Allows anonymous users to insert contact form submissions
    - No conditions on the insert - all fields are allowed
    
  3. Notes
    - Using more explicit policy definition
    - Removing WITH CHECK true and making it unconditional
*/

-- Drop all existing insert policies
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated users to insert" ON contact_submissions;

-- Create a single permissive policy for inserts
CREATE POLICY "Enable insert for anon and authenticated users"
ON contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
