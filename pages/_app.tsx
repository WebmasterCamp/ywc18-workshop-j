import "../styles/globals.css";
import "../styles/font.css";
import type { AppProps } from "next/app";
import Head from "next/head";

// import "./phaser.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Maomun | GET DRUNK AND REST WITH BEST FRIENDS!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
