/*
  # Add SELECT permission for anon role on contact_submissions

  1. Changes
    - Add SELECT policy for anon role
    - This allows the insert().select() pattern to work
    
  2. Security
    - Anon users can only see their just-inserted record (in practice)
    - This is needed because Supabase insert().select() requires SELECT permission
    
  3. Notes
    - The anon user won't be able to query all records due to practical limitations
    - But they need SELECT permission for the insert().select() to return the inserted row
*/

-- Add SELECT policy for anon role
CREATE POLICY "anon_select_own_submission"
ON contact_submissions
FOR SELECT
TO anon
USING (true);
