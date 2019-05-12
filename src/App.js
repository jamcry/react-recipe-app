import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          onChange={updateSearch}
          className="search-bar"
          type="text"
          value={search}
        />
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
          ingredients={r.recipe.ingredients}
        />
      ))}
      ;
    </div>
  );
}

export default App;
