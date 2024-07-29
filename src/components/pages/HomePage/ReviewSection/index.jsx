import Section from "@/components/commons/Section";
import ReviewCard from "./ReviewCard";
import { reviewCards } from "./data";
import s from "./Review.module.scss";

function ReviewSection() {
  return (
    <Section
      id="reviews"
      title="Отзывы наших путешественников"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения
        кадров"
    >
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
