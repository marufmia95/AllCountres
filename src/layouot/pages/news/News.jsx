import React, { useEffect, useState } from 'react';

import PageLocation from '../../../components/PageLocation';
import SingleNews from '../../../components/SingleNews';
import { Form, Link } from 'react-router-dom';

const News = () => {

const[news, setNews] = useState([])
useEffect(()=>{


    fetch("http://localhost:3000/news")
    .then(res=> res.json())
    .then(data=> setNews(data))


},[])




    return (
      <>
      <PageLocation preb='/' next='/news' ></PageLocation>
       <div className='container mx-auto px-3'>
         <div className='pt-[100px]'>
            <h1 className='text-6xl mt-[-5%] text-center ml-[45%] mb-[2%] text-green-500 flex'>n<form className='text-indigo-500'>e</form>w<form className='text-indigo-500'>s</form></h1>
            
            <div className='flex justify-between flex-wrap'>




            {
            news.map((item)=>{
               return(
                <Link to={`/news/${item.id}`} key={item.id} className='w-full md:w-[48%] lg:w-[32%] border-2 border-gray-900 mb-7 rounded-lg'>
                    <SingleNews  item={item}></SingleNews>
                </Link>
               )
            })
            }





            </div>

        </div>
       </div>
      </>
    );
};

export default News;