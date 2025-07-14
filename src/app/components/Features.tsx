import Image from "next/image";
import FeaturesCards from "./FeaturesCards";
import FeaturesLast from "./FeaturesLast";
import Numbers from "./Numbers";
import TopHeading from "./TopHeading";


const Features = () => {
  return (
    <div className="mb-10 mt-24">
      {/* top heading  */}
      <TopHeading  heading="Features"  />

      <p className="text-center mt-8 font-semibold">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* left right sec  */}
      <div className="flex flex-col lg:flex-row gap-4 px-6 lg:px-18 w-full mt-16 items-center justify-center  lg:justify-normal">
        {/* left side  */}
        <div className="lg:w-1/2"   id="features" >
          <h3 className="text-4xl font-bold shadow-2xl text-stone-100">
            Powerful features to accelerate growth
          </h3>
          <p className="font-semibold text-stone-500 mt-10">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <Numbers />
        </div>

        {/* right side  */}
        <div className=" w-full lg:w-1/2  relative h-[50vh]">
          <Image
            src="https://bootstrapmade.com/content/demo/Instant/assets/img/features/features-2.webp"
            alt=""
            fill
            className="rounded-xl"
          />
        </div>
      </div>

      <FeaturesCards />
      <FeaturesLast />
    </div>
  );
};
export default Features;
