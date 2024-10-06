import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";
import Attractions from "@/components/Attractions";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/LocationMap.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

const attractionsData = [
  {
    title: "Convento de San Juan Bautista",
    description: "Este convento del siglo XVI es Patrimonio de la Humanidad y uno de los puntos más icónicos del pueblo.",
    image: "/assets/convento.jpg",
  },
  {
    title: "Museo Casa de Cultura",
    description: "Un espacio que resguarda la historia y tradiciones del pueblo, además de arte local.",
    image: "/assets/casa_cultura.jpg",
  }
];


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="Lizeth ❤ Alfonso" name="Title" />
        <meta
          content="Lizeth ❤ Alfonso"
          name="Description"
        />
        <meta content="Lizeth ❤ Alfonso" name="Keyword" />
        <meta property="og:title" content="Lizeth ❤ Alfonso"/>
        <meta
          property="og:description"
          content="Lizeth ❤ Alfonso"
        />
        <meta
          property="og:url"
          content="https://kyuhyuk.kr/wedding-invitation"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>Lizeth ❤ Alfonso</title>
      </Head>
      <main className={`${notoSansKR.className}`}>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        <Title data={JsonData} />
        {/* <Gretting data={JsonData} /> */}
        <Gallery />
        <Location />
        <Attractions attractions={attractionsData} />
        {/* <CongratulatoryMoney data={JsonData} /> */}
        {/* <Share data={JsonData} /> */}
        <Footer>Copyright © 2021 KyuHyuk Lee</Footer>
      </main>
    </>
  );
}
