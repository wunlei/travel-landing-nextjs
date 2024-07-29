import cn from "classnames";
import ButtonDetails from "@/components/commons/ButtonDetails";
import s from "./TourCard.module.scss";

function TourCard({ title, subtitle, bgImage }) {
  return (
    <div className={s["tour-card"]}>
      <div
        className={s["tour-card__bg"]}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={s["card__content"]}>
        <div className={s["card__header"]}>
          <h3 className={cn("title-h3", s["card__title"])}>{title}</h3>
          <p className={cn("text_small")}>{subtitle}</p>
        </div>
        <ButtonDetails classes={[s["card__btn"]]} />
      </div>
    </div>
  );
}

export default TourCard;
