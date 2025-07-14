"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Stat = ({ target, label }: { target: number; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const duration = 1500;
      const incrementTime = 20;
      const increment = Math.ceil(end / (duration / incrementTime));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, incrementTime);
    }
  }, [isInView, target]);

  return (
    <div ref={ref}>
      <h3 className="text-4xl font-extrabold shadow-2xl text-center lg:text-left">
        {count}+{/* append '+' if needed */}
      </h3>
      <p className="text-md font-semibold text-stone-300">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="bg-stone-900">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-y-8 py-32 items-center justify-between">
        {/* Left side */}
        <div className="flex gap-2">
          <Image
            src="https://bootstrapmade.com/content/demo/Instant/assets/img/person/person-m-2.webp"
            alt=""
            width={60}
            height={60}
            className="rounded-full border border-yellow-400 hover:-translate-y-2 duration-300 transition-all"
          />
          <Image
            src="https://bootstrapmade.com/content/demo/Instant/assets/img/person/person-m-3.webp"
            alt=""
            width={60}
            height={60}
            className="rounded-full border border-yellow-400 hover:-translate-y-2 duration-300 transition-all"
          />
          <Image
            src="https://bootstrapmade.com/content/demo/Instant/assets/img/person/person-f-5.webp"
            alt=""
            width={60}
            height={60}
            className="rounded-full border border-yellow-400 hover:-translate-y-2 duration-300 transition-all"
          />
          <Image
            src="https://bootstrapmade.com/content/demo/Instant/assets/img/person/person-m-5.webp"
            alt=""
            width={60}
            height={60}
            className="rounded-full border border-yellow-400 hover:-translate-y-2 duration-300 transition-all"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-wrap justify-center lg:justify-normal gap-x-12">
          <Stat target={185} label="Nemo enim ipsam" />
          <Stat target={32000} label="Voluptatem sequi" />
          <Stat target={128} label="Dolor sit consectetur" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
