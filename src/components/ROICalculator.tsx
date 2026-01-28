import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Calculator } from 'lucide-react';

export default function ROICalculator() {
  const [monthlyCollections, setMonthlyCollections] = useState(100000);
  const [practiceSize, setPracticeSize] = useState('medium');

  const calculateROI = () => {
    const currentRevenueLoss = monthlyCollections * 0.15;
    const improvedCollections = monthlyCollections * 1.30;
    const serviceFee = improvedCollections * 0.03;
    const netGain = (improvedCollections - serviceFee) - monthlyCollections;
    const annualNetGain = netGain * 12;

    const inHouseCosts = practiceSize === 'small' ? 8000 :
                        practiceSize === 'medium' ? 15000 : 25000;
    const totalMonthlySavings = netGain + inHouseCosts;

    return {
      currentRevenueLoss: Math.round(currentRevenueLoss),
      improvedCollections: Math.round(improvedCollections),
      serviceFee: Math.round(serviceFee),
      netGain: Math.round(netGain),
      annualNetGain: Math.round(annualNetGain),
      inHouseCosts,
      totalMonthlySavings: Math.round(totalMonthlySavings),
      annualTotalSavings: Math.round(totalMonthlySavings * 12),
      roi: Math.round((totalMonthlySavings / serviceFee) * 100)
    };
  };

  const results = calculateROI();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-600 rounded-lg">
          <Calculator className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">ROI Calculator</h3>
          <p className="text-gray-600 dark:text-gray-400">See your potential savings and revenue gains</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Monthly Collections
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="number"
              value={monthlyCollections}
              onChange={(e) => setMonthlyCollections(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              min="10000"
              step="10000"
            />
          </div>
          <input
            type="range"
            value={monthlyCollections}
            onChange={(e) => setMonthlyCollections(Number(e.target.value))}
            min="10000"
            max="1000000"
            step="10000"
            className="w-full mt-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Practice Size
          </label>
          <select
            value={practiceSize}
            onChange={(e) => setPracticeSize(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="small">Small (1-2 providers)</option>
            <option value="medium">Medium (3-5 providers)</option>
            <option value="large">Large (6+ providers)</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-red-500"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Current Revenue Loss</span>
          </div>
          <div className="text-3xl font-bold text-red-600">
            ${results.currentRevenueLoss.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">per month (15% loss)</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Monthly Net Gain</span>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-green-600">
            ${results.netGain.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">increased collections - service fee</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Total Monthly Savings</span>
          </div>
          <div className="text-3xl font-bold text-blue-600">
            ${results.totalMonthlySavings.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">vs. in-house billing costs</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm opacity-90 mb-1">Annual Net Gain</div>
            <div className="text-4xl font-bold">${results.annualNetGain.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Annual Total Savings</div>
            <div className="text-4xl font-bold">${results.annualTotalSavings.toLocaleString()}</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="text-sm opacity-90">Return on Investment</div>
          <div className="text-3xl font-bold">{results.roi}%</div>
        </div>
      </motion.div>

      <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Calculation Notes:</strong> Based on industry averages: 15% current revenue loss, 30% improvement in collections,
          3% service fee, plus elimination of in-house billing staff costs (${results.inHouseCosts.toLocaleString()}/month for {practiceSize} practice).
        </p>
      </div>
    </div>
  );
}
