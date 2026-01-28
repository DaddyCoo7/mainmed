import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target } from 'lucide-react';

export default function BreakEvenAnalysis() {
  const [monthlyCollections, setMonthlyCollections] = useState(150000);
  const [currentInHouseCost, setCurrentInHouseCost] = useState(12000);

  const calculateAnalysis = () => {
    const months = 12;
    const monthlyServiceFee = monthlyCollections * 0.03;

    const improvedCollections = monthlyCollections * 1.25;
    const improvedServiceFee = improvedCollections * 0.03;
    const monthlyGain = (improvedCollections - improvedServiceFee) - monthlyCollections;

    const monthlySavings = currentInHouseCost - monthlyServiceFee;
    const totalMonthlySavings = monthlyGain + monthlySavings;

    const setupCost = 0;
    const breakEvenMonth = setupCost > 0 ? Math.ceil(setupCost / totalMonthlySavings) : 0;

    const timeline = [];
    let cumulativeInHouseCost = 0;
    let cumulativeOutsourcedCost = 0;
    let cumulativeOutsourcedValue = 0;

    for (let month = 0; month <= months; month++) {
      cumulativeInHouseCost += currentInHouseCost;
      cumulativeOutsourcedCost += improvedServiceFee;
      cumulativeOutsourcedValue += improvedCollections;

      timeline.push({
        month,
        inHouseCost: cumulativeInHouseCost,
        outsourcedCost: cumulativeOutsourcedCost,
        collections: monthlyCollections * month,
        improvedCollections: cumulativeOutsourcedValue,
        netSavings: (cumulativeInHouseCost - cumulativeOutsourcedCost) + ((cumulativeOutsourcedValue - (monthlyCollections * month)))
      });
    }

    return {
      monthlyServiceFee: Math.round(monthlyServiceFee),
      improvedCollections: Math.round(improvedCollections),
      improvedServiceFee: Math.round(improvedServiceFee),
      monthlyGain: Math.round(monthlyGain),
      monthlySavings: Math.round(monthlySavings),
      totalMonthlySavings: Math.round(totalMonthlySavings),
      breakEvenMonth,
      timeline,
      firstYearSavings: Math.round(totalMonthlySavings * 12)
    };
  };

  const analysis = calculateAnalysis();
  const maxValue = Math.max(...analysis.timeline.map(t => Math.max(t.inHouseCost, t.improvedCollections)));

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-emerald-600 rounded-lg">
          <Target className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Break-Even Analysis</h3>
          <p className="text-gray-600 dark:text-gray-400">When does your investment pay for itself?</p>
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
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
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
            Current In-House Billing Cost
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="number"
              value={currentInHouseCost}
              onChange={(e) => setCurrentInHouseCost(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              min="1000"
              step="1000"
            />
          </div>
          <input
            type="range"
            value={currentInHouseCost}
            onChange={(e) => setCurrentInHouseCost(Number(e.target.value))}
            min="1000"
            max="50000"
            step="1000"
            className="w-full mt-2"
          />
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">12-Month Financial Projection</h4>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="relative" style={{ height: '320px' }}>
            {/* Y-axis labels */}
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 pointer-events-none z-10">
              {[4, 3, 2, 1, 0].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-16 text-right">${((maxValue / 4) * i / 1000).toFixed(0)}K</span>
                  <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="absolute left-20 right-0 bottom-0" style={{ top: '8px', height: 'calc(100% - 32px)' }}>
              <div className="relative w-full h-full flex gap-2">
                {analysis.timeline.slice(1).map((data, index) => {
                  const month = index + 1;
                  const inHouseHeight = Math.max((data.inHouseCost / maxValue) * 100, 1);
                  const improvedHeight = Math.max((data.improvedCollections / maxValue) * 100, 1);

                  return (
                    <div key={month} className="flex-1 relative group">
                      {/* Bars container */}
                      <div className="absolute bottom-6 left-0 right-0 flex gap-1" style={{ height: 'calc(100% - 24px)' }}>
                        {/* Red bar - In-House Cost */}
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${inHouseHeight}%` }}
                          transition={{ duration: 0.5, delay: month * 0.05 }}
                          className="flex-1 bg-red-400 rounded-t hover:bg-red-500 transition-colors cursor-pointer relative"
                          style={{
                            minWidth: '8px',
                            alignSelf: 'flex-end'
                          }}
                          title={`In-House: $${data.inHouseCost.toLocaleString()}`}
                        />
                        {/* Green bar - Improved Collections */}
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${improvedHeight}%` }}
                          transition={{ duration: 0.5, delay: month * 0.05 }}
                          className="flex-1 bg-green-400 rounded-t hover:bg-green-500 transition-colors cursor-pointer relative"
                          style={{
                            minWidth: '8px',
                            alignSelf: 'flex-end'
                          }}
                          title={`With Service: $${data.improvedCollections.toLocaleString()}`}
                        />
                      </div>

                      {/* Month label */}
                      <div className="absolute bottom-0 left-0 right-0 text-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">M{month}</span>
                      </div>

                      {/* Hover tooltip */}
                      <div className="hidden group-hover:flex absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-black/90 text-white text-xs p-2 rounded whitespace-nowrap z-20">
                        <div>
                          <div>In-House Cost: ${data.inHouseCost.toLocaleString()}</div>
                          <div>Improved Value: ${data.improvedCollections.toLocaleString()}</div>
                          <div className="text-green-300">Net Savings: ${data.netSavings.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-400 rounded"></div>
              <span className="text-gray-600 dark:text-gray-400">Cumulative In-House Cost</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded"></div>
              <span className="text-gray-600 dark:text-gray-400">Cumulative Improved Collections</span>
            </div>
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
            <Target className="h-5 w-5 text-emerald-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Break-Even Point</span>
          </div>
          <div className="text-4xl font-bold text-emerald-600">
            {analysis.breakEvenMonth === 0 ? 'Day 1' : `Month ${analysis.breakEvenMonth}`}
          </div>
          <div className="text-xs text-gray-500 mt-1">Immediate positive ROI</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Monthly Net Benefit</span>
          </div>
          <div className="text-4xl font-bold text-blue-600">
            ${analysis.totalMonthlySavings.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">Savings + increased revenue</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-gray-600 dark:text-gray-400">First Year Total</span>
          </div>
          <div className="text-4xl font-bold text-purple-600">
            ${analysis.firstYearSavings.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">Net benefit in year 1</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white"
      >
        <h4 className="text-xl font-bold mb-4">Your Investment Breakdown:</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm opacity-90 mb-3">Monthly Costs:</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Current In-House Billing</span>
                <span className="font-semibold">${currentInHouseCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Our Service Fee (3%)</span>
                <span className="font-semibold">${analysis.improvedServiceFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/20">
                <span className="font-bold">Monthly Savings</span>
                <span className="font-bold">${analysis.monthlySavings.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-3">Revenue Impact:</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Current Collections</span>
                <span className="font-semibold">${monthlyCollections.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Improved Collections (+25%)</span>
                <span className="font-semibold">${analysis.improvedCollections.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/20">
                <span className="font-bold">Revenue Gain</span>
                <span className="font-bold">${analysis.monthlyGain.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Analysis Based On:</strong> Industry average 25% improvement in collections with professional RCM,
          3% service fee on improved collections, comparison to current in-house costs. No setup fees or hidden costs.
          Results may vary based on specialty, payer mix, and current billing efficiency.
        </p>
      </div>
    </div>
  );
}
