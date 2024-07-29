import cn from "classnames";
import ArrowRight from "@/assets/icons/ArrowRight.svg";
import s from "./ButtonDetails.module.scss";

function ButtonDetails({ classes = [] }) {
  return (
    <button className={cn(s.button, "text_big", classes)}>
      Подробнее
      <ArrowRight />
    </button>
  );
}

export default ButtonDetails;
