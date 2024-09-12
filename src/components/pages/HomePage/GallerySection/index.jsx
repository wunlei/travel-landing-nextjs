import { useContext } from "react";
import { AppContext } from "@/data";
import Image from "next/image";
import Section from "@/components/commons/Section";
import { galleryImages } from "./data";
import s from "./Gallery.module.scss";

function GallerySection() {
  const { title, subtitle } = useContext(AppContext).gallerySection;
  return (
    <Section classes={[s.container]} title={title} subtitle={subtitle}>
      <div className={s.gallery}>
        {galleryImages.map((image) => (
          <picture key={image} className={s.galleryImg}>
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
