import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Emily Johnson",
    role: "Principal, Greenwood Academy",
    feedback:
      "This system has revolutionized how we manage our institute. It's user-friendly and comprehensive!",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Prof. Michael Chen",
    role: "Head of IT, Tech University",
    feedback:
    
      "The virtual learning tools have made remote education a breeze. Our students love it!",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sarah Thompson",
    role: "Department Head, Sunshine College",
    feedback:
      "The analytics provided by this system have helped us make data-driven decisions to improve our teaching methods.",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Robert Williams",
    role: "Dean, Modern Learning Institute",
    feedback:
      "Our transition to digital education has been seamless. The platform's features are outstanding!",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Jessica Brown",
    role: "EdTech Consultant, Future Minds",
    feedback:
      "The collaboration tools have improved engagement and learning outcomes significantly!",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    name: "David Anderson",
    role: "Director, EduSphere Academy",
    feedback:
      "This platform is a game-changer in the education sector. The support team is excellent!",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="bg-white dark:bg-white backdrop-blur-sm p-6 rounded-2xl shadow-sm flex flex-col items-center w-[300px] shrink-0"
    whileHover={{ scale: 1.02 }}
    style={{
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
    }}
  >
    <img
      src={testimonial.avatar}
      alt={testimonial.name}
      className="w-16 h-16 rounded-full mb-4 border-2 border-white shadow-md"
    />
    <p className="text-gray-700 dark:text-gray-700 text-center italic mb-3">&ldquo;{testimonial.feedback}&rdquo;</p>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-900">{testimonial.name}</h4>
    <p className="text-gray-500 dark:text-gray-500 text-sm">{testimonial.role}</p>
  </motion.div>
);

const Testimonials = () => {
  const multipliedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden bg-[#ffffff] dark:bg-[#ffffff] py-24">
      {/* Background blur circles with reduced opacity */}
      <div className="absolute top-40 left-0 w-[1000px] h-[1000px] bg-[#E7EBFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[#E7EBFF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      {/* Additional background layer to ensure light background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#ffffff] opacity-90" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-blue-50 dark:bg-blue-50 text-blue-600 dark:text-blue-600 font-semibold tracking-wide text-sm mb-8"
          >
            TESTIMONIALS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-900 mb-4"
          >
            Don&apos;t take our word for it.
            <br />
            See what our clients say.
          </motion.h2>

          <div className="flex items-center justify-center gap-2 mb-12">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-600 dark:text-gray-600 ml-2">from 500+ reviews</span>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Left gradient overlay */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32
                          bg-gradient-to-r from-[#ffffff] dark:from-[#ffffff] to-transparent z-10" />

          {/* Right Fade Overlay */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32
                          bg-gradient-to-l from-[#ffffff] dark:from-[#ffffff] to-transparent z-10" />

          <div className="grid grid-rows-2 gap-6 w-full">
            {/* First Row */}
            <div className="relative h-[300px] w-full overflow-hidden">
              <motion.div
                className="flex gap-6 absolute left-0"
                animate={{ x: [0, -1 * (testimonials.length * 324)] }}
                transition={{
                  duration: 70,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...multipliedTestimonials, ...multipliedTestimonials].map((testimonial, index) => (
                  <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-6 absolute left-0"
                animate={{ x: [-1 * (testimonials.length * 324), 0] }}
                transition={{
                  duration: 70,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...multipliedTestimonials, ...multipliedTestimonials].map((testimonial, index) => (
                  <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
