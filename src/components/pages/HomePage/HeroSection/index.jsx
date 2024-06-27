import cn from "classnames";
import Section from "@/components/commons/Section";
import styles from "./Hero.module.scss";

function HeroSection() {
  return (
    <Section classes={[styles["section-hero"]]}>
      <div className={styles["hero-bg"]}></div>
      <h1 className="title-h1">Идеальные путешествия существуют</h1>
      <p className={cn(styles["section-hero__subtitle"])}>
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>
      <button className={cn(styles["section-hero__btn"], "text_small")}>
        Найти тур
      </button>
    </Section>
  );
}

export default HeroSection;
