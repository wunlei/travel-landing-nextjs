import cn from "classnames";
import { socialLinksFooter } from "@/constants";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={s["footer"]}>
      <div className={s["footer__content"]}>
        <p className="text_normal">Наши социальные сети</p>
        <ul className={cn("list", "text_normal", s["contacts-list"])}>
          {socialLinksFooter.map((el) => (
            <li key={el.href} className={s["contacts-list__item"]}>
              <a
                className={s["contacts-list__link"]}
                href={el.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {el.icon}
                <span className={s["contacts-list__link-title"]}>
                  {el.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
