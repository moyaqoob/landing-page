import { features } from "../lib/config";
import FeatureItem from "./ui/FeatureItem";

const Features = () => {
  return (
    <section className="pt-10">
      {/* heading */}
      <div className="text-xl space-y-2  font-semibold items-center">
        <h1>Military Features</h1>
        <span className="text-gray-700">
          [ Engineered for Demanding Environments]{" "}
        </span>
      </div>
      <div className="mt-6 gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
        {features.map((item, index) => (
          <FeatureItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
