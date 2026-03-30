import sarah from "../assets/reviewers/sarah.jpg";
import james from "../assets/reviewers/james.jpg";

type Review = {
  id: number;
  stars: number;
  body: string;
  name: string;
  description: string;
  photo?: ImageMetadata;
};

export const reviews: Review[] = [
  {
    id: 1,
    stars: 5,
    body: "Mike and his crew were fantastic. On time, clean, and fairly priced.",
    name: "Sarah T.",
    description: "Homeowner, West Monroe",
    photo: sarah,
  },
  {
    id: 2,
    stars: 5,
    body: "Called them for an emergency panel issue. They were there within two hours.",
    name: "James R.",
    description: "Small Business Owner",
    photo: james,
  },
  {
    id: 3,
    stars: 5,
    body: "Had them rewire our entire shop. Professional from start to finish, and the price came in right where they quoted.",
    name: "Donna M.",
    description: "Shop Owner, Monroe",
    photo: undefined,
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
  },
];
