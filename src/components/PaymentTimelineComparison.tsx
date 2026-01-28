import { motion } from 'framer-motion';
import { Clock, Zap, TrendingUp } from 'lucide-react';

export default function PaymentTimelineComparison() {
  const withoutService = {
    label: 'Without Professional RCM',
    minDays: 45,
    maxDays: 90,
    avgDays: 67.5,
    color: 'bg-red-500',
    textColor: 'text-red-600'
  };

  const withService = {
    label: 'With Medtransic RCM',
    minDays: 15,
    maxDays: 30,
    avgDays: 22.5,
    color: 'bg-green-500',
    textColor: 'text-green-600'
  };

  const improvement = withoutService.avgDays - withService.avgDays;
  const improvementPercent = (improvement / withoutService.avgDays) * 100;

  const TimelineBar = ({ data, delay }: { data: typeof withoutService; delay: number }) => {
    const width = (data.avgDays / 90) * 100;

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white">{data.label}</h4>
          <div className="flex items-center gap-2">
            <Clock className={`h-5 w-5 ${data.textColor}`} />
            <span className={`text-2xl font-bold ${data.textColor}`}>
              {data.avgDays} days
            </span>
          </div>
        </div>

        <div className="relative h-16 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
            className={`h-full ${data.color} flex items-center justify-between px-4 text-white font-semibold`}
          >
            <span>{data.minDays} days</span>
            <span>{data.maxDays} days</span>
          </motion.div>
        </div>

        <div className="flex justify-between text-xs text-gray-500">
          <span>Service Date</span>
          <span>Payment Received</span>
        </div>
      </div>
    );
  };

  const milestones = [
    { day: 0, label: 'Service Provided', icon: '📋' },
    { day: 15, label: 'Our Avg Payment', icon: '✓' },
    { day: 30, label: 'Optimal Range', icon: '⚡' },
    { day: 45, label: 'Industry Starts', icon: '⏱️' },
    { day: 90, label: 'Industry Avg End', icon: '⚠️' }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-600 rounded-lg">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Collection Timeline</h3>
          <p className="text-gray-600 dark:text-gray-400">How quickly you receive your payments matters</p>
        </div>
      </div>

      <div className="space-y-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <TimelineBar data={withoutService} delay={0} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-green-500">
          <TimelineBar data={withService} delay={0.3} />
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Timeline Visualization (0-90 Days)</h4>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="relative h-24">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(withService.avgDays / 90) * 100}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                />
              </div>
            </div>

            {milestones.map((milestone, index) => {
              const position = (milestone.day / 90) * 100;
              const isInGreenZone = milestone.day <= withService.maxDays;

              return (
                <motion.div
                  key={milestone.day}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute"
                  style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`text-2xl mb-1 ${isInGreenZone ? 'scale-110' : ''}`}>
                      {milestone.icon}
                    </div>
                    <div className="text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      Day {milestone.day}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap mt-1">
                      {milestone.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
        >
          <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Faster by</div>
          <div className="text-4xl font-bold text-green-600">{improvement.toFixed(0)}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">days</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
        >
          <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Improvement</div>
          <div className="text-4xl font-bold text-blue-600">{improvementPercent.toFixed(0)}%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">faster payments</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
        >
          <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Annual Impact</div>
          <div className="text-4xl font-bold text-purple-600">3x</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">more cash cycles</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white mb-6"
      >
        <h4 className="text-xl font-bold mb-3">Why Faster Payments Matter:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-cyan-300 font-bold">💰</span>
              <span><strong>Improved Cash Flow:</strong> Meet payroll and expenses without delays</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-300 font-bold">📈</span>
              <span><strong>Better Reinvestment:</strong> Deploy capital faster for growth</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-300 font-bold">🔄</span>
              <span><strong>More Cycles:</strong> Triple your annual cash conversion cycles</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-cyan-300 font-bold">💳</span>
              <span><strong>Less Debt:</strong> Reduce reliance on credit lines</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-300 font-bold">🎯</span>
              <span><strong>Predictable Revenue:</strong> Consistent payment timing for planning</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-300 font-bold">⚡</span>
              <span><strong>Competitive Advantage:</strong> Outpace practices with slow collections</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Typical Delays Without RCM</h5>
          <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>• Claims submitted with errors (7-14 day delay)</li>
            <li>• Manual follow-up on denials (14-21 days)</li>
            <li>• Missed resubmission deadlines (30+ days)</li>
            <li>• Inefficient payer communication (variable)</li>
            <li>• Understaffed billing department (ongoing)</li>
          </ul>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Our Acceleration Methods</h5>
          <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li>✓ Clean claims on first submission (99% rate)</li>
            <li>✓ Same-day denial response and appeals</li>
            <li>✓ Automated eligibility verification</li>
            <li>✓ Direct payer relationships and EDI optimization</li>
            <li>✓ Dedicated team with no capacity constraints</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
