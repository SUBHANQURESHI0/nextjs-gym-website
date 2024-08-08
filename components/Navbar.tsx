'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link"

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Programs">
          <div className="flex flex-col text-sm space-y-2">
            <HoveredLink href="/programs">All Programs</HoveredLink>
            <HoveredLink href="/programs/strength-training">
              Strength Training Basics
            </HoveredLink>
            <HoveredLink href="/programs/cardio-workouts">
              Advanced Cardio Techniques
            </HoveredLink>
            <HoveredLink href="/programs/hiit">
              High-Intensity Interval Training (HIIT)
            </HoveredLink>
            <HoveredLink href="/programs/nutrition">
              Nutrition for Performance
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar