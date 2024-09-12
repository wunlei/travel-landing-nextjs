import { socialLinksFooter } from "@/constants";
import Paragraph from "../Paragraph/Paragraph";
import List from "../List/List";
import Link from "../Link/Link";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <Paragraph>Наши социальные сети</Paragraph>
        <List classnames={[s.contactsList]}>
          {socialLinksFooter.map((el) => (
            <li key={el.href}>
              <Link href={el.href} classnames={[s.link]}>
                {<el.icon />}
                <span className={s.linkTitle}>{el.title}</span>
              </Link>
            </li>
          ))}
        </List>
      </div>
    </footer>
  );
}

export default Footer;
