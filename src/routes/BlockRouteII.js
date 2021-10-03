import React from "react";

import { Route, Switch } from "react-router";
import { CcffsI } from "../components/Screens/BloqueII/CcffsI";
import { CcffsII } from "../components/Screens/BloqueII/CcffsII";
import { CcffsIII } from "../components/Screens/BloqueII/CcffsIII";
import { CcffsIV } from "../components/Screens/BloqueII/CcffsIV";
import { ColectivosRiesgoScreen } from "../components/Screens/BloqueII/ColectivosRiesgoScreen";
import { CoordinacionPLocal } from "../components/Screens/BloqueII/CoordinacionPLocal";
import { LeparScreen } from "../components/Screens/BloqueII/LeparScreen";
import { NormativaAutonomica } from "../components/Screens/BloqueII/NormativaAutonomica";
import { PoliciaMedioambiental } from "../components/Screens/BloqueII/PoliciaMedioambiental";
import { ProteccionCivil } from "../components/Screens/BloqueII/ProteccionCivil";
import { ReglamentoArmasScreen } from "../components/Screens/BloqueII/ReglamentoArmasScreen";
import { SegCiudadanaScreen } from "../components/Screens/BloqueII/SegCiudadanaScreen";

export const BlockRouteII = ({ routes }) => {
  return (
    <>
      {/* rutas de los temas del bloque II */}

      <div>
        <Switch>
          <Route exact path={routes[0]} component={CcffsI} />
          <Route exact path={routes[1]} component={CcffsII} />
          <Route exact path={routes[2]} component={CcffsIII} />
          <Route exact path={routes[3]} component={CcffsIV} />
          <Route exact path={routes[4]} component={SegCiudadanaScreen} />
          <Route exact path={routes[5]} component={ProteccionCivil} />
          <Route exact path={routes[6]} component={CoordinacionPLocal} />
          <Route exact path={routes[7]} component={LeparScreen} />
          <Route exact path={routes[8]} component={NormativaAutonomica} />
          <Route exact path={routes[9]} component={ColectivosRiesgoScreen} />
          <Route exact path={routes[10]} component={ReglamentoArmasScreen} />
          <Route exact path={routes[11]} component={PoliciaMedioambiental} />
        </Switch>
      </div>
    </>
  );
};
