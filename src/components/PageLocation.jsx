import React from 'react';
import { Link } from 'react-router-dom';

const PageLocation = ({preb, next}) => {

let nextUrl = next

if (nextUrl.includes('/')){
    nextUrl = nextUrl.replace('/', '');
}


    return (
        <div className='bg-indigo-600 py-5 pt-[80px] flex justify-center text-white text-2xl'>
            <div className='flex gap-3'>
                <Link to={preb}> {preb== "/"&& "home"} </Link>
                <Link to={next}> {nextUrl} </Link>

            </div>
           
        </div>
    );
};

export default PageLocation;