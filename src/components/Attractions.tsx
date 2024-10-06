import { styled } from "@/styles/theme";
import { Card, Divider } from "antd";

const Wrapper = styled("div", {
  background: "$background",
  width: "100%",
  padding: "50px 20px",
  textAlign: "center",
});

const Title = styled("h2", {
  fontSize: "$xl",
  color: "$primary",
  fontFamily: "$title",
  marginBottom: "30px",
});

const AttractionCard = styled(Card, {
  width: "85%",
  margin: "20px auto",
  textAlign: "left",
  fontFamily: "$body",
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
      <Divider plain />
      <Title>Atracciones de Tlayacapan</Title>
      {attractions.map((attraction, index) => (
        <AttractionCard key={index} title={attraction.title}>
          <AttractionImage src={attraction.image} alt={attraction.title} />
          <AttractionContent>{attraction.description}</AttractionContent>
        </AttractionCard>
      ))}
    </Wrapper>
  );
}
