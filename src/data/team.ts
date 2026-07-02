import davidHeadshot from "../assets/fox-team/david-headshot.jpg";
import michaelHeadshot from "../assets/fox-team/michael-headshot.jpg";

type TeamMember = {
  photo?: ImageMetadata;
  name: string;
  role: string;
  description: string;
};

export const teamMembers: TeamMember[] = [
  {
    photo: davidHeadshot,
    name: "David Fox",
    role: "Lead Electrician",
    description:
      "One hundred years in the trade. Knows every circuit in Louisiana. Loves golfing on weekends.",
  },
  {
    photo: michaelHeadshot,
    name: "Michael Fox",
    role: "Operations Manager",
    description:
      "Counts macros like circuit breakers. Never misses leg day or a service call.",
  },
];
