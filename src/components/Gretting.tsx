import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "$background",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "$xl",
  color: "$textColor",
  fontFamily: "$title",
});

const Content = styled("p", {
  lineHeight: 1.5,
  fontFamily: "$body",
  fontSize: "1.9vh",
  textAlign: "center",
  width: "85%",
  margin: "0 auto"
});

const GroomBride = styled("p", {
  marginTop: 50,
  fontSize: "1.7vh",
  lineHeight: 2,
  marginBottom: 50,
  width: "100%",
  textAlign: "center",
});

type GrettingProps = {
  data?: Data;
};


const messageFamily = "A nuestras queridas familias, gracias por estar con nosotros en este camino tan especial. A nuestras tías, primos y hermanos, su apoyo y cariño ha sido invaluable. Nos sentimos profundamente afortunados de contar con ustedes en cada paso, compartiendo la alegría y el amor que nos han dado fuerza para llegar hasta aquí. ¡Gracias por ser parte de este momento tan importante en nuestras vidas!"

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Agradecimientos</Title>
      </Divider>
      <Content>
        {data?.gretting}
      </Content>
      <GroomBride>
        {data?.bride?.parents?.father?.name} ·{" "}
        {data?.bride?.parents?.mother?.name} <br/> Padres de {data?.bride?.name}
        <br/>
        {data?.groom?.parents?.father?.name} ·{" "}
        {data?.groom?.parents?.mother?.name} <br/> Padres de {data?.groom?.name}
        <br/>
      </GroomBride>
      <Content>
        {messageFamily}
      </Content>
    </Wrapper>
  );
}
