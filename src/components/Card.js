import React from "react";
import "./styles/cards.css";
import { Link } from "react-router-dom";

export const Card = ({ icon, title, path, color = "tomato" }) => {
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div
        className='border container rounded align-items card'
        style={{
          color,
        }}
      >
        <i className={icon}></i>
        <h3>{title}</h3>
      </div>
    </Link>
  );
};
