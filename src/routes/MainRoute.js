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
import { LoginScreen } from "../components/Screens/LoginScreen";
import { TraficoScreen } from "../components/Screens/TraficoScreen";
import "./styles/mainRoute.css";

export const MainRoute = () => {
  //TODO:: eliminar las decoraciones de texto
  return (
    <Router>
      <div className='bg-glass'>
        <Navbar />
        <Switch>
          <Route path='/home' component={HomeScreen} />
          <Route path='/login' component={LoginScreen} />

          <Route path='/constitucion' component={ConstitucionScreen} />
          <Route
            path='/cuerposfuerzasseguridad'
            component={CuerposFuerzasScreen}
          />
          <Route path='/trafico' component={TraficoScreen} />
          <Route path='/codigopenal' component={CodigoPenalScreen} />

          <Redirect to='/login' component={LoginScreen} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
