import Card from "react-bootstrap/Card";
import IMG from "../assets/img.jpg";

const CardProva = function ({ name, description, time, price }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={IMG} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{time}</Card.Text>
        <Card.Text>{price} $</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProva;
