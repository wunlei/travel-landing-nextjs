import cn from "classnames";
import Section from "@/components/commons/Section";
import s from "./Hero.module.scss";

function HeroSection() {
  return (
    <Section classes={[s.container]}>
      <div className={s.bg}></div>
      <h1 className="title-h1">Идеальные путешествия существуют</h1>
      <p className={s.subtitle}>
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <button className={cn(s.btn, "text_small")}>Найти тур</button>
    </Section>
  );
}

export default HeroSection;
