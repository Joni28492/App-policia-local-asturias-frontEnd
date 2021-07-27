import React from 'react';
import './styles/cards.css';
import {
    Link,
} from "react-router-dom";

export const Card = ({ icon, title, path }) => {
    return (
        <Link to={path}>
            <div className="border container rounded align-items card">
                <i className={icon}></i>
                <h3>{title}</h3>
            </div>
        </Link>
    )
}
