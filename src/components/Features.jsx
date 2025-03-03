import { FileText, Book, Megaphone, Clock, Folder, Video, BarChart, School } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Student Management",
    description: "Comprehensive student data management including US-ID, online forms, and more.",
    icon: FileText,
    gradient: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-600",
    subFeatures: ["Admission", "Enrollment", "Student Profiles"],
  },
  {
    title: "Academic Tools",
    description: "Powerful tools for academic management and assessment.",
    icon: Book,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600",
    subFeatures: ["Grading System", "Assignments", "Exam Scheduler"],
  },
  {
    title: "Communication",
    description: "Efficient communication channels for students, parents, and staff.",
    icon: Megaphone,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-600",
    subFeatures: ["Messaging", "Announcements", "Parent Portal"],
  },
  {
    title: "Scheduling",
    description: "Comprehensive scheduling and time management features.",
    icon: Clock,
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-600",
    subFeatures: ["Timetable", "Event Planner", "Reminders"],
  },
  {
    title: "Content Management",
    description: "Robust content creation and management capabilities.",
    icon: Folder,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600",
    subFeatures: ["Lesson Plans", "Study Materials", "E-books"],
  },
  {
    title: "Virtual Learning",
    description: "Advanced virtual and hybrid learning solutions.",
    icon: Video,
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-600",
    subFeatures: ["Live Classes", "Recorded Sessions", "Discussion Forums"],
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and reporting tools for data-driven decisions.",
    icon: BarChart,
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-600",
    subFeatures: ["Performance Reports", "Attendance Analytics", "Custom Reports"],
  },
  {
    title: "Administration",
    description: "Streamlined administrative tools for efficient institute management.",
    icon: School,
    gradient: "from-teal-500/20 to-green-500/20",
    iconColor: "text-teal-600",
    subFeatures: ["Staff Management", "Finance & Payroll", "Inventory Control"],
  },
];

const FeatureCard = ({ title, description, icon: Icon, gradient, iconColor, subFeatures }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative p-8 rounded-2xl bg-white dark:bg-white backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md ${iconColor}`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="space-y-3">
          {subFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#ffffff] dark:bg-[#ffffff]">
      {/* Background blur circles with reduced opacity and explicit light colors */}
      <div className="absolute top-40 left-0 w-[1000px] h-[1000px] bg-[#E7EBFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[#E7EBFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      {/* Additional background layer to ensure light background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#ffffff] opacity-90" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-8 p-4 rounded-lg bg-gradient-to-b from-[#E7EBFF] to-[#ffffff] dark:from-[#E7EBFF] dark:to-[#ffffff]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Revolutionize Your
            <br />
            <span className="bg-gradient-to-r from-[#4355ff] to-[#7081ff] bg-clip-text text-transparent relative z-10">
              Institute Management  
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Empower your institution with our all-in-one solution for seamless management and enhanced learning experiences.
          </motion.p>
        </div>

        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold tracking-wide text-sm"
          >
            FEATURES
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to transform your educational institute?
          </h2>
          <button className="bg-gradient-to-r from-[#4355ff] to-[#7081ff] text-white py-4 px-8 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;