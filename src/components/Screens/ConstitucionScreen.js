import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Card } from "../Card";
import { v4 as uuidv4 } from "uuid";

export const ConstitucionScreen = () => {
  const context = useContext(Context);
  console.log(context);
  const [, titles] = useContext(Context);
  const paths = context[5][1];

  return (
    <>
      <Card
        icon='fas fa-tasks'
        title='ejemplo temp'
        path='/tests'
        color='turquoise'
        width='90vw'
        height='15vh'
        iconSize='2rem'
      />
    </>
  );
};
