import cn from "classnames";
import ButtonDetails from "@/components/commons/ButtonDetails";
import s from "./TourCard.module.scss";

function TourCard({ title, subtitle, bgImage }) {
  return (
    <div className={s.card}>
      <div
        className={s.cardBg}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={s.content}>
        <div className={s.header}>
          <h3 className={cn("title-h3", s.cardTitle)}>{title}</h3>
          <p className={cn("text_small")}>{subtitle}</p>
        </div>
        <ButtonDetails classes={[s.cardBtn]} />
      </div>
    </div>
  );
}

export default TourCard;
