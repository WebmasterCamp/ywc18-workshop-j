import "../styles/globals.css";
import "../styles/font.css";
import type { AppProps } from "next/app";

// import "./phaser.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
