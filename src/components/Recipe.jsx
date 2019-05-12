import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="card" width="100px">
      <img
        className="card-img-top"
        src={image}
        alt={title}
        width="93px"
        height="200px"
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{calories}</p>
        <ul className="card-text">
          {ingredients.map(i => (
            <li key={title}>{i.text}</li>
          ))}
        </ul>
        <a href="#!" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Recipe;
