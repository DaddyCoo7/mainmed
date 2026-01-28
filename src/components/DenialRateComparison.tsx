import { motion } from 'framer-motion';
import { XCircle, CheckCircle, TrendingDown } from 'lucide-react';

export default function DenialRateComparison() {
  const industryAverage = 17.5;
  const medtransicRate = 3;

  const industryAngle = (industryAverage / 100) * 180;
  const medtransicAngle = (medtransicRate / 100) * 180;

  const Gauge = ({ rate, angle, color, label }: { rate: number; angle: number; color: string; label: string }) => {
    const needleRotation = angle - 90;

    return (
      <div className="relative">
        <svg viewBox="0 0 200 120" className="w-full">
          <defs>
            <linearGradient id={`gauge-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={`url(#gauge-${label})`}
            strokeWidth="20"
            strokeLinecap="round"
          />

          <motion.line
            initial={{ rotate: -90 }}
            animate={{ rotate: needleRotation }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            x1="100"
            y1="100"
            x2="100"
            y2="40"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            style={{ transformOrigin: '100px 100px' }}
          />

          <circle cx="100" cy="100" r="8" fill={color} />

          <text x="20" y="115" fontSize="10" fill="currentColor" className="text-gray-600">
            0%
          </text>
          <text x="88" y="25" fontSize="10" fill="currentColor" className="text-gray-600">
            50%
          </text>
          <text x="170" y="115" fontSize="10" fill="currentColor" className="text-gray-600">
            100%
          </text>
        </svg>

        <div className="text-center mt-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className={`text-4xl font-bold ${color === '#ef4444' ? 'text-red-600' : 'text-green-600'}`}
          >
            {rate}%
          </motion.div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</div>
        </div>
      </div>
    );
  };

  const improvement = ((industryAverage - medtransicRate) / industryAverage) * 100;

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-600 rounded-lg">
          <CheckCircle className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Denial Rate Comparison</h3>
          <p className="text-gray-600 dark:text-gray-400">See how we compare to industry standards</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Industry Average</h4>
            <XCircle className="h-5 w-5 text-red-600" />
          </div>
          <Gauge rate={industryAverage} angle={industryAngle} color="#ef4444" label="Typical Denial Rate" />
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Impact:</strong> On $100K monthly collections, this means $17,500 in denied claims requiring appeals
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-green-500">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Medtransic Clients</h4>
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <Gauge rate={medtransicRate} angle={medtransicAngle} color="#10b981" label="Our Denial Rate" />
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Impact:</strong> On $100K monthly collections, only $3,000 in denied claims - {improvement.toFixed(0)}% better!
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Reduction in Denials</div>
          <div className="text-4xl font-bold text-green-600">{improvement.toFixed(0)}%</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Time Saved on Appeals</div>
          <div className="text-4xl font-bold text-blue-600">80%</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">First-Pass Acceptance</div>
          <div className="text-4xl font-bold text-emerald-600">97%</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white"
      >
        <div className="flex items-start gap-4">
          <TrendingDown className="h-8 w-8 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl font-bold mb-3">How We Achieve Such Low Denial Rates:</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-emerald-300 font-bold">✓</span>
                <span>Real-time eligibility verification before services</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-300 font-bold">✓</span>
                <span>Certified medical coders with specialty expertise</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-300 font-bold">✓</span>
                <span>Automated claim scrubbing before submission</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-300 font-bold">✓</span>
                <span>Prior authorization management and tracking</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-300 font-bold">✓</span>
                <span>Documentation review for medical necessity</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-300 font-bold">✓</span>
                <span>Payer-specific requirement compliance</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Top Denial Reasons (Industry)</h5>
          <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>1. Missing or incorrect patient information (27%)</li>
            <li>2. Service not covered by payer (17%)</li>
            <li>3. Prior authorization required (15%)</li>
            <li>4. Duplicate claim submission (12%)</li>
            <li>5. Coding errors or inconsistencies (29%)</li>
          </ul>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Our Prevention Strategy</h5>
          <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>✓ Real-time patient data verification systems</li>
            <li>✓ Automated benefits and coverage checks</li>
            <li>✓ Proactive prior authorization workflow</li>
            <li>✓ Advanced duplicate detection algorithms</li>
            <li>✓ Expert certified coders with ongoing training</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
