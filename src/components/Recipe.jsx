import React, { Component } from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ul>
        {ingredients.map(i => (
          <li>{i.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
