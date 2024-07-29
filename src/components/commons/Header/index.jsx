import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks";
import cn from "classnames";
import Logo from "@/assets/icons/Logo.svg";
import { navLinks } from "@/constants";
import s from "./Header.module.scss";

const headerStickyClass = s.headerSticky;
const headerRemovedClass = s.headerRemoved;
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
      className={cn(s.header, {
        [headerStickyClass]: isShowed,
        [headerRemovedClass]: isRemoved,
      })}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={s.content}>
        <a href="#" className={s.logoContainer}>
          <Logo className={s.logo} />
        </a>
        <nav className={s.pageNav}>
          <ul className={cn("list", "text_normal", s.navList)}>
            {navLinks.map((el) => (
              <li key={el.href}>
                <a href={el.href} className={s.navLink}>
                  {el.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="tel:+79999999999" className={s.navLink}>
          <p className="text_normal">+7 999 999 99 99</p>
        </a>
      </div>
    </header>
  );
}

export default Header;
