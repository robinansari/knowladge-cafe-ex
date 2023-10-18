import profle from '../images/profile.png'
const Cafe = () => {
    return (
        <div className='flex justify-between items-center ml-10 my-4 p-5 mx-5 border-b-2'>
            <h1 className=' text-4xl font-bold'>Knowladge Cafe</h1>
            <img src={profle} alt="" />
        </div>
    );
};

export default Cafe;