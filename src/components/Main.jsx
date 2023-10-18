import PropTypes from 'prop-types';
import Bookmarked from './Bookmarks/Bookmarked';
const Main = ({bookmarkset,markastime}) => {
    
    return (
        <div className="md: w-1/3 bg-slate-200 mt-14 p-10 mx-10">
            <div className='text-2xl font-bold p-2 rounded-lg text-white bg-red-600'>Reading Time spend:{markastime} minutes</div>
            <h3 className="ml-10 text-3xl p-2 rounded font-bold border-emerald-950 bg-white mx-9">Bookmarked Blogs:{bookmarkset.length}</h3>
           <div className='ml-20 mt-5'> {
                bookmarkset.map((book,idx) =><Bookmarked key={idx} bookmarked={book}></Bookmarked>)
            }</div>
        </div>
    );
};
Main.propTypes= {
    bookmarkset:PropTypes.array,
    markastime:PropTypes.number
}
export default Main;