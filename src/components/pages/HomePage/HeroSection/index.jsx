import { useContext } from "react";
import { AppContext } from "@/data";
import cn from "classnames";
import Section from "@/components/commons/Section";
import s from "./Hero.module.scss";

function HeroSection() {
  const { title, subtitle, btnText } = useContext(AppContext).heroSection;

  return (
    <Section classes={[s.container]}>
      <div className={s.bg}></div>
      <h1 className="title-h1">{title}</h1>
      <p className={s.subtitle}>{subtitle}</p>
      <button className={cn(s.btn, "text_small")}>{btnText}</button>
    </Section>
  );
}

export default HeroSection;
