import {
  Zap,
  ShieldCheck,
  Rocket,
  Code2,
  Server,
  Sparkles,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesCards = () => {
  return (
    <div className="mt-18 flex flex-wrap justify-center gap-6">
      <FeatureCard
        count={1}
        Icon={Zap}
        title="Lightning Fast Performance"
        description="Experience blazing-fast speeds and optimized response times across all devices and networks."
        btnText={['Speed', 'Optimization']}
      />

      <FeatureCard
        count={2}
        Icon={ShieldCheck}
        title="Enterprise-Grade Security"
        description="Built with secure architecture and encryption to protect your data at every level."
        btnText={['Secure', 'Trusted']}
      />

      <FeatureCard
        count={3}
        Icon={Rocket}
        title="Seamless Deployment"
        description="Get up and running instantly with our frictionless setup and auto-scaling deployments."
        btnText={['Deployment', 'Scaling']}
      />

      <FeatureCard
        count={4}
        Icon={Code2}
        title="Developer Friendly"
        description="A clean, well-documented API and powerful developer tools designed for productivity."
        btnText={['API', 'SDKs']}
      />

      <FeatureCard
        count={5}
        Icon={Server}
        title="Reliable Infrastructure"
        description="Hosted on resilient infrastructure with 99.99% uptime and global CDN support."
        btnText={['Uptime', 'Cloud']}
      />

      <FeatureCard
        count={6}
        Icon={Sparkles}
        title="Modern UI & UX"
        description="Intuitive design and delightful interactions create a smooth experience for your users."
        btnText={['Design', 'Experience']}
      />
    </div>
  );
};

export default FeaturesCards;
