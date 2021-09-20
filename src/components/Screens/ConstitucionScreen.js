import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Card } from "../Card";
import { v4 as uuidv4 } from "uuid";
import { cardDataBloqueI } from "../../store/data/cardsData";
// si nos da error del link tenemos que poner en el componente Card
// el # al inicio del string, pero choca con los primeros enlaces cuidado
export const ConstitucionScreen = () => {
  const [, titles, , , , paths, icon, colors] = useContext(Context);
  const temas = [titles, icon, paths, colors];
  console.log(temas);
  const temasKeys = Object.keys(temas);
  console.log(temasKeys);

  console.log(temas);
  console.log(titles);

  console.log(cardDataBloqueI);

  return (
    <>
      {titles.map((title) => {
        return (
          <Card
            key={uuidv4()}
            icon='fas fa-tasks'
            title={title}
            path='/flgkldfkjglkd'
            color='turquoise'
          />
        );
      })}

      {/* <Card
        icon='fas fa-tasks'
        title={titles[5]}
        path='/tests'
        color='turquoise'
      /> */}
    </>
  );
};
