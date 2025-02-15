import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f3f5fc] to-[#e0e7ff] text-center py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Dotted Background (commented out for now) */}
      {/* <div className="absolute top-0 w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100% 50%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="blue" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div> */}

      <div className="max-w-4xl mx-auto relative">
        {/* Stars / Reviews Section */}
        <div className="flex justify-center space-x-2 sm:space-x-4 text-yellow-500 text-sm sm:text-lg mb-4 sm:mb-6">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="text-gray-700">Best Institute Management App</span>
          <span>⭐⭐⭐⭐⭐</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">
          🚀 NOW MANAGE YOUR INSTITUTION <br />
          <motion.span
            className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            HASSLE-FREE WITH DIGISIR
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-xl text-gray-600 mt-4 sm:mt-6 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Access the world's best institute app with DigiSir. <br className="hidden sm:block" />
          Experience the world of EduTech and explore the DigiSir within you.
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg transition-all transform hover:scale-105 shadow-[0_4px_15px_rgba(59,130,246,0.8)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)]">
            Book a Demo
          </button>

          <button className="bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow hover:shadow-xl transition-all transform hover:scale-105">
            Create a Class
          </button>
        </div>
      </div>

      {/* Slant Separator */}
      <br></br><br></br>
      <div className="absolute -bottom-15 left-0 w-full h-20 overflow-hidden">
        <div className="w-full h-full bg-white transform skew-y-3 origin-top-left"></div>
      </div>
    </section>
  );
};

export default HeroSection;