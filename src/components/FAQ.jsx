import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Will the app have my coaching name?",
    answer: "Yes, your coaching name can be included in the app.",
  },
  {
    question: "Can we add offline students in our app?",
    answer:
      "Yes, you can add both online and offline students to manage all your students in one place.",
  },
  {
    question: "Any limitation on the number of students that can be added?",
    answer: "No, there are no limitations on the number of students you can add.",
  },
  {
    question: "How to start without recorded content?",
    answer: "You can start by adding live sessions, assignments, and notes for your students.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        For more understanding, visit FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md transition-shadow duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <span className="text-xl text-blue-600">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;