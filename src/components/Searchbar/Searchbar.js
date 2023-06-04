import React, {useState} from 'react'
import './searchbar.css'
import { FaSearch } from 'react-icons/fa';



const Searchbar = ({ onSearch}) => {
  const [search, SetSearch] = useState("");

  const onChange = (e) => {
    SetSearch(e.target.value);
  }
  const onClick = async (e) => {
   onSearch(search) 
   console.log(search);
  }

  return (
    <React.Fragment>
    <div className='searchbar-container'>
    <div className='searchbar'>
    <input 
    placeholder='Buscar Pokemon....'
    onChange={onChange}
    />
    </div>
    <div className='searchbar-btn'>
      <button onClick={onClick}>
      <FaSearch/>
      </button>
    </div>
    </div>
      
    </React.Fragment>
  )
}

export { Searchbar}
