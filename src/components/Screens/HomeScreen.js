import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Card } from "../Card";
import "../styles/cards.css";

export const HomeScreen = () => {
  const [bloques, , , , , paths, icons, color] = useContext(Context);

  return (
    <>
      <div className='cards animate__animated  animate__bounceInDown'>
        {bloques.map(({}, idx) => {
          if (idx == 4) {
            return (
              <Card
                key={bloques[idx]}
                icon={icons[0][idx]}
                title={bloques[idx]}
                path={paths[0][idx]}
                color={color[0][idx]}
                width='90vw'
                height='15vh'
                iconSize='2rem'
              />
            );
          } else {
            return (
              <Card
                key={bloques[idx]}
                icon={icons[0][idx]}
                title={bloques[idx]}
                path={paths[0][idx]}
                color={color[0][idx]}
              />
            );
          }
        })}
      </div>
    </>
  );
};
