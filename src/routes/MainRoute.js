import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import { CardScreen } from "../components/Screens/CardScreen";
import { HomeScreen } from "../components/Screens/HomeScreen";
import { LoginScreen } from "../components/Screens/auth/LoginScreen";
import { TestScreen } from "../components/Screens/tests.examen/TestScreen";

import "./styles/mainRoute.css";
import { BlockRouteI } from "./BlockRouteI";

import {
  cardDataBloqueI,
  cardDataBloqueII,
  cardDataBloqueIII,
  cardDataBloqueIV,
  cardDataBloques,
} from "../store/data/cardsData";
import { BlockRouteII } from "./BlockRouteII";
import { filtrarSoloPath } from "../helpers/filtrarSoloPaths";

export const MainRoute = () => {
  //helper
  // const BloqueIVPaths = filtrarSoloPath(cardDataBloqueIV);
  // const BloqueIIIPaths = filtrarSoloPath(cardDataBloqueIII);
  const BloqueIIPaths = filtrarSoloPath(cardDataBloqueII);
  const BloqueIPaths = filtrarSoloPath(cardDataBloqueI);
  const BloquesPaths = filtrarSoloPath(cardDataBloques);

  return (
    <Router>
      <div className='bg-glass'>
        <Navbar />
        <Switch>
          <Route exact path='/home' component={HomeScreen} />
          <Route exact path='/login' component={LoginScreen} />

          <Route exact path={BloquesPaths[0]}>
            <CardScreen cardlist={cardDataBloqueI} />
          </Route>
          <Route exact path={BloquesPaths[1]}>
            <CardScreen cardlist={cardDataBloqueII} />
          </Route>
          <Route exact path={BloquesPaths[2]}>
            <CardScreen cardlist={cardDataBloqueIII} />
          </Route>
          <Route exact path={BloquesPaths[3]}>
            <CardScreen cardlist={cardDataBloqueIV} />
          </Route>
          <Route exact path={BloquesPaths[4]} component={TestScreen} />

          <BlockRouteI routes={BloqueIPaths} />
          {/* podemos generar las rutas de los otros bloques con el componbente BlockRouteI */}
          <BlockRouteII routes={BloqueIIPaths} />

          <Redirect to='/login' component={LoginScreen} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
