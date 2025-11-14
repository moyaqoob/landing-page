import { motion } from "framer-motion";
import { droneData } from "./config";


export const droneSlides = droneData.map((drone: any) => (
  <motion.div
    key={drone.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="bg-white  flex    p-6 shadow-lg"
  >
    <div className=" flex justify-center items-center">
      <motion.img  src={drone.image} className="w-full h-auto border-4 border-r-12 border-black rounded-xl" />
    </div>

  

    <div className="w-1/2">
      <h3 className="text-2xl font-bold mb-4">{drone.name}</h3>

      <ul className="space-y-4 text-gray-900 flex  flex-col  w-full pt-4 font-semibold text-xl">
        {Object.entries(drone.performance).map(([key, value]:any) => (
          <motion.li
            key={key}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pb-5 border-b border-gray-700"
          >
            <span className="text-orange-500 text-2xl capitalize">
              {key.replace(/([A-Z])/g, " $1")}:
            </span>{" "}
            
            {value}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
));
