"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

export function Header() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className=" border-b items-center bg-white/100 dark:bg-black">
      <div className="mx-auto flex h-20 w-[800px] items-center justify-between  px-10">
        {/* Logo */}
        <div className="text-2xl font-bold text-black dark:text-white">
          VyomGarud
        </div>

        {/* Navbar */}
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="grid gap-4 p-2">
              <ProductItem
                title="AeroRecon X1"
                description="Long-range ISR drone with autonomous navigation."
                href="/products/aerorecon"
                src="/images/drone1.jpg"
              />
              <ProductItem
                title="Garud Tactical"
                description="Rugged quad-copter optimized for field deployment."
                href="/products/garud-tactical"
                src="/images/drone1.jpg"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Solutions">
            <div className="flex flex-col space-y-2 p-2">
              <HoveredLink href="/solutions/defence">
                Defence Systems
              </HoveredLink>
              <HoveredLink href="/solutions/surveillance">
                Surveillance & ISR
              </HoveredLink>
              <HoveredLink href="/solutions/industrial">
                Industrial Automation
              </HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="R&D">
            <div className="flex flex-col space-y-2 p-2">
              <HoveredLink href="/rd/autonomy">Autonomous Systems</HoveredLink>
              <HoveredLink href="/rd/ai">AI-Driven Flight Control</HoveredLink>
              <HoveredLink href="/rd/payload">Payload Engineering</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Company">
            <div className="flex flex-col space-y-2 p-2">
              <HoveredLink href="/about">About Us</HoveredLink>
              <HoveredLink href="/tech">Technology</HoveredLink>
              <HoveredLink href="/contact">Contact</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}

// Colors: charcoal, white, orange (#ff7b00)
