import { useState } from "react";
import { styled } from "@/styles/theme";
import { Divider, Typography, Card, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons"; // Iconos de despliegue

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

const ScheduleCard = styled(Card, {
  width: "85%",
  maxWidth: "400px",
  margin: "20px auto",
  textAlign: "center",
  backgroundColor: "$backgroundLighter",
  borderRadius: "10px",
  fontFamily: "$body",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
});

const EventTime = styled("p", {
  fontSize: "$l",
  color: "$primary",
  fontWeight: "bold",
  marginBottom: "10px",
});

const EventDescription = styled(Text, {
  fontSize: "$s",
  fontFamily: "$body",
  color: "$textColor",
});


type Event = {
  time: string;
  description: string;
};

type WeddingScheduleProps = {
  events: Event[];
};

export default function WeddingSchedule({ events }: WeddingScheduleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSchedule = () => {
    setIsExpanded(!isExpanded);
  };
  const ToggleButton = styled(Button, {
    backgroundColor: "$secondary",
    color: "$textColor",
    fontSize: "1.1rem",
    height: "45px",
    marginBottom: "20px",
    "&:hover": {
      backgroundColor: "$primary",
      color: "#fff",
    },
  });

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Programa</Title>
      </Divider>
      
      <ToggleButton onClick={toggleSchedule} icon={isExpanded ? <UpOutlined /> : <DownOutlined />}>
        {isExpanded ? "Ocultar Programa" : "Ver Programa"}
      </ToggleButton>

      {isExpanded && (
        <>
          {events.map((event, index) => (
            <ScheduleCard key={index}>
              <EventTime>{event.time}</EventTime>
              <EventDescription>{event.description}</EventDescription>
            </ScheduleCard>
          ))}
        </>
      )}
    </Wrapper>
  );
}
