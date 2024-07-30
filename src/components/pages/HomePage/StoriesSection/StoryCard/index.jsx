import { Fragment } from "react";
import cn from "classnames";
import ButtonDetails from "@/components/commons/ButtonDetails";
import List from "@/components/commons/List/List";
import Link from "@/components/commons/Link/Link";
import s from "./StoryCard.module.scss";

function StoryCard({ title, links, content, background }) {
  return (
    <div className={s.card}>
      <div
        className={s.cardBg}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <h3 className={cn("title-h3", s.cardTitle)}>{title}</h3>
      <div className={cn(s.content, "text_normal")}>
        {content.map((el, index) => (
          <Fragment key={index}>
            {el.type === "text" && <p>{el.content}</p>}
            {el.type === "list" && (
              <ul className={s.list}>
                {el.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </Fragment>
        ))}
      </div>
      <div className={s.cardFooter}>
        <ButtonDetails classes={[s.cardBtn, "text_big"]} />
        <List classnames={[s.cardLinks]}>
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.href} classnames={[s.cardLink]}>
                {link.title}
              </Link>
            </li>
          ))}
        </List>
      </div>
    </div>
  );
}

export default StoryCard;
