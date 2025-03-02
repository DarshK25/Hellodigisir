  import { motion } from "framer-motion";

  const HeroSection = () => {
    return (
      <>
        <div className="relative w-full overflow-hidden -mt-[1px]">
          {/* Base background with slanted sections */}
          <div className="absolute inset-0">
            {/* Base color */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgb(231,235,255)] to-white]"></div>
            

            {/* Subtle top gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
          </div>

          {/* Extremely subtle blur circles - adjusted position */}
          <div className="absolute top-40 left-20 w-[800px] h-[800px] bg-blue-100/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-20 w-[800px] h-[800px] bg-indigo-100/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          {/* Very subtle glassmorphism */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent backdrop-blur-[1px]"></div>
          </div>

          {/* Content wrapper */}
          <div className="relative pt-20">
            <section className="relative max-w-7xl mx-auto px-4 pt-12 pb-32">
              <div className="relative z-10">
                {/* Main Content */}
                <div className="text-center max-w-6xl mx-auto">
                  {/* Main Heading */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl sm:text-2xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                  >
                    Create{" "}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-[#4355ff] to-[#7081ff] bg-clip-text text-transparent relative z-10">
                        smarter education
                      </span>
                      {/* Zigzag underline effect */}
                      <div className="absolute -bottom-2 left-0 right-0">
                        <svg className="w-full h-4" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 6C100 6 100 1 200 1C300 1 300 11 400 11" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
                          <defs>
                            <linearGradient id="paint0_linear" x1="0" y1="6" x2="400" y2="6" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#4355ff" stopOpacity="0.3"/>
                              <stop offset="0.5" stopColor="#7081ff" stopOpacity="0.3"/>
                              <stop offset="1" stopColor="#4355ff" stopOpacity="0.3"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      {/* Gradient shadow effect */}
                      <div className="absolute -bottom-1 left-0 right-0 h-8 bg-gradient-to-r from-[#4355ff]/10 via-[#7081ff]/20 to-[#4355ff]/10 blur-lg"></div>
                    </span>
                    <br />
                    using AI & Automation with Erudexa.
                  </motion.h1>

                  {/* Subtext */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                  >
                    Create, schedule, publish, and easily manage your institution&apos;s educational content at scale with Erudexa&apos;s AI-powered platform.
                  </motion.p>

                  {/* Reviews Section */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-4 mb-12"
                  >
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <div className="flex items-center backdrop-blur-sm bg-white/30 px-4 py-2 rounded-full border border-white/20 shadow-sm">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="ml-2 text-gray-600 text-sm font-medium">Most Advanced Learning Platform</span>
                      </div>
                      <div className="hidden md:flex items-center backdrop-blur-sm bg-white/30 px-4 py-2 rounded-full border border-white/20 shadow-sm">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="ml-2 text-gray-600 text-sm font-medium">Trusted by Top Institutions</span>
                      </div>
                      <div className="hidden lg:flex items-center backdrop-blur-sm bg-white/30 px-4 py-2 rounded-full border border-white/20 shadow-sm">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="ml-2 text-gray-600 text-sm font-medium">Best Student Experience</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-blue-500/25">
                      Book a Demo
                    </button>
                    <button className="w-full sm:w-auto bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
                      Create a Class
                    </button>
                  </motion.div>

                  {/* Features Icons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 flex justify-center items-center space-x-6"
                  >
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>Smart Learning</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      <span>Easy Management</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                      <span>Analytics</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Main Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative mt-20 mx-auto max-w-6xl"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
                    alt="Erudexa Dashboard"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Floating Feature Cards */}
                <motion.div
                  className="absolute -right-4 top-1/4 w-64 backdrop-blur-sm bg-white/40 p-4 rounded-xl shadow-lg border border-white/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">AI-Powered Learning</h3>
                      <p className="text-sm text-gray-600">Personalized for each student</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -left-4 bottom-1/4 w-64 backdrop-blur-sm bg-white/40 p-4 rounded-xl shadow-lg border border-white/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Smart Analytics</h3>
                      <p className="text-sm text-gray-600">Track progress in real-time</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </section>
          </div>
        </div>
      </>
    );
  };

  export default HeroSection;