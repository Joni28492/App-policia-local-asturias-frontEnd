import React from "react";

import { v4 as uuidv4 } from "uuid";
import { cardDataBloques } from "../../store/data/cardsData";
import { Card } from "../Card";
import "../styles/cards.css";

export const HomeScreen = () => {
  return (
    <>
      <div className='cards animate__animated  animate__bounceInDown'>
        {cardDataBloques.map(({ title, path, icon, color }) => {
          if (title === "Tests")
            return (
              <Card
                key={uuidv4()}
                icon={icon}
                title={title}
                path={path}
                color={color}
                width='90vw'
                height='15vh'
                iconSize='2rem'
              />
            );
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
