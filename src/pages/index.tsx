import Head from "next/head";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";

const Attractions =  dynamic(() => import("@/components/Attractions"), { ssr: false });
const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const WeddingSchedule  = dynamic(() => import("@/components/WeddingScheduling"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const Calendar = dynamic(() => import("@/components/AddToCalendar"), { ssr: false });

const Footer = styled("footer", {
  color: "$background",
  backgroundImage: "url(./assets/wedding.webp)",
  opacity: 0.8,
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
    image: "/assets/san_juan_bautista.jpg",
  },
  {
    title: "Museo Casa de Cultura",
    description: "Un espacio que resguarda la historia y tradiciones del pueblo, además de arte local.",
    image: "/assets/cereria.webp",
  },
  {
    title: "Six Flags Hurricane Harbor",
    description: "Uno de los parques acuáticos más grandes de México.",
    image: "/assets/six_flags.jpg",
  }
];

const events = [
  { time: "14:00", description: "Ceremonia en la iglesia" },
  { time: "15:30", description: "Cocteles y aperitivos" },
  { time: "17:00", description: "Banquete en el salón" },
  { time: "19:00", description: "Primer baile y apertura de pista" },
  { time: "20:30", description: "Corte de pastel" },
  { time: "22:00", description: "Baile y celebración" },
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
      <main>
        <Title data={JsonData} />
        <Gallery />
        <Location />
        <WeddingSchedule events={events} />
        <Calendar />
        <Attractions attractions={attractionsData} />
        <Footer>Copyright © 2024 Alfonso Aguilar</Footer>
      </main>
    </>
  );
}
