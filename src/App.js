import { useState, useEffect } from "react";
//importaciones del nav
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Pokemon } from "./components/pokemon/Pokemon";
import { getPokemonData, getPokemons } from "./Api";
import { Pokedex } from "./components/pokedex/Pokedex";
import { FavoriteProvider } from "./contexts/FavoritesContext";


const localStorageKey = "favorite_pokemon"

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true); //lo establecemos en "true" para indicarle al usuario que esta cargando los pokemones

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(30, 30 * page);
     
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 30));
    } catch (error) {
      console.error(error);
    }
  };

  const loadFavoritePokemons = () => {
    let pokemons = JSON.parse(window.localStorage.getItem(localStorageKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons();
  }, [])


  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    let updated = [...favorites];
    let isFavorite = updated.indexOf(name);
    if(isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name)
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated))
  };

  return (


    
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemon: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar pokemons={pokemons} setPokemons={setPokemons} />
        <div className="App"></div>
        
        <Pokedex
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
          loading={loading}
        />

        <Pokemon pokemons={pokemons} SetPokemon={setPokemons}  />
      </div>
    </FavoriteProvider>
  );
}

// setLoading={setLoading}
export default App;
