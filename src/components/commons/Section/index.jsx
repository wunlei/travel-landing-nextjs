import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Section.module.scss";

function Section({ title, subtitle, classes = [], id, children }) {
  return (
    <section className={cn(s.section, "text_normal", classes)} id={id}>
      {title && <h2 className={cn("title-h2", s.title)}>{title}</h2>}
      {subtitle && <p className={s.subtitle}>{subtitle}</p>}
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  classes: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
};
