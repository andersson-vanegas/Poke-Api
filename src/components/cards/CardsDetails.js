import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardsDetails = () => {
    let {id} = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {name} = fetchedData
    let api = `https://pokeapi.co/api/v2/pokemon/${id}`

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data)
        })();
    }, [api])

  return (
    <div className="card-details">
      <div className="pokemon-img-container"></div>
      <div className="card-body">
        <h3 className="pokemon-name">{name}</h3>
      </div>
    </div>
  );
};


export  {CardsDetails}