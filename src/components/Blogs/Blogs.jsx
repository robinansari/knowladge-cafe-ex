import { useEffect } from "react";
import { useState } from "react";
import Data from "../datas/Data";
import PropTypes from 'prop-types';

const Blogs = ({Bookmarks,handlemarkas}) => {
    const [blogs,setBlogs]= useState([]);

    useEffect( ()=>{
        fetch("blog.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md: w-2/3 mx-10 p-4">
            <h1 className="text-2xl font-bold">Blogs:{blogs.length}</h1>
            {
                blogs.map(value => <Data  handlemarkas={handlemarkas}
                    key={value.id} data={value}
                    Bookmarks={Bookmarks}></Data>)
            }
            
        </div>
    );
};
Blogs.propTypes= {
    Bookmarks:PropTypes.func.isRequired,
    handlemarkas:PropTypes.func
    
}
export default Blogs;