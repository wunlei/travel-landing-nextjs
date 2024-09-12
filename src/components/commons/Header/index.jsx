import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks";
import cn from "classnames";
import Logo from "@/assets/icons/Logo.svg";
import { navLinks } from "@/constants";
import Paragraph from "../Paragraph/Paragraph";
import List from "../List/List";
import { HEADER_APPEAR_POSITION, HEADER_STATE } from "@/constants/Header";
import s from "./Header.module.scss";

const headerStickyClass = s.headerSticky;
const headerRemovedClass = s.headerRemoved;

function Header() {
  const [headerState, setHeaderState] = useState(HEADER_STATE.init);

  function handleScroll() {
    const currentPosition = window.scrollY;

    if (currentPosition > HEADER_APPEAR_POSITION) {
      if (headerState !== HEADER_STATE.showed) {
        setHeaderState(HEADER_STATE.showed);
      }
    } else {
      if (headerState === HEADER_STATE.showed) {
        setHeaderState(HEADER_STATE.hidden);
      }
    }
  }

  function handleAnimationEnd() {
    if (headerState === HEADER_STATE.hidden) {
      setHeaderState(HEADER_STATE.init);
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
        [headerStickyClass]: headerState === HEADER_STATE.showed,
        [headerRemovedClass]: headerState === HEADER_STATE.hidden,
      })}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={s.content}>
        <a href="#" className={s.logoContainer}>
          <Logo className={s.logo} />
        </a>
        <nav className={s.pageNav}>
          <List classnames={[s.navList]}>
            {navLinks.map((el) => (
              <li key={el.href}>
                <a href={el.href} className={s.navLink}>
                  {el.title}
                </a>
              </li>
            ))}
          </List>
        </nav>
        <a href="tel:+79999999999" className={s.navLink}>
          <Paragraph>+7 999 999 99 99</Paragraph>
        </a>
      </div>
    </header>
  );
}

export default Header;
