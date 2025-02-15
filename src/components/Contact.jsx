import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import earthTexture from "../assets/8k_earth_daymap.jpg"; // Ensure the texture path is correct
import { motion } from "framer-motion";
import { useRef } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame } from "@react-three/fiber";

// Globe Component
const Globe = () => {
  const texture = useLoader(TextureLoader, earthTexture);

  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} emissive="#ffffff" emissiveIntensity={0.1} />
    </mesh>
  );
};

// Stars Component
const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 5 }); // Increase radius for background stars

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.01} // Slightly larger stars
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f3f5fc] to-[#e0e7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-blue-500 sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reach out to us for any inquiries or collaborations.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Rotating Globe with Stars */}
          <motion.div
            className="bg-gray-800 rounded-lg shadow-lg p-8 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} intensity={1} />
              <Stars />
              <Globe />
              <OrbitControls
                enableZoom={false}
                autoRotate={true} // Enable auto-rotation
                autoRotateSpeed={1} // Adjust rotation speed
              />
            </Canvas>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:from-blue-700 hover:to-indigo-800"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
        {/* Slant Separator */}
        <br></br><br></br>
        <div className="absolute bottom-13 left-0 w-full h-20 overflow-hidden">
            <div className="w-full h-full bg-white transform skew-y-3 origin-top-left"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;