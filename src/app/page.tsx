"use client";

import { useEffect, useState } from "react";
import Addvertice from "./components/Addvertice";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Problems from "./components/Problems";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Story from "./components/Story";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 10000); // 10 seconds
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <Hero />
      <Addvertice />
      <Story />
      <Features />
      <Services />
      <Testimonials />
      <Stats />
      <Problems />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
