export type FAQ = {
  question: string;
  answer: string;
};

export const generalFAQ: FAQ[] = [
  {
    question: "How quickly can you respond?",
    answer:
      "We understand that electrical problems don't wait. Most service calls get scheduled within 24 hours, and we handle true emergencies the same day. Our team knows Louisiana, and we know how to move.",
  },
  {
    question: "Do you work on older homes?",
    answer:
      "Yes. Older Louisiana homes have their own character and their own electrical challenges. We've rewired plenty of them, updated panels, and brought systems up to code without losing what makes them special.",
  },
  {
    question: "What about generator installation?",
    answer:
      "We sell and install generators for homes and businesses. Whether you need backup power for storms or full-time reliability, we'll size it right and install it properly. We also handle maintenance and repairs.",
  },
  {
    question: "Can I get an estimate online?",
    answer:
      "We offer virtual estimates through LiveSwitch so you don't have to wait for someone to come out. It saves time and reduces dispatch fees. For complex jobs, we'll still send someone to see the work in person.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "We're fully licensed, bonded, and insured. Every electrician on our team carries the credentials Louisiana requires. That's not negotiable for us.",
  },
];

export const businessLinesFAQ: FAQ[] = [
  {
    question: "How quickly can you respond?",
    answer:
      "We prioritize emergency calls and work to get to you as fast as possible. For non-emergencies, we work with your schedule to find a time that works.",
  },
  {
    question: "Do you handle new construction?",
    answer:
      "Yes. We work on ground-up builds, rough-in work, and final inspections. Whether it's a residential home or commercial space, we bring the same attention to detail.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We cover [service area]. If you're unsure whether we reach your location, just give us a call and we'll let you know straight away.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. We're fully licensed and insured for both residential and commercial work. Your protection matters to us.",
  },
  {
    question: "Can you help with generators?",
    answer:
      "We sell, install, and maintain generators for homes and businesses. We'll help you find the right fit and keep it running when you need it.",
  },
];
