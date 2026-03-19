import type { ComponentType } from "react";
import { MdTroubleshoot } from "react-icons/md";
import { MdOutlineHandyman } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { MdOutlineOfflineBolt } from "react-icons/md";

type BusinessLine = {
  icon: ComponentType;
  heading: string;
  body: string;
};

export const businessLines: BusinessLine[] = [
  {
    icon: MdTroubleshoot,
    heading: "Residential Service Calls",
    body: "From tripped breakers to faulty wiring, we diagnose and fix it right the first time.",
  },
  {
    icon: MdOutlineHandyman,
    heading: "Residential Projects",
    body: "New construction, full rewires, panel upgrades — we build it to code and build it to last.",
  },
  {
    icon: MdBusiness,
    heading: "Commercial Electrical",
    body: "Reliable electrical work for businesses of all sizes, from routine maintenance to ground-up builds.",
  },
  {
    icon: MdElectricBolt,
    heading: "Generators",
    body: "We help you find the right generator, handle the installation, and keep it running when you need it most.",
  },
];
