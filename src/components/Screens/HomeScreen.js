import React from "react";
import { Card } from "../Card";
import "../styles/cards.css";

export const HomeScreen = () => {
  return (
    <>
      <div className='cards'>
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
      </div>
    </>
  );
};
