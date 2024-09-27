import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 18,
  width: "100%",
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("p", {
  fontSize: "1.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const SubContent = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
});

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
});

type CongratulatoryMoneyProps = {
  data?: Data;
};

export default function CongratulatoryMoney({
  data,
}: CongratulatoryMoneyProps) {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Title CongratulatoryMoney</Title>
      </Divider>
      <Content>Content CongratulatoryMoney</Content>
      <ContactButton onClick={() => setGroomVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#829fe0"
        />
        <br />
        <SubContent>SubContent CongratulatoryMoney</SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <CheckCircleTwoTone
          style={{ fontSize: 64, marginBottom: 16 }}
          twoToneColor="#fe7daf"
        />
        <br />
        <SubContent>Subcontent x2 CongratulatoryMoney</SubContent>
      </ContactButton>
      <Modal
        title={<b>TitleModal 1 groomVisible</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.groom?.parents?.father && (
          <div>
            <b>No tengo idea, aquí va data.groom.parents.father) {data?.groom?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.groom?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.groom?.parents?.father?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.groom?.parents?.mother && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b> data.groom.parents.mother) {data?.groom?.parents?.mother.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.groom?.parents?.mother.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.groom?.parents?.mother.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.groom && (
          <div>
            <b>ni idea x2 data?.groom {data?.groom?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.groom?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.groom?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        <div>
          <Description>
            Alguna descripción a nivel groom, creo
          </Description>
        </div>
      </Modal>
      <Modal
        title={<b>TitleModal 1 brideVisible</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.bride?.parents?.father && (
          <div>
            <b>data?.bride?.parents?.father) {data?.bride?.parents?.father?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.bride?.parents?.father?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.parents?.father?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.bride?.parents?.mother && (
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>data?.bride?.parents?.mothe) {data?.bride?.parents?.mother?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.bride?.parents?.mother?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.parents?.mother?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        {data?.bride && (
          <div>
            <b>data.bride {data?.bride?.name}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.bride?.account_number}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {data?.bride?.account_number}
              </Button>
            </CopyToClipboard>
          </div>
        )}
        <div>
          <Description>
            Descripción de algo no sé de que ASD
          </Description>
        </div>
      </Modal>
    </Wrapper>
  );
}
