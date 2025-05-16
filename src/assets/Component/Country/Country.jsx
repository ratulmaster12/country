import React, { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {

  const [visited,setVisited]=useState(false);
//   console.log(handleVisitedCountries);
  
   const handleVisited=()=>{

    setVisited(!visited);
  
    handleVisitedCountries(country);
}
  
    return (
        <div className={`country ${visited && 'country-visited'}`}>
           <h4>Name:{country.name.common}</h4> 
           <img src={country.flags.png} alt=""/>
           <p>Independent: {country.independent ?'free':'not free'}</p>
           <p>Population: {country.population}</p>
           <button className={visited? 'btn-visited':'btn-not-visited'} onClick={handleVisited}>{visited? 'Visited':'not visited'}</button>
           <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add visited Country</button>
        </div>
    );
};

export default Country;