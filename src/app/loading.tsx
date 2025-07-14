"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = ["Loading Experience...", "Launching Interface...", "Optimizing Modules..."];

export default function Loading() {
  const [textIndex, setTextIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => {
      clearInterval(cycle);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-stone-900 to-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Glowing Spinner */}
            <div className="flex gap-1 mt-2">
  {[0, 1, 2].map((i) => (
    <motion.span
      key={i}
      className="w-3 h-3 bg-yellow-400 rounded-full"
      animate={{ y: [0, -6, 0] }}
      transition={{
        repeat: Infinity,
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeInOut",
      }}
    />
  ))}
</div>

            {/* Typing Text Effect */}
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-stone-400 text-sm font-medium tracking-wide"
            >
              {texts[textIndex]}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
