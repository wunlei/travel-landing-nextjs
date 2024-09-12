import { useContext } from "react";
import { AppContext } from "@/data";
import Section from "@/components/commons/Section";
import ReviewCard from "./ReviewCard";
import { reviewCards } from "./data";
import s from "./Review.module.scss";

function ReviewSection() {
  const { title, subtitle } = useContext(AppContext).reviewSection;
  return (
    <Section id="reviews" title={title} subtitle={subtitle}>
      <div className={s.cards}>
        {reviewCards.map((card) => (
          <ReviewCard
            key={card.id}
            author={card.author}
            authorPhoto={card.authorPhoto}
            tourName={card.tourName}
            reviewContent={card.reviewContent}
          />
        ))}
      </div>
    </Section>
  );
}

export default ReviewSection;
