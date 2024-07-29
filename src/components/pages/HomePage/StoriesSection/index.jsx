import { storyCards } from "./data";
import Section from "@/components/commons/Section";
import StoryCard from "./StoryCard";
import s from "./Stories.module.scss";

function StoriesSection() {
  return (
    <Section
      id="stories"
      title="Истории путешествий"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения
        кадров"
    >
      <div className={s["story-cards"]}>
        {storyCards.map((card) => (
          <StoryCard
            key={card.id}
            title={card.title}
            content={card.content}
            links={card.links}
            background={card.background}
          />
        ))}
      </div>
    </Section>
  );
}

export default StoriesSection;
