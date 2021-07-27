import React from 'react';

import {
    NavLink
} from "react-router-dom";
import './styles/navbar.css';
//TODO:: eliminar las decoraciones de texto
export const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/Home">Home</NavLink> </li>
                    <li> <NavLink to="/login">Login</NavLink> </li>
                </ul>
            </nav>
        </div>
    )
}
