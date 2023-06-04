import React, { useContext } from "react";
import { Pokeball } from "./Pokeball/Pokeball";

import "./Navbar.css";
import { Searchbar } from "../Searchbar/Searchbar";
import { searchPokemon } from "../../Api";

let image_url =
  "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

const Navbar = ({ pokemon, setPokemons }) => {


const onSearch = async (pokemon) => {
  // setLoading(true)
  const results = await searchPokemon(pokemon)
  console.log(results);
  setPokemons([results])
  // setLoading(false)
}


  return (
    <nav className="">
    <a className="" href="/">
    <img
      src={image_url}
      width="250"
      height="100"
      className="navbar-img"
      alt=""
    />
  </a>

  <Searchbar
  onSearch={onSearch}
  pokemon={pokemon}
  setPokemons={setPokemons}
/>
    
     

      
      

      <Pokeball />
     
    </nav>
  );
};

export { Navbar };
