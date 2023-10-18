import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Data = ({data, Bookmarks, handlemarkas}) => {
    const {id,cover,author,title,author_img,reading_time,hashtags,post_date}=data;
    
    return (
        <div>
            <img className=' rounded mt-5' src={cover} alt="" />
            
          

            <div className='flex justify-between  mt-5 m'>
            <div className='flex'>
            <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
            <div className='ml-3'>
            <h1 className='font-bold text-2xl'>{author}</h1>
            {post_date}
            </div>
             </div>
              <div className='mr-10 flex mt-5 gap-2'>
              <h1>{reading_time} <span className='bg-blue-400'>min</span> </h1>
              <button onClick={()=> Bookmarks(data)} className='mb-6'><FaBookmark></FaBookmark></button>
              </div>
             
             
            </div>
            
            <h1 className='text-4xl font-bold'>{title}</h1>
        <p>{hashtags}</p>
        <button onClick={()=>handlemarkas(id,reading_time)} className='text-purple-700 font-bold underline mt-5'>Mark As Read</button>
        </div>
    );
};

Data.propTypes ={
    data: PropTypes.object.isRequired,
    Bookmarks: PropTypes.func,
    handlemarkas:PropTypes.func
}
export default Data;