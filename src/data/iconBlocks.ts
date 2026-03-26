import type { ComponentType } from "react";
import { MdTroubleshoot } from "react-icons/md";
import { MdOutlineHandyman } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { MdOutlineOfflineBolt } from "react-icons/md";
import { MdLightbulbOutline } from "react-icons/md";
import { MdOutlineEmergency } from "react-icons/md";
import { MdOutlineElectricalServices } from "react-icons/md";
import { MdOutlineOutlet } from "react-icons/md";

type IconBlock = {
  icon: ComponentType;
  heading: string;
  body: string;
};

export const businessLines: IconBlock[] = [
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

export const serviceCallItems: IconBlock[] = [
  {
    icon: MdOutlineOutlet,
    heading: "Repairs and fixes",
    body: "Outlets stop working, switches fail, wiring gets damaged. We diagnose the problem and fix it right the first time, not with temporary patches.",
  },
  {
    icon: MdTroubleshoot,
    heading: "Troubleshooting",
    body: "Sometimes the problem isn't obvious. We trace the issue through your electrical system methodically until we find the root cause and solve it.",
  },
  {
    icon: MdLightbulbOutline,
    heading: "Lighting issues",
    body: "Flickering bulbs, dead circuits, or rooms that won't light up properly. We fix your lighting so it works the way it should.",
  },
  {
    icon: MdOutlineEmergency,
    heading: "Emergency calls",
    body: "Electrical emergencies don't keep business hours. We're ready to handle urgent and dangerous situations safely, whenever you need us.",
  },
];
