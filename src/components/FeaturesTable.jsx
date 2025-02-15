import { Check, X } from 'lucide-react';

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
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why choose Digisir?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comparison of different Institution Management Systems
          </p>
        </div>

        <div className="mt-12">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Features
                </th>
                <th className="px-4 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Basic IMS
                </th>
                <th className="px-4 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Advanced IMS
                </th>
                <th className="px-4 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Our IMS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {availFeatures.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  {/* Feature Name (Allow Wrapping) */}
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-normal">
                    {feature}
                  </td>
                  {/* Basic IMS */}
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    {index < 5 ? (
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    )}
                  </td>
                  {/* Advanced IMS */}
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    {index < 10 ? (
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    )}
                  </td>
                  {/* Our IMS */}
                  <td className="px-4 py-4 whitespace-nowrap text-center">
                    <Check className="mx-auto h-5 w-5 text-green-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTable;