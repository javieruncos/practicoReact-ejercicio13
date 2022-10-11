import React from "react";
import { Col, Card } from "react-bootstrap";
import "./CardEstilo.css";

const Clima = ({ item }) => {
  return (
    <>
      <Col md={4} className="mx-auto mt-4">
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between ">
              <Card.Title className="mt-4 ms-3 ">{item.name}</Card.Title>
              <div className="circuloPais bg-success">
                <h4>{item.sys.country}</h4>
              </div>
            </div>
            <div className="mt-4">
              <ul className="lista d-flex justify-content-center flex-column">
                <li>Humedad: °{item.main.humidity}</li>
                <li>Temperatura: °{item.main.temp}</li>
                <li>Temperatura-max: °{item.main.temp_max}</li>
                <li>Temperatura-min: °{item.main.temp_min}</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Clima;
