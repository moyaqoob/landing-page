import { motion } from "framer-motion";
import { useState } from "react";
const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      <div>
        <motion.p
          onClick={ ()=>setOpen(true)}
          className={`cursor-pointer select-none text-black dark:text-white ${
            open ? "blur-0" : "blur-md"
          }`}
          initial={{ opacity: 0, x: -40 }}
          animate={{
            opacity: open ? 1 : 0.6,
            x: open ? 0 : -20,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          VyomGarud was founded to solve one problem: deliver UAV systems that
          combine field-proven reliability with the autonomy and precision
          demanded by modern missions. Our multidisciplinary engineering teams
          design every aircraft from the ground up—structural frames, power
          management, avionics, and mission software—so the final system behaves
          predictably under stress and delivers consistent outcomes when it
          matters most.
        </motion.p>
        <br/>
        <motion.p>
          We prioritize deterministic autonomy and resilient communications. Our
          platforms use sensor-fused navigation and onboard decision logic to
          maintain mission continuity in degraded GNSS or high-clutter
          environments. Redundant, encrypted datalinks and adaptive networking
          keep telemetry and command channels robust in contested conditions.
          Rapidly swappable payload bays allow the same airframe to host EO/IR
          sensors, LiDAR, SIGINT modules, or customized mission packages,
          reducing logistics burden and accelerating mission readiness.
        </motion.p>
        <br/>
        <motion.p>
          Every VyomGarud system passes rigorous environmental, EMI, and
          endurance testing. We work closely with customers to align system
          capabilities with operational doctrines, provide turnkey integration,
          and support lifecycle sustainment—so operators get performance they
          can trust from purchase through deployment.
        </motion.p>
      </div>
    </div>
  );
};

export default About;

// VyomGarud was founded to solve one problem: deliver UAV systems that combine field-proven reliability with the autonomy and precision demanded by modern missions. Our multidisciplinary engineering teams design every aircraft from the ground up—structural frames, power management, avionics, and mission software—so the final system behaves predictably under stress and delivers consistent outcomes when it matters most.

// We prioritize deterministic autonomy and resilient communications. Our platforms use sensor-fused navigation and onboard decision logic to maintain mission continuity in degraded GNSS or high-clutter environments. Redundant, encrypted datalinks and adaptive networking keep telemetry and command channels robust in contested conditions. Rapidly swappable payload bays allow the same airframe to host EO/IR sensors, LiDAR, SIGINT modules, or customized mission packages, reducing logistics burden and accelerating mission readiness.

// Every VyomGarud system passes rigorous environmental, EMI, and endurance testing. We work closely with customers to align system capabilities with operational doctrines, provide turnkey integration, and support lifecycle sustainment—so operators get performance they can trust from purchase through deployment.
