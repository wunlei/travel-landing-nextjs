import { Fragment } from "react";
import cn from "classnames";
import ButtonDetails from "@/components/commons/ButtonDetails";
import styles from "./StoryCard.module.scss";

function StoryCard({ title, links, content, background }) {
  return (
    <div className={styles["story-card"]}>
      <div
        className={styles["story-card__bg"]}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <h3 className={cn("title-h3", styles["story-card__title"])}>{title}</h3>
      <div className={cn(styles["story-card__content"], "text_normal")}>
        {content.map((el, index) => (
          <Fragment key={index}>
            {el.type === "text" && (
              <p className={styles["story-card__content-text"]}>{el.content}</p>
            )}
            {el.type === "list" && (
              <ul className={styles["story-card__content-list"]}>
                {el.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </Fragment>
        ))}
      </div>
      <div className={styles["story-card__footer"]}>
        <ButtonDetails classes={[styles["story-card__btn"], "text_big"]} />
        <ul className={cn("list", "text_normal", styles["story-card__links"])}>
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["story-card__link"]}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StoryCard;
