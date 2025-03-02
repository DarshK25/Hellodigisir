import { motion } from 'framer-motion';

const images = {
  set1: {
    main: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070", // Dashboard UI
    overlay1: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070", // Student interface
    overlay2: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070", // Learning
    overlay3: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070", // Analytics
  },
  set2: {
    main: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?q=80&w=2069", // Management
    overlay1: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070", // Virtual classroom
    overlay2: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074", // Education
    overlay3: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070", // Modern learning
  }
};

const AboutUs = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white via-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-20 relative overflow-hidden"
      >
        {/* Background blur circles for atmosphere */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              To establish Erudexa as the leading EduTech platform, connecting millions of educators, learners, and institutions worldwide.
            </p>
          </motion.div>

          {/* First Image Set */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            {/* Left - Image Stack */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[600px]"
            >
              <motion.div
                className="absolute top-0 right-0 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={images.set1.main} alt="Dashboard" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
              </motion.div>
              <motion.div
                className="absolute bottom-20 -left-4 w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={images.set1.overlay1} alt="Interface" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent"></div>
              </motion.div>
              <motion.div
                className="absolute top-[20%] -right-8 w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                <img src={images.set1.overlay2} alt="Learning" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Empower education with a single platform
              </h2>
              <p className="text-lg text-gray-600">
                You deserve a seamless EduTech experience in 2025. Erudexa simplifies administration,
                enhances learning, and drives academic excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Smart Automation</h3>
                    <p className="text-gray-600">Automate administrative tasks for focused teaching</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Enhanced Learning</h3>
                    <p className="text-gray-600">Create immersive learning experiences</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Image Set */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Transform Education Through Technology
              </h2>
              <p className="text-lg text-gray-600">
                Erudexa is on a mission to transform education with seamless connectivity, 
                skill development, and cutting-edge learning solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-500 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Comprehensive Solutions</h3>
                    <p className="text-gray-600">All-in-one platform for educational needs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500 text-white p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Advanced Analytics</h3>
                    <p className="text-gray-600">Data-driven educational insights</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Image Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[600px] order-1 md:order-2"
            >
              <motion.div
                className="absolute top-0 left-0 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={images.set2.main} alt="Management" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/40 to-transparent"></div>
              </motion.div>
              <motion.div
                className="absolute bottom-20 -right-4 w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={images.set2.overlay1} alt="Virtual Classroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
              </motion.div>
              <motion.div
                className="absolute top-[20%] -left-8 w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                <img src={images.set2.overlay2} alt="Education" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-transparent"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
