import cn from "classnames";
import { socialLinksFooter } from "@/constants";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <p className="text_normal">Наши социальные сети</p>
        <ul className={cn("list", "text_normal", s.contactsList)}>
          {socialLinksFooter.map((el) => (
            <li key={el.href}>
              <a
                className={s.link}
                href={el.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {<el.icon />}
                <span className={s.linkTitle}>{el.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
