"use client";
import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/utils/data";
import TestimonialCard from "./TestimonialCard";

const CARD_WIDTH = 340; // adjust to your card width + gap

const Slider = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (containerRef.current && innerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const innerWidth = innerRef.current.scrollWidth;
      setMaxScroll(innerWidth - containerWidth);
    }
  }, []);

  const slideNext = () => {
    const current = x.get();
    const next = Math.max(current - CARD_WIDTH, -maxScroll);
    animate(x, next, { type: "spring", stiffness: 300, damping: 30 });
  };

  const slidePrev = () => {
    const current = x.get();
    const prev = Math.min(current + CARD_WIDTH, 0);
    animate(x, prev, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden my-20">
      {/* Navigation Buttons */}
      <button
        onClick={slidePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 p-2 rounded-full hover:scale-105 transition"
      >
        <ArrowLeft className="text-black" />
      </button>

      <button
        onClick={slideNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 p-2 rounded-full hover:scale-105 transition"
      >
        <ArrowRight className="text-black" />
      </button>

      {/* Draggable Content */}
      <motion.div
        ref={innerRef}
        className="flex gap-6 px-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -maxScroll, right: 0 }}
        style={{ x }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            position={testimonial.position}
            description={testimonial.description}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
