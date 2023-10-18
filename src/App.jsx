
import { useState } from 'react'
import './App.css'
import Cafe from './Cafe'
import Blogs from './components/Blogs/Blogs'
import Main from './components/Main'



function App() {
  const [bookmarks,setBookmarks]=useState([]);
 const [markastime,setmarkasstime]=useState(0);




 const handlemarkas=(id,time) =>{
   const newtime=markastime+time;
   setmarkasstime(newtime);
   
   const remaining = bookmarks.filter(bookmark =>bookmark.id !==id)
   setBookmarks(remaining);
 }


  const handleaddtoBookmarks = book =>{
    const newbookmarks = [...bookmarks,book];
    setBookmarks(newbookmarks);
  }

  
 

  return (
    <>
      <Cafe></Cafe>
      <div className='md: flex'>
      <Blogs Bookmarks={handleaddtoBookmarks} handlemarkas={handlemarkas}></Blogs>
       <Main markastime={markastime} bookmarkset ={bookmarks}></Main>
      </div>
     
    
    </>
  )
}

export default App
