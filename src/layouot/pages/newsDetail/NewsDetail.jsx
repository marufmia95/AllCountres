import React from 'react';
import PageLocation from '../../../components/PageLocation';

const NewsDetail = () => {



    
    return (
       <>
            
             <PageLocation preb='/' next='/NewsDetail'></PageLocation>
        <div className='pt-[60px]'>
            <h1 className='text-4xl pt-[5%] mb-[4%] text-[#4B0082] text-center'> NewsDetail </h1>
            <h1 className='text-center w-[50%] ml-[25%] mb-[5%]'>The city's vibrant art scene takes center stage as a new exhibit opens, showcasing the diverse talents of local artists. The event promises a visual feast and an opportunity to support the thriving arts community</h1>
        </div>
       </>
    );
};

export default NewsDetail;