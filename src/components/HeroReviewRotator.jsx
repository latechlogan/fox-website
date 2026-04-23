import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import styles from "./HeroReviewRotator.module.css";

export default function HeroReviewRotator({ reviews }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % reviews.length);
        setVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(id);
  }, [reviews.length]);

  const review = reviews[index];

  return (
    <div
      class={styles.heroRotator}
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      <div class={styles.heroRotatorStars}>
        {Array.from({ length: review.stars }, (_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p class={styles.heroRotatorBody}>{review.body}</p>
      <p class={styles.heroRotatorName}>
        {review.name}&ensp;|&ensp;
        
      
      <a
        href="https://www.google.com/search?sca_esv=58faf45c7c4dd337&sxsrf=ANbL-n6jMPcBhiT6GLNuBkfZ8tH9yEbzPQ:1776964538997&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x_q0qmDEzOVtVhGc3IxULo2rJWXPSc7GIbXOlMr5zQ43g1mZ1qMAmKw6sn9_xrJEWDOycgCFxICj3imT2d4hH-5XTqxrVtjT_C5PUY1pPSDnDJ1XqQ%3D%3D&q=Fox+Family+Electric+LLC+Reviews&sa=X&ved=2ahUKEwigkIDhvISUAxVvnGoFHRylKsEQ0bkNegQIRRAH&biw=1712&bih=891&dpr=2"
        target="blank"
        class={styles.heroRotatorVerification}
      >
        Google Review<MdVerified fill="rgb(25, 123, 255)" />
      </a>
      </p>
    </div>
  );
}
