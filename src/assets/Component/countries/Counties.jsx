import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Counties = ({countriesPromise}) => {
   const [visitedCountries,setVisitedCountries]=useState([]);
   const [visitedFlags,setVisitedFlags]=useState([])

    const  countries= use(countriesPromise);
const handleVisitedFlags=(flag)=>{
const newVisitedFlags=[...visitedFlags,flag];
setVisitedFlags(newVisitedFlags)
}


    const handleVisitedCountries=(country)=>{
        console.log('country visited clicked to be added',country);
       const newVisitedCountries=[...visitedCountries,country];
     setVisitedCountries(newVisitedCountries);
    }


   
    return (
        
        <div >
            <h1>Traveling total:{countries.length}</h1>
            <h3>Travel so far:{visitedCountries.length}</h3>
            <div className='visited-flag'>
                {
                    visitedFlags.map(flag=><img src={flag}></img>)
                }
            </div>
            <ol>
               {
                visitedCountries.map(country=><li>{country.name.common}</li>)
               }
            </ol>
          
    <div className='countries'>
                {
  countries.map(country=><Country key={country.cca3}
    handleVisitedCountries={handleVisitedCountries}
    handleVisitedFlags={handleVisitedFlags}
     country={country}></Country>)
            }
    </div>
        </div>
    );
};

export default Counties;