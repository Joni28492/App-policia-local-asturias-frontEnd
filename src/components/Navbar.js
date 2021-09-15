import React from "react";

import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
//TODO:: eliminar las decoraciones de texto
export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/Home'
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
