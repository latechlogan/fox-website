import type { ComponentType } from "react";
import { MdTroubleshoot } from "react-icons/md";
import { MdOutlineHandyman } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { MdLightbulbOutline } from "react-icons/md";
import { MdOutlineEmergency } from "react-icons/md";
import { MdOutlineOutlet } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { BsPlug } from "react-icons/bs";
import { BsLightbulbOff } from "react-icons/bs";
import { BsTropicalStorm } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";

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
    body: "Louisiana leads the nation in outage frequency and duration. It's not a matter of if, it's when.",
  },
  {
    icon: BsLightbulbOff,
    heading: "Don't Leave Your Family in the Dark",
    body: "Food spoils. Heat turns dangerous. Kids get scared. A generator changes everything.",
  },
  {
    icon: BsTropicalStorm,
    heading: "Peace of mind has a price worth paying",
    body: "Sleep through the storm instead of lying awake wondering what comes next.",
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

export const threeEasySteps: IconBlock[] = [
  {
    icon: MdOutlineCalendarMonth,
    heading: "Book your video appointment online",
    body: "Pick a time that works for you and we'll confirm your slot.",
  },
  {
    icon: MdOutlinePhonelinkRing,
    heading: "Connect with an electrician by video",
    body: "Show us what needs fixing or building and we'll walk through it with you.",
  },
  {
    icon: MdOutlineReceiptLong,
    heading: "Get your estimate and next steps right away",
    body: "No surprises, no delays, just straight answers and a clear path forward.",
  },
];

export const careerBenefits: IconBlock[] = [
  {
    icon: MdOutlineAttachMoney,
    heading: "Pay that matches your skill",
    body: "Competitive wages based on your experience and expertise.",
  },
  {
    icon: MdOutlineHandyman,
    heading: "Hands-on learning opportunities",
    body: "Mentorship from experienced electricians who care about your development.",
  },
  {
    icon: MdArrowOutward,
    heading: "A clear path forward",
    body: "We're invested in your growth and want to see you build a long career doing work you're proud of.",
  },
  {
    icon: MdOutlineHandshake,
    heading: "Straight talk and respect",
    body: "A workplace built on honesty where your work and effort are valued.",
  },
];
