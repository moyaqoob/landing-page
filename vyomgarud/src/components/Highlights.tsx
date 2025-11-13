import { motion } from "framer-motion";
import "react-slideshow-image/dist/styles.css";
import SlideShow from "./SlideShow";
import { droneSlides } from "../lib/drones";


export default function Highlights() {
  return (
    <div className="w-full py-10 bg-white/100 text-black">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-4xl font-semibold tracking-wide text-black mb-5"
        >
          TECHNICAL SPECIFICATIONS
        </motion.h2>
      </div>
      <SlideShow slides={droneSlides} interval={5000} />
    </div>
  );
}
