import React from "react";
import { Card } from "../Card";

import { v4 as uuidv4 } from "uuid";

// si nos da error del link tenemos que poner en el componente Card
// el # al inicio del string, pero choca con los primeros enlaces cuidado
export const CardScreen = ({ cardlist }) => {
  // Modificar el nombre, ya REfactorizado

  return (
    <>
      <div className='cards animate__animated  animate__bounceInDown'>
        {cardlist.map(({ title, path, icon, color }) => {
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
