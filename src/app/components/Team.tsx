"use client";

import { ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { teamData } from "@/utils/data";



const Team = () => {
  return (
    <div className="my-24 w-full px-4">
       <div  className="w-full max-w-6xl mx-auto mt-10 mb-20" >
        <h3  className="text-4xl font-bold shadow-2xl" >Our Professional Team</h3>
        <div   className="h-[3] w-[70]  rounded-xl mt-2 bg-yellow-400" />
        <p  className="text-stone-300 max-w-md mt-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.</p>
       </div>
      <Slider />
    </div>
  );
};

export default Team;

const Slider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to current index
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: currentIndex * 270,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative">
         {/* Controls */}
      <div className="flex justify-end gap-4 mt-8 mb-18">
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + teamData.length) % teamData.length)
          }
          className="bg-stone-950 px-2 py-2 rounded-full font-bold border-2 border-yellow-400"
        >
          <ChevronLeft/> 
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % teamData.length)}
          className="bg-stone-950 px-2 py-2 rounded-full font-bold border-2 border-yellow-400"
        >
           <ChevronRight/>
        </button>
      </div>
      <div
        ref={containerRef}
        className="flex overflow-x-scroll no-scrollbar gap-6 scroll-smooth snap-x"
        style={{ scrollbarWidth: "none" }}
      >
        {teamData?.map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
      </div>

     
    </div>
  );
};

const TeamCard = ({ member }: { member: any }) => {
  return (
    <div className="w-[250px] shrink-0 rounded-lg overflow-hidden snap-start group">
      <div className="w-full h-[150px] relative  rounded-lg overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden group-hover:flex gap-2 absolute bottom-2 left-1/2 -translate-x-1/2 z-20"
        >
          {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -4 }}
              className="bg-white p-2 rounded-full hover:bg-yellow-400 transition-all cursor-pointer"
            >
              <Icon className="w-4 h-4 text-black" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="bg-stone-900 w-full text-center p-2 pb-4">
        <h3 className="text-lg font-bold mt-2">{member.name}</h3>
        <p className="text-yellow-400 text-md font-semibold">{member.role}</p>
        <p className="text-stone-400 text-sm mt-5">{member.description}</p>
      </div>
    </div>
  );
};
