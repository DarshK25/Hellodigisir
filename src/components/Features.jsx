import { FileText, Book, Megaphone, Clock, Folder, Video, BarChart, School } from "lucide-react";

const features = [
  {
    title: "Student Management",
    description: "Comprehensive student data management including US-ID, online forms, and more.",
    icon: FileText,
    color: "bg-red-100",
    subFeatures: ["Admission", "Enrollment", "Student Profiles"],
  },
  {
    title: "Academic Tools",
    description: "Powerful tools for academic management and assessment.",
    icon: Book,
    color: "bg-blue-100",
    subFeatures: ["Grading System", "Assignments", "Exam Scheduler"],
  },
  {
    title: "Communication",
    description: "Efficient communication channels for students, parents, and staff.",
    icon: Megaphone,
    color: "bg-purple-100",
    subFeatures: ["Messaging", "Announcements", "Parent Portal"],
  },
  {
    title: "Scheduling",
    description: "Comprehensive scheduling and time management features.",
    icon: Clock,
    color: "bg-yellow-100",
    subFeatures: ["Timetable", "Event Planner", "Reminders"],
  },
  {
    title: "Content Management",
    description: "Robust content creation and management capabilities.",
    icon: Folder,
    color: "bg-green-100",
    subFeatures: ["Lesson Plans", "Study Materials", "E-books"],
  },
  {
    title: "Virtual Learning",
    description: "Advanced virtual and hybrid learning solutions.",
    icon: Video,
    color: "bg-indigo-100",
    subFeatures: ["Live Classes", "Recorded Sessions", "Discussion Forums"],
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and reporting tools for data-driven decisions.",
    icon: BarChart,
    color: "bg-orange-100",
    subFeatures: ["Performance Reports", "Attendance Analytics", "Custom Reports"],
  },
  {
    title: "Administration",
    description: "Streamlined administrative tools for efficient institute management.",
    icon: School,
    color: "bg-teal-100",
    subFeatures: ["Staff Management", "Finance & Payroll", "Inventory Control"],
  },
];

const FeatureCard = ({ title, description, icon: Icon, color, subFeatures }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${color}`}>
          <Icon className="w-5 h-5 text-gray-700" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-3 text-sm text-gray-500 space-y-1">
        {subFeatures.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Features = () => {
  return (
    <div id="featues" className="bg-gradient-to-br from-[#f3f5fc] to-[#e0e7ff] max-w-6xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        Comprehensive Educational Management System
      </h2>
      <h4 className="text-xl text-gray-600 mt-6 mb-8">
        Empower your institution with our all-in-one solution for seamless management and enhanced learning experiences.
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900 mt-10">
        Ready to transform your educational institute?
      </h2>
      <button className="mt-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg shadow-md shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:bg-blue-700 transition">
        Get Started
      </button>
      <br></br><br></br>
      <div className="absolute bottom-13 left-0 w-full h-20 overflow-hidden">
        <div className="w-full h-full bg-white transform skew-y-2 origin-top-left"></div>
      </div>
    </div>
  );
};

export default Features;