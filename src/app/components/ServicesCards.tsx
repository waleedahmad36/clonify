import FeatureCard from "./FeatureCard";
import { Briefcase, Headset, Wrench, Globe, Users, LineChart } from "lucide-react";

const ServicesCards = () => {
  return (
    <div className="mt-18 flex flex-wrap justify-center gap-6">
      <FeatureCard
        count={1}
        Icon={Briefcase}
        title="Business Consulting"
        description="Strategic insights and tailored guidance to help you grow, streamline, and scale your business."
      />

      <FeatureCard
        count={2}
        Icon={Headset}
        title="24/7 Customer Support"
        description="Round-the-clock technical and client support to ensure your operations run without interruption."
      />

      <FeatureCard
        count={3}
        Icon={Wrench}
        title="Custom Software Development"
        description="We build scalable, high-performance custom software tailored to your specific business needs."
      />

      <FeatureCard
        count={4}
        Icon={Globe}
        title="Cloud & Hosting Solutions"
        description="Global cloud hosting with guaranteed uptime and seamless integration across platforms."
      />

      <FeatureCard
        count={5}
        Icon={Users}
        title="Team Training & Workshops"
        description="Upskill your teams with expert-led sessions in tech, design, product, and agile workflows."
      />

      <FeatureCard
        count={6}
        Icon={LineChart}
        title="Data Analytics & Reporting"
        description="Turn raw data into actionable insights with advanced analytics, dashboards, and visualization."
      />
    </div>
  );
};

export default ServicesCards;
