/*
  # Add Insert Policy for Specialty FAQs

  ## Overview
  Adds INSERT policy for specialty_faqs table to allow seeding data.
  In production, this would be restricted to admin users only.

  ## Changes
    - Add policy for INSERT operations (currently allowing authenticated users for seeding)
    - In production, this should be restricted to admin role only

  ## Security Note
    - This is a temporary policy for data seeding
    - Should be updated in production to restrict to admin users only
*/

-- Create policy for inserting FAQs (for seeding and admin management)
CREATE POLICY "Allow authenticated users to insert FAQs"
  ON specialty_faqs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);