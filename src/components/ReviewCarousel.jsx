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
    <div className="fw-container">
      <div className={`${styles.reviewCarousel} mw-container`}>
        <div className={styles.carouselContent}>
          <div className={styles.starWrapper}>
            {Array.from({ length: review.stars }, (_, i) => (
              <FaStar />
            ))}
          </div>

          <p className={styles.reviewBody}>"{review.body}"</p>

          <div className={styles.reviewer}>
            {review.photo && (
              <div className="reviewer__photo-wrapper">
                <img
                  src={review.photo.src}
                  alt=""
                  className={styles.reviewerPhoto}
                />
              </div>
            )}
            <div className={styles.reviewerInfoWrapper}>
              <strong className="reviewer__name text-base">{review.name}</strong>
              <p className="reviewer__desc text-base">{review.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.carouselControls}>
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
