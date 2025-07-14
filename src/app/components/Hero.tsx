"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <motion.div
      className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center min-h-[65vh]"    
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="pt-16 text-center"  id="home"  >
        <h2 className="text-4xl md:text-5xl shadw-2xl font-extrabold">
          Transform Your Workflow With
        </h2>

        <h3 className="text-5xl shadow-2xl font-extrabold text-yellow-400 mt-1">
          Seamless Integration
        </h3>

        <p className="text-gray-100 text-md shadow-2xl w-full max-w-md mx-auto mt-8">
          Our innovative platform empowers businesses to enhance their
          productivity and achieve unparalleled operational efficiency across
          diverse industries.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="bg-yellow-500 text-shadow-lg flex items-center justify-between gap-2 py-3 px-6 rounded-lg">
          <p>Discover More Today</p>
          <ArrowRight />
        </button>
        <button className="text-shadow-lg flex items-center justify-between gap-2 py-3 px-6 rounded-xl border border-gray-700 hover:text-yellow-400 hover:border-yellow-400">
          <PlayCircle />
          <p>Discover More Today</p>
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
