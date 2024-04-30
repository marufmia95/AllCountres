import React from 'react';
import { Link } from 'react-router-dom';

const SingleCountry = ({ country }) => {
    const { name, capital, cca2 } = country;

    return (
        <div className='ucb w-full md:w-[48%] lg:w-[32%] p-4 mb-6 md:mb-8 lg:mb-10 border-2 border-[#FF00FF] rounded-lg text-center'>
            <h1 className='text-xl md:text-2xl text-[#00ff00]'>Name: {name.common}</h1>
            <h1 className='text-xl md:text-2xl text-[#00ff00]'>{name.official}</h1>
            <h1 className='text-xl md:text-2xl text-[#00ff00]'>Capital: {capital}</h1>

            <Link
                to={`./Detail/${cca2}`}
                className='bg-black w-full md:w-[90%] block text-[#ff00ff] text-bold text-xl md:text-2xl rounded-xl mt-4 md:mt-6 lg:mt-8 mx-auto md:ml-[5%]'
            >
                Details <span className='text-[#00ff00]'>{cca2}</span>
            </Link>
        </div>
    );
};

export default SingleCountry;
