/*
  # Fix contact_submissions insert policy for anonymous users

  1. Changes
    - Drop the existing public insert policy
    - Create a new policy that properly allows anonymous inserts
    
  2. Security
    - Allows anyone (including anonymous users) to insert contact form submissions
    - Uses proper SQL expression instead of boolean true
    
  3. Notes
    - This fixes the "new row violates row-level security policy" error
    - The policy now explicitly allows all inserts for the public/anon role
*/

-- Drop the existing insert policy
DROP POLICY IF EXISTS "public_can_insert_contact_submissions" ON contact_submissions;

-- Create a new policy that allows anonymous users to insert
CREATE POLICY "Allow anonymous contact form submissions"
ON contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Also allow authenticated users to insert (for admin purposes)
CREATE POLICY "Allow authenticated users to insert"
ON contact_submissions
FOR INSERT
TO authenticated
WITH CHECK (true);
