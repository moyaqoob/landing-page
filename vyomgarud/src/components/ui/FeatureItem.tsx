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
      className="w-full max-w-[600px] max-h-[500px] mx-auto p-4 rounded-xl border shadow-sm hover:shadow-md transition-all bg-white dark:bg-neutral-900"
    >
      <div className="flex flex-col gap-3 ">
        <img
          src="/images/drone1.jpg"
          alt={title}
          className="w-full h-full sm:h-36 object-cover rounded-md shadow-sm"
        />
        <h3 className="text-lg text-orange-800 font-bold">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
