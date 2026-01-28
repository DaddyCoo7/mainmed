import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, AlertCircle } from 'lucide-react';

interface AgingBucket {
  label: string;
  days: string;
  collectionRate: number;
  color: string;
  bgColor: string;
}

export default function ARAgingVisualization() {
  const [totalAR, setTotalAR] = useState(500000);

  const agingBuckets: AgingBucket[] = [
    { label: '0-30 Days', days: '0-30', collectionRate: 95, color: 'text-green-600', bgColor: 'bg-green-500' },
    { label: '31-60 Days', days: '31-60', collectionRate: 85, color: 'text-blue-600', bgColor: 'bg-blue-500' },
    { label: '61-90 Days', days: '61-90', collectionRate: 70, color: 'text-yellow-600', bgColor: 'bg-yellow-500' },
    { label: '91-120 Days', days: '91-120', collectionRate: 50, color: 'text-orange-600', bgColor: 'bg-orange-500' },
    { label: '120+ Days', days: '120+', collectionRate: 25, color: 'text-red-600', bgColor: 'bg-red-500' }
  ];

  const [distribution, setDistribution] = useState([30, 25, 20, 15, 10]);

  const calculateMetrics = () => {
    const bucketValues = distribution.map((percent, index) => ({
      ...agingBuckets[index],
      amount: (totalAR * percent) / 100,
      percent,
      expectedCollection: ((totalAR * percent) / 100) * (agingBuckets[index].collectionRate / 100)
    }));

    const totalExpectedCollection = bucketValues.reduce((sum, bucket) => sum + bucket.expectedCollection, 0);
    const potentialLoss = totalAR - totalExpectedCollection;
    const avgCollectionRate = (totalExpectedCollection / totalAR) * 100;

    return {
      bucketValues,
      totalExpectedCollection: Math.round(totalExpectedCollection),
      potentialLoss: Math.round(potentialLoss),
      avgCollectionRate: avgCollectionRate.toFixed(1)
    };
  };

  const metrics = calculateMetrics();

  const updateDistribution = (index: number, value: number) => {
    const newDist = [...distribution];
    const oldValue = newDist[index];
    const diff = value - oldValue;

    newDist[index] = value;

    let remaining = diff;
    for (let i = 0; i < newDist.length && remaining !== 0; i++) {
      if (i !== index) {
        const adjustment = Math.min(remaining, newDist[i]);
        newDist[i] -= adjustment;
        remaining -= adjustment;
        if (remaining === 0) break;
      }
    }

    const total = newDist.reduce((sum, val) => sum + val, 0);
    if (total === 100) {
      setDistribution(newDist);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-purple-600 rounded-lg">
          <Clock className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AR Aging Analysis</h3>
          <p className="text-gray-600 dark:text-gray-400">Visualize collection probability by aging bucket</p>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Total Accounts Receivable
        </label>
        <input
          type="number"
          value={totalAR}
          onChange={(e) => setTotalAR(Number(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
          min="10000"
          step="10000"
        />
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">AR Distribution by Aging</h4>
        <div className="space-y-4">
          {agingBuckets.map((bucket, index) => (
            <div key={bucket.label}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900 dark:text-white">{bucket.label}</span>
                  <span className="text-sm text-gray-500">
                    Collection Rate: <span className={`font-semibold ${bucket.color}`}>{bucket.collectionRate}%</span>
                  </span>
                </div>
                <span className="font-bold text-gray-900 dark:text-white">{distribution[index]}%</span>
              </div>
              <input
                type="range"
                value={distribution[index]}
                onChange={(e) => updateDistribution(index, Number(e.target.value))}
                min="0"
                max="100"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Waterfall Visualization</h4>
        <div className="relative h-64 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-end justify-between h-full gap-2">
            {metrics.bucketValues.map((bucket, index) => {
              const heightPercent = (bucket.amount / totalAR) * 100;
              const collectionHeight = (bucket.expectedCollection / bucket.amount) * heightPercent;

              return (
                <div key={bucket.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPercent}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`w-full ${bucket.bgColor} rounded-t-lg relative group`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/75 text-white text-xs p-2 rounded">
                        ${bucket.amount.toLocaleString()}
                      </div>
                    </div>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(bucket.collectionRate / 100) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      className="w-full bg-white/30 rounded-t-lg absolute bottom-0"
                    />
                  </motion.div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-gray-900 dark:text-white">{bucket.days}</div>
                    <div className="text-xs text-gray-500">{bucket.percent}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-b from-green-500 to-red-500 rounded"></div>
            <span className="text-gray-600 dark:text-gray-400">Total AR Amount</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded"></div>
            <span className="text-gray-600 dark:text-gray-400">Expected Collection</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Total AR</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            ${totalAR.toLocaleString()}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Expected Collection</span>
          </div>
          <div className="text-3xl font-bold text-green-600">
            ${metrics.totalExpectedCollection.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">{metrics.avgCollectionRate}% rate</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Potential Loss</span>
          </div>
          <div className="text-3xl font-bold text-red-600">
            ${metrics.potentialLoss.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">from aging accounts</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white"
      >
        <div className="flex items-start gap-4">
          <AlertCircle className="h-8 w-8 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl font-bold mb-2">Key Insights:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-pink-300">•</span>
                <span>Accounts over 120 days have only a 25% collection probability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-300">•</span>
                <span>Every 30 days of aging significantly reduces your collection likelihood</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-300">•</span>
                <span>Proactive AR management can recover up to 85% of aging accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-300">•</span>
                <span>Best practice: Keep 80%+ of AR under 60 days</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Industry Benchmarks:</strong> Healthy practices maintain 60-70% of AR in 0-30 day bucket,
          20-25% in 31-60 days, and less than 15% over 60 days. Collection rates decline dramatically
          as accounts age beyond 90 days.
        </p>
      </div>
    </div>
  );
}
