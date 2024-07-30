import { useContext } from "react";
import { AppContext } from "@/data";
import { storyCards } from "./data";
import Section from "@/components/commons/Section";
import StoryCard from "./StoryCard";
import s from "./Stories.module.scss";

function StoriesSection() {
  const { title, subtitle } = useContext(AppContext).storiesSection;
  return (
    <Section id="stories" title={title} subtitle={subtitle}>
      <div className={s.cards}>
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
