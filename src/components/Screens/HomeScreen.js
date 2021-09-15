import React from "react";
import { Card } from "../Card";
import "../styles/cards.css";

export const HomeScreen = () => {
  return (
    <>
      <div className='cards animate__animated  animate__bounceInDown'>
        <Card
          icon='fas fa-scroll'
          title='Constitución'
          path='/constitucion'
          color='PaleGoldenrod'
        />
        <Card
          icon='fas fa-shield-alt'
          title='Cuerpos y Fuerzas de seguridad'
          path='/cuerposfuerzasseguridad'
          color='dodgerblue'
        />
        <Card
          icon='fas fa-traffic-light'
          title='Tráfico'
          path='/trafico'
          color='ForestGreen'
        />
        <Card
          icon='fas fa-balance-scale-left'
          title='Código Penal'
          path='/codigopenal'
          color='Goldenrod'
        />
        <Card
          icon='fas fa-tasks'
          title='Test'
          path='/tests'
          color='tomato'
          width='90vw'
          height='15vh'
          iconSize='2rem'
        />
      </div>
    </>
  );
};
