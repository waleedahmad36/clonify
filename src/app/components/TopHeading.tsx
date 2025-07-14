'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  heading: string;
};

const TopHeading = ({ heading }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }}
      className="flex gap-2 justify-center items-center"
    >
      <div className="w-[50px] h-[2px] rounded-2xl bg-yellow-500" />
      <h3 className="text-5xl shadow-5-2xl font-bold tracking-wider">{heading}</h3>
      <div className="w-[50px] h-[2px] rounded-2xl bg-yellow-500" />
    </motion.div>
  );
};

export default TopHeading;
