import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks";
import cn from "classnames";
import Logo from "@/assets/icons/Logo.svg";
import styles from "./Header.module.scss";

const navLinks = [
  {
    href: "#tours",
    title: "Туры",
  },
  {
    href: "#create-tour",
    title: "Создать тур",
  },
  {
    href: "#reviews",
    title: "Отзывы",
  },
  {
    href: "#stories",
    title: "Истории",
  },
];

const headerStickyClass = styles["header_sticky"];
const headerRemovedClass = styles["header_removed"];
const HEADER_APPEAR_POSITION = 450;

function Header() {
  const [isShowed, setIsShowed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  function handleScroll() {
    const currentPosition = window.scrollY;

    if (currentPosition > HEADER_APPEAR_POSITION) {
      if (!isShowed) {
        setIsShowed(true);
      }
    } else {
      if (isShowed) {
        setIsRemoved(true);
      }
    }
  }

  function handleAnimationEnd() {
    if (isRemoved) {
      setIsRemoved(false);
      setIsShowed(false);
    }
  }

  const debouncedScrollHandler = useDebounce(handleScroll);

  useEffect(() => {
    window.addEventListener("scroll", debouncedScrollHandler);
    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [debouncedScrollHandler]);

  return (
    <header
      className={cn(styles["header"], {
        [headerStickyClass]: isShowed,
        [headerRemovedClass]: isRemoved,
      })}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles["content"]}>
        <a href="#" className={styles["logo-container"]}>
          <Logo className={styles["logo"]} />
        </a>
        <nav className={styles["page-nav"]}>
          <ul className={cn("list", "text_normal", styles["page-nav__list"])}>
            {navLinks.map((el) => (
              <li key={el.href}>
                <a href={el.href} className={styles["page-nav__link"]}>
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="tel:+79999999999" className={cn(styles["page-nav__link"])}>
          <p className="text_normal">+7 999 999 99 99</p>
        </a>
      </div>
    </header>
  );
}

export default Header;
