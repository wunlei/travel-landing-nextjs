import Head from "next/head";
import { Roboto } from "next/font/google";
import "@/styles/globals.scss";

export const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YourTour</title>
      </Head>
      <style jsx global>{`
        body {
          --font-roboto: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default App;
