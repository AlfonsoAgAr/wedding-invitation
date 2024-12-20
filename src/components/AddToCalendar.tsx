import { styled } from "@/styles/theme";
import { Button, Divider, Card, Image } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const Wrapper = styled("div", {
  width: "100%",
  textAlign: "center",
  margin: "40px 0",
});

const QRWrapper = styled("div", {
    textAlign: "center",
    margin: "20px auto",
  });

const Title = styled("p", {
    fontSize: "$xl",
    color: "$textColor",
    fontFamily: "$title",
    textAlign: "center"
  });


const QRCard = styled(Card, {
    maxWidth: "300px",
    margin: "0 auto 30px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "$backgroundLighter",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  });
  
const QRImage = styled(Image, {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  });

const Description = styled("p", {
    fontSize: "$s",
    color: "$textColor",
    fontFamily: "$body",
    width: "85%",
    margin: "auto",
    marginBottom: "30px"
  });
  

const StyledButton = styled(Button, {
    backgroundColor: "$secondary",
    color: "$textColor",
    height: "45px",
    fontFamily: "$body",
    borderRadius: "10px",
    fontSize: "$s",
    "&:hover": {
        backgroundColor: "$secondary",
    },
});

export default function AddToCalendar() {
  return (
    <Wrapper>
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
            <Title>Festeja con</Title>
            <Title>nosotros</Title>
        </Divider>
        <Description>
        Da click o escanea el código QR para compartir tus fotos con nosotros
      </Description>

      <QRCard>
        <QRWrapper>
        <a href="https://photos.app.goo.gl/mWUkcq3MmpxDkKkN9" target="_blank" rel="noopener noreferrer">
            <Image
            src="assets/photos_qr.jpeg" // Reemplaza con la ruta a tu imagen QR
            alt="Código QR para compartir fotos"
            width={200}
            height={200}
            style={{ cursor: "pointer" }} // Hace que el cursor cambie para indicar que es clicable
            />
        </a>
        </QRWrapper>
      </QRCard>
      <Description>
        Da click en el siguiente botón para agregar el evento a tu calendario.
      </Description>
      <StyledButton
        href="https://calendar.app.google/SGaEkZGYs1QGp3bt9"
        target="_blank"
        rel="noopener noreferrer"
        icon={<CalendarOutlined style={{
            fontSize: "1.1rem",
            marginRight: "10px",
            backgroundColor: "$secondary",
            
        }} />}
      >
        ¡Agrega el evento a tu calendario!
      </StyledButton>
    </Wrapper>
  );
}
