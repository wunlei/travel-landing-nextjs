import Image from "next/image";
import cn from "classnames";
import s from "./ReviewCard.module.scss";

function ReviewCard({ reviewContent, author, authorPhoto, tourName }) {
  return (
    <div className={s["review-card"]}>
      {reviewContent.map((text) => (
        <p key={text} className={cn(s["card__text"], "text_big")}>
          {text}
        </p>
      ))}

      <div className={s["card__footer"]}>
        <div>
          <h3 className={cn(s["author"], "title-h3")}>{author}</h3>
          <p className={cn(s["tour-name"], "text_small")}>
            Тур: {tourName}
          </p>
        </div>
        <picture className={s["author-photo-container"]}>
          <Image
            className={s["author-photo"]}
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
