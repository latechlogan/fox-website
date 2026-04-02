type TeamMember = {
  photo?: ImageMetadata;
  name: string;
  role: string;
  description: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Marcus Thibodeaux",
    role: "Lead electrician",
    description:
      "Twenty years in the trade. Knows every circuit in Louisiana. Loves fishing on weekends.",
  },
  {
    name: "Sarah Broussard",
    role: "Operations manager",
    description:
      "Keeps everything running smooth. Former nurse, brings compassion to every customer interaction.",
  },
  {
    name: "James Guidry",
    role: "Field technician",
    description:
      "Third generation electrician. Grew up watching his father wire homes across Baton Rouge.",
  },
  {
    name: "Denise Landry",
    role: "Customer service",
    description:
      "Answers every call like it's her own house. Been with us since the beginning.",
  },
  {
    name: "Robert Hebert",
    role: "Commercial specialist",
    description:
      "Built the systems that power half the businesses in Lafayette. Detail-oriented and reliable.",
  },
  {
    name: "Michelle Acosta",
    role: "Apprentice electrician",
    description:
      "Learning the trade from the ground up. Eager, smart, and committed to excellence.",
  },
  {
    name: "David Comeaux",
    role: "Generator specialist",
    description:
      "Installed more backup systems than anyone. Makes sure families stay safe when storms hit.",
  },
  {
    name: "Lisa Robichaux",
    role: "Scheduling coordinator",
    description:
      "Gets you booked fast. Remembers every customer's name and their electrical quirks.",
  },
];
