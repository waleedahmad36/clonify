"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you’re not satisfied, contact our support team.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order is shipped, we will send you a tracking number via email.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. Shipping charges may vary depending on your location.",
  },
  {
    question: "Can I cancel or change my order?",
    answer: "Orders can be canceled or modified within 24 hours of placing them.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We use the latest encryption technologies to secure your data.",
  },
  {
    question: "Do you have a mobile app?",
    answer: "Yes, our mobile app is available on both iOS and Android platforms.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full   px-4">
      <div className="space-y-6">
        {faqs.map((item, index) => {
          const isOpen = activeIndex === index;
          const contentRef = useRef<HTMLDivElement>(null);

          return (
            <div key={index} className="bg-stone-900 rounded-xl border border-stone-700">
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-5 py-6 text-left group"
              >
                <h3 className="text-white font-semibold text-lg">{item.question}</h3>

                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-yellow-400"
                >
                  <Plus className="w-6 h-6" />
                </motion.div>
              </button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: contentRef.current?.scrollHeight || "auto",
                      opacity: 1,
                    }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden px-5 text-stone-300 text-sm leading-relaxed"
                  >
                    <div ref={contentRef} className="py-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqAccordion;
