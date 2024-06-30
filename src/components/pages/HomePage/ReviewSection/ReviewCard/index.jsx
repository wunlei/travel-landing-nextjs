import Image from "next/image";
import cn from "classnames";
import styles from "./ReviewCard.module.scss";

function ReviewCard({ reviewContent, author, authorPhoto, tourName }) {
  return (
    <div className={styles["review-card"]}>
      {reviewContent.map((text) => (
        <p key={text} className={cn(styles["card__text"], "text_big")}>
          {text}
        </p>
      ))}

      <div className={styles["card__footer"]}>
        <div>
          <h3 className={cn(styles["author"], "title-h3")}>{author}</h3>
          <p className={cn(styles["tour-name"], "text_small")}>
            Тур: {tourName}
          </p>
        </div>
        <picture className={styles["author-photo-container"]}>
          <Image
            className={styles["author-photo"]}
            src={authorPhoto}
            alt="photo"
            fill
            sizes="75px"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}

export default ReviewCard;
