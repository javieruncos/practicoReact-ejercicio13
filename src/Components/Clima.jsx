import React from "react";
import { Col,Card,Button} from "react-bootstrap";

const Clima = ({item,nombre,weather}) => {
  return (
    <Col md={12}>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <p>Humedad:  {item.humidity}</p>
            <p>Humedad:  {weather.description}</p>
            <p>Humedad:  {weather.icon}</p>
           
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Clima;
