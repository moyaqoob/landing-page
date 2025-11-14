import { motion } from "framer-motion";
const About = () => {
  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };
  

  return (
    <div className="px-4 py-8 pb-10 ">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl font-semibold text-black dark:text-white mb-4"
      >
        About Us
      </motion.h1>

      <div className="flex items-center justify-center max-w-full">
        <div className="p-2 space-y-8 max-w-[1300px] flex items-center flex-col">
          {/* ---- Block 1 ---- */}
          <div
            className="space-y-3  text-black text-xl font-semibold dark:text-white"
          >
            <motion.p {...fadeInLeft} transition={{ ...fadeInLeft, delay: 0 }}>
              VyomGarud was founded to solve one problem: deliver UAV systems
              that combine field-proven reliability with the autonomy and
              precision demanded by modern missions. Our multidisciplinary
              engineering teams design every aircraft from the ground up —
              structural frames, power management, avionics, and mission
              software — so the final system behaves predictably under stress
              and delivers consistent outcomes when it matters most.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="text-xl font-semibold text-black dark:text-white leading-relaxed"
          >
            We prioritize deterministic autonomy and resilient communications.
            Our platforms use sensor-fused navigation and onboard decision logic
            to maintain mission continuity in degraded GNSS or high-clutter
            environments. Redundant, encrypted datalinks and adaptive networking
            keep telemetry and command channels robust in contested conditions.
            Rapidly swappable payload bays allow the same airframe to host EO/IR
            sensors, LiDAR, SIGINT modules, or custom mission packages, reducing
            logistics burden and accelerating mission readiness.
          </motion.p>

          <div
            className="space-y-3 cursor-pointer select-none text-black text-xl font-semibold dark:text-white"
          >
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Every VyomGarud system passes rigorous environmental, EMI, and
              endurance testing. We work closely with customers to align system
              capabilities with operational doctrines, provide turnkey
              integration, and support lifecycle sustainment—so operators get
              performance they can trust from purchase through deployment.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
