import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaDelclima from "./ListaDelclima";
import "./Formulario.css";
import Swal from "sweetalert2";

const Formulario = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [pais, setPais] = useState("");
  const [arregloClima, setArregloClima] = useState([]);


  const mostrarAlerta =()=>{
    Swal.fire({
      title: 'Error!',
      text: 'No se pudo encontrar un resultado',
      icon: 'error',
      confirmButtonText: 'Cerrar'
    })
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion},${pais}&appid=43d81ec26d29e1c2ce80bbdcd7bc714f&units=metric`
      );
      const dato = await respuesta.json();
      if (dato.sys.country === "") {
        console.log("error");
      }
      setArregloClima([dato]);

      dato === dato.error ? alert("error") : console.log("error");
    } catch (error) {
       mostrarAlerta()
    }

    setUbicacion("");
    setPais("");
  };

  return (
    <div>
      <div className="my-5 text-center">
        <h1>Clima</h1>
        <hr />
      </div>
      <div className="d-flex justify-content-center">
        <Form
          className=" my-3 bg-success shadow text-light"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
            <Form.Label>Ubicacion</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="ej Tucuman"
              onChange={(e) => {
                setUbicacion(e.target.value);
              }}
              value={ubicacion}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 w-75 mx-auto"
            controlId="formBasicPassword"
          >
            <Form.Label>Pais</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              placeholder="ej Argentina"
              onChange={(e) => {
                setPais(e.target.value);
              }}
              value={pais}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="warning" type="submit">
              Consultar
            </Button>
          </div>
        </Form>
      </div>
      <ListaDelclima arregloClima={arregloClima} />
    </div>
  );
};

export default Formulario;
