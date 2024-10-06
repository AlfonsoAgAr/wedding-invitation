import { styled } from "@stitches/react";
import { useCountdown } from "./Counter";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  animation: "fadein 4s",
  "-moz-animation": "fadein 4s",
  "-webkit-animation": "fadein 4s",
  "-o-animation": "fadein 4s"
});

const VideoBackground = styled("video", {
  backgroundColor: "#aeb8b3 !important",
  opacity: 0.9,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
});

const WeddingInvitation = styled("h1", {
  fontSize: "$l",
});

const GroomBride = styled("h1", {
  fontSize: "$xxl",
});

const Schedule = styled("p", {
  fontSize: "$s",
  marginTop: '2%',
  color: '$backgroundLighter'
});

const CountdownText = styled("p", {
  fontSize: "$s",
  marginTop: "100px",
  color: "$backgroundLighter",
  // fontWeight: "bold",
});


type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  const targetDate = new Date(data?.formatedDate ?? "2024-12-21");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  
  return (
    <Layout>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src="./assets/animation.mp4" type="video/mp4" />
      </VideoBackground>
      <TitleWrapper>
        <WeddingInvitation>¡Nos casamos!</WeddingInvitation>
        <GroomBride>
          {data?.bride?.name} &#38; {data?.groom?.name}
        </GroomBride>
        <Schedule>
          {data?.date}
          <br/>
          {data?.location}
        </Schedule>
        <CountdownText>
          Faltan {days} días, {hours} horas, {minutes} minutos, {seconds} segundos para el gran día 🎉
        </CountdownText>
      </TitleWrapper>
    </Layout>
  );
}
