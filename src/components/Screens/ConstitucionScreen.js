import React from "react";
import { Card } from "../Card";
import { cardDataBloqueI } from "../../store/data/cardsData";
import { v4 as uuidv4 } from "uuid";

// si nos da error del link tenemos que poner en el componente Card
// el # al inicio del string, pero choca con los primeros enlaces cuidado
export const ConstitucionScreen = () => {
  return (
    <>
      <div className='cards animate__animated  animate__bounceInDown'>
        {cardDataBloqueI.map(({ title, path, icon, color }) => {
          return (
            <Card
              key={uuidv4()}
              icon={icon}
              title={title}
              path={path}
              color={color}
            />
          );
        })}
      </div>
    </>
  );
};
