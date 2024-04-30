import React from 'react';
import { Link } from 'react-router-dom';




const SingleCountry = ({country}) => {


const{name, capital, cca2} = country
    return (
        <div className='ucb w-[32%] p-5 mb-10 border-2 border-[#FF00FF] rounded-lg text-center'>
            <h1 className='text-2xl text-[#00ff00]'>Name : {name.common}</h1>
            <h1 className='text-2xl text-[#00ff00]'>{name.official}</h1>
            <h1 className='text-2xl text-[#00ff00]'>Capital : {capital}</h1>
      
            
            <Link to={`./Detail/${cca2}`} className='bg-black w-[90%] block text-[#ff00ff] text-bold text-2xl rounded-xl ml-[5%]'> Details  <span className='text-[#00ff00]'>{cca2}</span></Link>
        </div>
    );
};

export default SingleCountry;