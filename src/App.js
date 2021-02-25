import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Recipe from "./Recipe"

const App = () =>{

  const APP_ID = 'f16eeb44';
  const APP_KEY = '228fdec6e3c30ae440a45a1bc03b3c1c';
 

  const [recipes, setRecipes] = useState([]) 
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState("chicken")

  useEffect(() =>{
    getRecipes();
  },[query])

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getRecipes = async () =>{
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits);
  } 


  const handleSearch = e =>{
    setSearch(e.target.value);
  
  }



  return(
    <div className= "App">
        <form onSubmit={getSearch} className="search-form">
            <input  className="search-bar" type="text" value={search} onChange ={handleSearch}/>
            <button className="search-btn">Search</button>
        </form>
      <div className="recipe-container">
        {recipes.map(recipe => (
            <div>
            <Recipe title={recipe.recipe.label} image={recipe.recipe.image} calories={Math.floor(recipe.recipe.calories)}/>
            </div>
        ))}

      </div>
    </div>
  )
}

export default App;
