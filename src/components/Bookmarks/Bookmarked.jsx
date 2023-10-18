import PropTypes from 'prop-types';
const Bookmarked = ({bookmarked}) => {
    const {title}=bookmarked;
    return (
        <div className='bg-red-200 rounded mt-5 px-10'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};
Bookmarked.propTypes= {
    bookmarked:PropTypes.object
}
export default Bookmarked;