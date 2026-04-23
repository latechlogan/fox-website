import sarah from "../assets/reviewers/sarah.jpg";
import james from "../assets/reviewers/james.jpg";

type Review = {
  id: number;
  stars: number;
  body: string;
  name: string;
  description: string;
  photo?: ImageMetadata;
  featured: boolean;
  rotator: boolean;
};

export const reviews: Review[] = [
  {
    id: 1,
    stars: 5,
    body: "Fox Family Electric has been such a blessing for our small business. They are so kind, extremely knowledgeable, and even bring a bit of humor into our lives when they are around. What a joy it is to know that they are taking care of us when we are struggling.",
    name: "Jess Moore",
    description: "",
    photo: undefined,
    featured: true,
    rotator: false,
  },
  {
    id: 2,
    stars: 5,
    body: "The service was a 10 out of 10 and I would definitely recommend them for your electrical needs! Jon was very knowledgeable and was able to troubleshoot and repair my electrical issue! He was also very friendly and willing to answer every question I had.",
    name: "Beatrice Johnson",
    description: "",
    photo: undefined,
    featured: true,
    rotator: false,
  },
  {
    id: 3,
    stars: 5,
    body: "Technicians arrived on time identified the problem and resolved it quickly. I will not use any one else. Professionalism, courtesy, and honest work are the foundation of Fox Family Electric. Do not waste anytime with any other outfit. Go to Fox first and get it done right !!!!!",
    name: "Kenny Gutierrez",
    description: "",
    photo: undefined,
    featured: true,
    rotator: false,
  },
  {
    id: 4,
    stars: 5,
    body: "Fantastic prompt honest electricians. We had an issue with one of our billboards and Fox Family Electric was on it the following morning and able to troubleshoot and fix the issue. Thank you.",
    name: "Brian Christiansen",
    description: "",
    photo: undefined,
    featured: false,
    rotator: false,
  },

  {
    id: 5,
    stars: 5,
    body: "All good. Quick response. Winter storm damaged meter box outside house. Completed work needed in short time. Appreciate all",
    name: "Linda Halley",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 6,
    stars: 5,
    body: "Great work done on time! We needed the electrical work done in coordination with several other contractors and Fox's did not disappoint!",
    name: "Shawn Hornsby",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 7,
    stars: 5,
    body: "Guys were very efficient and knowledgeable- left us with better setup than original setup up",
    name: "Lewis",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 8,
    stars: 5,
    body: "Great people, great service. Proud customers and thankful we have Fox.",
    name: "Billy Smith",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 9,
    stars: 5,
    body: "Extremely professional and prompt and very high quality work. Highly, highly recommend.",
    name: "Paul Smythe",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 10,
    stars: 5,
    body: "Great service as usual from fox family electric.",
    name: "Glen Scioneaux",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 11,
    stars: 5,
    body: "Fox came out to look at repairs needed on older home. After the visit made I appointment, they came out and spent the day making repairs and installing newer materials. Super nice techs, efficient, and cleaned up before leaving. Payment process was easy too!",
    name: "John Windham",
    description: "",
    photo: undefined,
    featured: false,
    rotator: false,
  },

  {
    id: 12,
    stars: 5,
    body: "EXCELLENT SERVICE BY THIS COMPANY. I highly recommend them for electrical issues.",
    name: "Ken",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 13,
    stars: 5,
    body: "Called first thing on a Monday morning. They were going to work me in. Got a text that technician would be there between 8 and 9. He was promptly there shortly after 8. Came in, figured out the problem, fixed it and was on his way. Very good experience.",
    name: "Jacob Knight (Tarthibaim)",
    description: "",
    photo: undefined,
    featured: false,
    rotator: false,
  },

  {
    id: 14,
    stars: 5,
    body: "I have been using Fox for my electrical repairs for my business for a few years now, and I can say with absolute certainty they are a very good company to deal with. Always in communication, always on time, very reasonable prices for what you get. Highly recommend",
    name: "Grant Edwards",
    description: "",
    photo: undefined,
    featured: false,
    rotator: false,
  },

  {
    id: 15,
    stars: 5,
    body: "Fox Electric did some work for us recently and we are extremely pleased with the work performed by Jon and his apprentices. Highly recommend Fox Electric!",
    name: "Larry marsh",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 16,
    stars: 5,
    body: "Was very informative and showed other options. But was very thorough in their observations. They made me feel that they were listening to my concerns. Would definitely call again.",
    name: "Kathryn Weitzel-Madden",
    description: "",
    photo: undefined,
    featured: false,
    rotator: false,
  },

  {
    id: 17,
    stars: 5,
    body: "When a branch fell on the wires going into my Mom's house and knocked out the power, we contacted Fox Family Electric. They got started the very next day. Michael Fox stayed in touch with me throughout the process, giving me updates, sending photos, etc. I felt comfortable knowing the Fox Family was taking care of the job, working quickly to get Mom back into her home.",
    name: "Mike & Peggy Thruman",
    description: "",
    photo: undefined,
    featured: false,
    rotator: false,
  },

  {
    id: 18,
    stars: 5,
    body: "Jon came by and told me everything that needed done and the entire company worked with me to get things fixed!! You can bet, I now a customer for life!!!",
    name: "Marianne Dixon",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 19,
    stars: 5,
    body: "Exceptional service. Fast and courteous.",
    name: "Evolutionary Energy Arts",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },

  {
    id: 20,
    stars: 5,
    body: "Service within 24 hours. Arrived earlier than scheduled and work done quick, professionally, and cleaned up.",
    name: "Richard Gates",
    description: "",
    photo: undefined,
    featured: false,
    rotator: true,
  },
];

export const projectReviews: Review[] = [
  {
    id: 1,
    stars: 5,
    body: "They didn't just wire our new office building—they understood what we needed before we even finished explaining it. That kind of attention is rare, and it's why we call them first for everything.",
    name: "Margaret Thibodeaux",
    description: "Business Owner, Baton Rouge",
    photo: undefined,
    featured: false,
    rotator: false,
  },
];
