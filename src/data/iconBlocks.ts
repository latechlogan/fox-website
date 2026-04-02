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
import { FaPhoneAlt } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { BsPlug } from "react-icons/bs";
import { BsLightbulbOff } from "react-icons/bs";
import { BsTropicalStorm } from "react-icons/bs";

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

export const serviceCallSteps: IconBlock[] = [
  {
    icon: FaPhoneAlt,
    heading: "Call or book online",
    body: "Tell us what's happening and when you need us. We'll find a time that works for you.",
  },
  {
    icon: FaShippingFast,
    heading: "We arrive and assess",
    body: "We walk through the problem with you, explain what we found, and give you honest pricing before any work begins.",
  },
  {
    icon: FaHouseChimney,
    heading: "We fix it right",
    body: "The job gets done properly, safely, and with the same care we'd give our own home.",
  },
];

export const projectDisciplines: IconBlock[] = [
  {
    icon: FaShippingFast,
    heading: "Listen and design right",
    body: "We ask the right questions upfront so your electrical system matches exactly what you need.",
  },
  {
    icon: FaShippingFast,
    heading: "Build to code, every time",
    body: "Inspections pass because we build them to pass, with every connection documented and verified.",
  },
  {
    icon: FaShippingFast,
    heading: "Show up and deliver",
    body: "We keep our word on timing and coordinate smoothly with your other trades.",
  },
];

export const generatorNeeds: IconBlock[] = [
  {
    icon: BsPlug,
    heading: "Outages happen more than you think",
    body: "Louisiana ranks among the top states for outages per customer and leads the country in how long those outages last. It's not a matter of if, it's when.",
  },
  {
    icon: BsLightbulbOff,
    heading: "Don't Leave Your Family in the Dark",
    body: "Food spoils. Extreme heat or cold becomes dangerous. Kids get scared. A generator changes everything when the lights go out.",
  },
  {
    icon: BsTropicalStorm,
    heading: "Peace of mind has a price worth paying",
    body: "Knowing you're prepared lets you sleep through the storm instead of lying awake wondering what comes next.",
  },
];

export const generatorBenefits: IconBlock[] = [
  {
    icon: BsPlug,
    heading: "Outages happen more than you think",
    body: "Louisiana ranks among the top states for outages per customer and leads the country in how long those outages last. It's not a matter of if, it's when.",
  },
  {
    icon: BsPlug,
    heading: "Outages happen more than you think",
    body: "Louisiana ranks among the top states for outages per customer and leads the country in how long those outages last. It's not a matter of if, it's when.",
  },
  {
    icon: BsPlug,
    heading: "Outages happen more than you think",
    body: "Louisiana ranks among the top states for outages per customer and leads the country in how long those outages last. It's not a matter of if, it's when.",
  },
];
