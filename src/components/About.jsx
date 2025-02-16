import { motion } from 'framer-motion';
import our_mission from '../assets/our_mission.avif';
import our_vision from '../assets/our_vision.avif';
import newClass from '../assets/newClass.avif';
import learning from '../assets/learning.avif';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            About Us
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            To establish Hello Digi Sir as the leading EduTech platform, connecting millions of educators, learners, and institutions worldwide, and becoming the trusted destination for quality education, skill development, and innovation in learning.
          </p>
        </div>

        {/* First Row - Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Content - Overlapping Images */}
          <div className="relative max-w-md mx-auto">
            <motion.img
              src={newClass}
              alt="Our Vision"
              className="w-full h-64 object-cover backdrop-blur-lg bg-white/20 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              src={our_vision}
              alt="Our Vision"
              className="absolute top-8 left-8 w-full h-64 object-cover backdrop-blur-lg bg-blue-500 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
          
          {/* Right Content - Vision */}
          <div className="space-y-6 lg:pl-8 sm:pl-10">
            <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-widest ">
              Our Vision
            </h5>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold leading-tight text-gray-900 mt-2"
            >
              Transforming Education with 
              <span className="relative inline-block">
                Innovation
                <span className="absolute left-0 bottom-1 w-full h-[5px] bg-gray-300 opacity-50"></span>
              </span>
            </motion.h1>

            <div className="mt-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-4.586-4.586a2 2 0 00-2.829 0l-4.586 4.586M14.752 16.829l-4.586-4.586a2 2 0 00-2.829 0l-4.586 4.586"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Personalized Learning</h3>
                  <p className="text-gray-600">Tailored educational content to match individual learning styles and paces.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-red-500 text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Interactive Courses</h3>
                  <p className="text-gray-600">Engage with expert-led courses and hands-on learning experiences.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Second Row - Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          {/* Left Content - Mission */}
          <div className="space-y-6 pl-20">
            <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
              Our Mission
            </h5>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold leading-tight text-gray-900 mt-2"
            >
              Empowering Education Through {" "}
              <span className="relative inline-block">
                Tech
                <span className="absolute left-0 bottom-1 w-full h-[5px] bg-gray-300 opacity-50"></span>
              </span>
            </motion.h1>

            <div className="mt-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-green-500 text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Comprehensive EduTech solutions</h3>
                  <p className="text-gray-600">Provide user-friendly EdTech solutions. Simplify tasks and enhance learning.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-purple-500 text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900"> Enhance Learning Experiences</h3>
                  <p className="text-gray-600">Innovative tools for educators and students. Foster academic excellence for all.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Content - Overlapping Images */}
          <div className="relative max-w-md mx-auto">
            <motion.img
              src={our_mission}
              alt="Our Mission"
              className="w-full h-64 object-cover backdrop-blur-lg bg-white/20 shadow-lg"
              style={{
                background: "linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(255, 255, 255, 0))"
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.img
              src={learning}
              alt="Our Mission"
              className="absolute top-8 left-8 w-full h-64 object-cover backdrop-blur-lg bg-blue-500 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
