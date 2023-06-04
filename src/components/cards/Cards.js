import React, { useContext } from "react";
import { ImHeart } from "react-icons/im";
import "./cards.css";
import FavoriteContext from "../../contexts/FavoritesContext";
import { FaHeartBroken } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Cards = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemon } = useContext(
    FavoriteContext
  );

  const heart = favoritePokemons.includes(pokemon.name) ? (
    <ImHeart />
  ) : (
    <FaHeartBroken />
  );

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemon(pokemon.name);
  };

  return (
     <div className="pokemon-card">
        <div className="pokemon-img-container">
        
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemon-img"
          />
          <img
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name}
            className="pokemon-img-shiny"
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3 className="pokemon-name">{pokemon.name}</h3>
            <div className="pokemon-id">#{pokemon.id}</div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, idx) => {
                const typeClassName = type.type.name;
                return (
                  <div
                    key={idx}
                    className={`pokemon-type-text ${typeClassName}`}
                  >
                    {type.type.name}
                  </div>
                );
              })}
            </div>

            <button
              onClick={clickHeart}
              className="pokemon-favorite-button"
            >
              <div className="pokemon-favorite">{heart}</div>
            </button>
          </div>
        </div>
      </div>

  );
};

export default Cards;
