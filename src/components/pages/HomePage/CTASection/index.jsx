import { useContext } from "react";
import { AppContext } from "@/data";
import Section from "@/components/commons/Section";
import Paragraph from "@/components/commons/Paragraph/Paragraph";
import s from "./CTA.module.scss";

function CTASection() {
  const { title, linkTitle, linkHref } = useContext(AppContext).CTASection;
  return (
    <Section classes={[s.container]}>
      <div className={s.img}></div>
      <div className={s.content}>
        <h2 className="title-h3">{title}</h2>
        <Paragraph>
          {linkTitle}{" "}
          <a className={s.link} href={`mailto:${linkHref}`}>
            {linkHref}
          </a>
        </Paragraph>
      </div>
    </Section>
  );
}

export default CTASection;
