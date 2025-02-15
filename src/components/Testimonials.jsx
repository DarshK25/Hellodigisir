import { motion } from "framer-motion";
import { useRef } from "react";

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
    className="bg-white p-3 rounded-2xl shadow-sm flex flex-col items-center w-[300px] border border-gray-200 shrink-0"
    whileHover={{ scale: 1.05 }}
    style={{
      boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
    }}
  >
    <img
      src={testimonial.avatar}
      alt={testimonial.name}
      className="w-16 h-16 rounded-full mb-4 border border-gray-300 shadow-sm"
    />
    <p className="text-gray-700 text-center italic mb-3">"{testimonial.feedback}"</p>
    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
    <p className="text-gray-500 text-sm">{testimonial.role}</p>
  </motion.div>
);

const Testimonials = () => {
  const containerRef = useRef(null);
  const multipliedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 w-full" ref={containerRef}>
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        What Our Users Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="grid grid-rows-2 gap-6 w-full">
          {/* First Row */}
          <div className="relative h-[300px] w-full overflow-hidden">
            <motion.div
              className="flex gap-6 absolute left-0"
              animate={{
                x: [0, -1 * (testimonials.length * 324)],
              }}
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
              animate={{
                x: [-1 * (testimonials.length * 324), 0],
              }}
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
  );
};

export default Testimonials;