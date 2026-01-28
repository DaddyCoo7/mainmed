/*
  # Enable RLS on contact_submissions table

  1. Changes
    - Enable Row Level Security on contact_submissions table
    
  2. Security
    - RLS is enabled to enforce access control
    - Existing policies remain in place:
      - Anonymous users can INSERT (submit contact forms)
      - Authenticated users can SELECT (view submissions)
      - Authenticated users can UPDATE (manage submissions)
    
  3. Notes
    - This fixes the security audit error without breaking functionality
    - The public insert policy allows anonymous form submissions to continue working
*/

-- Enable RLS on contact_submissions table
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
