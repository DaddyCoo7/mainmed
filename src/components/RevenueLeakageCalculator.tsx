import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';

export default function RevenueLeakageCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(150000);
  const [leakageRate, setLeakageRate] = useState(20);

  const calculateLeakage = () => {
    const monthlyLoss = (monthlyRevenue * leakageRate) / 100;
    const annualLoss = monthlyLoss * 12;
    const potentialRecovery = monthlyLoss * 0.85;
    const annualRecovery = potentialRecovery * 12;

    return {
      monthlyLoss: Math.round(monthlyLoss),
      annualLoss: Math.round(annualLoss),
      potentialRecovery: Math.round(potentialRecovery),
      annualRecovery: Math.round(annualRecovery)
    };
  };

  const results = calculateLeakage();
  const leakagePercentage = (results.monthlyLoss / monthlyRevenue) * 100;

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-red-600 rounded-lg">
          <AlertTriangle className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Revenue Leakage Calculator</h3>
          <p className="text-gray-600 dark:text-gray-400">Discover how much revenue you might be losing</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Monthly Revenue Potential
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="number"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 outline-none"
              min="10000"
              step="10000"
            />
          </div>
          <input
            type="range"
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
            min="10000"
            max="1000000"
            step="10000"
            className="w-full mt-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Estimated Leakage Rate: {leakageRate}%
          </label>
          <input
            type="range"
            value={leakageRate}
            onChange={(e) => setLeakageRate(Number(e.target.value))}
            min="5"
            max="30"
            step="1"
            className="w-full mt-6"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>5% (Efficient)</span>
            <span>15% (Average)</span>
            <span>30% (Poor)</span>
          </div>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${100 - leakagePercentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-end pr-4"
          >
            <span className="text-white font-bold text-sm">
              {(100 - leakagePercentage).toFixed(1)}% Collected
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${leakagePercentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute top-0 right-0 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-r-lg flex items-center justify-center"
        >
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <TrendingDown className="h-4 w-4" />
            <span>{leakagePercentage.toFixed(1)}% Lost</span>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <TrendingDown className="h-5 w-5 text-red-600" />
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Revenue Loss</span>
          </div>
          <div className="text-4xl font-bold text-red-600 mb-1">
            ${results.monthlyLoss.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">
            Annual Loss: <span className="font-semibold text-red-600">${results.annualLoss.toLocaleString()}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Potential Recovery</span>
          </div>
          <div className="text-4xl font-bold text-green-600 mb-1">
            ${results.potentialRecovery.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">
            Annual Recovery: <span className="font-semibold text-green-600">${results.annualRecovery.toLocaleString()}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 text-white"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-8 w-8 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl font-bold mb-2">Common Sources of Revenue Leakage:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-300">•</span>
                <span>Denied claims not appealed (up to 65% never resubmitted)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300">•</span>
                <span>Coding errors and missed documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300">•</span>
                <span>Underpayments from insurance carriers (2-5% of claims)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300">•</span>
                <span>Missed charges and unbilled services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300">•</span>
                <span>Write-offs and uncollected patient balances</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Industry Data:</strong> Healthcare practices typically lose 10-30% of potential revenue due to gaps in RCM processes.
          With proper billing management, 85% of this revenue can be recovered.
        </p>
      </div>
    </div>
  );
}
