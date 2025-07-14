'use client';
import {
  ArrowRight,
  BarChart2,
  Check,
  GitGraph,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import FeaturesStatCards from './FeaturesStatCards';
import Numbers from './Numbers';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const FeaturesLast = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const topControls = useAnimation();
  const bottomControls = useAnimation();

  const topInView = useInView(topRef, { once: true, margin: '-100px' });
  const bottomInView = useInView(bottomRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (topInView) topControls.start('visible');
    if (bottomInView) bottomControls.start('visible');
  }, [topInView, bottomInView, topControls, bottomControls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const points: string[] = [
    'Excepteur sint occaecat cupidatat non proident',
    'Tempor incididunt ut labore et dolore magna aliqua',
    'Reprehenderit in voluptate velit esse cillum',
    'Duis aute irure dolor in reprehenderit',
  ];

  return (
    <div className="bg-[#191919] w-full max-w-6xl mx-auto min-h-screen rounded-xl mt-20 px-8 py-10">
      {/* Top Cards */}
      <motion.div
        ref={topRef}
        initial="hidden"
        animate={topControls}
        className="flex flex-col lg:flex-row gap-6 lg:gap-2"
      >
        {[ // Cards data
          {
            title: 'Innovation',
            description: 'Cutting-edge solutions',
            Icon: Sparkles,
          },
          {
            title: 'Security',
            description: 'Built-in protection and compliance',
            Icon: ShieldCheck,
          },
          {
            title: 'Analytics',
            description: 'Data-driven performance tracking',
            Icon: BarChart2,
          },
          {
            title: 'Collaboration',
            description: 'Real-time teamwork and sharing',
            Icon: Users,
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className="w-full"
          >
            <FeaturesStatCards
              first={index === 0}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        ref={bottomRef}
        initial="hidden"
        animate={bottomControls}
        variants={sectionVariants}
        className="w-full flex flex-col lg:flex-row gap-6 mt-18 lg:items-center"
      >
        {/* Left Side */}
        <div className="lg:w-1/2">
          <div className="p-2 rounded-xl bg-yellow-400 w-fit">
            <Rocket className="w-16 h-16" />
          </div>
          <h3 className="text-3xl font-extrabold shadow-2xl mt-12">
            Innovation Excellence
          </h3>
          <p className="text-stone-300 mt-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-8">
            {points.map((point, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div className="bg-yellow-500 p-1 rounded-lg w-fit">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <p className="text-sm text-white">{point}</p>
              </div>
            ))}
          </div>

          <Numbers />

    
<button
  className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group mt-4"
>
  <span
    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-500 rounded-full group-hover:w-56 group-hover:h-56"
  ></span>
  <span className="absolute bottom-0 left-0 h-full -ml-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-full opacity-100 object-stretch"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
      ></path>
    </svg>
  </span>
  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="object-cover w-full h-full"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
      ></path>
    </svg>
  </span>
  <span
    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
  ></span>
  <span className="relative text-base font-semibold">Hover Me !</span>
</button>

        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="w-full relative h-[60vh] overflow-hidden rounded-xl group">
            <Image
              src="https://bootstrapmade.com/content/demo/Instant/assets/img/features/features-4.webp"
              fill
              alt=""
              className="rounded-xl object-cover relative z-10 scale-100 group-hover:scale-[1.03] transition-transform duration-300"
            />
          </div>

          <div className="flex gap-3 items-center bg-stone-950 rounded-xl py-2 px-4 w-fit absolute bottom-10 left-6 z-20">
            <GitGraph className="text-yellow-300" />
            <div>
              <p className="text-sm font-semibold text-stone-400">Performance</p>
              <h3 className="text-lg font-bold shadow-2xl">
                +85% improvement
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesLast;
