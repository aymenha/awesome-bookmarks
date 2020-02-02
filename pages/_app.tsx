import { AppProps } from "next/app";
import { getInstance } from "../db";

function MyApp({ Component, pageProps }: AppProps) {
  const db = getInstance();
  return <Component {...pageProps} db={db} />;
}

export default MyApp;
