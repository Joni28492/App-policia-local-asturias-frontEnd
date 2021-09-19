import React, { useContext } from "react";
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
import { Context } from "../context/Context";

export const MainRoute = () => {
  const [, , , , , paths] = useContext(Context);
  // console.log(context);
  // console.log(paths);
  const [pathsBloques, pathsBloqueI, pathsBloqueII] = paths;
  console.log(pathsBloqueII);

  return (
    <Router>
      <div className='bg-glass'>
        <Navbar />
        <Switch>
          <Route path='/home' component={HomeScreen} />
          <Route path='/login' component={LoginScreen} />

          <Route path={pathsBloques[0]} component={ConstitucionScreen} />
          <Route path={pathsBloques[1]} component={CuerposFuerzasScreen} />
          <Route path={pathsBloques[2]} component={TraficoScreen} />
          <Route path={pathsBloques[3]} component={CodigoPenalScreen} />
          <Route path={pathsBloques[4]} component={TestScreen} />

          <BlockRouteI routes={pathsBloqueI} />

          <Redirect to='/login' component={LoginScreen} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
