import React from "react";
import { Route, Switch } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { cardDataBloqueI } from "../store/data/cardsData";

export const BlockRouteI = ({ routes = [] }) => {
  return (
    <>
      {/* rutas de los temas del bloque I */}

      <div>
        <Switch>
          {routes.map((r, i) => {
            return (
              <Route
                key={uuidv4()}
                exact
                path={r}
                component={cardDataBloqueI[i].componentScreen}
              />
            );
          })}
        </Switch>
      </div>
    </>
  );
};
