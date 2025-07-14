'use client';

import { Check, GitGraphIcon } from 'lucide-react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ServicesLast = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const leftInView = useInView(leftRef, { once: true, margin: '-100px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (leftInView) leftControls.start('visible');
    if (rightInView) rightControls.start('visible');
  }, [leftInView, rightInView, leftControls, rightControls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full bg-stone-900 py-10 mt-20">
      <div className="flex flex-col justify-center lg:justify-normal lg:flex-row lg:items-center w-full lg:max-w-5xl mx-auto gap-4 px-4 lg:px-0">
        {/* left side  */}
        <motion.div
          ref={leftRef}
          initial="hidden"
          animate={leftControls}
          variants={sectionVariants}
          className="w-full lg:w-1/2"
        >
          <button className="bg-yellow-700/30 px-3 py-2 rounded-xl mb-10 text-yellow-400 font-bold">
            Dont Miss
          </button>
          <h3 className="text-4xl font-bold shadow-2xl text-stone-100">
            Revolutionize Your Digital Experience Today
          </h3>
          <p className="font-semibold text-stone-500 mt-10">
            We believe in crafting exceptional experiences that drive meaningful
            growth for your business. Our dedicated team combines creativity
            with technical excellence to deliver solutions that make a
            difference.
          </p>

          <div className="flex flex-col md:flex-row gap-3 items-center mt-8">
            <ServiceCard title="Business Consulting" />
            <ServiceCard title="24/7 Customer Support" />
            <ServiceCard title="Custom Software Development" />
          </div>

          <div className="mt-12 flex justify-center lg:justify-normal gap-4 lg:ml-2">
            <button className="bg-yellow-400 text-white rounded-3xl px-8 py-3 text-bold hover:bg-yellow-300">
              Learn More
            </button>
            <button className="text-yellow-400 border-2 border-yellow-400 rounded-3xl px-8 py-3 text-bold hover:bg-yellow-400 hover:text-white">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* right side  */}
        <motion.div
          ref={rightRef}
          initial="hidden"
          animate={rightControls}
          variants={sectionVariants}
          className="relative w-full lg:w-1/2 mt-8 lg:mt-0"
        >
          <div className="w-full h-[50vh] relative ">
            <Image
              src="https://bootstrapmade.com/content/demo/Instant/assets/img/misc/misc-5.webp"
              fill
              alt=""
              className="rounded-xl relative z-10 object-cover"
            />
          </div>

          <div className="bg-[#191919] w-fit px-6 h-[15vh] rounded-2xl absolute top-[60%] right-[5%] z-20 hidden lg:flex justify-center gap-6 items-center border-2 border-stone-800 shadow-[ -15px_0px_30px_#00f5d4 ]">
            <div className="bg-yellow-50 p-2 rounded-xl">
              <GitGraphIcon className="text-yellow-400 font-bold " />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold shadow-2xl text-center">
                500+
              </h3>
              <p className="text-sm font-semibold text-stone-300">
                Satisfied Clients
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ServicesLast;

const ServiceCard = ({ title }: { title: string }) => {
  return (
    <div className="py-4 rounded-2xl bg-stone-800 relative overflow-hidden group">
      <div className="w-0 bg-yellow-400 h-[2px] absolute top-0 group-hover:w-full transition-all duration-500" />
      <div className="flex gap-2 items-center px-4">
        <div className="bg-yellow-500 p-1 rounded-xl text-black">
          <Check className="w-3 h-3" />
        </div>
        <p className="text-balance text-xs font-bold shadow-2xl">{title}</p>
      </div>
    </div>
  );
};
