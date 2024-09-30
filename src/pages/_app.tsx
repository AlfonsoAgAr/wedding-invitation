import "@/styles/globals.css";
import { globalStyles } from '@/styles/theme';
import type { AppProps } from "next/app";

globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  return <
    Component {...pageProps}
  />;
}
