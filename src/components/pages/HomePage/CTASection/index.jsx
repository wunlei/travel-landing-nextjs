import Section from "@/components/commons/Section";
import s from "./CTA.module.scss";

function CTASection() {
  return (
    <Section classes={[s["section-cta"]]}>
      <div className={s["section-cta__img"]}></div>
      <div className={s["section-cta__content"]}>
        <h2 className="title-h3">Пора в путешествие вместе с нами!</h2>
        <p className="text_normal">
          Напиши на почту и узнай подробности на{" "}
          <a
            className={s["section-cta__link"]}
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
