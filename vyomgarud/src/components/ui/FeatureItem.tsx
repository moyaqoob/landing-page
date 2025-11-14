import { motion } from "framer-motion";

interface FeatureItemProps {
  title: string;
  description: string;
  image:number
}

const FeatureItem = ({ title, description,image }: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full p max-w-[550px] h-[450px] bg-gray-400
   mx-auto p-5 rounded-xl border shadow-sm hover:shadow-md transition-all  dark:bg-neutral-900"
    >
        <div className="flex flex-col gap-3 ">
          <img
            src={`/images/feature${image}.jpg`}
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
