/*
  # IndexNow Submissions Tracking Table

  ## Overview
  Tracks all IndexNow submissions to search engines for monitoring and analytics.

  ## Tables
  
  ### indexnow_submissions
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `url` (text, not null) - The URL that was submitted
  - `status` (text, not null) - Response status (success, pending, failed)
  - `response_code` (integer) - HTTP response code from IndexNow API
  - `search_engine` (text, not null) - Which search engine was notified (e.g., bing, yandex)
  - `submitted_at` (timestamptz) - When the submission was made
  - `response_message` (text) - Any response message or error details
  - `batch_id` (uuid) - Groups URLs submitted together

  ## Security
  - Enable RLS on the table
  - Public read access for monitoring
  - Only service role can insert (via edge function)

  ## Indexes
  - Index on `url` for quick lookups
  - Index on `submitted_at` for time-based queries
  - Index on `batch_id` for batch tracking
*/

-- Create the indexnow_submissions table
CREATE TABLE IF NOT EXISTS indexnow_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  response_code integer,
  search_engine text NOT NULL DEFAULT 'bing',
  submitted_at timestamptz DEFAULT now(),
  response_message text,
  batch_id uuid
);

-- Enable RLS
ALTER TABLE indexnow_submissions ENABLE ROW LEVEL SECURITY;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_indexnow_url ON indexnow_submissions(url);
CREATE INDEX IF NOT EXISTS idx_indexnow_submitted_at ON indexnow_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_indexnow_batch_id ON indexnow_submissions(batch_id) WHERE batch_id IS NOT NULL;

-- Allow public read access for monitoring
CREATE POLICY "Allow public read access to submissions"
  ON indexnow_submissions
  FOR SELECT
  TO public
  USING (true);

-- Service role can insert via edge function (no policy needed as service role bypasses RLS)