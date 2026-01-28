import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Building, ArrowRight } from 'lucide-react';

export default function CostComparisonTool() {
  const [providers, setProviders] = useState(3);
  const [monthlyCollections, setMonthlyCollections] = useState(200000);

  const calculateCosts = () => {
    const billingStaff = Math.ceil(providers / 2);

    const salaryPerStaff = 45000;
    const benefitsPerStaff = 13500;
    const totalStaffCostAnnual = billingStaff * (salaryPerStaff + benefitsPerStaff);
    const totalStaffCostMonthly = totalStaffCostAnnual / 12;

    const softwareCosts = 500 * providers;
    const trainingCosts = 200 * billingStaff;
    const infrastructureCosts = 300;
    const turnoverCosts = 15000 / 12;
    const complianceCosts = 400;

    const totalInHouseMonthly = totalStaffCostMonthly + softwareCosts + trainingCosts +
                                infrastructureCosts + turnoverCosts + complianceCosts;
    const totalInHouseAnnual = totalInHouseMonthly * 12;
    const inHousePercentage = (totalInHouseMonthly / monthlyCollections) * 100;

    const outsourcedMonthly = monthlyCollections * 0.03;
    const outsourcedAnnual = outsourcedMonthly * 12;
    const outsourcedPercentage = 3;

    const monthlySavings = totalInHouseMonthly - outsourcedMonthly;
    const annualSavings = monthlySavings * 12;

    return {
      billingStaff,
      inHouse: {
        monthly: Math.round(totalInHouseMonthly),
        annual: Math.round(totalInHouseAnnual),
        percentage: inHousePercentage.toFixed(1),
        breakdown: {
          staff: Math.round(totalStaffCostMonthly),
          software: softwareCosts,
          training: trainingCosts,
          infrastructure: infrastructureCosts,
          turnover: Math.round(turnoverCosts),
          compliance: complianceCosts
        }
      },
      outsourced: {
        monthly: Math.round(outsourcedMonthly),
        annual: Math.round(outsourcedAnnual),
        percentage: outsourcedPercentage
      },
      savings: {
        monthly: Math.round(monthlySavings),
        annual: Math.round(annualSavings)
      }
    };
  };

  const results = calculateCosts();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-600 rounded-lg">
          <Building className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">In-House vs Outsourced Cost Comparison</h3>
          <p className="text-gray-600 dark:text-gray-400">Compare true costs of managing billing internally</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Number of Providers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="number"
              value={providers}
              onChange={(e) => setProviders(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              min="1"
              max="20"
            />
          </div>
          <input
            type="range"
            value={providers}
            onChange={(e) => setProviders(Number(e.target.value))}
            min="1"
            max="20"
            className="w-full mt-2"
          />
          <p className="text-xs text-gray-500 mt-1">Estimated Billing Staff Needed: {results.billingStaff}</p>
        </div>

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
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-300 dark:border-gray-600"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">In-House Billing</h4>
            <div className="px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full">
              <span className="text-sm font-semibold text-red-600">{results.inHouse.percentage}%</span>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Staff Salaries & Benefits</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${results.inHouse.breakdown.staff.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Software & EHR Integration</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${results.inHouse.breakdown.software.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Training & Education</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${results.inHouse.breakdown.training.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Infrastructure & Space</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${results.inHouse.breakdown.infrastructure.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Turnover Costs</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${results.inHouse.breakdown.turnover.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Compliance & Audits</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${results.inHouse.breakdown.compliance.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-900 dark:text-white">Monthly Total</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${results.inHouse.monthly.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Annual Total</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${results.inHouse.annual.toLocaleString()}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-green-500"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Outsourced to Medtransic</h4>
            <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="text-sm font-semibold text-green-600">{results.outsourced.percentage}%</span>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Service Fee (3%)</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${results.outsourced.monthly.toLocaleString()}
              </span>
            </div>
            <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="text-2xl">✓</span>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <div className="font-semibold text-green-600 mb-1">Includes Everything:</div>
                <ul className="space-y-1">
                  <li>• Expert billing team</li>
                  <li>• All software & technology</li>
                  <li>• Ongoing training</li>
                  <li>• Compliance management</li>
                  <li>• No turnover risk</li>
                  <li>• Dedicated support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-900 dark:text-white">Monthly Total</span>
              <span className="text-2xl font-bold text-green-600">
                ${results.outsourced.monthly.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Annual Total</span>
              <span className="font-semibold text-green-600">
                ${results.outsourced.annual.toLocaleString()}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <ArrowRight className="h-8 w-8" />
            </div>
            <div>
              <div className="text-sm opacity-90 mb-1">Your Potential Savings</div>
              <div className="text-4xl font-bold">${results.savings.monthly.toLocaleString()}<span className="text-xl">/mo</span></div>
              <div className="text-sm opacity-90 mt-1">
                ${results.savings.annual.toLocaleString()} annually
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-6xl font-bold opacity-20">
              {Math.round((results.savings.monthly / results.inHouse.monthly) * 100)}%
            </div>
            <div className="text-sm opacity-90">Cost Reduction</div>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Calculation Based On:</strong> Industry averages for billing staff ($45K salary + 30% benefits),
          EHR/billing software ($500/provider), training ($200/staff), infrastructure, average turnover costs ($15K annually),
          and compliance overhead. Outsourced rate: 3% of collections with all services included.
        </p>
      </div>
    </div>
  );
}
