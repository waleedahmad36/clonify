"use client";
import Image from "next/image";
import StoryCard from "./StoryCard";
import { Compass, GitGraph, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <div className="w-full px-4 lg:px-20 flex flex-col lg:flex-row gap-8 mt-24 mb-10">
      {/* Left side (static) */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-[90vh] relative rounded-xl overflow-hidden mt-6 hover:mt-2 transition-all duration-700">
        <Image
          src="https://bootstrapmade.com/content/demo/Instant/assets/img/about/about-portrait-7.webp"
          fill
          alt=""
          className="object-cover"
        />
      </div>

      {/* Right side (animated) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex flex-col items-center lg:block"
      >
        <div>
          <h3 className="text-white shadow-2xl text-3xl font-bold">Our Story</h3>
          <div className="bg-yellow-400 h-1 w-[50px] rounded-2xl" />
        </div>

        <h3 className="text-xl text-stone-400 mt-2">
          Crafting innovative solutions since 2010
        </h3>

        <p className="text-stone-100 mt-12 tracking-wider text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
          mauris in magna fringilla finibus. Suspendisse potenti. Integer ut
          fringilla mi, a aliquam risus. Maecenas ac nibh magna. Aenean
          fringilla lobortis ex, sit amet iaculis eros facilisis nec.
        </p>

        <div className="mt-14 flex flex-wrap gap-2">
          <StoryCard
            title="Exelence"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            Icon={Compass}
          />
          <StoryCard
            title="Innovation"
            description="Proin vel mauris in magna fringilla finibus."
            Icon={Lightbulb}
          />
          <StoryCard
            title="Community"
            description="Suspendisse potenti. Integer ut fringilla mi."
            Icon={Users}
          />
          <StoryCard
            title="Growth"
            description="Maecenas ac nibh magna. Aenean fringilla lobortis ex."
            Icon={GitGraph}
          />
        </div>

        <div className="mt-12 flex gap-4 ml-2">
          <button className="bg-yellow-400 text-white rounded-3xl px-8 py-3 text-bold hover:bg-yellow-300">
            Learn More
          </button>
          <button className="text-yellow-400 border-2 border-yellow-400 rounded-3xl px-8 py-3 text-bold hover:bg-yellow-400 hover:text-white">
            Contact us
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Story;
