"use client";

import { useEffect, useState } from "react";
import Grid from "./_components/Grid";
import TopBar from "./_components/TopBar";
import { motion } from "framer-motion";
import Loading from "./loading";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <div className="rounded-lg pb-4 shadow bg-stone-950">
      <TopBar />
      <Grid />
    </div>
  );
};

export default DashboardPage;
