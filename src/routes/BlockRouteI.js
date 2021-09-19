import React from "react";
import { Route, Switch } from "react-router";

import { ConstitucionIScreen } from "../components/Screens/BloqueI/ConstitucionIScreen";
import { ConstitucionIIScreen } from "../components/Screens/BloqueI/ConstitucionIIScreen";
import { ConstitucionIIIScreen } from "../components/Screens/BloqueI/ConstitucionIIIScreen";
import { EstatutoAutonomia } from "../components/Screens/BloqueI/EstatutoAutonomia";
import { DerechoAdministrativoFuentesScreen as fuentes } from "../components/Screens/BloqueI/DerechoAdministrativoFuentesScreen";
import { AdminLocalScreen } from "../components/Screens/BloqueI/AdminLocalScreen";
import { ActoAdministrativoScreen } from "../components/Screens/BloqueI/ActoAdministrativoScreen";
import { ProcedimientoAdministrativoScreen as procedimiento } from "../components/Screens/BloqueI/ProcedimientoAdministrativoScreen";
import { PersonalServicioCorporacionesLocalesScreen as corpLocales } from "../components/Screens/BloqueI/PersonalServicioCorporacionesLocalesScreen";
import { HaciendasLocalesScreen } from "../components/Screens/BloqueI/HaciendasLocalesScreen";
import { HistoriaAsturiasScreen } from "../components/Screens/BloqueI/HistoriaAsturiasScreen";
import { GeografiaAsturiasScreen } from "../components/Screens/BloqueI/GeografiaAsturiasScreen";

export const BlockRouteI = ({ routes }) => {
  return (
    <>
      {/* rutas de los temas del bloque I */}

      <div>
        <Switch>
          <Route exact path={routes[0]} component={ConstitucionIScreen} />
          <Route exact path={routes[1]} component={ConstitucionIIScreen} />
          <Route exact path={routes[2]} component={ConstitucionIIIScreen} />
          <Route exact path={routes[3]} component={EstatutoAutonomia} />
          <Route exact path={routes[4]} component={AdminLocalScreen} />
          <Route exact path={routes[5]} component={fuentes} />
          <Route exact path={routes[6]} component={ActoAdministrativoScreen} />
          <Route exact path={routes[7]} component={procedimiento} />
          <Route exact path={routes[8]} component={corpLocales} />
          <Route exact path={routes[9]} component={HaciendasLocalesScreen} />
          <Route exact path={routes[10]} component={HistoriaAsturiasScreen} />
          <Route exact path={routes[11]} component={GeografiaAsturiasScreen} />
        </Switch>
      </div>
    </>
  );
};
