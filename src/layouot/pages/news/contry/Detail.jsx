import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detail = () => {
    const countryDetails = useLoaderData();
    const data = countryDetails[0];
    const { capital, name, flags } = data;

    return (
        <div className="container mx-auto p-4">
            <div className="border-4 border-[#ff00ff] p-4">

                <h2 className="font-bold text-black text-lg md:text-2xl">Name: {name.common}</h2>
                <h2 className="font-bold text-black text-lg md:text-2xl">{name.official}</h2>
                <h2 className="font-bold text-black text-lg md:text-2xl">Capital: {capital}</h2>
                <img className="mt-4" src={flags.png} alt={flags.alt} />

            </div>
        </div>
    );
};

export default Detail;
