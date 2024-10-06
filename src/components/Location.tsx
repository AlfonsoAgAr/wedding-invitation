import { styled } from "@/styles/theme";
import { Divider, Button, Typography, Card  } from "antd";
import { Card as AntCard, Button as AntButton } from "antd";


const { Text } = Typography;

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

const StyledText = styled(Text, {
  fontSize: "$m",
  fontFamily: "$body",
  color: "$textColor",
});

const StyledCard = styled(AntCard, {
  width: "85%",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$backgroundLighter",
});

const StyledCardTitle = styled("p", {
  fontWeight: "lighter"
});

const StyledButton = styled(AntButton, {
  marginTop: 36,
  backgroundColor: "$secondary",
  color: "$textColor",
  fontFamily: "$body",
  "&:hover": {
    backgroundColor: "$secondary",
  },
});

const defaultCenter = {
  lat: 18.9553623,
  lng: -98.9877201,
};

const googleMapsLink = `https://maps.app.goo.gl/XBziA94qkLSjMuYC8`;
const address = "Calle Independencia #75, El Rosario, 62540, Tlayacapan, Morelos";


export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>¿Dónde?</Title>
      </Divider>
      <StyledText style={{ fontSize: '16px', marginBottom: '16px', display: 'block' }}>
        {address}
      </StyledText>
      <StyledCard
        title={<StyledCardTitle>Ubicación en Google Maps</StyledCardTitle>}
      >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.84113924082155!2d-98.98784062164131!3d18.955359986187325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce6db2cd7ec20d%3A0xf816aa80dd742f16!2sHotel%20Boutique%20Jard%C3%ADn%20de%20Flores!5e0!3m2!1ses!2smx!4v1727335415469!5m2!1ses!2smx"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: 10 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </StyledCard>
      <StyledButton
        type="primary"
        style={{ marginTop: 24 }}
        href={googleMapsLink}
        target="_blank"
      >
        Abrir en aplicación
      </StyledButton>
    </Wrapper>
  );
}
