import Section from "@/components/commons/Section";
import Paragraph from "@/components/commons/Paragraph/Paragraph";
import s from "./CTA.module.scss";

function CTASection() {
  return (
    <Section classes={[s.container]}>
      <div className={s.img}></div>
      <div className={s.content}>
        <h2 className="title-h3">Пора в путешествие вместе с нами!</h2>
        <Paragraph>
          Напиши на почту и узнай подробности на{" "}
          <a className={s.link} href="mailto:yourtour@gmail.com">
            yourtour@gmail.com
          </a>
        </Paragraph>
      </div>
    </Section>
  );
}

export default CTASection;
