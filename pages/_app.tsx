import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "@next/font/google";
import Head from "next/head";

const roboto_Mono = Roboto_Mono();
const style = `${roboto_Mono.className} overflow-y-hide`;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
