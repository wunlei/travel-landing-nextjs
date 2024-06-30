import cn from "classnames";
import ButtonDetails from "@/components/commons/ButtonDetails";
import styles from "./TourCard.module.scss";

function TourCard({ title, subtitle, bgImage }) {
  return (
    <div className={styles["tour-card"]}>
      <div
        className={styles["tour-card__bg"]}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={styles["card__content"]}>
        <div className={styles["card__header"]}>
          <h3 className={cn("title-h3", styles["card__title"])}>{title}</h3>
          <p className={cn("text_small")}>{subtitle}</p>
        </div>
        <ButtonDetails classes={[styles["card__btn"]]} />
      </div>
    </div>
  );
}

export default TourCard;
