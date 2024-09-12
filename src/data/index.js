import { createContext } from "react";

export const appData = {
  heroSection: {
    title: "Идеальные путешествия существуют",
    subtitle: "Идейные соображения высшего порядка",
    btnText: "Найти тур",
  },
  createTourSection: {
    title: "Собери свой тур",
    subtitle:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров",
  },
  CTASection: {
    title: "Пора в путешествие вместе с нами!",
    linkTitle: "Напиши на почту и узнай подробности на",
    linkHref: "mailto:yourtour@gmail.com",
  },
  gallerySection: {
    title: "Фотографии путешествий",
    subtitle:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров",
  },
  reviewSection: {
    title: "Отзывы наших путешественников",
    subtitle:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров",
  },
  selectTourSection: {
    title: "Выбери свой тур",
    tours: ["Популярные", "Авторские", "Походы", "Сплавы", "Велопрогулки"],
  },
  storiesSection: {
    title: "Истории путешествий",
    subtitle:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров",
  },
};

export const AppContext = createContext(appData);
