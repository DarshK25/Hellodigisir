import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="max-w-7xl bg-white mx-auto px-6 py-12">
      {/* Header Section */}
      <motion.div id="about"
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-blue-700">About Us</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Hello Digi Sir is a comprehensive platform connecting education and training institutions, teachers, and technology. 
          We empower educators with innovative EdTech solutions, enhancing productivity and academic excellence.
        </p>
      </motion.div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Mission */}
        <motion.div 
          className="bg-green-100 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-green-800">Our Mission</h2>
          <p className="text-gray-600 mt-3">
            To empower educational institutions, educators, and learners by providing innovative, 
            user-friendly EduTech solutions that simplify administrative tasks, enhance teaching experiences, 
            and foster academic excellence.
          </p>
        </motion.div>

        {/* Our Vision */}
        <motion.div 
          className="bg-purple-100 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-purple-800">Our Vision</h2>
          <p className="text-gray-600 mt-3">
            To establish Hello Digi Sir as the leading EduTech platform, connecting millions of educators, learners, 
            and institutions worldwide, and becoming the trusted destination for quality education and skill development.
          </p>
        </motion.div>
      </div>
      <hr className="w-full border-t border-gray-300 mt-12" />
    </div>
  );
};

export default AboutUs;
