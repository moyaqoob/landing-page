import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <AuroraBackground>
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
            whileHover={{scale:1.1}}
          >
            <div className="relative">
              <img
                src="/images/drone3.jpg"
                alt="Drone"
                className="w-full  rounded-lg shadow-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Text Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Military-grade UAVs.
              <br /> Engineering you can trust
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              VyomGarud delivers autonomous unmanned aerial systems built for
              reliability, long-endurance missions, and precision systems
              integration. Robust hardware. Deterministic autonomy. Field-proven
              performance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold w-fit hover:shadow-lg transition-shadow"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
