import { motion } from "framer-motion";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full p max-w-[550px] h-[450px] bg-gradient-to-tr from-[#C2B280]
 from-10% to-[#36454F] to-90%
   mx-auto p-5 rounded-xl border shadow-sm hover:shadow-md transition-all  dark:bg-neutral-900"
    >
      <div className="flex flex-col gap-3 ">
        <img
          src="/images/drone9.jpg"
          alt={title}
          className="w-full h-full sm:h-45 object-cover object-left rounded-md shadow-sm"
        />
        <h3 className="text-2xl text-gray-950 font-bold">{title}</h3>
        <p className="text-lg font-semibold text-gray-200 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
