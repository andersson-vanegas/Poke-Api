import React from 'react'
import Cards from '../cards/Cards';
import { Pagination } from '../pages/Pagination';
import './pokedex.css'


const Pokedex = (props) => {
  const {pokemons, page, setPage, total, loading} = props;



  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  }

  const nextPage = () => {
    const nextPage = Math.min(page + 1 , total);
    setPage(nextPage);
  }



  return (
    <React.Fragment>
        <div className='header'>
            <p>Pokedex</p>
            <Pagination
              page={page + 1}
              totalPages={total}
              onLeftClick={lastPage}
              onRightClick={nextPage}
            />
        </div>



        {loading ? 
          <p> Cargando pokemones.... </p>
        : 
        <div className='pokedex-grid'>
        {
          pokemons.map((pokemon, idx) => {
            return  <Cards  pokemon={pokemon} key={pokemon.name}/>
            
          })}
            
            </div>
        }
        
        
       
       
    </React.Fragment>
  )
}

export {Pokedex}  