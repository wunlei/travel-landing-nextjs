import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta
          name="description"
          content="YourTour – идеальный партнер для путешествий! Вы можете выбрать готовый тур или создать путешествие по своему вкусу. От автостопа по Стамбулу до треккинга в горах – сделайте ваш отдых незабываемым!"
        />
        <meta
          name="keywords"
          content="индивидуальные туры, планирование путешествия, туристические услуги, отдых на природе"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
