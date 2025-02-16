import { motion } from 'framer-motion';
import our_mission from '../assets/our_mission.avif';
import our_vision from '../assets/our_vision.avif';
import newClass from '../assets/newClass.avif';
import learning from '../assets/learning.avif';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex bg-white items-center justify-center py-16"
    >
      <div className="mx-auto px-4 w-full max-w-7xl">
        {/* Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            About Us
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            To establish Hello Digi Sir as the leading EduTech platform, connecting millions of educators, learners, and institutions worldwide, and becoming the trusted destination for quality education, skill development, and innovation in learning.
          </p>
        </motion.div>

        {/* First Row - Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Content - Overlapping Images */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-md mx-auto order-2 md:order-1"
          >
            <motion.img
              src={newClass}
              alt="Our Vision"
              className="w-full h-64 object-cover shadow-2xl shadow-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-transparent blur-xl"></div>
            <motion.img
              src={our_vision}
              alt="Our Vision"
              className="absolute top-8 left-8 w-full h-64 object-cover shadow-2xl shadow-gray-700 backdrop-blur-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-800/10 to-transparent blur-xl"></div>
          </motion.div>

          {/* Right Content - Mission */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6 order-1 md:order-2 text-center md:text-left"
          >
            <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
              Our Mission
            </h5>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 mt-2"
            >
              Empower education with a{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative inline-block"
              >
                single platform
                <span className="absolute left-0 bottom-0 w-full h-[5px] bg-gray-300 opacity-50"></span>
              </motion.span>
            </motion.h1>
            <p className="text-gray-600">
              You deserve a seamless EduTech experience in 2025. HelloDigiSir simplifies administration,
              enhances learning, and drives academic excellence.
            </p>
            <div className="mt-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-4.586-4.586a2 2 0 00-2.829 0l-4.586 4.586M14.752 16.829l-4.586-4.586a2 2 0 00-2.829 0l-4.586 4.586"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Smart Automation</h3>
                  <p className="text-gray-600">
                    Automate administrative tasks, so educators can focus on what truly matters: teaching.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-red-500 text-white p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Enhanced Learning</h3>
                  <p className="text-gray-600">
                    Create interactive and immersive learning experiences for students and educators alike.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Spacing between sections for smaller screens */}
        <div className="my-12"></div>

        {/* Second Row - Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20">
          {/* Left Content - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6 order-2 lg:pl-16 md:order-1 text-center md:text-left"
          >
            <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
              Our Vision
            </h5>
            <p className="text-gray-600">
              You deserve an innovative learning ecosystem in 2025. HelloDigiSir is on a mission to transform
              education with seamless connectivity, skill development, and cutting-edge learning solutions.
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 mt-2"
            >
              Empowering Education Through{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="relative inline-block"
              >
                Tech
                <span className="absolute left-0 bottom-0 w-full h-[5px] bg-gray-300 opacity-50"></span>
              </motion.span>
            </motion.h1>

            <div className="mt-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-green-500 text-white p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Comprehensive EduTech Solutions
                  </h3>
                  <p className="text-gray-600">
                    Provide user-friendly EdTech solutions. Simplify tasks and enhance learning.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-purple-500 text-white p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Enhance Learning Experiences
                  </h3>
                  <p className="text-gray-600">
                    Innovative tools for educators and students. Foster academic excellence for all.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Overlapping Images */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative max-w-md mx-auto order-1 md:order-2 mb-20 md:mb-0"
          >
            <motion.img
              src={our_mission}
              alt="Our Mission"
              className="w-full h-64 object-cover backdrop-blur-lg shadow-2xl shadow-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/10 to-transparent"></div>
            <motion.img
              src={learning}
              alt="Our Mission"
              className="absolute top-8 left-8 w-full h-64 object-cover shadow-2xl shadow-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-800/10 to-transparent blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
