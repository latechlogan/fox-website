import raisingCanes from "../assets/raising-canes-logo.png";
import fastPaceHealth from "../assets/fastpace-logo.png";
import liveSwitch from "../assets/liveswitch-logo.png";

type Logo = {
  src: ImageMetadata;
  alt: string;
};

export const logos: Logo[] = [
  {
    src: raisingCanes,
    alt: "Raising Cane's logo",
  },
  {
    src: fastPaceHealth,
    alt: "Fast Pace Health logo",
  },
  {
    src: liveSwitch,
    alt: "LiveSwitch logo",
  },
];

// export const awards: logo[] = []
