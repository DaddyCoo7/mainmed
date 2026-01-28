import { supabase } from '../lib/supabase';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export interface IndexNowSubmission {
  id: string;
  url: string;
  status: string;
  response_code: number | null;
  search_engine: string;
  submitted_at: string;
  response_message: string | null;
  batch_id: string | null;
}

export interface IndexNowResponse {
  success: boolean;
  submitted: number;
  failed: number;
  batchId: string;
  details?: any[];
}

export async function submitAllUrlsToIndexNow(): Promise<IndexNowResponse> {
  const functionUrl = `${SUPABASE_URL}/functions/v1/indexnow-submit`;

  const response = await fetch(functionUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to submit URLs to IndexNow');
  }

  return await response.json();
}

export async function submitSpecificUrlsToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  const functionUrl = `${SUPABASE_URL}/functions/v1/indexnow-submit`;

  const response = await fetch(functionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ urls }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to submit URLs to IndexNow');
  }

  return await response.json();
}

export async function getRecentSubmissions(limit: number = 50): Promise<IndexNowSubmission[]> {
  const { data, error } = await supabase
    .from('indexnow_submissions')
    .select('*')
    .order('submitted_at', { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function getSubmissionStats(): Promise<{
  total: number;
  successful: number;
  failed: number;
  lastSubmission: string | null;
}> {
  const { data, error } = await supabase
    .from('indexnow_submissions')
    .select('status, submitted_at')
    .order('submitted_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const submissions = data || [];
  const total = submissions.length;
  const successful = submissions.filter(s => s.status === 'success').length;
  const failed = submissions.filter(s => s.status === 'failed').length;
  const lastSubmission = submissions.length > 0 ? submissions[0].submitted_at : null;

  return {
    total,
    successful,
    failed,
    lastSubmission,
  };
}
