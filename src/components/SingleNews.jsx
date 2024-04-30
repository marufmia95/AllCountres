
import shortenDescription from '../assets/utility/ShortText';

const SingleNews = ({item}) => {
    const  {title, image, description} = item
    return (
        <div>
            <h1> {title} </h1>
           <img src={image} alt={image} className='w-full' />
           <h1> {description.split(' ').slice(0,11).join(' ')}... <span className='text-gray-700'>see more</span> </h1>
        </div>
    );
};

export default SingleNews;


// 