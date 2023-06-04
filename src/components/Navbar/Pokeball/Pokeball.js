import React from "react";
import "./pokeball.css";
import { useContext } from "react";
import { ImHeart } from "react-icons/im";
import FavoriteContext from "../../../contexts/FavoritesContext";

const Pokeball = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <div className="center-on-page">
      <div className="pokeball">
     
        <div className="pokeball_button">
        <h2>{favoritePokemons.length}</h2>
        </div>
      </div>
    </div>
  );
};

export { Pokeball };
