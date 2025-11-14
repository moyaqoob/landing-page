"use client";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

const navHover = {
  whileHover: {
    y: -4,
    scale: 1.06,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 18,
    } as const,
  },
} as const;

export function Header() {
  return (
    <header className=" border-b -z-10 items-center bg-white/100 text-black  dark:bg-black">
      <div className="relative mx-auto flex h-20 w-full items-center px-10">
        {/* LEFT — Logo */}
        <div className="text-3xl font-bold text-black dark:text-white">
          VyomGarud
        </div>

        {/* CENTER — Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 cursor-pointer">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap gap-10 text-black dark:text-white z-10">
              <motion.li {...navHover}>
                <NavigationMenuItem className="text-lg font-sans font-semibold">
                  Home
                </NavigationMenuItem>
              </motion.li>

              <motion.li {...navHover}>
                <NavigationMenuItem className="text-lg font-sans font-semibold">
                  About
                </NavigationMenuItem>
              </motion.li>

              <motion.li {...navHover}>
                <NavigationMenuItem className="text-lg font-sans font-semibold">
                  Drones
                </NavigationMenuItem>
              </motion.li>

              <motion.li {...navHover}>
                <NavigationMenuItem className="text-lg font-sans font-semibold">
                  Contact
                </NavigationMenuItem>
              </motion.li>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

// Colors: charcoal, white, orange (#ff7b00)
