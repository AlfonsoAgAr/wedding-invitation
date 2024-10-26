import { styled } from "@/styles/theme";
import { Divider, Carousel, Typography, Card as AntCard } from "antd";

const { Text } = Typography;

const Wrapper = styled("div", {
  background: "$background",
  width: "100%",
  padding: "50px 20px",
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "$xl",
  color: "$textColor",
  fontFamily: "$title",
  textAlign: "center"
});


const StyledCard = styled(AntCard, {
  width: "85%",
  margin: "20px auto",
  backgroundColor: "$backgroundLighter",
  textAlign: "center",
  fontFamily: "$body",
});

const StyledCardTitle = styled("p", {
  fontWeight: "lighter",
});

const AttractionContent = styled("div", {
  fontSize: "$s",
  lineHeight: 1.5,
  color: "$textColor",
});

const AttractionImage = styled("img", {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  marginBottom: "15px",
  borderRadius: "10px",
});

type AttractionProps = {
  attractions: {
    title: string;
    description: string;
    image: string;
  }[];
};

export default function Attractions({ attractions }: AttractionProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Atracciones</Title>
        <Title>Cercanas</Title>
      </Divider>
      <Carousel autoplay autoplaySpeed={7500} dots={{ className: "carousel-dots" }} style={{ width: "90%", margin: "0 auto" }}>
        {attractions.map((attraction, index) => (
          <StyledCard key={index} title={<StyledCardTitle>{attraction.title}</StyledCardTitle>}>
            <AttractionImage src={attraction.image} alt={attraction.title} />
            <AttractionContent>{attraction.description}</AttractionContent>
          </StyledCard>
        ))}
      </Carousel>
    </Wrapper>
  );
}
