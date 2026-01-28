/*
  # Add SMS Opt-in Field to Contact Submissions

  1. Changes
    - Add `sms_opt_in` (boolean) column to `contact_submissions` table
      - Default value: false
      - Tracks whether the user has consented to receive SMS messages
      - Required for RingCentral SMS compliance

  2. Important Notes
    - This field stores explicit user consent for SMS communications
    - Complies with TCPA (Telephone Consumer Protection Act) requirements
    - Users can opt-out at any time by replying STOP to SMS messages
    - Default is false to ensure no messages are sent without explicit consent
*/

-- Add sms_opt_in column to contact_submissions table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'sms_opt_in'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN sms_opt_in boolean DEFAULT false;
  END IF;
END $$;

-- Create index for efficient querying of opt-in users
CREATE INDEX IF NOT EXISTS idx_contact_submissions_sms_opt_in ON contact_submissions(sms_opt_in) WHERE sms_opt_in = true;
