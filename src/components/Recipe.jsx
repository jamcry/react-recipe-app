import React, { Component } from "react";

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
        <p className="card-text">{parseInt(calories) + " kcal"}</p>
        <ul className="card-text list-group">
          {ingredients.map(i => (
            <li key={title} className="list-group-item">
              {i.text.substring(0, 30) + "..."}
            </li>
          ))}
        </ul>
        <a href="#!" className="btn btn-primary">
          See Recipe
        </a>
      </div>
    </div>
  );
};

export default Recipe;
