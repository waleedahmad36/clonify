import { CheckCircle, LucideIcon } from "lucide-react";
import { Zap, ShieldCheck, Star } from "lucide-react";
import TopHeading from "./TopHeading";

const Pricing = () => {
  return (
    <div className="my-20 px-8"  id="pricing"  >
      <TopHeading heading="Pricing"  />
      <p className="text-center mt-4 text-stone-400 max-w-xl mx-auto">
        Choose a plan that suits your needs. Scale up or down anytime as your
        business grows.
      </p>

      <div className="mt-16 flex flex-col items-center   lg:flex-row  justify-center gap-10"    >
        <PricingCard
          icon={Zap}
          title="Starter"
          description="Best for individuals"
          price="$12/month"
          features={["10GB Storage", "100GB Bandwidth", "5 Projects", "Basic Support"]}
        />

        <PricingCard
          icon={ShieldCheck}
          title="Pro"
          description="Great for teams"
          price="$29/month"
          features={[
            "100GB Storage",
            "1TB Bandwidth",
            "Unlimited Projects",
            "Team Collaboration",
            "Priority Support",
          ]}
          popular
        />

        <PricingCard
          icon={Star}
          title="Enterprise"
          description="Custom solution for enterprises"
          price="Custom"
          features={[
            "Unlimited Storage",
            "Unlimited Bandwidth",
            "Dedicated Manager",
            "Advanced Analytics",
            "24/7 Premium Support",
          ]}
        />
      </div>
    </div>
  );
};
export default Pricing;

// ✅ Card Component
const PricingCard = ({
  title,
  description,
  price,
  features,
  icon: Icon,
  popular = false,
}: {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: LucideIcon;
  popular?: boolean;
}) => {
  return (
    <div
      className={`relative p-8 w-full  max-w-xs  lg:max-w-sm rounded-3xl border hover:-translate-y-0.5 transition-all duration-300 ${
        popular
          ? "bg-yellow-400 text-black border-yellow-300 shadow-2xl scale-105"
          : "bg-stone-900 text-white border-stone-700"
      } transition-all duration-300 flex flex-col items-center`}
    >
      {/* Popular Badge */}
      {popular && (
        <span className="absolute top-4 right-4 bg-black text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      {/* Icon */}
      <div className="bg-yellow-100 p-4 rounded-full mb-6">
        <Icon className="w-6 h-6 text-yellow-500" />
      </div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className={`${popular ? 'text-yellow-50'  : 'text-stone-400'} text-sm mb-4`}>{description}</p>
      <p className="text-xl font-bold mb-6">{price}</p>

      {/* Features */}
      <div className="flex flex-col gap-3 w-full text-sm mb-6">
       <ul className="space-y-3 w-full">
  {features.map((feature, idx) => (
    <li key={idx} className="flex items-start gap-3">
      <div className="bg-yellow-100 p-1 rounded-full">
        <CheckCircle className="w-4 h-4 text-yellow-500" />
      </div>
      <p className={`text-sm ${popular ? '': 'text-stone-200'}`}>{feature}</p>
    </li>
  ))}
</ul>
      </div>

      {/* Button */}
      <button
        className={`mt-auto w-full rounded-xl px-6 py-2 text-sm font-semibold transition-all ${
          popular
            ? "bg-black text-yellow-400 hover:bg-stone-900"
            : "bg-yellow-400 text-black hover:bg-yellow-300"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
};
