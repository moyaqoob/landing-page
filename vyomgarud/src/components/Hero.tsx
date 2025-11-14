import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
      <BackgroundRippleEffect />
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center z-10 justify-center"
          whileHover={{ scale: 1.05 }}
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
          className="flex flex-col justify-center space-y-4 z-10"
        >
          <h1 className="text-4xl font-mono md:text-5xl font-bold leading-tight">
            Military-grade UAVs.
            <br /> Engineering you can trust
          </h1>
          <p className="text-lg text-gray-700 font-sans capitalize dark:text-gray-300 leading-relaxed">
            VyomGarud delivers autonomous unmanned aerial systems built for
            reliability, long-endurance missions,and precision systems
            integration. Robust hardware. Deterministic autonomy. Field-proven
            performance.
          </p>
        </motion.div>
      </div>
      <BackgroundRippleEffect />
    </section>
  );
};

export default Hero;
