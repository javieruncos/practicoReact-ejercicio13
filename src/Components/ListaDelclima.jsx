import React from 'react';
import { Row } from 'react-bootstrap';
import Clima from './Clima';

const ListaDelclima = ({arregloClima}) => {
    return (
        <Row>
          {
            arregloClima.map((item,indice)=> <Clima  item={item} key={indice}/>)
          }
        </Row>
    );
};

export default ListaDelclima;