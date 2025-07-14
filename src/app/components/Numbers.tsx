"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const Counter = ({ targetNumber, suffix = "" }: { targetNumber: number | string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    let end = typeof targetNumber === "string" ? parseFloat(targetNumber) : targetNumber;
    let startTime: number | null = null;
    const duration = 1000; // in ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end); // ensure it finishes exactly at target
      }
    };

    requestAnimationFrame(step);
  }, [isInView, targetNumber]);

  return (
    <h3 ref={ref} className="text-yellow-400 text-2xl font-bold">
      {count}
      {typeof targetNumber === "string" && isNaN(Number(targetNumber)) ? suffix : ""}
    </h3>
  );
};

const Numbers = () => {
  return (
    <div className="flex gap-8 mt-10">
      <div>
        <Counter targetNumber={150} suffix="+" />
        <p className="font-semibold text-stone-400 text-sm">Features</p>
      </div>
      <div>
        <Counter targetNumber={99.9} suffix="%" />
        <p className="font-semibold text-sm text-stone-400">Uptime</p>
      </div>
      <div>
        <Counter targetNumber={24} />
        <p className="font-semibold text-sm text-stone-400">Support</p>
      </div>
    </div>
  );
};

export default Numbers;
