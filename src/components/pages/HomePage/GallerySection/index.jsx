import Image from "next/image";
import Section from "@/components/commons/Section";
import { galleryImages } from "./data";
import s from "./Gallery.module.scss";

function GallerySection() {
  return (
    <Section
      classes={[s["section-photos"]]}
      title="Фотографии путешествий"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения
        кадров"
    >
      <div className={s["gallery"]}>
        {galleryImages.map((image) => (
          <picture key={image} className={s["gallery__img"]}>
            <Image
              src={image}
              alt="photo"
              fill
              sizes="
            (max-width: 830px) 170px,
            (max-width: 1125px) 350px,
            500px"
              loading="lazy"
            />
          </picture>
        ))}
      </div>
    </Section>
  );
}

export default GallerySection;
