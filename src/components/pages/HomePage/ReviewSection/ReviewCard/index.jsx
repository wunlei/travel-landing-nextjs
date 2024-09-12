import PropTypes from "prop-types";
import Image from "next/image";
import cn from "classnames";
import s from "./ReviewCard.module.scss";

function ReviewCard({ reviewContent, author, authorPhoto, tourName }) {
  return (
    <div className={s.card}>
      {reviewContent.map((text) => (
        <p key={text} className={cn(s.cardText, "text_big")}>
          {text}
        </p>
      ))}

      <div className={s.footer}>
        <div>
          <h3 className={cn(s.author, "title-h3")}>{author}</h3>
          <p className={cn(s.tourName, "text_small")}>Тур: {tourName}</p>
        </div>
        <picture className={s.authorPhotoContainer}>
          <Image
            className={s.authorPhoto}
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

ReviewCard.propTypes = {
  reviewContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.string.isRequired,
  authorPhoto: PropTypes.string.isRequired,
  tourName: PropTypes.string.isRequired,
};
