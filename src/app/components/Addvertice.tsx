"use client";

import { GitGraph, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Addvertice = () => {
  return (
    <div className="relative">
      {/* Animated image on first load */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative p-4 bg-stone-950 rounded-3xl flex justify-center items-center w-fit mx-auto mt-10 border border-stone-800"
      >
        <Image
          src="https://bootstrapmade.com/content/demo/Instant/assets/img/about/about-18.webp"
          alt=""
          width={850}
          height={600}
          className="rounded-3xl object-center z-10 relative w-full lg:w-[850px]"
        />
      </motion.div>

      {/* Left Card (animates when in view) */}
      <motion.div
        className="bg-[#191919] w-fit px-6 h-[15vh] rounded-2xl absolute top-[16%] left-[5%] z-20 hidden lg:flex justify-center gap-6 items-center border-2 border-stone-800 shadow-[-15px_0px_30px_#00f5d4]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="bg-yellow-50 p-2 rounded-xl">
          <GitGraph className="text-yellow-400 font-bold" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold shadow-2xl text-center">
            89%
          </h3>
          <p className="text-sm font-semibold text-stone-300">
            Success Benchmark
          </p>
        </div>
      </motion.div>

      {/* Right Card (animates when in view) */}
      <motion.div
        className="bg-[#191919] w-fit px-6 h-[15vh] rounded-2xl absolute top-[60%] right-[5%] z-20 hidden lg:flex justify-center gap-6 items-center border-2 border-stone-800 shadow-[-15px_0px_30px_#00f5d4]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="bg-yellow-50 p-2 rounded-xl">
          <Users className="text-yellow-400 font-bold" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold shadow-2xl text-center">
            500+
          </h3>
          <p className="text-sm font-semibold text-stone-300">
            Satisfied Clients
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Addvertice;
