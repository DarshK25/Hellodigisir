import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesTable = () => {
  const availFeatures = [
    'Student Management',
    'Teacher Management',
    'Course Management',
    'Attendance Tracking',
    'Grade Management',
    'Fee Management',
    'Student Track Record via Aadhaar',
    'Comprehensive Remark History',
    'Pre-joining Verification',
    'Seminar Leads Management',
    'Feedback QR',
    'PR Assistant',
    'Brand Building Kit',
    'Fees Recovery Made Easy',
    'Bad Debt Reduction',
    'Stock Manager',
    'Fees Receipt Generation',
    'Student ID Card Generation',
    'Unique ID Generator',
    'Historic Record Keeping',
    'Birthday Wishes Reminder'
  ];

  return (
    <section className="relative py-24 bg-[#ffffff] dark:bg-[#ffffff] overflow-hidden">
      {/* Background blur circles with reduced opacity */}
      <div className="absolute top-0 left-[-20%] w-[1000px] h-[1000px] bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute bottom-0 right-[-20%] w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block p-4 sm:p-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why choose Erudexa?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Comparison of different Institution Management Systems
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative w-full sm:w-11/12 md:w-10/12 lg:w-3/4 mx-auto backdrop-blur-sm bg-white/80 border border-white/20 rounded-xl shadow-lg"
        >
          <div className="w-full">
            <table className="w-full divide-y divide-gray-200/50">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50/90 to-white/90">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-gray-900 tracking-wider w-1/3">
                    Features
                  </th>
                  <th className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold text-gray-900 tracking-wider">
                    Basic
                  </th>
                  <th className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold text-gray-900 tracking-wider">
                    Advanced
                  </th>
                  <th className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold text-gray-900 tracking-wider">
                    Erudexa
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {availFeatures.map((feature, index) => (
                  <tr 
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-white/60' : 'bg-gray-50/60'
                    } hover:bg-blue-50/40 transition-colors duration-150`}
                  >
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 break-words">
                      {feature}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 text-center">
                      {index < 5 ? (
                        <Check className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-red-400 opacity-50" />
                      )}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 text-center">
                      {index < 10 ? (
                        <Check className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-4 w-4 sm:h-5 sm:w-5 text-red-400 opacity-50" />
                      )}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-4 text-center">
                      <div className="flex items-center justify-center">
                        <div className="p-0.5 sm:p-1 rounded-full bg-green-100">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 sm:mt-16"
        >
          <div className="inline-block p-4 sm:p-8">
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Experience the most comprehensive Institution Management System
            </p>
            <button className="bg-gradient-to-r from-[#4355ff] to-[#7081ff] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesTable;