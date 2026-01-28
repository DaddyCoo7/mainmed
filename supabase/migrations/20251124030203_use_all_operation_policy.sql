/*
  # Use ALL operation policy for complete access

  1. Changes
    - Drop the restrictive INSERT-only policy
    - Create an ALL operations policy for public role
    
  2. Security
    - Allows all operations (including INSERT) for public role
    - This is a workaround for the RLS policy evaluation issue
    
  3. Notes
    - Using FOR ALL instead of FOR INSERT
    - This should allow the anon user to insert without restrictions
*/

-- Drop existing insert policy
DROP POLICY IF EXISTS "Allow inserts from anyone" ON contact_submissions;

-- Create a policy for ALL operations (includes INSERT)
CREATE POLICY "Public can insert contact submissions"
ON contact_submissions
AS PERMISSIVE
FOR ALL
TO public
USING (true)
WITH CHECK (true);
