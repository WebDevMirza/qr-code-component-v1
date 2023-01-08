import { Card, Container } from "react-bootstrap";
import QR from "../images/image-qr-code.png";

const QRCard = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center">
        <Card className="mx-auto p-3 rounded-4 text-center">
          <Card.Img className="rounded-3" src={QR} />
          <Card.Body>
            <Card.Title className="fs-5 fw-bold mb-4 mt-2">
              Improve your front-end skills by building projects
            </Card.Title>
            <Card.Text className="fs-6">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default QRCard;
