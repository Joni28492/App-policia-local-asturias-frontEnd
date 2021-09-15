import React from "react";
import "./styles/cards.css";
import { Link } from "react-router-dom";

export const Card = ({
  icon,
  title,
  path,
  color = "tomato",
  height = "220",
  width = "220",
  iconSize = "3.8rem",
}) => {
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div
        className='border container rounded align-items card'
        style={{
          color,
          height,
          width,
        }}
      >
        <i
          className={icon}
          style={{
            fontSize: iconSize,
          }}
        ></i>
        <h3>{title}</h3>
      </div>
    </Link>
  );
};
