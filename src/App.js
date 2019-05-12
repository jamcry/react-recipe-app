import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(r => (
        <Recipe
          key={r.recipe.label}
          title={r.recipe.label}
          calories={r.recipe.calories}
          image={r.recipe.image}
        />
      ))}
      ;
    </div>
  );
}

export default App;
