import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { CodigoPenalScreen } from "../components/Screens/CodigoPenalScreen";
import { ConstitucionScreen } from "../components/Screens/ConstitucionScreen";
import { CuerposFuerzasScreen } from "../components/Screens/CuerposFuerzasScreen";
import { HomeScreen } from "../components/Screens/HomeScreen";
import { LoginScreen } from "../components/Screens/auth/LoginScreen";
import { TestScreen } from "../components/Screens/tests.examen/TestScreen";
import { TraficoScreen } from "../components/Screens/TraficoScreen";
import "./styles/mainRoute.css";
import { BlockRouteI } from "./BlockRouteI";

import { cardDataBloqueI, cardDataBloques } from "../store/data/cardsData";

export const MainRoute = () => {
  //posible helper
  const BloqueIPaths = cardDataBloqueI.map((e) => {
    return e.path;
  });

  const BloquesPaths = cardDataBloques.map((e) => {
    return e.path;
  });

  return (
    <Router>
      <div className='bg-glass'>
        <Navbar />
        <Switch>
          <Route path='/home' component={HomeScreen} />
          <Route path='/login' component={LoginScreen} />

          <Route path={BloquesPaths[0]} component={ConstitucionScreen} />
          <Route path={BloquesPaths[1]} component={CuerposFuerzasScreen} />
          <Route path={BloquesPaths[2]} component={TraficoScreen} />
          <Route path={BloquesPaths[3]} component={CodigoPenalScreen} />
          <Route path={BloquesPaths[4]} component={TestScreen} />

          <BlockRouteI routes={BloqueIPaths} />
          {/* podemos generar las rutas de los otros bloques con el componbente BlockRouteI */}

          <Redirect to='/login' component={LoginScreen} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
