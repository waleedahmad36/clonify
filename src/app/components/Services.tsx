"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StarIcon } from "lucide-react";
import TopHeading from "./TopHeading";
import Image from "next/image";
import ServicesCards from "./ServicesCards";
import ServicesLast from "./ServicesLast";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      id="services"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-24"
    >
      {/* Top Heading */}
      <TopHeading heading="Services" />
      <p className="text-center mt-8 font-semibold text-stone-400">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* left right sec */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-center px-4 lg:px-0">
        {/* left side */}
        <div className="w-full flex flex-col items-center justify-center lg:block lg:w-1/2 my-10">
          <button className="w-fit bg-yellow-600/30 flex gap-2 px-3 py-2 rounded-xl mb-5">
            <StarIcon className="text-yellow-400" />
            What we do
          </button>
          <h3 className="text-4xl font-bold shadow-2xl text-stone-100 text-center lg:text-left">
            Transforming Ideas into Outstanding Results
          </h3>
          <p className="font-semibold text-stone-500 mt-10 text-center lg:text-left">
            We believe in crafting exceptional experiences that drive meaningful
            growth for your business. Our dedicated team combines creativity
            with technical excellence to deliver solutions that make a
            difference.
          </p>

          <button className="bg-yellow-400 px-4 py-2 rounded-2xl mt-8">
            Explore Our Work
          </button>
        </div>

        {/* right side */}
        <div className="w-full lg:w-1/2 h-[50vh] relative">
          <Image
            src="https://bootstrapmade.com/content/demo/Instant/assets/img/services/services-1.webp"
            fill
            alt=""
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* services cards */}
      <ServicesCards />
      <ServicesLast />
    </motion.div>
  );
};

export default Services;
