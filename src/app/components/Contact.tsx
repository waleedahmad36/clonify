"use client";

import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  LocationEdit,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import TopHeading from "./TopHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactItems = [
  {
    icon: LocationEdit,
    title: "Visit Our Office",
    description: "1247 Fifth Avenue, Manhattan, NY 10029",
  },
  {
    icon: Mail,
    title: "Send Email",
    description: "waleed09ahmad42@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Direct",
    description: "+92 313 6392359",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Mon-Sat: 8AM - 7PM",
  },
];

const socialIcons = [Facebook, Instagram, Youtube, Linkedin];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto"
    >
      <TopHeading heading="Contact" />
      <p className="text-center my-3 mx-3"   id="contact"  >
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="w-full flex flex-col lg:flex-row gap-4 my-20 px-4 lg:px-0">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full lg:w-1/2"
        >
          <h3 className="text-3xl font-extrabold shadow-2xl">Connect With Us</h3>
          <div className="bg-yellow-400 h-[4px] w-[50px] rounded-xl" />
          <p className="mt-3 lg:mt-1 text-stone-300 font-bold shadow">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam.
          </p>

          <div className="my-8 flex flex-col gap-6">
            {contactItems.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="bg-stone-900 rounded-xl p-4 flex items-center gap-8 group hover:border hover:border-yellow-400 transition"
              >
                <div className="bg-yellow-900/30 text-yellow-400 p-2 rounded-xl w-fit group-hover:bg-yellow-400 group-hover:text-white transition-all duration-300 ease-linear">
                  <Icon className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-lg font-bold shadow-2xl mb-0.5">{title}</h3>
                  <p className="text-sm font-semibold">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Section */}
          <div className="bg-stone-900 rounded-xl p-10 flex items-center gap-8">
            <div className="w-full flex flex-col gap-8 items-center justify-center">
              <h3 className="text-xl font-bold shadow-xl text-stone-100">
                Follow Our Journey
              </h3>
              <div className="flex gap-3">
                {socialIcons.map((Icon, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-full bg-stone-950 shadow-[0_0_10px_#facc15] hover:shadow-[0_0_20px_#facc15] hover:-translate-y-1 hover:bg-yellow-400 transition-all duration-300 group"
                  >
                    <Icon className="text-yellow-400 group-hover:text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side (Form) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-stone-900/70 w-full lg:w-1/2 rounded-xl px-8 pb-10"
        >
          <h3 className="text-center text-2xl font-bold shadow-2xl mt-10">
            Send Us Message
          </h3>
          <p className="text-center text-sm text-stone-300 mt-5">
            Ut enim ad minim veniam quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <form className="w-full mt-10 flex flex-col gap-4">
            {[{ label: "Full Name", placeholder: "Enter your full name" },
              { label: "Email Address", placeholder: "Enter your Email" },
              { label: "Phone number", placeholder: "Enter your phone number" },
              { label: "Subject", placeholder: "Enter message subject" },
            ].map(({ label, placeholder }, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <label className="text-sm font-bold shadow-xl text-stone-300">
                  {label}
                </label>
                <input
                  placeholder={placeholder}
                  className="bg-transparent border-2 px-2 py-3 rounded-lg border-stone-800 outline-none focus:border-yellow-400 transition-all duration-300"
                />
              </div>
            ))}

            {/* Textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold shadow-xl text-stone-300">
                Your Message
              </label>
              <textarea
                placeholder="Enter your full address"
                className="bg-transparent border-2 px-2 py-3 rounded-lg border-stone-800 outline-none focus:border-yellow-400 transition-all duration-300"
              />
            </div>

            <button className="w-full bg-yellow-400 rounded-2xl py-3 hover:bg-yellow-500 mt-4 font-semibold">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
