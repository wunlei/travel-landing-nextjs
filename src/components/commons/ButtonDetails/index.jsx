import cn from "classnames";
import ArrowRight from "@/assets/icons/ArrowRight.svg";
import styles from "./ButtonDetails.module.scss";

function ButtonDetails({ classes = [] }) {
  return (
    <button className={cn(styles.button, "text_big", classes)}>
      Подробнее
      <ArrowRight />
    </button>
  );
}

export default ButtonDetails;
