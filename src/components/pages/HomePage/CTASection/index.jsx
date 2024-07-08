import Section from "@/components/commons/Section";
import styles from "./CTA.module.scss";

function CTASection() {
  return (
    <Section classes={[styles["section-cta"]]}>
      <div className={styles["section-cta__img"]}></div>
      <div className={styles["section-cta__content"]}>
        <h2 className="title-h3">Пора в путешествие вместе с нами!</h2>
        <p className="text_normal">
          Напиши на почту и узнай подробности на{" "}
          <a
            className={styles["section-cta__link"]}
            href="mailto:yourtour@gmail.com"
          >
            yourtour@gmail.com
          </a>
        </p>
      </div>
    </Section>
  );
}

export default CTASection;
