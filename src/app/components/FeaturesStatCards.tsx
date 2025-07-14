import { LucideIcon } from "lucide-react";

type Props = {
  first?: boolean;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const FeaturesStatCards = ({
  first = false,
  title,
  description,
  Icon,
}: Props) => {
  return (
    <div
      className={`group ${
        first
          ? "bg-yellow-400 shrink-0 shadow-[-10px_10px_20px_#facc15]"
          : "bg-stone-950 border border-stone-800 hover:border-none hover:bg-yellow-400 group-hover:shadow-[-10px_10px_20px_#facc15]"
      } transition-all duration-300 p-4 rounded-xl w-full lg:w-fit flex gap-4 items-center`}
    >
      <div
        className={`${
          first
            ? "bg-white text-yellow-400"
            : "bg-yellow-400 text-white group-hover:bg-white group-hover:text-yellow-400"
        } p-4 rounded-xl transition-all duration-300`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-xs font-semibold text-balance mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturesStatCards;
