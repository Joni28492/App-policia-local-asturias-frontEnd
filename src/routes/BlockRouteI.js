import React from "react";
import { Route, Switch } from "react-router";

import { ConstitucionIScreen } from "../components/Screens/BloqueI/ConstitucionIScreen";
import { ConstitucionIIScreen } from "../components/Screens/BloqueI/ConstitucionIIScreen";
import { ConstitucionIIIScreen } from "../components/Screens/BloqueI/ConstitucionIIIScreen";
import { EstatutoAutonomia } from "../components/Screens/BloqueI/EstatutoAutonomia";

export const BlockRouteI = () => {
  return (
    <>
      {/* rutas de los temas del bloque I */}

      <div>
        <Switch>
          <Route exact path='/constitucionI' component={ConstitucionIScreen} />
          <Route
            exact
            path='/constitucionII'
            component={ConstitucionIIScreen}
          />
          <Route
            exact
            path='/constitucionIII'
            component={ConstitucionIIIScreen}
          />
          {/* <Route
            exact
            path='/constitucionIII'
            component={ConstitucionIIIScreen}
          /> */}
          <Route exact path='/estatuto' component={EstatutoAutonomia} />
        </Switch>
      </div>
    </>
  );
};
