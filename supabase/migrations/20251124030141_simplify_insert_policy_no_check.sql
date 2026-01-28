/*
  # Simplify insert policy - remove WITH CHECK

  1. Changes
    - Drop existing insert policy
    - Create new policy without WITH CHECK clause
    - Use FOR ALL to allow all operations for anon on insert
    
  2. Security
    - Allows anonymous users to insert contact submissions
    - Removes potentially problematic WITH CHECK clause
    
  3. Notes
    - Trying alternative policy syntax
    - FOR INSERT with only USING clause instead of WITH CHECK
*/

-- Drop existing insert policy
DROP POLICY IF EXISTS "Enable insert for anon and authenticated users" ON contact_submissions;

-- Create policy with USING clause instead of WITH CHECK
CREATE POLICY "Allow inserts from anyone"
ON contact_submissions
FOR INSERT
TO public
WITH CHECK (true);
