import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Clock, RefreshCw, Send } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  submitAllUrlsToIndexNow,
  getRecentSubmissions,
  getSubmissionStats,
  type IndexNowSubmission,
} from '../utils/indexnow';

export default function IndexNowAdminPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submissions, setSubmissions] = useState<IndexNowSubmission[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    successful: 0,
    failed: 0,
    lastSubmission: null as string | null,
  });
  const [message, setMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setIsLoading(true);
      const [submissionsData, statsData] = await Promise.all([
        getRecentSubmissions(100).catch(() => []),
        getSubmissionStats().catch(() => ({
          total: 0,
          successful: 0,
          failed: 0,
          lastSubmission: null,
        })),
      ]);
      setSubmissions(submissionsData);
      setStats(statsData);
    } catch (error) {
      console.error('Error loading data:', error);
      setSubmissions([]);
      setStats({
        total: 0,
        successful: 0,
        failed: 0,
        lastSubmission: null,
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmitAll() {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await submitAllUrlsToIndexNow();

      setMessage({
        type: 'success',
        text: `Successfully submitted ${result.submitted} URLs to IndexNow! ${result.failed > 0 ? `${result.failed} failed.` : ''}`,
      });

      await loadData();
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to submit URLs',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <>
        <SEOHead
          title="IndexNow Admin | Search Indexing Dashboard"
          description="Administrative dashboard for managing IndexNow API submissions to Bing, Google, and Yandex. Monitor submission status, track indexing success rates, and instantly notify search engines of new content for faster discovery and ranking."
          canonical="https://medtransic.com/admin/indexnow"
          noindex={true}
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <main className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                IndexNow Administration
              </h1>
              <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center">
                  <RefreshCw className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                  <p className="text-lg text-slate-600">Loading IndexNow Admin...</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="IndexNow Admin | Search Engine Indexing"
        description="Administrative dashboard for managing IndexNow API submissions to Bing, Google, and Yandex. Monitor submission status, track indexing success rates, and instantly notify search engines of new content."
        canonical="https://medtransic.com/admin/indexnow"
        noindex={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                IndexNow Administration
              </h1>
              <p className="text-lg text-slate-600">
                Instantly notify search engines about your content updates
              </p>
            </div>

            {message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : message.type === 'error'
                    ? 'bg-red-50 text-red-800 border border-red-200'
                    : 'bg-blue-50 text-blue-800 border border-blue-200'
                }`}
              >
                {message.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                {message.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                {message.type === 'info' && <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                <p className="flex-1">{message.text}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-600">Total Submissions</h3>
                  <Send className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-slate-900">{stats.total}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-600">Successful</h3>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-green-600">{stats.successful}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-600">Failed</h3>
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <p className="text-3xl font-bold text-red-600">{stats.failed}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-600">Last Submission</h3>
                  <Clock className="w-5 h-5 text-slate-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">
                  {stats.lastSubmission
                    ? new Date(stats.lastSubmission).toLocaleDateString()
                    : 'Never'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Submit URLs</h2>
              <p className="text-slate-600 mb-6">
                Click the button below to submit all your site URLs to IndexNow. This will notify
                Bing, Yandex, and other participating search engines instantly.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleSubmitAll}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit All URLs
                    </>
                  )}
                </button>
                <button
                  onClick={loadData}
                  className="flex items-center gap-2 bg-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                >
                  <RefreshCw className="w-5 h-5" />
                  Refresh Data
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Recent Submissions</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        URL
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Search Engine
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {submissions.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                          No submissions yet. Click "Submit All URLs" to get started.
                        </td>
                      </tr>
                    ) : (
                      submissions.map((submission) => (
                        <tr key={submission.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 text-sm text-slate-900 max-w-md truncate">
                            {submission.url}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                submission.status === 'success'
                                  ? 'bg-green-100 text-green-800'
                                  : submission.status === 'failed'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {submission.status === 'success' && <CheckCircle className="w-3 h-3" />}
                              {submission.status === 'failed' && <AlertCircle className="w-3 h-3" />}
                              {submission.status === 'pending' && <Clock className="w-3 h-3" />}
                              {submission.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                            {submission.search_engine}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                            {new Date(submission.submitted_at).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
