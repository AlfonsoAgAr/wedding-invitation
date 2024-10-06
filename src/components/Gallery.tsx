import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "$background",
  width: "100%",
  paddingBottom: 20,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "$xl",
  color: "$textColor",
  fontFamily: "$title",
});

const Content = styled("p", {
  lineHeight: 1.35,
  fontFamily: "$body",
  fontSize: "1.9vh",
  textAlign: "center",
  width: "85%",
  margin: "0 auto",
  marginBottom: 50
});

const images = [
  {
    original: "./assets/1.jpeg",
    thumbnail: "./assets/1.jpeg",
  },
  {
    original: "./assets/2.jpeg",
    thumbnail: "./assets/2.jpeg",
  }
];

const messageOurs = "Nos conocimos casi por casualidad, como si el destino hubiera decidido cruzar nuestros caminos en el momento justo. Con el tiempo, nuestras risas se hicieron más profundas, nuestras conversaciones más largas, y nuestros corazones, más unidos. Hoy, damos un nuevo paso en esta aventura, emocionados por todo lo que aún está por venir. Y lo más importante: lo hacemos juntos, con la certeza de que, pase lo que pase, siempre nos tendremos el uno al otro."

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Nosotros</Title>
      </Divider>
      <Content>
        {messageOurs}
      </Content>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
