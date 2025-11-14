import { features } from "../lib/config";
import FeatureItem from "./ui/FeatureItem";
import {motion} from "framer-motion"
const Features = () => {
  return (
      <section className="pt-10 pb-20 ">
        <div className="mx-auto max-w-7xl px-4">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl font-semibold tracking-wide text-black mb-5"
          >
            Military Requirements
          </motion.h2>
        </div>
        <div className="mt-6 gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {features.map((item, index) => (
            <FeatureItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
  );
};

export default Features;
