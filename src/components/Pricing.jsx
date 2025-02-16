import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const PricingCard = ({ title, price, features, description, isSelected, onSelect }) => (
  <motion.div 
    id="pricing"
    className={`flex flex-col h-full rounded-lg shadow-lg overflow-hidden cursor-pointer ${
      isSelected ? "border-2 border-blue-500" : "border-2 border-transparent"
    }`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    onClick={onSelect}
  >
    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6 flex-grow">
      <motion.h3 
        className="text-center text-2xl font-semibold text-gray-900"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {title}
      </motion.h3>

      <div className="mt-4 flex justify-center">
        <motion.span 
          className="px-3 flex items-start text-5xl tracking-tight text-gray-900"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-xl mt-2 mr-2">₹</span>
          <span className="font-extrabold">{price}</span>
        </motion.span>
        <span className="text-xl font-medium text-gray-500 mt-8">/year</span>
      </div>

      <motion.p 
        className="mt-5 text-lg text-gray-500 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {description}
      </motion.p>
    </div>

    <div className="flex flex-col flex-grow px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
          >
            <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
            <p className="ml-3 text-base text-gray-700">{feature}</p>
          </motion.li>
        ))}
      </ul>

      <motion.div 
        className="mt-auto"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <a
          href="#contact"
          className={`block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-md ${
            isSelected
              ? "text-white bg-blue-600 hover:bg-blue-700" //to put a light border on button even when not selected we
              : "text-blue-600 bg-white shadow-md border border-gray-200 hover:bg-blue-50"
          }`}
        >
          Choose a plan
        </a>
      </motion.div>
    </div>
  </motion.div>
);

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    {
      title: "1 Year Plan",
      price: "20000",
      description: "Perfect for getting started",
      features: [
        "Access to all basic features",
        "Unlimited students and teachers profile",
        "25GB cloud storage",
        "Email support",
        "All the managements will be available",
        "Live lectures and recording available"
      ]
    },
    {
      title: "1 Year Plan",
      price: "22500",
      description: "Great value for growing educators",
      features: [
        "All features of 1st Plan",
        "Unlimited students and teachers profile",
        "50GB cloud storage",
        "Priority email & chat support",
        "Advanced analytics",
        "Live lectures and recording available"
      ]
    },
    {
      title: "1 Year Plan",
      price: "25000",
      description: "Best value for established institutions",
      features: [
        "All features of 2nd Plan",
        "Unlimited student profiles",
        "100GB cloud storage",
        "24/7 phone, email & chat support",
        "Custom integrations",
        "Dedicated account manager",
        "Personalized website"
      ]
    }
  ];

  return (
    <motion.section 
      id="pricing" 
      className="py-20 bg-gradient-to-br from-[#f3f5fc] to-[#e0e7ff]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center">
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Choose Your Plan
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Select the perfect plan to empower your teaching journey with DigiSir
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              isSelected={selectedPlan === index}
              onSelect={() => setSelectedPlan(index)}
            />
          ))}
        </motion.div>
      </motion.div>
      <br></br><br></br>
      <div className="absolute -bottom-15 left-0 w-full h-20 overflow-hidden">
        <div className="w-full h-full bg-white transform skew-y-3 origin-top-left"></div>
      </div>
    </motion.section>
  );
};

export default Pricing;
