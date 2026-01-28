import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface FAQ {
  id: string;
  specialty_slug: string;
  category: string;
  question: string;
  answer: string;
  short_answer?: string;
  priority: number;
  search_keywords?: string[];
}

export const useFAQs = (specialtySlug: string) => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('specialty_faqs')
          .select('*')
          .eq('specialty_slug', specialtySlug)
          .eq('is_published', true)
          .order('priority', { ascending: true });

        if (fetchError) {
          throw fetchError;
        }

        setFaqs(data || []);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError(err instanceof Error ? err.message : 'Failed to load FAQs');
        setFaqs([]);
      } finally {
        setLoading(false);
      }
    };

    if (specialtySlug) {
      fetchFAQs();
    }
  }, [specialtySlug]);

  return { faqs, loading, error };
};
