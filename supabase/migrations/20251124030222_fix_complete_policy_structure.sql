/*
  # Complete policy restructure for contact_submissions

  1. Changes
    - Drop ALL existing policies
    - Create separate clear policies for each role and operation
    
  2. Security
    - anon role: Can INSERT only
    - authenticated role: Can SELECT, INSERT, UPDATE
    
  3. Notes
    - Using explicit role names (anon, authenticated) instead of public
    - Separate policies for each operation to avoid conflicts
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Public can insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON contact_submissions;

-- Policy for anonymous users to insert (contact form submission)
CREATE POLICY "anon_insert_contact"
ON contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy for authenticated users to insert
CREATE POLICY "auth_insert_contact"
ON contact_submissions
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Policy for authenticated users to select
CREATE POLICY "auth_select_contact"
ON contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- Policy for authenticated users to update
CREATE POLICY "auth_update_contact"
ON contact_submissions
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);
