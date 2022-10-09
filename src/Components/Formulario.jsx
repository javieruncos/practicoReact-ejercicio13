import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [pais, setPais] = useState("");
  const [arregloClima, setArregloClima] = useState([]);



  useEffect(()=>{
   consultarApi()
  },[ubicacion,pais])

  const consultarApi = async()=>{
    const respuesta = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=43d81ec26d29e1c2ce80bbdcd7bc714f");
    const dato = await respuesta.json();
    setArregloClima(dato)
    
  }

  const handleSubmit = ()=>{
  }

  return (
    <div>
      <div className="my-5 text-center">
        <h1>Clima</h1>
        <hr />
      </div>
      <div>
        <Form className="d-flex justify-content-center">
          <div className="w-75">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ubicacion</Form.Label>
              <Form.Control 
              type="text"
               placeholder="ej Tucuman"
               onChange={(e)=>{setUbicacion(e.target.value)}}
               value={ubicacion}
               
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pais</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="ej Argentina"
              onChange={(e)=>{setPais(e.target.value)}}
              value={pais}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Consultar
            </Button>
          </div>
        </Form>
      </div>
      <Formulario/>
    </div>
  );
};

export default Formulario;
