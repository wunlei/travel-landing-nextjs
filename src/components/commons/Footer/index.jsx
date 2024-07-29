import cn from "classnames";
import Instagram from "@/assets/icons/Instagram.svg";
import Facebook from "@/assets/icons/Facebook.svg";
import Vk from "@/assets/icons/Vk.svg";
import s from "./Footer.module.scss";

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
    <footer className={s["footer"]}>
      <div className={s["footer__content"]}>
        <p className="text_normal">Наши социальные сети</p>
        <ul className={cn("list", "text_normal", s["contacts-list"])}>
          {socialLinks.map((el) => (
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
