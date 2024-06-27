import cn from "classnames";
import styles from "./Section.module.scss";

function Section({ title, subtitle, classes = [], id, children }) {
  return (
    <section className={cn(styles["section"], "text_normal", classes)} id={id}>
      {title && <h2 className={cn("title-h2", styles["title"])}>{title}</h2>}
      {subtitle && <p className={cn(styles["subtitle"])}>{subtitle}</p>}
      {children}
    </section>
  );
}

export default Section;
