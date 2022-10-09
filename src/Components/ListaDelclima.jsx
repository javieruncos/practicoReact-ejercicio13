import React from 'react';
import { Row } from 'react-bootstrap';
import Clima from './Clima';

const ListaDelclima = ({arregloClima}) => {
    return (
        <Row>
          {
            arregloClima.map((item,indice)=> <Clima  item={item.main}  weather={item.weather[0]}  nombre={item.name} key={indice}/>)
          }
        
        </Row>
    );
};

export default ListaDelclima;