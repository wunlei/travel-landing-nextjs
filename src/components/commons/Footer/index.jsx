import cn from "classnames";
import Instagram from "@/assets/icons/Instagram.svg";
import Facebook from "@/assets/icons/Facebook.svg";
import Vk from "@/assets/icons/Vk.svg";
import styles from "./Footer.module.scss";

const socialLinks = [
  {
    href: "https://www.instagram.com/",
    title: "instagram",
    icon: <Instagram />,
  },
  { href: "https://www.facebook.com/", title: "facebook", icon: <Facebook /> },
  { href: "https://vk.com/", title: "vkontakte", icon: <Vk /> },
];

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__content"]}>
        <p className="text_normal">Наши социальные сети</p>
        <ul className={cn("list", "text_normal", styles["contacts-list"])}>
          {socialLinks.map((el) => (
            <li key={el.href} className={styles["contacts-list__item"]}>
              <a
                className={styles["contacts-list__link"]}
                href={el.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {el.icon}
                <span className={styles["contacts-list__link-title"]}>
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
