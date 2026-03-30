import { reviews } from "../data/reviews";
import { FaStar } from "react-icons/fa";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { useState } from "react";
import styles from "./ReviewStyles.module.css";

export default function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const review = reviews[activeIndex];

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(reviews.length - 1);
    } else {
      setActiveIndex((prev) => --prev);
    }
  };

  const handleNext = () => {
    if (activeIndex === reviews.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => ++prev);
    }
  };

  return (
    <div class="fw-container">
      <div class={`${styles.reviewCarousel} mw-container`}>
        <div class={styles.carouselContent}>
          <div class={styles.starWrapper}>
            {Array.from({ length: review.stars }, (_, i) => (
              <FaStar />
            ))}
          </div>

          <p class={styles.reviewBody}>"{review.body}"</p>

          <div class={styles.reviewer}>
            {review.photo && (
              <div class="reviewer__photo-wrapper">
                <img
                  src={review.photo.src}
                  alt=""
                  class={styles.reviewerPhoto}
                />
              </div>
            )}
            <div class={styles.reviewerInfoWrapper}>
              <strong class="reviewer__name text-base">{review.name}</strong>
              <p class="reviewer__desc text-base">{review.description}</p>
            </div>
          </div>
        </div>
        <div class={styles.carouselControls}>
          <button onClick={handlePrev}>
            <BsArrowLeftCircle />
          </button>
          <button onClick={handleNext}>
            <BsArrowRightCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
