import { Fragment } from "react";
import cn from "classnames";
import ButtonDetails from "@/components/commons/ButtonDetails";
import s from "./StoryCard.module.scss";

function StoryCard({ title, links, content, background }) {
  return (
    <div className={s["story-card"]}>
      <div
        className={s["story-card__bg"]}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <h3 className={cn("title-h3", s["story-card__title"])}>{title}</h3>
      <div className={cn(s["story-card__content"], "text_normal")}>
        {content.map((el, index) => (
          <Fragment key={index}>
            {el.type === "text" && (
              <p className={s["story-card__content-text"]}>{el.content}</p>
            )}
            {el.type === "list" && (
              <ul className={s["story-card__content-list"]}>
                {el.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </Fragment>
        ))}
      </div>
      <div className={s["story-card__footer"]}>
        <ButtonDetails classes={[s["story-card__btn"], "text_big"]} />
        <ul className={cn("list", "text_normal", s["story-card__links"])}>
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={s["story-card__link"]}
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
